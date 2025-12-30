import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Hotjobs from "./Hotjobs";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner />
      <Hotjobs jobs={jobs} />
    </div>
  );
};

export default Home;
