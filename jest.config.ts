/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ["node_modules", "src"],

    // An array of file extensions your modules use
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "identity-obj-proxy",
    },

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

    // The test environment that will be used for testing
    testEnvironment: "node",
};
