import React, { Suspense, useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import JobList from "./JobList";
import { jobsCreatedByPromise } from "../../api/JobsApi";
const MyPostedJob = () => {
  // const [myPost, setMyPost] = useState([]);
  // const { user } = UseAuth();

  // useEffect(() => {
  //   fetch("https://job-earth-server.vercel.app/jobs")
  //     .then((res) => res.json())
  //     .then((data) => setMyPost(data));
  // }, []);

  // const myJobs = myPost.filter((job) => job.hr_email === user?.email);

  const { user } = UseAuth();

  return (
    <div>
      {/* <h2>Total My Posted Jobs: {myJobs.length}</h2>

      {myJobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.location}</p>
        </div>
      ))} */}
      <h2 className="text-3xl font-bold text-center text-[#2f8f91]">
        My Posted Jobs
      </h2>
      <Suspense>
        <JobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJob;
