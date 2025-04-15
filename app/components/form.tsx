import Image from "next/image";

// components/Form.js
export default function Form() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[rgba(255,255,255,0.01)] backdrop-blur-xs p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <Image alt="logo" src={"/logo.svg"} width={20} height={20} />
        </div>
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Join Us
        </h2>
        <form action="#" method="POST" className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="full-name" className="text-white mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Full Name"
              required
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="text-white mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Location"
              required
            />
          </div>

          {/* Email (Optional) */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* Role Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="role" className="text-white mb-2">
              I am a...
            </label>
            <select
              id="role"
              name="role"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="mentee">Mentee</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          {/* Field of Interest */}
          <div className="flex flex-col">
            <label htmlFor="interest" className="text-white mb-2">
              Field of Interest
            </label>
            <select
              id="interest"
              name="interest"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="cloud">Cloud</option>
              <option value="design">Design</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
