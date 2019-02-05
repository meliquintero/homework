var chalk = require("chalk");
var moment = require('moment');

var filterTenTrucks = function (openTrucks, pagination) {
  var offset = pagination.offset
  let limit = pagination.limit

  return openTrucks.slice(offset, offset + limit);
}

var sortAlphabetically = function (theTenTrucks) {
  return theTenTrucks.sort(function(a, b) {
    var x = a["applicant"]; var y = b["applicant"];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

var printTrucks = function (theTenTrucks) {
  console.log(chalk.bgRed.bold(`\t NAME \t\t| ADDRESS`));
    theTenTrucks.forEach((truck) => {
      console.log(chalk.blue(`\t ${truck.applicant} \t\t| ${truck.location}`));
  })
}

module.exports = {
  sliceAndPrintTrucks: function (filteredAndSortedTrucks, pagination) {
    let tenTrucks = filterTenTrucks(filteredAndSortedTrucks, pagination)
    printTrucks(tenTrucks)
  },

  getFiltered: function (trucksJson) {
    let trucks = JSON.parse(trucksJson);
    let timeNow = moment()
    return sortAlphabetically(trucks.filter((truck) => {
      opensAt = moment(truck.starttime, "H:mm a")
      closesAt = moment(truck.endtime, "H:mm a");
      return timeNow.isBetween(opensAt, closesAt)
    })
  )
  }
};
