"use client";
import { motion } from "framer-motion";

//Create an Bento Grid with 4-6 sections, each highlighting a unique aspect of your services.
const Whyus = () => {
  return (
    <div className="w-full h-fit  flex flex-col items-center  justify-center mt-12">
      <p className="text-neutral-800 italic">Why Choose Us?</p>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4  text-black">
        <div className="md:col-span-2 md:row-span-2 p-4 rounded-md bg-neutral-200/10 backdrop-blur border border-gray-500/20">
          <h3 className="font-semibold mb-2">Proven Industry Excellence</h3>
          <p className="text-sm opacity-80">
            Our extensive track record of successful implementations has
            established us as a trusted leader in fintech and telecom
            innovation.
          </p>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-10 h-10 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.068-.63 3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </div>

        <div className="md:col-span-2 p-4 rounded-md bg-neutral-200/10 backdrop-blur border border-gray-500/20">
          <h3 className="font-semibold mb-2">Client-Centric Philosophy</h3>
          <p className="text-sm opacity-80">
            We go beyond standard requirements, deeply aligning our solutions
            with your unique business goals.
          </p>
        </div>

        <div className="md:col-span-2 p-4 rounded-md bg-neutral-200/10 backdrop-blur border border-gray-500/20">
          <h3 className="font-semibold mb-2">Leading-Edge Innovation</h3>
          <p className="text-sm opacity-80">
            We stay at the forefront of emerging technologies to deliver
            future-proof solutions.
          </p>
        </div>

        <div className="md:col-span-2 p-4 rounded-md bg-neutral-200/10 backdrop-blur border border-gray-500/20">
          <h3 className="font-semibold mb-2">Global Expertise</h3>
          <p className="text-sm opacity-80">
            With a presence across diverse industries and regions, we bring
            world-className technical insights.
          </p>
        </div>

        <div className="md:col-span-2 p-4 rounded-md bg-neutral-200/10 backdrop-blur border border-gray-500/20">
          <h3 className="font-semibold mb-2">Agile Scalability</h3>
          <p className="text-sm opacity-80">
            Our architecture is engineered for flexibility, designed to scale
            alongside your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
