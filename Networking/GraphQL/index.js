import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';


// The Apolloserver constructor requires 2 parameters: your schema definition and set of resolvers

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

// Passing an  ApolloServer instance to the startStandaloneServer function

// 1. creates an express app
// 2. installs your ApolloServer instance as a middleware
// 3. prepares your app to handle incoming requests

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
