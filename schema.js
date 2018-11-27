const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// Hardcoded Data
const customers = [
  {id: '1', name: 'Jane Doe', email: 'jdoe@gmail.com', age: 35},
  {id: '2', name: 'Sarah Smith', email: 'ssmith@gmail.com', age: 37},
  {id: '3', name: 'Anne Anderson', email: 'aanderson@gmail.com', age: 39}
];

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt},
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {GraphQLString}
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if(customers[i].id == args.id) {
            // return current iteration of customers array
            return customers[i];
          }
        }
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});
