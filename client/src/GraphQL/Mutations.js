import { gql } from "@apollo/client";

export const CREATE_JOB_MUTATION = gql`
  mutation createJob(
    $company: String!
    $education: String!
    $experience: String!
    $industry: String!
    $jobdescription: String!
    $jobid: String!
    $jobtitle: String!
    $numberofpositions: String!
    $payrate: String!
    $postdate: String!
    $site_name: String!
    $skills: String!

  ) {
    createJob(
      company: $company
      education: $education
      experience: $experience
      industry: $industry
      jobdescription: $jobdescription
      jobid: $jobid
      jobtitle: $jobtitle
      numberofpositions: $numberofpositions
      payrate: $payrate
      postdate: $postdate
      site_name: $site_name
      skills: $skills
    ) {
      uniq_id
    }
  }
`;
