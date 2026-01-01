import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/applications")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch applications");
        return res.json();
      })
      .then((data) => {
        setApplications(data);
        toast.success("Applications loaded successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to load applications.");
      });
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-[#EAF6F6] via-[#FDFEFE] to-[#DFF5F4] min-h-screen max-w-[80%]  mx-auto">
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: "#2f8f91" }}
      >
        My Applications
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full border-collapse">
          <thead
            className="sticky top-0"
            style={{ backgroundColor: "#2f8f91" }}
          >
            <tr className="text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">GitHub</th>
              <th className="py-3 px-4 text-left">LinkedIn</th>
              <th className="py-3 px-4 text-left">Portfolio</th>
              <th className="py-3 px-4 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr
                  key={app._id}
                  className="odd:bg-white even:bg-gray-50 hover:bg-[#2f8f91]/10 transition-colors"
                >
                  <td className="py-2 px-4 font-medium">{app.name}</td>
                  <td className="py-2 px-4">{app.email}</td>
                  <td className="py-2 px-4">{app.tel}</td>
                  <td className="py-2 px-4">
                    <a
                      href={app.github}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </td>
                  <td className="py-2 px-4">
                    <a
                      href={app.linkedin}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </td>
                  <td className="py-2 px-4">
                    <a
                      href={app.portfolio}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      Portfolio
                    </a>
                  </td>
                  <td className="py-2 px-4">{app.text}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-4 text-gray-500 font-medium"
                >
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default MyApplications;
