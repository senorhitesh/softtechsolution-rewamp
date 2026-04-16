"use client";
import { motion } from "framer-motion";
const Whyus = () => {
  return (
    <div className="w-full h-fit  flex flex-col items-center  justify-center py-20">
      <p>Our Procress</p>
      <div className="flex relative items-center ">
        <div>DIAGRAM</div>
        <div>
          <svg
            width="226"
            height="225"
            viewBox="0 0 376 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0.5 297.5C16.5 199.167 108.8 2.1 350 0.5"
              stroke="black"
              strokeWidth={4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }}
            />
            <path
              d="M0.5 297.5C16.5 199.167 108.8 2.1 350 0.5"
              stroke="black"
            />
            <path
              d="M0.5 297.5C16.4771 395.833 108.645 592.9 349.5 594.5"
              stroke="black"
            />
            <motion.path
              d="M0.5 297.5C16.4771 395.833 108.645 592.9 349.5 594.5"
              stroke="black"
              strokeWidth={4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }}
            />

            <path d="M0 297.5H375.5" stroke="black" />
            <motion.path
              d="M0 297.5H375.5"
              stroke="black"
              strokeWidth={4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }}
            />
          </svg>
        </div>
        <div className="absolute top-0 right-1/2  flex items-center justify-center shadow-lg">
          <p>You</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 flex items-center justify-center shadow-lg">
          <p>Busiess</p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center shadow-lg">
          <p>Evertything</p>
        </div>
        <div className="rotate-180 ml-19">
          <svg
            width="226"
            height="225"
            viewBox="0 0 376 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0.5 297.5C16.5 199.167 108.8 2.1 350 0.5"
              stroke="black"
              strokeWidth={4}
              initial={{ pathLength: 1 }}
              animate={{ pathLength: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }}
            />
            <path
              d="M0.5 297.5C16.5 199.167 108.8 2.1 350 0.5"
              stroke="black"
            />
            <path
              d="M0.5 297.5C16.4771 395.833 108.645 592.9 349.5 594.5"
              stroke="black"
            />
            <motion.path
              d="M0.5 297.5C16.4771 395.833 108.645 592.9 349.5 594.5"
              stroke="black"
              strokeWidth={4}
              initial={{ pathLength: 1 }}
              animate={{ pathLength: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }}
            />

            <path d="M0 297.5H375.5" stroke="black" />

            <motion.path
              d="M0 297.5H375.55555"
              stroke="black"
              strokeWidth={4}
              initial={{ pathLength: 1 }}
              animate={{ pathLength: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }}
            />
          </svg>
        </div>
        <div>Ultimate Satisfaction</div>
      </div>
    </div>
  );
};

export default Whyus;
