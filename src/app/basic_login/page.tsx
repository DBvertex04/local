"use client";
import Image from "next/image";
import Head from "next/head";
import Header2 from "@/components/Header2";
import Link from "next/link";
import React, { useState } from "react";

export default function Page1() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"user" | "broker">("user");

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Bubbles */}
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
        <div
          className="w-full max-w-[650px] px-4"
          style={{ maxWidth: "1090px", paddingBottom: "100px" }}
        >
          {/* Call Button with Square Border */}
          <div className="inline-flex items-center justify-center w-[40px] h-[40px] border-2 border-gray-300 rounded-lg">
            <img
              src="/facilities/call.png"
              alt="Call"
              className="w-[24px] h-[24px]"
            />
          </div>

          {/* Heading */}
          <h2 className="text-[24px] lg:text-[28px] font-bold text-black mt-[30px]">
            Register
          </h2>
          <p className="text-[14px] lg:text-[18px] font-normal text-[#666666]">
            Welcome to the app
          </p>

          {/* Tabs */}
          <div className="relative w-full max-w-[360px] mx-auto mt-6">
            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab("user")}
                className="w-[170px] text-center pb-2"
              >
                <span
                  className={`text-[15px] lg:text-[17px] font-semibold ${
                    activeTab === "user" ? "text-[#2450A0]" : "text-black"
                  }`}
                >
                  User
                </span>
              </button>
              <button
                onClick={() => setActiveTab("broker")}
                className="w-[170px] text-center pb-2"
              >
                <span
                  className={`text-[15px] lg:text-[17px] font-semibold ${
                    activeTab === "broker" ? "text-[#2450A0]" : "text-black"
                  }`}
                >
                  Broker
                </span>
              </button>
            </div>

            <div className="absolute w-full h-[3px] bg-gray-400 rounded-[8px] top-[38px]" />
            <div
              className="absolute h-[3px] bg-[#2450A0] rounded-[8px] transition-all duration-300"
              style={{
                width: "189.75px",
                top: "38px",
                left: activeTab === "user" ? "0px" : "170px",
              }}
            />
          </div>

          {/* Light Blue Background Behind Form */}
          <div className="hidden md:block absolute top-[170px] left-1/2 -translate-x-1/2 w-[75%] h-[700px] bg-[#dfe4ee] rounded-2xl -z-10" />


          {/* Form */}
          <form className="mt-6 space-y-4">
            {/* First Name */}
            <div>
              <label>
                <span className="text-[16px] lg:text-[18px] font-semibold text-[#0A0909]">
                  Enter your First name
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Ex. Ramesh"
                className="mt-1 w-full px-4 py-2.5 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm lg:placeholder:text-base placeholder:font-normal"
              />
            </div>

            {/* Last Name */}
            <div>
              <label>
                <span className="text-[16px] lg:text-[18px] font-semibold text-[#0A0909]">
                  Enter your Last name
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Ex. Singh"
                className="mt-1 w-full px-4 py-2.5 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm lg:placeholder:text-base placeholder:font-normal"
              />
            </div>

            {/* Email / Phone */}
            <div>
              <label>
                <span className="text-[16px] lg:text-[18px] font-semibold text-[#0A0909]">
                  Enter your number / e-mail
                </span>
              </label>
              <input
                type="text"
                placeholder="Ex. Enter Your E-mail / Phone number"
                className="mt-1 w-full px-4 py-2.5 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm lg:placeholder:text-base placeholder:font-normal"
              />
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center my-4">
              <div
                className="w-34 h-px bg-gray-300"
                style={{ border: "1px solid #847e7e66", height: "0px" }}
              ></div>
              <span className="mx-3 text-sm lg:text-base text-gray-500">OR</span>
              <div
                className="w-34 h-px bg-gray-300"
                style={{ border: "1px solid #847e7e66", height: "0px" }}
              ></div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                className="bg-[#2450A0] py-2.5 lg:py-3 rounded-full font-medium text-sm lg:text-base text-white w-full lg:w-[567px]"
              >
                Continue With Google
              </button>

              <button
                type="button"
                className="bg-[#2450A0] py-2.5 lg:py-3 rounded-full font-medium text-sm lg:text-base text-white w-full lg:w-[567px]"
              >
                Continue With Mobile Number
              </button>

              <button
                type="button"
                className="bg-[#2450A0] py-2.5 lg:py-3 rounded-full font-medium text-sm lg:text-base text-white w-full lg:w-[567px]"
              >
                Continue With Email
              </button>
            </div>
          </form>

          {/* Next Button */}
          <div className="text-right mt-6">
            <Link href="/r-step-3">
              <Image
                src="/next.png"
                alt="Next"
                width={300}
                height={300}
                className="absolute mt-4 cursor-pointer left-1/2 -translate-x-1/2 lg:left-[940px] lg:translate-x-0"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}