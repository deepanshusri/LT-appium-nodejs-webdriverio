exports.config = {
  user: process.env.LT_USERNAME || "deepanshulambdatest",
  key: process.env.LT_ACCESS_KEY || "jlBs32Zt7Q6Omx3ZThhWz1GTAzNQe96m7MP2Z6645UuZ2oVqTo",

  updateJob: false,
  specs: ["specs/android-test.js"],
  exclude: [],

  commonCapabilities: {
    build: "NodeJS WebdriverIO Android",
    name: "Sample Parallel Test - WebDriverIO",
    isRealMobile: true,
    app: "jlBs32Zt7Q6Omx3ZThhWz1GTAzNQe96m7MP2Z6645UuZ2oVqTo",
  },

  capabilities: [
    {
      platformName: "Android",
      deviceName: "Galaxy S9",
      platformVersion: "10",
    },
    {
      platformName: "Android",
      deviceName: "Galaxy S9 Plus",
      platformVersion: "10",
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
