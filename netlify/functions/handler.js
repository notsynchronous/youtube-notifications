const { XMLParser } = require("fast-xml-parser");
const { differenceInMinutes, parseISO } = require("date-fns");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const parser = new XMLParser();
    let json = parser.parse(event.body);
    let { published, updated } = json.feed.entry;
    published = parseISO(published);
    updated = parseISO(updated);

    // if the difference is less than 10
    // probably a new video
    if (differenceInMinutes(published, updated) < 10) {
      console.log(
        differenceInMinutes(published, updated),
        "Less than 10 minutes."
      );
    } else {
      // otherwise an update.
      console.log(
        differenceInMinutes(published, updated),
        "More than 10 minutes."
      );
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
