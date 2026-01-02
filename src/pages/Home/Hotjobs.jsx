import React from "react";
import JobsCard from "../shared/JobsCard";

const Hotjobs = ({ jobs }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Hotjobs;
