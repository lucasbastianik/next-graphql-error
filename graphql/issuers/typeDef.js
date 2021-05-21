import gql from "graphql-tag";

export const typeDef = gql`
  type Issuer {
    id: ID!
    name: String
    cnpj: String
  }

  type IssuerType {
    id: ID!
    name: String
  }

  type IssuerResponse {
    count: Int
    rows: [Issuer!]!
  }

  type Query {
    issuerName(id: Int): String
  }

  type Mutation {
    createIssuer(name: String, issuerTypeId: Int): Issuer
  }
`;
