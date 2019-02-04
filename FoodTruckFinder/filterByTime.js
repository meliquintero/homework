var moment = require('moment');

module.exports = function (trucksJson) {
  let trucks = JSON.parse(trucksJson);
  let timeNow = moment()
  return trucks.filter((truck) => {
    opensAt = moment(truck.starttime, "H:mm a")
    closesAt = moment(truck.endtime, "H:mm a");
    return timeNow.isBetween(opensAt, closesAt)
  })
};
