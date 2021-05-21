import { merge } from "lodash";
import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";

import { typeDef as Issuer } from "../../graphql/issuers/typeDef";
import { resolvers as issuerResolvers } from "../../graphql/issuers/resolvers";

const resolvers = {};

const server = new ApolloServer({
  typeDefs: [Issuer],
  resolvers: merge(resolvers, issuerResolvers),
});

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"],
});

export default cors(
  server.createHandler({
    path: "/api/graphql",
  })
);

export const config = {
  api: {
    bodyParser: false,
  },
};
