import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/developer_team.jpg";
import team2 from "../../assets/job_team.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{
              y: [100, 150, 100],
              transition: { duration: 5, repeat: Infinity },
            }}
            src={team2}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-[#35A3A7] border-b-[#35A3A7] border-s-7 border-b-7 shadow-2xl"
          />
          <motion.img
            animate={{
              x: [150, 300, 150],
              transition: { duration: 10, repeat: Infinity },
            }}
            src={team1}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-[#35A3A7] border-b-[#35A3A7] border-s-7 border-b-7 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{
              // x: 200,
              y: -50,
              color: ["#ff5731", "#33ff33", "#8a33fa"],
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Latest Job For You!
          </motion.h1>
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4 } }}
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5731", "#33ff33", "#8a33fa"],
                transition: { duration: 5, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
