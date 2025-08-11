"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";

export default function MovingDetail() {
  const options = [
    "As soon as possible",
    "Within 1 Month",
    "2–3 Months",
    "4 Months",
    "Just Browsing",
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Background Bubbles */}
      <div className="relative">
        <img
          src="/bubble.png"
          alt="Bubble 2"
          className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
        />
        <img
          src="/bubble1.png"
          alt="Bubble 1"
          className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
        />
      </div>

      {/* Header */}
      <Header2 />

      {/* Main Content */}
      <main
        className="pt-[120px] pb-12 flex justify-center relative z-10"
        style={{ top: "35px" }}
      >
        <div className="w-[85%] max-w-[1090px] mx-auto">
          <h2 className="text-2xl font-[700] md:ml-[-110px]">
            <span className="text-[rgba(0, 0, 0, 1)]">Moving</span>{" "}
            <span className="text-[rgba(36,80,160,1)]">Details</span>
          </h2>

          <p
            className="mt-1 md:ml-[-110px]"
            style={{
              marginTop: "12px",
              color: "rgba(102, 102, 102, 1)",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Answer a few questions and get your no-obligation cash offer in as{" "}
            <span style={{ fontWeight: "600" }}>little as 3 minutes.</span>
          </p>

          <div className="bg-white rounded-2xl shadow-md mt-6 p-4">
            <h3
              className="text-lg font-semibold mb-4 border-l-4 pl-3"
              style={{ borderColor: "#2450A0" }}
            >
              <span
                className="font-[600]"
                style={{ color: "rgba(36, 80, 160, 1)", fontSize: "24px" }}
              >
                H
              </span>
              <span
                className="font-[600]"
                style={{ color: "rgba(10, 9, 9, 1)", fontSize: "20px" }}
              >
                ow soon would you like to sell?
              </span>
            </h3>

            <form className="space-y-3">
              {options.map((label, index) => (
                <label
                  key={index}
                  className={`flex items-center border rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 ${
                    selected === index
                      ? "bg-[#E7ECF5] border-blue-600"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <input
                    type="radio"
                    name="sell_time"
                    className="sr-only"
                    checked={selected === index}
                    onChange={() => setSelected(index)}
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3"
                    style={{ borderColor: "#1218282E" }}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-transform duration-200 ${
                        selected === index ? "scale-100" : "scale-0"
                      }`}
                      style={{ backgroundColor: "#2450A0" }}
                    />
                  </div>
                  <span
                    className="text-[15px] leading-[15px] font-semibold tracking-normal"
                    style={{
                      color: selected === index ? "#2450A0" : "#757577",
                      fontWeight: "600",
                    }}
                  >
                    {label}
                  </span>
                </label>
              ))}
            </form>
          </div>

          {/* Next Button */}
<div className="mt-8 flex justify-center lg:justify-end relative">
  <Link href="/c-step3">
    <Image
      src="/next.png"
      alt="Next Step"
      width={300}
      height={300}
      className="
        cursor-pointer 
        w-[300px]  // smaller size for mobile
        lg:w-[300px] // original size for desktop
      "
    />
  </Link>
</div>


        </div>
      </main>
    </div>
  );
}
