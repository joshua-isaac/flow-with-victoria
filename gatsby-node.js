const agility = require("./src/agility/utils")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

//gatsy-node.js
//CREATE RESOLVERS *******************************************************************************************
exports.createResolvers = args => {
  const {
    createResolvers,
    getNode,
    createNodeId,
    createNode,
    createContentDigest,
    configOptions,
  } = args

  const resolvers = {
    // get membership
    agilityClassesBlock: {
      linkedContent_membership: agility.getLinkedContentItem({
        type: "agilityMembershipPlan",
        linkedContentFieldName: "membership",
      }),
    },
  }
  createResolvers(resolvers)
}
