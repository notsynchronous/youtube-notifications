const axios = require("axios").default;

var qs = require("qs");
var data = qs.stringify({
  "hub.callback": process.env.CALLBACK,
  "hub.mode": "subscribe",
  "hub.topic":
    "https://www.youtube.com/xml/feeds/videos.xml?channel_id=" +
    process.env.CHANNEL_ID,
});
var config = {
  method: "post",
  url: "https://pubsubhubbub.appspot.com/subscribe",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};

exports.handler = function (event, context, callback) {
  console.log(data, config);
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
