import React from "react";
import { MdLocationCity } from "react-icons/md";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-4 items-center m-5 mb-0">
        <figure>
          <img src={company_logo} alt="Shoes" className="w-17" />
        </figure>
        <div>
          <h3 className="text-4xl font-bold">{company}</h3>
          <p className="text-gray-500 flex gap-1 items-center">
            <MdLocationCity></MdLocationCity>
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h1>
          <span className="font-bold">Salary:</span> {salaryRange.min} -{" "}
          {salaryRange.max} {salaryRange.currency}
        </h1>
        <p>{description}</p>
        <div className="card-actions justify-start">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn bg-[#2F8F91] text-white font-bold rounded-2xl mt-3">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
