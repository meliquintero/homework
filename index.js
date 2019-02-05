var chalk = require("chalk");
const prompt = require("prompt-async");
const request = require('request-promise-native');

var requestParams = require('./FoodTruckFinder/requestParams.js');
var decorateData = require('./FoodTruckFinder/filter.js');

module.exports = async () => {
  const limit = 10
  var offset = 0
  var breakLoop = 0

  let trucksJson = await request(requestParams())
  let filteredData = decorateData.getFiltered(trucksJson)

  decorateData.sliceAndPrintTrucks(filteredData, {offset: offset, limit:limit})

  while (filteredData.length > limit && breakLoop < filteredData.length) {

    console.log(chalk.green(`Type`, chalk.underline.bgRed(`yes`) + ` for more trucks`));
    const {yes} = await prompt.get(["yes"]);

    if (yes.toLowerCase() == 'yes' || yes.toLowerCase() == 'y') {
      var offset = offset + limit
      decorateData.sliceAndPrintTrucks(filteredData, {offset: offset, limit:limit})
      var breakLoop = offset + limit
    }

  }
}
