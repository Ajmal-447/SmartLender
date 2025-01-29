const path = require("path");

const common = [
  "--require ./features/step_definitions/BusinessLoanSteps.js",
].join(" ");

const features = ["./features/BusinessLoanCase.feature"].join(" ");

const dateTimeFormat = () => {
  let date = new Date();
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
};

const createReportPath = () => {
  const timeStamp = dateTimeFormat();

  const reportFileName = `cucumber-report-${timeStamp}.html`;

  return path.join(__dirname, "reports", reportFileName);
};

const cucumberArgs = process.argv.slice(2);
let cucumberCommand = `${common} ${features} ${cucumberArgs.join(" ")}`;

let reportPath = createReportPath(cucumberArgs[1]);
cucumberCommand += ` --format "html:${reportPath}"`;

module.exports = {
  default: cucumberCommand,
};
