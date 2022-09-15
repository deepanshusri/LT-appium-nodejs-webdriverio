exports.config = {
  user: process.env.LT_USERNAME || "deepanshulambdatest",
  key: process.env.LT_ACCESS_KEY || "jlBs32Zt7Q6Omx3ZThhWz1GTAzNQe96m7MP2Z6645UuZ2oVqTo",

  updateJob: false,
  specs: ["specs/android-test.js"],
  exclude: [],

  capabilities: [
    {
      build: "NodeJS WebDriverIO Android",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      platformName: "Android",
      deviceName: "Galaxy S9",
      platformVersion: "10",
      app: "APP10160271581663179146005422", //Set your APP URL
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
