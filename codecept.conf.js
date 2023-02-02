exports.config = {
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://www.qa-legacy.com",
      browser: "chrome",
    },
    MyHelper: {
      require: "./customHelpers/dbhelper_helper.js",
    },
    REST: {
      endpoint: "https://www.qa-legacy.com",
      prettyPrintJson: true,
      timeout: 6000,
    },
  },
  include: {
    I: "./steps_file.js",
    obitPage: "./pages/obitPage.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./step_definitions/steps.js",
      "./step_definitions/dataDriven_steps.js",
    ],
  },
  plugins: {
    screenshotOnFail: {
      enabled: false,
    },
    tryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    retryTo: {
      enabled: true,
    },
    eachElement: {
      enabled: true,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./tests/*_test.js",
  name: "onboarding-project",
};
