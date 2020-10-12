// package to run the express server
const express = require("express");

// enabling cors with connect/express
const cors = require("cors");

// Works as a middleware to create an communication between the express and the graphql
const graphqlHTTP = require("express-graphql");

// import the schema file for the middleware
const schema = require("./schema/schema.dummydata");
const app = express();
app.use(cors());

// route configuration when the url routes to
// localhost:4000/graphql which will be used to connect with graphql server
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// set the express server to host on the location port 4000
app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
