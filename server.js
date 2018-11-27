// Bring in express
const express = require('express');
// Bring in express-graphql
const expressGraphQL = require('express-graphql');
// Initialize express
const schema = require('./schema.js')
const app = express();
// Entry point
app.use('/graphql', expressGraphQL({
  schema:schema,
  graphql:true
}));

app.listen(4000, () => {
  console.log('Server up on port 4000');
});
