// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver_2.21',

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['test/e2e/**/*.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace : true,
    defaultTimeoutInterval: 30000
  }

  // baseUrl: 'http://localhost:8080'

};
