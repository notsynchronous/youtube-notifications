exports.handler = async (event, context) => {
  console.log(event.body, event.httpMethod);
  return {
    statusCode: 200,
    body: "Hello, World",
  };
};
