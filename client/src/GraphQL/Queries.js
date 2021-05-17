import { gql } from "@apollo/client";

export const LOAD_JOBS = gql`
  query {
    getAllJobs {
      company
      education
      experience
      industry
      jobdescription
      jobid
      jobtitle
      numberofpositions
      payrate
      postdate
      site_name
      skills
      uniq_id
    }
  }
`;

 