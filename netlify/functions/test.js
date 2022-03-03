exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    // Do something here.
    console.log(event.body);
  }

  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: event.queryStringParameters["hub.challenge"],
    };
  }
};
