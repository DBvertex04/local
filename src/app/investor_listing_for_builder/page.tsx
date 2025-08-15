"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";

export default function InvestorListing() {
  const [selected, setSelected] = useState<"withPlot" | "withoutPlot">("withPlot");

  // Budget states
  const [minBudget, setMinBudget] = useState(1); // 1 crore
  const [maxBudget, setMaxBudget] = useState(100); // 100 crore

  // Location filter
  const allLocations = ["Mumbai", "Mumbala", "Green Park", "Indore", "Delhi", "Pune", "Shujalpur"];
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const filteredSuggestions = allLocations.filter(
    (loc) =>
      loc.toLowerCase().includes(inputValue.toLowerCase()) &&
      !tags.includes(loc) &&
      inputValue.trim() !== ""
  );

  const handleSelectSuggestion = (location: string) => {
    setTags([...tags, location]);
    setInputValue("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxBudget - 1);
    setMinBudget(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minBudget + 1);
    setMaxBudget(value);
  };

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Background bubbles */}
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

      <Header2 />

      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: "37px", paddingBottom: "120px" }}>
        <div className="w-full max-w-[650px] px-4" style={{ maxWidth: "1299px" }}>
          {/* Call icon (mobile) */}
          <div
            className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white block md:hidden"
            style={{ border: "solid #0000001C", borderRadius: "16px" }}
          >
            <img
              src="/facilities/call.png"
              alt="Call Icon"
              className="w-[29px] h-[29px]"
            />
         </div>
               <button className="relative px-6 py-2 rounded-full text-white font-semibold md:bottom-[0px] bottom-[47px]"
  style={{
    background: "linear-gradient(180deg, #2450A0 0%, #2450A0 100%)",
   float:'right'
  }}
>
  <span style={{ fontSize: "13px", fontWeight: 500, color: "#FFFFFF" }}>UPLOAD</span>
