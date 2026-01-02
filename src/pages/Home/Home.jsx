import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Hotjobs from "./Hotjobs";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch jobs: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setJobs(data))
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setJobs([]); // Set empty array on error
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner />
      <Hotjobs jobs={jobs} />
    </div>
  );
};

export default Home;
