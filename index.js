var request = require('request-promise-native');

var chalk = require("chalk");

var requestParams = require('./FoodTruckFinder/requestParams.js');
var filterByTime = require('./FoodTruckFinder/filterByTime.js');

module.exports = async () => {
  let trucksData = await request(requestParams())
  let trucksFiltered = filterByTime(trucksData).slice(0, 9)

  console.log(chalk.bgRed.bold(`\t NAME \t| ADDRESS`));
    trucksFiltered.forEach( (truck) => {
      console.log(chalk.blue(`\t ${truck.applicant} \t| ${truck.location}`));
  })
}
