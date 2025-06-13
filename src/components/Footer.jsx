import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t pt-12 px-6 md:px-20">
      {/* Top section */}
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Company Info */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Netguru S.A.</h4>
          <p className="text-sm leading-relaxed">
            Nowe Garbary Office Center<br />
            ul. Małe Garbary 9<br />
            61-756 Poznań, Poland<br /><br />
            VAT-ID: PL7811845968<br />
            REGON: 300826280<br />
            KRS: 000047561<br /><br />
            <a href="mailto:hello@netguru.com" className="text-green-600 hover:underline">
              hello@netguru.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
          <div className="flex flex-wrap gap-4 text-2xl">
            <a href="#"><i className="fab fa-behance"></i></a>
            <a href="#"><i className="fab fa-dribbble"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Digital Acceleration Editorial</h4>
          <p className="text-sm mb-3">Boost innovation with insights for change</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 bg-gray-100 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-gray-200 text-sm px-4 py-2 hover:bg-gray-300 transition"
            >
              Submit
            </button>
            <label className="flex items-start text-xs gap-2">
              <input type="checkbox" className="mt-1" />
              I agree to receive marketing communication from Netguru.
            </label>
          </form>
        </div>
      </div>

      <hr className="my-8" />

      {/* Middle Section: Logos */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <h5 className="font-medium mb-2">Certificates:</h5>
          <div className="flex gap-6 flex-wrap items-center">
            {/* Replace with real <img src="..." /> */}
            <span className="text-sm">Certified B Corp</span>
            <span className="text-sm">ISO 27001</span>
          </div>
        </div>
        <div>
          <h5 className="font-medium mb-2">Partnerships:</h5>
          <div className="flex gap-6 flex-wrap items-center">
            <span className="text-sm">Microsoft</span>
            <span className="text-sm">AWS</span>
            <span className="text-sm">Mendix</span>
            <span className="text-sm">Google Cloud</span>
            <span className="text-sm">Premium Partner</span>
          </div>
        </div>
      </div>

      {/* Recognition Logos */}
      <div className="flex flex-wrap gap-8 mb-10 items-center justify-center text-sm text-center">
        <span>★ 4.9/5 on Clutch</span>
        <span>Awwwards.</span>
        <span>Inc. 5000</span>
        <span>EY Entrepreneur Of The Year</span>
        <span>Forbes</span>
      </div>

      <hr className="my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pb-6">
        <p>©2025 Netguru S.A. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of use</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
