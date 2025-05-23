"use client"; // add this if using app directory in Next.js

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("234");
  const [role, setRole] = useState("mentee");
  const [interest, setInterest] = useState("frontend");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Validation to ensure all fields are filled
    if (!fullName || !location || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const payload = {
      fullName,
      location,
      email,
      phone,
      role,
      interest,
    };
    toast.loading("Submitting...");
    setLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEET_URL || "", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      toast.dismiss();
      toast.success(result.result || "Form submitted successfully!");

      // Reset form fields
      setFullName("");
      setLocation("");
      setEmail("");
      setPhone("234"); // Reset phone to default value
      setRole("mentee");
      setInterest("frontend");
    } catch (error) {
      console.error("Submission failed", error);
      toast.error("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-[rgba(255,255,255,0.01)] backdrop-blur-xs p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-3 ">
          <Image alt="logo" src="/logo.svg" width={20} height={20} />
        </div>
        <h2 className="text-2xl font-semibold text-center text-white mb-1 relative">
          Join the community{" "}
          <span className="bg-green-600 text-white p-1 rounded-lg text-xs absolute -top-2 right-10 rotate-12">
            free (₦0)
          </span>
        </h2>
        <p className="text-center text-white z-10 font-light text-xs mb-5">
          Don’t miss a thing! Get the latest updates and be the first to know
          when we go live.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="full-name" className="text-white mb-2 text-sm">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="location" className="text-white mb-2 text-sm">
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select your location</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="london">London</option>
              <option value="accra">Accra</option>
              <option value="munich">Munich</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
              <option value="newyork">New York</option>
              <option value="cairo">Cairo</option>
              <option value="nairobi">Nairobi</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2 text-sm">
              Email (Optional)
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-white mb-2 text-sm">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="role" className="text-white mb-2 text-sm">
              I am a...
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="mentee">Mentee</option>
              <option value="mentor">Mentor</option>
              <option value="mentor">Sponsor</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="interest" className="text-white mb-2 text-sm">
              Field of Interest
            </label>
            <select
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="cloud">Cloud</option>
              <option value="design">Design</option>
            </select>
          </div>

          <div className="flex justify-center mt-6">
            <button
              disabled={isLoading}
              type="button"
              onClick={() => handleSubmit()}
              className={`px-6 py-2 ${
                isLoading ? "bg-gray-500" : "bg-blue-500"
              } text-white rounded-lg ${
                isLoading ? "hover:bg-gray-500" : "hover:bg-blue-600"
              }  focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
