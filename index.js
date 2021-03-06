import express from 'express';
import graphQLHTTP from 'express-graphql';
import cors from 'cors';
import path from 'path';

import schema from './src/mockSchema';


// Expose a GraphQL endpoint
const graphQLServer = express();
graphQLServer.use(cors({
    origin:/^http\:\/\/localhost\:(3001|3002)$/i,
    credentials:true
}));
graphQLServer.use('/', graphQLHTTP({ schema, graphiql: true, pretty: true }));


const GRAPHQL_PORT = process.env.port || 8000;
graphQLServer.listen(GRAPHQL_PORT, 'localhost', () => console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

