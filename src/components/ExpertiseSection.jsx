import React from "react";
import { FaPalette, FaCode, FaTools } from "react-icons/fa";

const ExpertiseSection = () => (
  <section className="container mx-auto py-12 px-4">
    <h2 className="text-2xl font-bold mb-6">Our Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 shadow rounded-lg text-center">
        <FaPalette className="text-3xl text-green-500 mb-3" />
        <h3 className="font-bold text-lg">Design</h3>
        <p className="mt-2 text-gray-600">User-first design experiences.</p>
      </div>
      <div className="bg-white p-6 shadow rounded-lg text-center">
        <FaCode className="text-3xl text-green-500 mb-3" />
        <h3 className="font-bold text-lg">Develop</h3>
        <p className="mt-2 text-gray-600">Top-notch engineering solutions.</p>
      </div>
      <div className="bg-white p-6 shadow rounded-lg text-center">
        <FaTools className="text-3xl text-green-500 mb-3" />
        <h3 className="font-bold text-lg">Maintain</h3>
        <p className="mt-2 text-gray-600">Ensuring product reliability.</p>
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
