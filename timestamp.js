module.exports = (param, callback) => {

  var url = require("url");
  var date = new Date(param);

  var unixTime = param != "Invalid Date" ? date.getTime() : null; 
  var naturalTime = param != "Invalid Date"? date : null;

  var output = { unixtime: unixTime, natural: naturalTime };  
  return callback(null, output);

}