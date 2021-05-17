const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const JobType = new GraphQLObjectType({
  name: "Job",
  fields: () => ({
    company: { type: GraphQLString },
    education: { type: GraphQLString },
    experience: { type: GraphQLString },
    industry: { type: GraphQLString },
    jobdescription: { type: GraphQLString },
    jobid: { type: GraphQLString },
    jobtitle: { type: GraphQLString },
    numberofpositions: { type: GraphQLString },
    payrate: { type: GraphQLString },
    postdate: { type: GraphQLString },
    site_name: { type: GraphQLString },
    skills: { type: GraphQLString },
    uniq_id: { type: GraphQLString },
  }),
});

module.exports = JobType;
