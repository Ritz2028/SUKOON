import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="bg-[#0F172A] text-white py-8 border-t border-[#14B8A6]/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-gray-700">

          <div className="flex items-center">
            <img
              src="/logo.png"
              alt=""
              className="scale-50 sm:-ml-20 -my-10"
            />

            <div className="-ml-8 text-3xl font-bold text-[#14B8A6]">
              MindNest AI
            </div>
          </div>

          <div className="flex space-x-2 sm:space-x-6 mt-8">
            <SocialIcon
              url="https://linkedin.com"
              style={{ height: 30, width: 30 }}
              className="!h-8 !w-8 sm:!h-10 sm:!w-10"
            />

            <SocialIcon
              url="https://instagram.com"
              style={{ height: 30, width: 30 }}
              className="!h-8 !w-8 sm:!h-10 sm:!w-10"
            />

            <SocialIcon
              url="https://email.com/"
              style={{ height: 30, width: 30 }}
              className="!h-8 !w-8 sm:!h-10 sm:!w-10"
            />
          </div>

        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="text-xl font-semibold text-[#14B8A6]">
              Platform
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about-us" className="hover:underline">
                  About
                </a>
              </li>

              <li>
                <a href="/book" className="hover:underline">
                  Find Support
                </a>
              </li>

              <li>
                <a href="/blogs" className="hover:underline">
                  Resources
                </a>
              </li>

              <li>
                <a href="/more" className="hover:underline">
                  Explore
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#14B8A6]">
              Support
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="/who-needs-help" className="hover:underline">
                  Wellness Assessment
                </a>
              </li>

              <li>
                <a href="/book-session" className="hover:underline">
                  Book a Session
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#14B8A6]">
              Wellness Tools
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="/dream-analyzer" className="hover:underline">
                  AI Wellness Insights
                </a>
              </li>

              <li>
                <a href="/audio-video-therapy" className="hover:underline">
                  Wellness Media
                </a>
              </li>

              <li>
                <a href="/digital-detox" className="hover:underline">
                  Focus Reset
                </a>
              </li>

              <li>
                <a href="/talk-with-ai" className="hover:underline">
                  Community Hub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#14B8A6]">
              Subscribe
            </h3>

            <div className="mt-6">

              <div className="mt-1 flex rounded-md shadow-sm">

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-1 block w-full pl-5 rounded-none rounded-l-md text-black sm:text-sm border-gray-300"
                  placeholder="you@example.com"
                />

                <button
                  type="submit"
                  className="ml-2 px-4 py-2 text-sm font-medium rounded-r-md text-white bg-[#14B8A6] hover:bg-[#0D9488]"
                >
                  Subscribe
                </button>

              </div>

              <div className="p-4">

                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>

                <div className="pt-3 text-gray-400">
                  <p>
                    Copyright © {new Date().getFullYear()} - MindNest AI.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
