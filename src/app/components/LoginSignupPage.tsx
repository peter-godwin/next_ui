// app/components/LoginSignupPage.tsx
import { useState } from 'react';

export default function LoginSignupPage() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="w-[400px] p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        {isSignup ? "Sign Up" : "Log In"}
      </h2>

      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {isSignup && (
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}

        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </div>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        <span>
          {isSignup
            ? "Already have an account? "
            : "Don't have an account? "}
        </span>
        <button
          className="text-blue-600 font-semibold"
          onClick={toggleForm}
        >
          {isSignup ? "Log In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
