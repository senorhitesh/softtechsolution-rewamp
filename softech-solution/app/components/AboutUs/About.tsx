"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const About = () => {
  return (
    <section className="relative w-full bg-[#1d1d1d] pt-20 pb-32 px-6 md:px-12 lg:px-24 overflow-visible">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 plus-pattern pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-left gap-6 flex-1"
        >
          <div className="space-y-2">
            <span className="text-[#3b82f6] uppercase tracking-[0.2em] text-xs font-bold">
              About Us
            </span>
            <h2 className=" lg:text-4xl font-bold text-white leading-tight">
              Hi, We’re <span className="text-brand2">SOFT-TECH</span> Solutions
            </h2>
          </div>

          <p className="text-base text-md max-w-xl text-gray-400 leading-relaxed">
            A pioneer in delivering innovative fintech and telecom software
            solutions to banks and businesses worldwide. Empowering
            organizations to thrive in the digital age with a proven track
            record of serving
            <span className="text-white font-semibold"> 1000+ clients.</span>
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-white text-black hover:bg-gray-100 transition-all cursor-pointer font-bold py-3 px-8 rounded-full shadow-lg">
              Our Solutions
            </button>
            <button className="bg-transparent flex gap-2 cursor-pointer items-center border border-gray-600 hover:border-white text-white transition-all font-medium py-3 px-8 rounded-full group">
              Let's Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Content (Image & Badge) */}
        <div className="relative flex-1 flex justify-center lg:justify-end w-full">
          <div className="relative">
            {/* Outer Decorative Border */}
            <div className="absolute -inset-4 border border-gray-800 rounded-2xl" />

            <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-xl shadow-2xl bg-[#2a2a2a]">
              <img
                src="https://i.pinimg.com/1200x/ab/44/bc/ab44bc60737c35d32b62daa087f5df64.jpg"
                alt="SOFT-TECH Building"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -2, 0], x: [0, -1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-8 -left-8 bg-[#00b14f]/90 backdrop-blur-xl px-7 py-5 rounded-2xl shadow-2xl border border-white/10"
            >
              <p className="font-black text-white text-2xl leading-none">12+</p>
              <p className="text-[10px] font-bold text-white uppercase mt-1 tracking-tighter">
                Years of Trust
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
