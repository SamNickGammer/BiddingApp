import ModalPopup from "./common/ModalPopup";
import React from "react";

export default function SignInModal({ open = false, onClose, openSignupModalFromSignIn }) {
  return (
    <ModalPopup
      open={open}
      onClose={onClose}
      className="w-[300px] p-4 rounded-md bg-white dark:bg-slate-800"
    >
      <div>
        <div className="mb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                Sign in to your account
            </h3>
        </div>

        <form>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone
            </label>
            <input
              type="numaric"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              OTP
            </label>
            <div className="mt-1 relative">
              <input
                type="text"
                id="otp"
                name="otp"
                required
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              
            </div>
          </div>
          <div className="mb-3 float-right">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Forgot your password?{" "}
                <a href="#" className="text-blue-600 dark:text-blue-400">
                  Reset it
                </a>
              </p>
            </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          <div></div>
          <div className="mt-3 text-center">
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <div onClick={openSignupModalFromSignIn} className="text-blue-600 dark:text-blue-400 cursor-pointer">
                  Sign up
                </div>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    </ModalPopup>
  );
}
