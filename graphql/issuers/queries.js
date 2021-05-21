import gql from "graphql-tag";

export const GET_ISSUER_NAME = gql`
  query ($id: Int) {
    issuerName(id: $id)
  }
`;

export const CREATE_ISSUER = gql`
  mutation CreateIssuer($name: String, $issuerTypeId: Int) {
    createIssuer(name: $name, issuerTypeId: $issuerTypeId) {
      name
      issuer_type_id
    }
  }
`;

export const UPDATE_ISSUER = gql`
  mutation UpdateIssuer($id: ID!, $name: String, $issuerTypeId: Int) {
    updateIssuer(id: $id, name: $name, issuerTypeId: $issuerTypeId) {
      name
      issuer_type_id
    }
  }
`;

export const GET_ISSUER = gql`
  query GetIssuer(
    $id: ID
    $where: String
    $page: Int
    $size: Int
    $orderByField: String
    $orderByDirection: String
  ) {
    getIssuer(
      id: $id
      where: $where
      page: $page
      size: $size
      orderByField: $orderByField
      orderByDirection: $orderByDirection
    ) {
      count
      rows {
        id
        name
        issuer_type {
          id
          name
        }
      }
    }
  }
`;

export const GET_ISSUER_TYPE = gql`
  query {
    getIssuerType {
      id
      name
    }
  }
`;

export const GET_ISSUER_SELECTED = gql`
  {
    issuer_selected @client {
      id
      name
    }
  }
`;

export const DELETE_ISSUER = gql`
  mutation ($id: Int) {
    removeIssuer(id: $id) {
      status
      data {
        id
        name
      }
    }
  }
`;
