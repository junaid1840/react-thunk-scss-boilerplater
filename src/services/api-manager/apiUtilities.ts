import { iErrorHandler, iFailedRequest } from "./apiManagerInterfaces";
// import axiosInstance from "./axiosInstance";
// let isRefreshing = false
// let failedApiQueue = []
//
//
// const refreshUserToken = async (failedRequest: iFailedRequest) => {
//     // if refresh token request has already been sent
//     if (isRefreshing) {
//         return new Promise( (resolve, reject) => {
//             failedApiQueue.push ({resolve,  reject})
//         } ).then( token => {
//             failedRequest.response.config.headers['authorization-token'] = `${token}`
//             return axiosInstance(failedRequest.config);
//         }).catch( () => {
//             throwError(failedRequest)
//         })
//     }
//     console.log(failedRequest)
//     isRefreshing = true
//     Vue.$toaster.info('Renewing your Login Session. Please wait ...')
//     const tokenRefreshResponse = await requestToRefreshUserTokens()
//     const userTokens = tokenRefreshResponse.data.data
//     // assign the new token to the failed api calls header so that we can resend it
//     failedRequest.response.config.headers['authorization-token'] = `${userTokens.token}`
//     store.commit('UPDATE_USER_TOKEN', userTokens)
//     updateTokenInLocalStorageAndAxiosHeader(userTokens)
//     // empty the Failed api queue
//     remakeFailedApiCalls(userTokens.token)
//     isRefreshing = false
//     // returning the failed api call config in axios to re make the request
//     return axiosInstance(failedRequest.config)
// }
//
// const remakeFailedApiCalls = (token = null) => {
//     failedApiQueue.forEach( failedAPiPromise => {
//         if (token) {
//             failedAPiPromise.resolve(token);
//         } else {
//             failedAPiPromise.reject();
//         }
//     });
//     failedApiQueue = [];
// }
//
// export const updateTokenInLocalStorageAndAxiosHeader = (data) => {
//     localStorage.setItem("token", data.token)
//     localStorage.setItem("refresh_token", data.refresh_token)
//     // TODO remove this when delete old API manager
//     axiosInstance.defaults.headers['authorization-token'] = data.token
//     // newAxiosInstance.defaults.headers['authorization-token'] = data.token
// }
//
// const closeLoaderAndLogoutUser = async (failedRequest: iFailedRequest) => {
//     if (localStorage['refresh_token']) {
//         // Vue.$toaster.warning('Seems like your session has been ended')
//         // store.commit("Error_TOASTER_CHECK")
//     }
//     // await router.push('/logout')
//     throwError(failedRequest)
// }
const throwError = (failedRequest: iFailedRequest): any => {
  // throw new Error(failedRequest.response.data.message);
  console.log(failedRequest);
};
export const ApiErrorHandler: iErrorHandler = {
  // when Jwt Expires and api returns locked error
  423: throwError,
  // when user is unauthorized
  401: throwError,
  // Forbidden when user provides wrong data
  403: throwError,
  // Not Found
  404: throwError,
  // Not Acceptable
  406: throwError,
};
