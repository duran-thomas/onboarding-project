const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://www.qa-legacy.com",
      browser: "chrome",
    },
    MyHelper: {
      require: "./customHelpers/dbhelper_helper.js",
    },
  },
  include: {
    I: "./steps_file.js",
    obitPage: "./pages/obitPage.js",
  },
  name: "onboarding-project",
};
