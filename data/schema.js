import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

var store = {};
const Schema = (db) => {
  let storeType = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      links: {
        type: new GraphQLList(linkType),
        resolve: () => db.collection("links").find({}).toArray()
      },
    })
  })

  let linkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: { type: GraphQLString  },
      title: { type: GraphQLString  },
      url: { type: GraphQLString  },
    })
  });

  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        store: {
          type: storeType,
          resolve: () => store
        }
      })
    }),

    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => ({
        incrementCounter: {
          type: GraphQLInt,
          resolve: () => this.counter
        }
      })
    })
  });
  return schema;
}

export default Schema;
