import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Popup from "../ui/popup";
import Title from "../ui/title";

function Header() {
  const [showSignin, setShowSignin] = useState(false);
  const handleshowSignin = () => setShowSignin(true);
  const handleCloseSignin = () => setShowSignin(false);
  const [showSignup, setShowSignup] = useState(false);
  const handleshowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);
  return (
    <header className=" mt-10">
      <div className="container w-full h-[25px] flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="mr-2.5 flex gap-5">
          <button onClick={handleshowSignin}>Sign in</button>
          <button onClick={handleshowSignup}>Sign up</button>
        </div>
        {showSignup && (
          <Popup>
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[400px] max-w-[90%] mx-auto">
              <Title>Sign Up</Title>

              <div className="mt-4 flex flex-col gap-3">
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Sign Up
                </button>
                <button
                  className="text-gray-500 hover:text-black"
                  onClick={handleCloseSignup}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Popup>
        )}
        {
          showSignin &&
          <Popup>
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[400px] max-w-[90%] mx-auto">
              <Title>Sign In</Title>

              <div className="mt-4 flex flex-col gap-3">
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Sign In
                </button>
                <button
                  className="text-gray-500 hover:text-black"
                  onClick={handleCloseSignin}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Popup>
        }
      </div>
    </header>
  );
}

export default Header;
