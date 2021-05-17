const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const jobData = require("../MOCK_JOB.json");

const JobType = require("./TypeDefs/JobType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllJobs: {
      type: new GraphQLList(JobType),
      args: { uniq_id: { type: GraphQLString } },
      resolve(parent, args) {
        return jobData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createJob: {
      type: JobType,
      args: {
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
      },
      resolve(parent, args) {
        jobData.push({
          company: args.company,
          education: args.education,
          experience: args.experience,
          industry: args.industry,
          jobdescription: args.jobdescription,
          jobid: args.jobid,
          jobtitle: args.jobtitle,
          numberofpositions: args.numberofpositions,
          payrate: args.payrate,
          postdate: args.comppostdateany,
          site_name: args.site_name,
          skills: args.skills,
          uniq_id: jobData.length,

          id: jobData.length,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
