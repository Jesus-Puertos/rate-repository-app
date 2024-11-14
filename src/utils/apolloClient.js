import ApolloClient from "apollo-boost";

const createApolloClient = () =>
  new ApolloClient({
    uri: "http://10.116.134.90:4000/graphql",
  });

export default createApolloClient;
