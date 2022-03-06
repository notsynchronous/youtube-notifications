const { XMLParser } = require("fast-xml-parser");
const { differenceInMinutes, parseISO } = require("date-fns");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const parser = new XMLParser();
    let json = parser.parse(event.body);
    let { published, updated } = json.feed.entry;
    published = parseISO(published);
    updated = parseISO(updated);

    console.log(json);

    // if the difference is less than 10
    // probably a new video
    if (differenceInMinutes(published, updated) < 10) {
      console.log(differenceInMinutes(published, updated));
    } else {
      // otherwise an update.
      console.log(differenceInMinutes(published, updated));
    }

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
