import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div className="max-w-[80%] mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div className="p-5 flex items-center gap-4">
              <img
                src={job.company_logo}
                alt={job.company}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
            </div>

            {/* Job Info */}
            <div className="px-5 pb-4 space-y-2 text-sm">
              <p>
                📍 <span className="font-medium">{job.location}</span>
              </p>
              <p>
                💼 <span className="font-medium">{job.jobType}</span>
              </p>
              <p>
                🗂️ <span className="font-medium">{job.category}</span>
              </p>
              <p>
                ⏰ Deadline:{" "}
                <span className="font-medium">{job.applicationDeadline}</span>
              </p>
            </div>

            <div className="px-5 pb-4">
              <p className="text-sm font-semibold text-[#2f8f91]">
                ৳ {job.salaryRange.min} - {job.salaryRange.max}
              </p>
            </div>

            <div className="px-5 pb-4 text-sm text-gray-600 line-clamp-3">
              {job.description}
            </div>

            <div className="px-5 pb-4 flex flex-wrap gap-2 pt-3">
              {job.requirements.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-[#2f8f91]/10 text-[#2f8f91]"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>

            <div className="px-5 py-4 border-t flex justify-between items-center">
              <span className="text-xs text-gray-500">HR: {job.hr_name}</span>
              {/* <Link to={`/myPostedJob/${job._id}`}>
                {" "}
                <button className="px-4 py-2 text-sm rounded-lg bg-[#2f8f91] text-white hover:bg-[#257b7d] transition">
                  Edit Job
                </button>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