</button> 

         

          {/* Heading */}
          <h2 className="text-2xl font-bold mt-[30px]" style={{ color: "#000000", fontWeight: "700", fontSize: "24px", lineHeight: "29px" }}>
            Find Your Investor
          </h2>

          <p className="text-sm text-gray-500 mt-3 text-[14px] font-normal" style={{ color: "rgba(102, 102, 102, 1)" }}>
            Connect with verified investors who are actively seeking new opportunities.
          </p>

          {/* Search Input */}
          <div className="mt-[15px]">
            <label className="block text-[16px] font-semibold text-gray-900 mb-1"></label>

            <div className="flex items-center gap-2 border border-[#E5E7EB] rounded-2xl px-3 py-1 bg-white relative">
              <input
                type="text"
                placeholder="Find Specific Investor"
                className="outline-none text-sm text-gray-700 flex-1"
              />
              <button
                type="button"
                className="flex items-center justify-center w-[45px] h-[44px] bg-[#2450A0] rounded-xl"
              >
                <img
                  src="/collaboration/search.png"
                  alt="Search"
                  className="w-[35px] h-[35px]"
                />
              </button>
            </div>
          </div>

          {/* Filters container */}
          <div
            style={{
              border: "solid #1C1D1E3D 1px",
              padding: "16px",
              backgroundColor: "#ECF3FFBA",
              borderRadius: "24px",
              marginTop: "30px",
            }}
          >
            <p className="text-[14px] font-semibold text-[#2450A0] mb-3">Filter out for ease</p>

            {/* Location selector */}
            <div className="mt-4" style={{ marginTop: "45px" }}>
              <label className="block text-[15px] font-semibold text-gray-900 mb-1" style={{ fontSize: "16px" }}>
                Select Location<span className="text-red-500">*</span>
              </label>

              <div className="flex items-center gap-2 border border-[#E5E7EB] rounded-2xl px-3 py-2 bg-white relative">
                <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#F5F7FA] rounded-full">
                  <Image
                    src="/collaboration/location.png"
                    alt="Location"
                    width={25}
                    height={20}
                  />
                </div>

                <div className="flex flex-wrap gap-2 flex-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 border border-[#2450A0] rounded-full bg-white text-[#2450A0] text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="text-[#2450A0] font-bold"
                      >
                        <img src="/collaboration/close_circle.png" alt="" />
                      </button>
                    </span>
                  ))}

                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="outline-none text-sm text-gray-700 flex-1"
                    autoComplete="off"
                  />
                </div>

                <button
                  type="button"
                  className="flex items-center justify-center w-[45px] h-[44px] bg-[#2450A0] rounded-full"
                  style={{ borderRadius: "12px" }}
                >
                  <Image
                    src="/collaboration/search.png"
                    alt="Search"
                    width={35}
                    height={35}
                  />
                </button>

                {/* Suggestions dropdown */}
                {filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-[60px] mt-1 w-[200px] bg-white border border-gray-200 rounded-lg shadow-md z-50">
                    {filteredSuggestions.map((loc) => (
                      <div
                        key={loc}
                        onClick={() => handleSelectSuggestion(loc)}
                        className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Budget slider */}
            <style>{`
              input[type="range"] {
                -webkit-appearance: none;
                appearance: none;
                width: 100%;
                background: transparent;
                pointer-events: auto;
              }
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 18px;
                height: 18px;
                background: #0052CC;
                border-radius: 50%;
                cursor: pointer;
                border: none;
                position: relative;
                z-index: 3;
              }
              input[type="range"]::-moz-range-thumb {
                width: 18px;
                height: 18px;
                background: #0052CC;
                border-radius: 50%;
                cursor: pointer;
                border: none;
                position: relative;
                z-index: 3;
              }
            `}</style>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold text-[16px]">Budget in ₹</label>
                <button
                  onClick={() => {
                    setMinBudget(1);
                    setMaxBudget(100);
                  }}
                  className="text-[#EB174B] font-semibold text-[13px] border border-[#EB174B] rounded-full px-3 py-[2px]"
                >
                  CLEAR
                </button>
              </div>

              <div className="relative w-full h-6">
                <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-gray-300 rounded-full" />
                <div
                  className="absolute top-1/2 h-[4px] bg-[#0052CC] rounded-full"
                  style={{
                    left: `${(minBudget / 100) * 100}%`,
                    right: `${100 - (maxBudget / 100) * 100}%`,
                  }}
                />

                <style>{`
                  .range-red {
                    -webkit-appearance: none;
                    appearance: none;
                    background: transparent;
                    pointer-events: all;
                  }
                  .range-red::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    background: white;
                    border: 2px solid red;
                    border-radius: 50%;
                    cursor: pointer;
                    position: relative;
                    z-index: 10;
                  }
                  .range-red::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    background: white;
                    border: 2px solid red;
                    border-radius: 50%;
                    cursor: pointer;
                  }
                `}</style>

                <input
                  type="range"
                  min={1}
                  max={100}
                  value={minBudget}
                  onChange={handleMinChange}
                  className="absolute w-full bg-transparent range-red"
                  style={{ zIndex: minBudget > maxBudget - 10 ? 5 : 3, marginTop: "4px" }}
                />

                <input
                  type="range"
                  min={1}
                  max={100}
                  value={maxBudget}
                  onChange={handleMaxChange}
                  className="absolute w-full bg-transparent range-red"
                  style={{ marginTop: "4px" }}
                />
              </div>

              <div className="flex justify-between mt-3">
                <div
                  className="flex items-center gap-1 border border-[#E0E0E0] rounded-full overflow-hidden text-sm"
                  style={{ padding: "3px 12px 3px 3px", borderRadius: "10px", backgroundColor: "white" }}
                >
                  <span className="bg-[#F5F5F5] px-3 py-1 text-gray-600 font-medium" style={{ borderRadius: "10px" }}>
                    Min
                  </span>
                  <span className="px-3 py-1 text-[#2450A0] font-semibold">₹{minBudget}cr</span>
                </div>

                <div
                  className="flex items-center gap-1 border border-[#E0E0E0] rounded-full overflow-hidden text-sm"
                  style={{ padding: "3px 12px 3px 3px", borderRadius: "10px", backgroundColor: "white" }}
                >
                  <span className="bg-[#F5F5F5] px-3 py-1 text-gray-600 font-medium" style={{ borderRadius: "10px" }}>
                    Max
                  </span>
                  <span className="px-3 py-1 text-[#2450A0] font-semibold">₹{maxBudget}cr</span>
                </div>
              </div>
            </div>

            {/* Investor Type Buttons */}
            <div className="mt-4">
              <label className="block text-[14px] font-semibold text-gray-900 mb-2" style={{ fontSize: "16px" }}>Investor</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelected("withPlot")}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-[#E5E7EB] ${
                    selected === "withPlot"
                      ? "bg-[#2450A01C] text-[#2450A0]"
                      : "bg-[#1218280D] text-gray-500"
                  }`}
                >
                  With Plot
                </button>
                <button
                  onClick={() => setSelected("withoutPlot")}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-[#E5E7EB] ${
                    selected === "withoutPlot"
                      ? "bg-[#2450A01C] text-[#2450A0]"
                      : "bg-[#1218280D] text-gray-500"
                  }`}
                >
                  Without Plot
                </button>
              </div>
            </div>
               
            {/* yaha pass do mujhe */}
           
            <div className="flex justify-center mt-5">
              <button
                className="bg-[#2450A0] text-white py-2 rounded-xl text-sm font-semibold"
                style={{ width: "500px",fontSize:'14px',fontWeight:'500' }}
              >
                SEARCH
              </button>
            </div>
            
          </div>
          {/* Investor Card */}
{/* Investor Card with Image Overlap */}
<div className="flex flex-col md:flex-row flex-wrap ">
  {/* Card 1 */}
  <div className="relative w-full max-w-[550px] mt-[50px]">
  {/* Shape image */}
  <img
  src="/collaboration/subtract.png"
  alt="Card Shape"
  className="block w-[105%] h-[200px] md:h-auto"
/>


  {/* Profile image */}
  <img
    src="/collaboration/avtaar1.png"
    alt="Profile"
    className="absolute top-[-2%] left-[11%] w-[24%] h-auto"
  />

  {/* Content */}
  <div className="absolute top-[18%] left-[43%] w-[50%]">
    <h2
      className="font-bold text-gray-900"
      style={{ fontSize: '18px' }}
    >
      Nisha Patel
    </h2>

    {/* Locations */}
    <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        Manesar, HR
      </span>
    </div>

    <div className="flex items-center gap-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        Sohna, HR
        <span
          className="ml-[0.5vw]"
          style={{
            fontSize: 'clamp(11px, 1.4vw, 11px)',
            color: '#2450A0',
            fontWeight: '500',
          }}
        >
          more
        </span>
      </span>
    </div>

    {/* Buttons */}
    <div className="flex gap-[1vw] mt-[1.5vw]">
      <button
        className="rounded-full bg-gray-100 font-semibold"
        style={{
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#121828',
        }}
      >
        SEE PROFILE
      </button>
      <button
        className="rounded-full font-semibold"
        style={{
          border: 'solid #2450A0 1px',
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#2450A0',
        }}
      >
        CONTACT
      </button>
    </div>
  </div>
</div>

  {/* Card 2 */}
 <div className="relative w-full max-w-[550px] mt-[0px] md:mt-[50px] ">
  {/* Shape image */}
  <img
  src="/collaboration/subtract.png"
  alt="Card Shape"
  className="block w-[105%] h-[200px] md:h-auto"
/>


  {/* Profile image */}
  <img
    src="/collaboration/avtaar2.png"
    alt="Profile"
    className="absolute top-[-2%] left-[11%] w-[24%] h-auto"
  />

  {/* Content */}
  <div className="absolute top-[18%] left-[43%] w-[50%]">
    <h2
      className="font-bold text-gray-900"
      style={{ fontSize: '18px' }}
    >
      Dipak Joshi
    </h2>

    {/* Locations */}
    <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(12px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
       Budget : <span style={{fontSize:'14px',color:'#2450A0',fontWeight:'600'}}>₹ 2cr</span>
      </span>
    </div>
    <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
       Sector 49, GGN
      </span>
    </div>
      
    <div className="flex items-center gap-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        Udyog Vihar, HR
        <span
          className="ml-[0.5vw]"
          style={{
            fontSize: 'clamp(11px, 1.4vw, 11px)',
            color: '#2450A0',
            fontWeight: '500',
          }}
        >
          more
        </span>
      </span>
    </div>

    {/* Buttons */}
    <div className="flex gap-[1vw] mt-[1.5vw]">
      <button
        className="rounded-full bg-gray-100 font-semibold"
        style={{
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#121828',
        }}
      >
        SEE PROFILE
      </button>
      <button
        className="rounded-full font-semibold"
        style={{
          border: 'solid #2450A0 1px',
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#2450A0',
        }}
      >
        CONTACT
      </button>
    </div>
  </div>
</div>

  {/* Card 3 */}
  <div className="relative w-full max-w-[550px]">
  {/* Shape image */}
  <img
  src="/collaboration/subtract.png"
  alt="Card Shape"
  className="block w-[105%] h-[200px] md:h-auto"
/>


  {/* Profile image */}
  <img
    src="/collaboration/avtaar3.png"
    alt="Profile"
    className="absolute top-[-2%] left-[11%] w-[24%] h-auto"
  />

  {/* Content */}
  <div className="absolute top-[18%] left-[43%] w-[50%]">
    <h2
      className="font-bold text-gray-900"
      style={{ fontSize: '18px' }}
    >
      Akhil Darji
    </h2>

    {/* Locations */}
     <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(12px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
       Budget : <span style={{fontSize:'14px',color:'#2450A0',fontWeight:'600'}}>₹ 1cr</span>
      </span>
    </div>
    <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        Rewari, HR
      </span>
    </div>

    <div className="flex items-center gap-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        Faridabad, HR
        <span
          className="ml-[0.5vw]"
          style={{
            fontSize: 'clamp(11px, 1.4vw, 11px)',
            color: '#2450A0',
            fontWeight: '500',
          }}
        >
          more
        </span>
      </span>
    </div>

    {/* Buttons */}
    <div className="flex gap-[1vw] mt-[1.5vw]">
      <button
        className="rounded-full bg-gray-100 font-semibold"
        style={{
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#121828',
        }}
      >
        SEE PROFILE
      </button>
      <button
        className="rounded-full font-semibold"
        style={{
          border: 'solid #2450A0 1px',
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#2450A0',
        }}
      >
        CONTACT
      </button>
    </div>
  </div>
</div>
<div className="relative w-full max-w-[550px]">
  {/* Shape image */}
  <img
  src="/collaboration/subtract.png"
  alt="Card Shape"
  className="block w-[105%] h-[200px] md:h-auto"
/>


  {/* Profile image */}
  <img
    src="/collaboration/avtaar4.png"
    alt="Profile"
    className="absolute top-[-2%] left-[11%] w-[24%] h-auto"
  />

  {/* Content */}
  <div className="absolute top-[18%] left-[43%] w-[50%]">
    <h2
      className="font-bold text-gray-900"
      style={{ fontSize: '18px' }}
    >
      Riya Vakil
    </h2>

    {/* Locations */}
     
    <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        Rewari, HR
      </span>
    </div>

    <div className="flex items-center gap-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        IMT Manesar, HR
        <span
          className="ml-[0.5vw]"
          style={{
            fontSize: 'clamp(11px, 1.4vw, 11px)',
            color: '#2450A0',
            fontWeight: '500',
          }}
        >
          more
        </span>
      </span>
    </div>

    {/* Buttons */}
    <div className="flex gap-[1vw] mt-[1.5vw]">
      <button
        className="rounded-full bg-gray-100 font-semibold"
        style={{
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#121828',
        }}
      >
        SEE PROFILE
      </button>
      <button
        className="rounded-full font-semibold"
        style={{
          border: 'solid #2450A0 1px',
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#2450A0',
        }}
      >
        CONTACT
      </button>
    </div>
  </div>
</div>
<div className="relative w-full max-w-[550px]">
  {/* Shape image */}
  <img
  src="/collaboration/subtract.png"
  alt="Card Shape"
  className="block w-[105%] h-[200px] md:h-auto"
/>


  {/* Profile image */}
  <img
    src="/collaboration/avtaar5.png"
    alt="Profile"
    className="absolute top-[-2%] left-[11%] w-[24%] h-auto"
  />

  {/* Content */}
  <div className="absolute top-[18%] left-[43%] w-[50%]">
    <h2
      className="font-bold text-gray-900"
      style={{ fontSize: '18px' }}
    >
      Ayan Khan
    </h2>

    {/* Locations */}
     <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(12px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
       Budget : <span style={{fontSize:'14px',color:'#2450A0',fontWeight:'600'}}>₹ 2cr</span>
      </span>
    </div>
    <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
       Dwarka, DL
      </span>
    </div>

    <div className="flex items-center gap-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
       Sector 56, GGN
        <span
          className="ml-[0.5vw]"
          style={{
            fontSize: 'clamp(11px, 1.4vw, 11px)',
            color: '#2450A0',
            fontWeight: '500',
          }}
        >
          more
        </span>
      </span>
    </div>

    {/* Buttons */}
    <div className="flex gap-[1vw] mt-[1.5vw]">
      <button
        className="rounded-full bg-gray-100 font-semibold"
        style={{
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#121828',
        }}
      >
        SEE PROFILE
      </button>
      <button
        className="rounded-full font-semibold"
        style={{
          border: 'solid #2450A0 1px',
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#2450A0',
        }}
      >
        CONTACT
      </button>
    </div>
  </div>
</div>
<div className="relative w-full max-w-[550px]">
  {/* Shape image */}
  <img
  src="/collaboration/subtract.png"
  alt="Card Shape"
  className="block w-[105%] h-[200px] md:h-auto"
/>


  {/* Profile image */}
  <img
    src="/collaboration/avtaar6.png"
    alt="Profile"
    className="absolute top-[-2%] left-[11%] w-[24%] h-auto"
  />

  {/* Content */}
  <div className="absolute top-[18%] left-[43%] w-[50%]">
    <h2
      className="font-bold text-gray-900"
      style={{ fontSize: '18px' }}
    >
      Abijeet Parmar
    </h2>

    {/* Locations */}
     <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(12px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
       Budget : <span style={{fontSize:'14px',color:'#2450A0',fontWeight:'600'}}>₹ 1cr</span>
      </span>
    </div>
    <div className="flex items-center gap-[0.5vw] mt-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        Kadarpur, HR
      </span>
    </div>

    <div className="flex items-center gap-[0.5vw]">
      <img
        src="/collaboration/location.png"
        alt="loc"
        className="w-[clamp(10px,3vw,16px)] h-auto"
      />
      <span
        className="font-medium"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 14px)',
          color: '#20202099',
        }}
      >
        Pataudi, HR
        <span
          className="ml-[0.5vw]"
          style={{
            fontSize: 'clamp(11px, 1.4vw, 11px)',
            color: '#2450A0',
            fontWeight: '500',
          }}
        >
          more
        </span>
      </span>
    </div>

    {/* Buttons */}
    <div className="flex gap-[1vw] mt-[1.5vw]">
      <button
        className="rounded-full bg-gray-100 font-semibold"
        style={{
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#121828',
        }}
      >
        SEE PROFILE
      </button>
      <button
        className="rounded-full font-semibold"
        style={{
          border: 'solid #2450A0 1px',
          padding: '0.8vw 1.5vw',
          fontSize: 'clamp(11px, 1.4vw, 11px)',
          color: '#2450A0',
        }}
      >
        CONTACT
      </button>
    </div>
  </div>
</div>
</div>










{/* src="/collaboration/subtract.png" */}


        </div>
      </main>
    </div>
  );
}
