"use client";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";
import { useState } from "react";

export default function Page1() {
  const [selected, setSelected] = useState("COMMERCIAL");
  const [propertyType, setPropertyType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const isSelected = (type: string) => selected === type;
const [selectedType, setSelectedType] = useState<string | null>(null);
 

 

 
  const allLocations = ["Mumbai", "Mumbala", "Green Park", "Indore", "Delhi", "Pune","Shujalpur"];
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
 
  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts: Poppins */}
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

      <main
        className="pt-[120px] pb-12 flex justify-center relative z-10"
        style={{ top: "37px", paddingBottom: "120px" }}
      >
       <div className="w-full px-4 max-w-full md:max-w-[85%]">
          <h2 className="text-2xl font-bold">
            <span
              style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              Tell us a bit about
            </span>{" "}
            <span
              style={{
                color: "#2450A0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              your Property
            </span>
          </h2>

          <p
            className="mt-1"
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

          {/* Property Type Selection */}
           <div
                      className="bg-white rounded-2xl shadow-md p-4 relative pb-12 sm:pb-24"
                      style={{
                        marginTop: "30px",
                        borderRadius: "35px",
                        border: "1px solid #e5d6d6ba",
                        overflow: "hidden", // so background doesn't overflow
                      }}
                    >
                      {/* Background image */}
                      <img
                        src="/rent/bg-shape.png"
                        alt="Background Shape"
                        style={{
                          color: "transparent",
                          position: "absolute",
                          height: "100%",
                          width: "66%",
                          inset: 0,
                        }}
                        className="pointer-events-none select-none"
                      />
          
                      <div className="flex flex-row justify-center gap-4 mt-20 relative z-10">
                        <div
                          onClick={() => setSelected("BUY")}
                          className={`relative rounded-2xl h-[76px] w-[146px] overflow-visible flex flex-col items-center justify-end pt-16 cursor-pointer transition-all duration-200
                  ${
                    isSelected("BUY")
                      ? "border-1 border-[#2450A0] bg-white rounded-[21px]"
                      : "border-1 border-[#a9a9a9] bg-white-100 rounded-[21px]"
                  }`}
                          style={{
                            paddingBottom: "8px",
                            width: "200px",
                            height: "76px",
                            backgroundColor:'white'
                          }}
                        >
                          <Image
                            src="/r_step8/buy.png"
                            alt="Commercial"
                            width={120}
                            height={43}
                          />
                          <p
                            style={{
                              width: "96px",
                              height: "24px",
                              fontWeight: 600,
                              marginLeft: "63px",
                              fontSize: "16px",
                              color: isSelected("SELL") ? "#2450A0" : "rgb(110 116 133)",
                            }}
                          >
                            BUY
                          </p>
                        </div>
                        {/* RESIDENTIAL */}
                        <div
                          onClick={() => setSelected("RENT")}
                          className={`relative rounded-2xl h-[76px] w-[146px] overflow-visible flex flex-col items-center justify-end pt-16 cursor-pointer transition-all duration-200
                  ${
                    isSelected("RENT")
                      ? "border-1 border-[#2450A0] bg-white rounded-[21px] text-[rgb(0,0,0)]"
                      : "border-1 border-[#a9a9a9] bg-white-100 rounded-[21px]"
                  }`}
                          style={{
                            paddingBottom: "8px",
                            width: "200px",
                            height: "76px",
                            backgroundColor:'white'
                          }}
                        >
                          <Image
                            src="/rent/rentorsell.png"
                            alt="Residential"
                            width={120}
                            height={100}
                          />
                          <p
                            style={{
                              width: "96px",
                              height: "24px",
                              fontWeight: 500,
                              fontSize: "16px",
                              marginLeft: "50px",
                              color: isSelected("RENT") ? "#2450A0" : "rgb(110 116 133)",
                            }}
                          >
                            RENT
                          </p>
                        </div>
          
                        
                        
                      </div>
                    </div>
               <div className="bg-white p-5 rounded-2xl shadow-md space-y-6" style={{marginTop:'30px'}}>
  {/* Address Field */}
  <div>
    

    <div className="flex items-center gap-2 border border-[#E5E7EB] rounded-2xl px-3 py-2 bg-white relative">
      {/* Location Icon */}
      <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#F5F7FA] rounded-full">
        <Image
          src="/lead_list/location.png"
          alt="Location"
          width={25}
          height={20}
        />
      </div>

      {/* Tags + Input */}
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

      {/* Search Button */}
      <button
        type="button"
        className="flex items-center justify-center w-[45px] h-[44px] bg-[#2450A0] rounded-xl"
      >
        <Image
          src="/collaboration/search.png"
          alt="Search"
          width={35}
          height={35}
        />
      </button>

      {/* Filter Button */}
      <button
        type="button"
        className="flex items-center justify-center w-[45px] h-[44px] bg-[#FFFFFF] rounded-xl border border-[#2450A0]"
      >
        <Image
          src="/lead_list/filter.png"
          alt="Filter"
          width={35}
          height={35}
          style={{ marginRight: "4px" }}
        />
      </button>

      {/* Suggestions Dropdown */}
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

  {/* New Builder Projects */}
  <div>
    <div className="flex gap-4 mt-2">
      <div
        onClick={() => setPropertyType("New Builder Projects")}
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border font-semibold cursor-pointer transition-all
          ${
            propertyType === "New Builder Projects"
              ? "bg-[#E7ECF5] border-[#2450A0] text-[#2450A0]"
              : "bg-white border-[#E5E7EB] text-[#121828]/60 hover:bg-[#f5faff]"
          }`}
        style={{ borderWidth: "1.6px", maxWidth: "227px" }}
      >
        {/* Custom Radio Circle */}
        <div className="flex items-center justify-center w-5 h-5">
          <div
            style={{ padding: "11px", borderRadius: "20px", backgroundColor: "white" }}
            className={`w-5 h-5 rounded-full border-1 flex items-center justify-center transition-all duration-200
              ${
                propertyType === "New Builder Projects"
                  ? "border-[#2450A0]"
                  : "border-[#D1D5DB]"
              }`}
          >
            <div
              style={{ padding: "7px", borderRadius: "12px" }}
              className={`w-3 h-3 rounded-full transition-all duration-200
                ${
                  propertyType === "New Builder Projects"
                    ? "bg-[#2450A0] shadow-[0_1px_6px_0_#c192f1]"
                    : "bg-[#E5E7EB]"
                }`}
            ></div>
          </div>
        </div>

        <span style={{ fontSize: "14px", fontWeight: "500" }}>
          New Builder Projects
        </span>
      </div>
    </div>
  </div>

  {/* Looking For */}
  <div>
  <h3 className="font-semibold text-black mb-3">Looking For</h3>

  {/* Buttons */}
  <div className="flex gap-2 mb-4">
    {["Full House", "Land/Plot"].map((option) => (
      <button
        key={option}
        onClick={() => setSelected(option)}
        className={`flex-1 px-4 py-2 rounded-lg border text-sm font-medium transition-all text-center
          ${
            selected === option
              ? "border-[#2450A0] text-[#2450A0] bg-[#1218280f]"
              : "border-gray-300 text-gray-500 bg-gray-100"
          }`}
      >
        <span style={{fontWeight:'600'}}>{option}</span>
      </button>
    ))}
  </div>

  {/* Dropdowns */}
  <div className="flex gap-2">
    <div className="relative flex-1 ">
  <select className="w-[123px] sm:w-full px-4 pr-8 py-2 rounded-[19px] border border-gray-300 text-gray-500 text-sm appearance-none">
    <option>BHK Type</option>
  </select>
  <span className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-[32px] sm:right-[35px]">
    <img src="/r_step8/arrow_down.png" alt="" />
  </span>
</div>


    <div className="relative flex-1">
      <select className="w-full px-4 pr-8 py-2 rounded-[19px] border border-gray-300 text-gray-500 text-sm appearance-none">
        <option>Property Status</option>
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <img src="/r_step8/arrow_down.png" alt="" />
      </span>
    </div>
  </div>
</div>

</div>

          {/* Next Button */}
          <div className="text-right mt-4">
            <Link href="/c-step2">
              <Image
                src="/next.png"
                alt="Next Step"
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
