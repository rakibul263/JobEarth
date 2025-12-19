import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/developer_team.jpg";
import team2 from "../../assets/job_team.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="flex-1 relative flex justify-center">
          <motion.img
            animate={{
              y: [-100, -200, -100],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            src={team2}
            className="w-72 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-[#35A3A7] shadow-2xl"
          />

          <motion.img
            animate={{
              y: [100, 100, 100],
              x: [300, 400, 300],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            src={team1}
            className="w-72 absolute -bottom-16 -left-10 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-[#35A3A7] shadow-2xl"
          />
        </div>

        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold leading-tight"
          >
            Find Your{" "}
            <motion.span
              animate={{
                color: ["#9DAAFE", "#BFCAFF", "#2F8F91"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Dream Job
            </motion.span>
          </motion.h1>

          <p className="py-6 text-gray-600">
            Discover thousands of remote & on-site jobs from top companies.
            Apply easily, get hired faster, and build your career with us.
          </p>

          <div className="flex gap-4">
            <button className="btn bg-[#35A3A7] text-white">Browse Jobs</button>
            <button className="btn btn-outline">Post a Job</button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <h2 className="text-3xl font-bold text-primary">10K+</h2>
              <p className="text-sm text-gray-500">Jobs Posted</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">5K+</h2>
              <p className="text-sm text-gray-500">Companies</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">20K+</h2>
              <p className="text-sm text-gray-500">Candidates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
