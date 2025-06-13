import React from "react";

const TestimonialsSection = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8">Check out our clients' words</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-lg shadow p-6">
          <img
            src="https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg"
            alt="Merck"
            className="h-6 mb-4"
          />
          <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
            Excellence and speed. It’s rare to get both, and Netguru delivers.
          </blockquote>
          <div className="flex items-center">
            <img
              src="https://www.netguru.com/hs-fs/hubfs/Mark%20Greiner-2.jpeg?length=128"
              alt="Mark Greiner"
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-bold text-gray-900">Mark Greiner</p>
              <p className="text-gray-500 text-sm">Digital Innovation Manager</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 (you can replace this with another client later) */}
        <div className="bg-white rounded-lg shadow p-6">
          <img
            src="https://www.netguru.com/hubfs/_N23/assets/logos/keller-williams.svg"
            alt="Merck"
            className="h-6 mb-4"
          />
          <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
            Netguru has been the best agency we've worked with so far.
          </blockquote>
          <div className="flex items-center">
            <img
              src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/testimonials/Adi_Pavlovic.jpg?length=114"
              alt="Mark Greiner"
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-bold text-gray-900"> Adi Pavlovic</p>
              <p className="text-gray-500 text-sm">Digital Innovation </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
