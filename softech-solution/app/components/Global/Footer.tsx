import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 md:px-16 py-10">
      {/* Top section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Solutions */}
        <div>
          <h4 className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">
            SOLUTIONS
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-black cursor-pointer">
              Telecom
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Fintech
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">
            RESOURCES
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-black cursor-pointer">
              Blogs
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Case Studies
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">
            HELP
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-black cursor-pointer">
              Contact us
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Ask Our Experts
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">
            SOCIAL
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline hover:text-black cursor-pointer">
              LinkedIn
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Facebook
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              X
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              YouTube
            </li>
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h4 className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">
            REACH US
          </h4>
          <p className="text-sm leading-relaxed mb-2">
            404, 4th Floor, Satyam Complex, Near Satyam Circle, CG Road ,
            Ahmedabad, Gujarat - 380052.
          </p>
          <p className="text-sm">info@soft-techsolutions.com</p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <span>© 2026 Soft-tech Solutions</span>

        <div className="flex gap-4">
          <span className="hover:text-gray-700 cursor-pointer">
            Privacy policy
          </span>
          <span className="hover:text-gray-700 cursor-pointer">Copyright</span>
          <span className="hover:text-gray-700 cursor-pointer">Disclaimer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
