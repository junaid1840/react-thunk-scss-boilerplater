import { AxiosResponse } from "axios";
import { iApiResponse, iErrorHandler } from "./apiManagerInterfaces";
import { apiManager } from "./apiManager";
import { axiosInstance } from "./axiosInstance";

let isRefreshing = false;
let failedApiQueue: {
  resolve: (value: unknown) => void;
  reject: () => void;
}[] = [];

const refreshTokenAction = (): iApiResponse => {
  console.log("Perform Refresh Token Action");
  return {} as iApiResponse;
};

const throwError = (
  failedRequest: AxiosResponse<iApiResponse>
): iApiResponse => {
  return failedRequest.data;
};

const addToQueue = (failedRequest: AxiosResponse<iApiResponse>) =>
  new Promise((resolve, reject) => {
    failedApiQueue.push({ resolve, reject });
  })
    .then((token) => {
      failedRequest.config.headers = {
        ...failedRequest.config.headers,
        "access-token": `${token}`,
      };
      return axiosInstance(failedRequest.config);
    })
    .catch(() => {
      throwError(failedRequest);
    });

const remakeFailedApiCalls = (token = null) => {
  failedApiQueue.forEach((failedAPiPromise) =>
    token ? failedAPiPromise.resolve(token) : failedAPiPromise.reject()
  );
  failedApiQueue = [];
};

const requestToRefreshUserTokensService = (): Promise<
  AxiosResponse<iApiResponse>
> => {
  const url = `user/refreshToken`;
  const refreshToken = localStorage.getItem("refreshToken");
  return apiManager.request(url, { refreshToken }, "POST");
};

const refreshUserToken = async (
  failedRequest: AxiosResponse<iApiResponse>
): Promise<iApiResponse | AxiosResponse<never> | void> => {
  // if refresh token request has already been sent
  if (isRefreshing) {
    return failedRequest.config.url === "user/refreshToken"
      ? refreshTokenAction()
      : addToQueue(failedRequest);
  }
  isRefreshing = true;
  const { data } = await requestToRefreshUserTokensService();
  // assign the new token to the failed api calls header so that we can resend it
  failedRequest.config.headers = {
    ...failedRequest.config.headers,
    "access-token": `${data.response}`,
  };
  // setAccessTokenInLocalStorage(userTokens);
  // empty the Failed api queue
  remakeFailedApiCalls(null);
  isRefreshing = false;
  // returning the failed api call config in axios to re make the request
  return axiosInstance(failedRequest.config);
};

export const ApiErrorHandler: iErrorHandler = {
  412: refreshUserToken,
};
