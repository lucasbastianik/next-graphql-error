import Sequelize from "sequelize";
const Op = Sequelize.Op;

export const resolvers = {
  Query: {
    issuerName: async (_, { id }, { cg }) => {
      const response = await cg.issuer.findOne({
        where: {
          id,
        },
      });
      return response.name;
    },
  },
  Mutation: {
    createIssuer: (parent, { name, issuerTypeId }, { cg }, info) =>
      cg.issuer.create({
        name,
        issuer_type_id: issuerTypeId,
      }),
  },
};
