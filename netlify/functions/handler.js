const { XMLParser } = require("fast-xml-parser");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    // Do something here.
    const parser = new XMLParser();
    let jsonObj = parser.parse(event.body);
    console.log(jsonObj);
    return {
      statusCode: 200,
    };
  }

  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: event.queryStringParameters["hub.challenge"],
    };
  }
};
