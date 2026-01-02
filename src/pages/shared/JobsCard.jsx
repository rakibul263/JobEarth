import React from "react";
import { MdLocationCity } from "react-icons/md";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;

  return (
    <div className="card bg-base-100 w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-md">
      {/* Header */}
      <div className="flex gap-4 items-center p-4 pb-0">
        <figure>
          <img
            src={company_logo}
            alt={company}
            className="w-12 h-12 object-contain"
          />
        </figure>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold">{company}</h3>
          <p className="text-gray-500 flex gap-1 items-center text-sm">
            <MdLocationCity />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title text-lg sm:text-xl">{title}</h2>

        <p className="text-sm sm:text-base">
          <span className="font-bold">Salary:</span> {salaryRange.min} -{" "}
          {salaryRange.max} {salaryRange.currency}
        </p>

        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Skills */}
        <div className="card-actions flex-wrap gap-2">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn bg-[#2F8F91] text-white font-bold rounded-xl mt-3 px-6">
              Job Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
