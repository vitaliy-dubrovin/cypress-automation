const mocha = require('mocha');
const { create } = require('mochawesome');
const { merge } = require('mochawesome-merge');

module.exports = (on, config) => {
  on('after:run', (results) => {
    return merge({
      files: ['./cypress/reports/*.json'],
    }).then((report) => {
      return create().then((options) => {
        const htmlReport = report.addContext(options);
        return generateReport(report);
      });
    });
  });
};