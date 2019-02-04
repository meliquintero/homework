const url = 'http://data.sfgov.org/resource/bbb8-hzi6.json'

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

module.exports = () => {
  return {
    uri: url,
    qs: {dayofweekstr: weekday[new Date().getDay()]}
  }
}
