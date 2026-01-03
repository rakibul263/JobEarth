import React, { use } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router";
import "react-toastify/dist/ReactToastify.css";

const ApplicationList = ({ MyApplications }) => {
  const applications = use(MyApplications);

  return (
    <div className="p-8 bg-gradient-to-br from-[#EAF6F6] via-[#FDFEFE] to-[#DFF5F4] min-h-screen max-w-[80%] mx-auto">
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
              {/* <th className="py-3 px-4 text-center">Action</th> */}
            </tr>
          </thead>

          <tbody>
            {applications && applications.length > 0 ? (
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
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </td>

                  <td className="py-2 px-4">
                    <a
                      href={app.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </td>

                  <td className="py-2 px-4">
                    <a
                      href={app.portfolio}
                      target="_blank"
                      rel="noreferrer"
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
                  colSpan="8"
                  className="text-center py-4 text-gray-500 font-medium"
                >
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ApplicationList;
