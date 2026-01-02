import React from "react";
import "./AddJob.css";

const AddJob = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const jobData = {
      title: form.title.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      applicationDeadline: form.deadline.value,
      salaryRange: {
        min: Number(form.minSalary.value),
        max: Number(form.maxSalary.value),
        currency: "bdt",
      },
      description: form.description.value,
      company: form.company.value,
      requirements: form.requirements.value.split(","),
      responsibilities: form.responsibilities.value.split(","),
      hr_name: form.hrName.value,
      hr_email: form.hrEmail.value,
      company_logo: form.logo.value,
      status: "active",
    };

    console.log(jobData);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-10 ">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 bg-gradient-to-br from-[#def5f5] via-[#ecf3f3] to-[#DFF5F4]">
        <h2 className="text-3xl font-bold text-center text-[#2f8f91] mb-8">
          Add New Job
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input-field"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input-field"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input-field"
            required
          />

          <select name="jobType" className="input-field">
            <option value="">Select Job Type</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">Onsite</option>
          </select>

          <input
            type="text"
            name="category"
            placeholder="Category"
            className="input-field"
          />

          <input type="date" name="deadline" className="input-field" required />

          <input
            type="number"
            name="minSalary"
            placeholder="Minimum Salary (BDT)"
            className="input-field"
            required
          />

          <input
            type="number"
            name="maxSalary"
            placeholder="Maximum Salary (BDT)"
            className="input-field"
            required
          />

          <textarea
            name="requirements"
            placeholder="Requirements (comma separated)"
            className="input-field md:col-span-2"
            rows="3"
          />

          <textarea
            name="responsibilities"
            placeholder="Responsibilities (comma separated)"
            className="input-field md:col-span-2"
            rows="3"
          />

          <textarea
            name="description"
            placeholder="Job Description"
            className="input-field md:col-span-2"
            rows="4"
          />

          <input
            type="text"
            name="hrName"
            placeholder="HR Name"
            className="input-field"
          />

          <input
            type="email"
            name="hrEmail"
            placeholder="HR Email"
            className="input-field"
          />

          <input
            type="text"
            name="logo"
            placeholder="Company Logo URL"
            className="input-field md:col-span-2"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-[#2f8f91] hover:bg-[#257678] text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
