import fs from 'fs';
import express from 'express';
import Schema from './data/schema.js';
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';


const app = express();

app.use(express.static('public'));

(async () => {

  try {
    let db = await MongoClient.connect("mongodb://localhost/starter");
    let schema = Schema(db);

    app.use('/graphql', GraphQLHTTP({
      schema,
      graphiql: true
    }));

    app.listen(5000, () => {
      console.log('Running at port 5000');
    });


    let json = await graphql(schema, introspectionQuery);
    console.log(json);

    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
      if (err) {
        throw err;
      }

      console.log("JSON Schema generated");
    })
  } catch(e) {
    console.log(e)
  }

})();

