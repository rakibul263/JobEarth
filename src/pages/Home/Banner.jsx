import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import team1 from "../../assets/developer_team.jpg";
import team2 from "../../assets/job_team.jpg";

const Banner = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero min-h-screen bg-gray-50">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-20">
        {/* Images */}
        <div className="flex-1 relative flex justify-center items-center">
          <motion.img
            animate={
              isLargeScreen ? { y: [-50, -100, -50] } : {} // no animation on smaller screens
            }
            transition={{ duration: 6, repeat: Infinity }}
            src={team2}
            className="w-60 sm:w-72 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-[#35A3A7] shadow-2xl"
          />

          <motion.img
            animate={
              isLargeScreen ? { y: [50, 50, 50], x: [50, 100, 50] } : {} // no animation on smaller screens
            }
            transition={{ duration: 8, repeat: Infinity }}
            src={team1}
            className="w-60 sm:w-72 absolute -bottom-10 sm:-bottom-16 -left-5 sm:-left-10 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-[#35A3A7] shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
          >
            Find Your{" "}
            <motion.span
              animate={{ color: ["#9DAAFE", "#BFCAFF", "#2F8F91"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Dream Job
            </motion.span>
          </motion.h1>

          <p className="py-6 text-gray-600 text-sm sm:text-base">
            Discover thousands of remote & on-site jobs from top companies.
            Apply easily, get hired faster, and build your career with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn bg-[#35A3A7] text-white w-full sm:w-auto">
              Browse Jobs
            </button>
            <button className="btn btn-outline w-full sm:w-auto">
              Post a Job
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                10K+
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">Jobs Posted</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                5K+
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">Companies</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                20K+
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">Candidates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
