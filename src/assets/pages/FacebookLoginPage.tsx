import { useState } from "react";
import Alert from "../components/Alert";

const FacebookLoginPage = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
    }
  return (
    <div id="globalContainer" className="min-h-screen bg-gray-100">
        {clicked && <Alert />}
      {/* Main Content */}
      <div id="content" className="flex flex-col items-center">
        {/* Header with Logo and Tagline */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center px-4 py-8">
          {/* Left Column - Logo and Tagline */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-16">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-4">
                <img 
                  className="h-24 md:h-32" 
                  src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" 
                  alt="Facebook"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-normal text-gray-800 text-center md:text-left leading-tight">
                Facebook helps you connect and share with the people in your life.
              </h2>
            </div>
          </div>

          {/* Right Column - Login Form */}
          <div className="w-full md:w-1/2 max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Login Form */}
              <div  className="space-y-4">
                {/* Hidden inputs */}
                <input type="hidden" name="jazoest" value="2942" />
                <input type="hidden" name="lsd" value="AdEx_iW5Yg8" />

                {/* Email Input */}
                <div>
                  <input 
                    type="text" 
                    name="email"
                    id="email"
                    placeholder="Email address or phone number"
                    autoFocus
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <input 
                    type="password" 
                    name="pass"
                    id="pass"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    aria-label="Toggle password visibility"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>

                {/* More hidden inputs */}
                <input type="hidden" name="login_source" value="comet_headerless_login" />
                <input type="hidden" name="next" value="" />
                <input type="hidden" name="shared_prefs_data" value="" />

                {/* Login Button */}
                <div>
                  <button 
                    type="submit" 
                    name="login"
                    onClick={handleClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md text-lg transition duration-200"
                  >
                    Log in
                  </button>
                </div>

                {/* Forgot Password Link */}
                <div className="text-center">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Forgotten password?
                  </a>
                </div>

                {/* Divider */}
                <div className="relative py-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                {/* Create New Account Button */}
                <div>
                  <a 
                    href="#"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md text-center text-lg transition duration-200"
                  >
                    Create new account
                  </a>
                </div>
              </div>

              {/* Create Page Link */}
              <div className="mt-6 text-center">
                <a 
                  href="#" 
                  className="text-sm font-bold text-gray-800 hover:underline"
                >
                  Create a Page
                </a>
                <span className="text-sm text-gray-600"> for a celebrity, brand or business.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Language Selector */}
          <div className="mb-4">
            <ul className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li className="font-medium">English (UK)</li>
              <li><a href="#" className="hover:underline">සිංහල</a></li>
              <li><a href="#" className="hover:underline">தமிழ்</a></li>
              <li><a href="#" className="hover:underline">Español</a></li>
              <li><a href="#" className="hover:underline">Deutsch</a></li>
              <li><a href="#" className="hover:underline">Italiano</a></li>
              <li><a href="#" className="hover:underline">Français (France)</a></li>
              <li><a href="#" className="hover:underline">Português (Brasil)</a></li>
              <li><a href="#" className="hover:underline">日本語</a></li>
              <li><a href="#" className="hover:underline">العربية</a></li>
              <li><a href="#" className="hover:underline">हिन्दी</a></li>
              <li>
                <button className="text-blue-600 font-medium hover:underline">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    More
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-300 mb-6"></div>

          {/* Footer Links */}
          <div className="mb-6">
            <ul className="flex flex-wrap gap-4 text-xs text-gray-500">
              <li><a href="#" className="hover:underline">Sign up</a></li>
              <li><a href="#" className="hover:underline">Log in</a></li>
              <li><a href="#" className="hover:underline">Messenger</a></li>
              <li><a href="#" className="hover:underline">Facebook Lite</a></li>
              <li><a href="#" className="hover:underline">Video</a></li>
              <li><a href="#" className="hover:underline">Meta Pay</a></li>
              <li><a href="#" className="hover:underline">Meta Store</a></li>
              <li><a href="#" className="hover:underline">Meta Quest</a></li>
              <li><a href="#" className="hover:underline">Ray-Ban Meta</a></li>
              <li><a href="#" className="hover:underline">Meta AI</a></li>
              <li><a href="#" className="hover:underline">Meta AI more content</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Threads</a></li>
              <li><a href="#" className="hover:underline">Voting Information Centre</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Centre</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Create ad</a></li>
              <li><a href="#" className="hover:underline">Create Page</a></li>
              <li><a href="#" className="hover:underline">Developers</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
              <li>
                <a href="#" className="hover:underline flex items-center">
                  AdChoices
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </a>
              </li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
              <li><a href="#" className="hover:underline">Contact uploading and non-users</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
              <li><a href="#" className="hover:underline">Activity log</a></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500">
            <div>Meta © 2026</div>
          </div>
        </div>
      </div>

      {/* Hidden Security Pixel */}
      <span>
        <img 
          src="https://facebook.com/security/hsts-pixel.gif" 
          width="0" 
          height="0" 
          className="hidden"
          alt=""
        />
      </span>
    </div>
  );
};

export default FacebookLoginPage;