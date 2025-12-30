import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const jobs = useLoaderData();

  const {
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
  } = jobs || {};

  const formattedSalary = salaryRange
    ? `${salaryRange.min} - ${salaryRange.max} ${salaryRange.currency}`
    : "Not disclosed";

  return (
    <div className="min-h-screen bg-[#f5fafa] py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* ================= Header ================= */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start border-b pb-6">
          <img
            src={company_logo}
            alt={company}
            className="w-24 h-24 object-contain rounded-lg border"
          />

          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#2f8f91]">{title}</h1>
            <p className="font-semibold mt-1">{company}</p>
            <p className="text-gray-500">{location}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <InfoBox label="Job Type" value={jobType} />
          <InfoBox label="Category" value={category} />
          <InfoBox label="Salary" value={formattedSalary} />
          <InfoBox label="Deadline" value={applicationDeadline} />
          <InfoBox label="Status" value={status} />
        </div>
        <Section title="Job Description">
          <p>{description}</p>
        </Section>
        <Section title="Responsibilities">
          <ul className="list-disc list-inside space-y-1">
            {responsibilities?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>
        <Section title="Requirements">
          <ul className="list-disc list-inside space-y-1">
            {requirements?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>
        <Section title="HR Contact">
          <p>
            <span className="font-semibold">Name:</span> {hr_name}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${hr_email}`}
              className="text-[#2f8f91] hover:underline"
            >
              {hr_email}
            </a>
          </p>
        </Section>
        <div className="text-center mt-10">
          <button className="bg-[#2f8f91] hover:bg-[#257678] text-white px-10 py-3 rounded-lg font-semibold transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoBox = ({ label, value }) => (
  <div className="bg-[#e6f4f4] rounded-lg px-4 py-3 text-sm">
    <span className="font-semibold">{label}:</span>{" "}
    <span>{value || "N/A"}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold text-[#2f8f91] mb-2">{title}</h3>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export default JobDetails;
