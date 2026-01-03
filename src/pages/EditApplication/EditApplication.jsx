import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; // react-router-dom
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://job-earth-server.vercel.app/applications/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApplication(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load application");
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!application) return;

    const updatedApplication = {
      name: e.target.name.value,
      email: e.target.email.value,
      tel: e.target.tel.value,
      github: e.target.github.value,
      linkedin: e.target.linkedin.value,
      portfolio: e.target.portfolio.value,
      text: e.target.text.value,
    };

    fetch(`https://job-earth-server.vercel.app/applications/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedApplication),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Application updated successfully");
        navigate("/myApplications");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update application");
      });
  };

  if (loading || !application) {
    return <p className="text-center mt-10 text-lg">Loading application...</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#2f8f91]">
        Edit Application
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Existing values pre-filled */}
        <input
          name="name"
          defaultValue={application.name}
          className="w-full border p-2 rounded"
          placeholder="Name"
          required
        />

        <input
          name="email"
          defaultValue={application.email}
          className="w-full border p-2 rounded"
          placeholder="Email"
          required
        />

        <input
          name="tel"
          defaultValue={application.tel}
          className="w-full border p-2 rounded"
          placeholder="Phone"
          required
        />

        <input
          name="github"
          defaultValue={application.github}
          className="w-full border p-2 rounded"
          placeholder="GitHub URL"
        />

        <input
          name="linkedin"
          defaultValue={application.linkedin}
          className="w-full border p-2 rounded"
          placeholder="LinkedIn URL"
        />

        <input
          name="portfolio"
          defaultValue={application.portfolio}
          className="w-full border p-2 rounded"
          placeholder="Portfolio URL"
        />

        <textarea
          name="text"
          defaultValue={application.text}
          className="w-full border p-2 rounded"
          rows="4"
          placeholder="Message"
        />

        <button
          type="submit"
          className="w-full bg-[#2f8f91] text-white py-2 rounded hover:bg-[#257b7d]"
        >
          Update Application
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default EditApplication;
