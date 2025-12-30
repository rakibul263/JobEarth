import React from "react";
import JobsCard from "../shared/JobsCard";

const Hotjobs = ({ jobs }) => {
  return (
    <div className="max-w-[80%] mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Hotjobs;
