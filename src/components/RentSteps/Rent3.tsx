"use client";

import { useState } from "react";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

export default function AvailabilitySection() {
  const [availability, setAvailability] = useState("Everyday");
  const [date, setDate] = useState("06/07/2025");
  const [time, setTime] = useState("06:15:00");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      availability,
      date,
      time,
    });
  };

  const RadioButton = ({
    id,
    label,
  }: {
    id: string;
    label: string;
  }) => (
    <div className="relative">
      <input
        id={id}
        type="radio"
        name="availability"
        value={label}
        checked={availability === label}
        onChange={() => setAvailability(label)}
        className="sr-only" // Hide the default radio button
      />
      <label
        htmlFor={id}
        className={`flex items-center justify-center px-6 py-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
          ${
            availability === label
              ? "bg-[#2450A0] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
      >
        {availability === label && (
          <div className="w-4 h-4 mr-2 bg-white border-2 border-[#2450A0] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[#2450A0] rounded-full"></div>
          </div>
        )}
        {label}
      </label>
    </div>
  );

  return (
    <div
      className="relative text-gray-900  min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="w-full max-w-md p-8 space-y-6 border border-gray-200 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Availability Section */}
          <div>
            <label className="block text-lg font-semibold text-[#0A0909] mb-3">
              Availability<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <RadioButton id="everyday" label="Everyday" />
              <RadioButton id="weekday" label="Weekday" />
              <RadioButton id="weekend" label="Weekend" />
            </div>
          </div>

          {/* Select Date Section */}
          <div className="mt-6">
            <label
              htmlFor="date"
              className="block text-lg font-semibold text-[#0A0909] mb-3"
            >
              Select Date<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="date"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="DD/MM/YYYY"
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
              />
              <FaCalendarAlt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Select Time Section */}
          <div className="mt-6">
            <label
              htmlFor="time"
              className="block text-lg font-semibold text-[#0A0909] mb-3"
            >
              Select Time<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="time"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="HH:MM:SS"
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
              />
              <FaRegClock className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Save & Next Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-[#2450A0] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
            >
              SAVE & NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}