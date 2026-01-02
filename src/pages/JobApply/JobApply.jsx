import React from "react";
import { useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import { toast } from "react-toastify";
import axios from "axios";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());

    const application = {
      jobId,
      applicant: user?.email,
      ...formObj,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then(() => toast.success("Submit Successful"))
      .catch((err) => toast.error("Something is wrong."));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50  px-4 max-w-[80%] mx-auto rounded-2xl">
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-gradient-to-br from-[#EAF6F6] via-[#FDFEFE] to-[#DFF5F4]">
        <h2 className="text-3xl font-bold text-center text-[#2F8F91] mb-2">
          Apply for This Job
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in your details carefully
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-5 py-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2F8F91]"
          />

          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-5 py-3 border rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
          />

          <input
            type="text"
            name="jobId"
            value={jobId}
            readOnly
            className="w-full px-5 py-3 border rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
          />

          <input
            type="tel"
            name="tel"
            placeholder="Phone Number"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F8F91]"
          />

          <input
            type="url"
            name="github"
            placeholder="GitHub Profile"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F8F91]"
          />

          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F8F91]"
          />

          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio (Optional)"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F8F91]"
          />

          <textarea
            rows="4"
            name="text"
            placeholder="Why should we hire you?"
            className="w-full px-5 py-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#2F8F91]"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-lg font-semibold text-white
                       bg-gradient-to-r from-[#2F8F91] to-[#3FB6B8]
                       hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
