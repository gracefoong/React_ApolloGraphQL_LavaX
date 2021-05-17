import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_JOBS } from "../GraphQL/Queries";

function GetJobs() {
  const { error, loading, data } = useQuery(LOAD_JOBS);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (data) {
      setJobs(data.getAllJobs);
    }
  }, [data]);

    /* return (
    <Router>
      <div className="App">
        <h1>LavaX Jobs Application System</h1>
        <Route path="/" exact>
          {data.jobs.map((job) => (
            <Job key={job.uniq_id} job={job} />
          ))}
        </Route>
        <Route path="/profile/:uniq_id">
          <Profile />
        </Route>
      </div>
    </Router>
  ); */

  return (
    <div>
      {" "}
      <h1>LavaX Jobs Application System</h1>
      {jobs.map((val) => {
        return (
          <div className="Card">
            <h2 className="Card--title">{val.jobtitle}</h2>
            <p className="Profile--description">Job Description: {val.jobdescription}</p>
            <ul>
            <li>Company: {val.company}</li>
            <li>Industry: {val.industry}</li>
            <li>Requirement: </li>
            <li>Education level: {val.education}</li>
            <li>Experience: {val.experience}</li>
            <li>Skills: {val.skills}</li>
            <li>Salary range: {val.payrate}</li>
            <li>Vacancy: {val.numberofpositions}</li>
            <li>Postdate: {val.postdate}</li>
            </ul>            
          </div> 
        )
      })}
    </div>
  );
}


export default GetJobs;
