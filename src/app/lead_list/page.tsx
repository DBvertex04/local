'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import Header2 from "@/components/Header2";

export default function PropertyDetail() {
const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selected, setSelected] = useState<"Investor" | "Builder">("Builder");

  // Budget states
  const [minBudget, setMinBudget] = useState(1); // 1 crore
  const [maxBudget, setMaxBudget] = useState(100); // 100 crore

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxBudget - 1);
    setMinBudget(value);
  };
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
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minBudget + 1);
    setMaxBudget(value);
  };

  return (
   <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ✅ Poppins Google Font */}
      
         <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      

      {/* Background Images */}
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

      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: '35px', paddingBottom: '120px' }}>
        <div className="w-full px-4" style={{ maxWidth: '1365px' }}>
          <h2 className="font-bold">
            <span style={{ color: 'rgba(0, 0, 0, 1)', fontSize: '24px', fontWeight: '700' }}>Latest Property</span>
            <span className="text-[#2450A0]" style={{ fontSize: '24px', fontWeight: '700' }}> Leads</span>
          </h2>

          <p className="text-sm mt-1 text-[15px]" style={{ marginTop: '12px', color: 'rgba(102, 102, 102, 1)', fontWeight: '400', fontSize: '14px' }}>
               Find the most recent properties added to our database. 
          </p>
              
          {/* Form Box */}
         {/* Offer Card */}
<div className="mt-4" style={{ marginTop: "45px" }}>
            <label
              className="block text-[15px] font-semibold text-gray-900 mb-1"
              style={{ fontSize: "16px" }}
            >
              Your Address<span className="text-red-500">*</span>
            </label>

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
           <hr style={{height:'30px',borderLeft:'solid #DEDEDE 2px',marginRight:'10px'}}/>
              {/* Search Icon */}
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
              <button
                type="button"
                className="flex items-center justify-center w-[45px] h-[44px] bg-[#FFFFFF] rounded-full"
                style={{ borderRadius: "12px",border:'solid #2450A0 1px'}}
              >
                <Image
                  src="/lead_list/filter.png"
                  alt="Search"
                  width={35}
                  height={35}
                style={{marginRight:'4px'}}/>
                
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

            {/* //yaha se kardo tum log */}
            {/* Property List Section */}
<div className="mt-8 space-y-6">
  {/* Card 1 */}
  <div className="flex items-center justify-between">
    {/* Left Side */}
    <div className="flex items-center gap-4 md:gap-[481px]">
 

      <img
        src="/lead_list/img1.png"
        alt="Real Estate Listings"
         className="w-[93px] h-[93px] md:w-[150px] md:h-[150px] rounded-lg object-cover"
      />
      <div className="flex flex-col justify-center">
  <h3 className="text-[14px] font-semibold text-gray-900">Real Estate Listings</h3>
  
  {/* First line: icon + location */}
  <div className="flex items-center gap-1 text-sm text-gray-600">
    <img src="/collaboration/location.png" alt="" className="w-4 h-4" />
    <span style={{fontSize:'13px',fontWeight:'500',color:'#20202099'}}>Green Park,</span>
  </div>

  {/* Second line: city + pincode */}
  
  <p className="text-[#2450A0] text-sm font-medium" style={{fontSize:'12px'}}>
    New Delhi <span className="text-gray-500" style={{color:'#BFBFBF'}}>400001</span>
  </p>
</div>

    </div>

    {/* Right Side */}
  <button
  className="
    border border-[#2450A0] text-[#2450A0] 
    rounded-full font-medium 
    hover:bg-[#2450A0] hover:text-white transition
    relative -top-[17px] text-[11px] w-[76px] h-[25px] p-[4px]
    md:-top-[19px] md:text-sm md:px-4 md:py-1 md:w-auto md:h-auto md:p-0
  "
>
  <span>View Lead</span>
</button>


  </div>
  <hr style={{color:'#D9D9D9'}}/>

  {/* Card 2 */}
  {/* Card 2 */}
<div className="flex items-center justify-between">
  <div className="flex items-center gap-4 md:gap-[481px]">
    <img
      src="/lead_list/img2.png"
      alt="Property Search Results"
       className="w-[93px] h-[93px] md:w-[150px] md:h-[150px] rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <h3 className="text-[14px] font-semibold text-gray-900">Property Search Results</h3>

      {/* Location */}
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <img src="/collaboration/location.png" alt="" className="w-4 h-4" />
        <span style={{fontSize:'13px',fontWeight:'500',color:'#20202099'}}>Banjara Hills, Hyderabad</span>
      </div>

      {/* City */}
      <p className="text-[#2450A0] text-sm font-medium" style={{fontSize:'12px'}}>
        Hyderabad <span className="text-gray-500" style={{color:'#BFBFBF'}}>500001</span>
      </p>
    </div>
  </div>
<button
  className="
    border border-[#2450A0] text-[#2450A0] 
    rounded-full font-medium 
    hover:bg-[#2450A0] hover:text-white transition
    relative -top-[17px] text-[11px] w-[76px] h-[25px] p-[4px]
    md:-top-[19px] md:text-sm md:px-4 md:py-1 md:w-auto md:h-auto md:p-0
  "
>
  <span>View Lead</span>
</button>



</div>
<hr style={{color:'#D9D9D9'}}/>

{/* Card 3 */}
<div className="flex items-center justify-between">
  <div className="flex items-center gap-4 md:gap-[481px]">
    <img
      src="/lead_list/img3.png"
      alt="Verified Property Leads"
      className="w-[93px] h-[93px] md:w-[150px] md:h-[150px] rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <h3 className="text-[14px] font-semibold text-gray-900">Verified Property Leads</h3>

      {/* Location */}
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <img src="/collaboration/location.png" alt="" className="w-4 h-4" />
        <span style={{fontSize:'13px',fontWeight:'500',color:'#20202099'}}>MG Road, Bangalore</span>
      </div>

      {/* City */}
      <p className="text-[#2450A0] text-sm font-medium" style={{fontSize:'12px'}}>
        Bangalore <span className="text-gray-500" style={{color:'#BFBFBF'}}>600001</span>
      </p>
    </div>
  </div>
  <button
  className="
    border border-[#2450A0] text-[#2450A0] 
    rounded-full font-medium 
    hover:bg-[#2450A0] hover:text-white transition
    relative -top-[17px] text-[11px] w-[76px] h-[25px] p-[4px]
    md:-top-[19px] md:text-sm md:px-4 md:py-1 md:w-auto md:h-auto md:p-0
  "
>
  <span>View Lead</span>
</button>


</div>
<hr style={{color:'#D9D9D9'}}/>

{/* Card 4 */}
<div className="flex items-center justify-between">
  <div className="flex items-center gap-4 md:gap-[481px]">
    <img
      src="/lead_list/img4.png"
      alt="Explore Properties"
       className="w-[93px] h-[93px] md:w-[150px] md:h-[150px] rounded-lg object-cover"
    />
  <div className="flex flex-col justify-center h-full">
  <h3 className="text-[14px] font-semibold text-gray-900">
    Explore Properties
  </h3>

  {/* Location */}
  <div className="flex items-center gap-1 text-sm text-gray-600">
    <img src="/collaboration/location.png" alt="" className="w-4 h-4" />
    <span
      style={{
        fontSize: '13px',
        fontWeight: '500',
        color: '#20202099',
      }}
    >
     Cyber City, Gurgaon 
    </span>
  </div>

  {/* City */}
  <p
    className="text-[#2450A0] text-sm font-medium"
    style={{ fontSize: '12px' }}
  >
    Gurgaon{' '}
    <span className="text-gray-500" style={{ color: '#BFBFBF' }}>
      411001
    </span>
  </p>
</div>

  </div>
  <button
  className="
    border border-[#2450A0] text-[#2450A0] 
    rounded-full font-medium 
    hover:bg-[#2450A0] hover:text-white transition
    relative -top-[17px] text-[11px] w-[76px] h-[25px] p-[4px]
    md:-top-[19px] md:text-sm md:px-4 md:py-1 md:w-auto md:h-auto md:p-0
  "
>
  <span>View Lead</span>
</button>



</div>

</div>



          {/* <div className="text-right mt-6">
            <Link href="/r-step-5">
              <Image
                src="/next.png"
                alt="Bottom Image"
                width={300}
                height={300}
                className="absolute mt-4 cursor-pointer left-1/2 -translate-x-1/2 lg:left-[940px] lg:translate-x-0"
              />
            </Link>
          </div> */}
        </div>
      </main>
       <img
  src="/images/bottom_wave.png"
  alt="Bottom Wave"
  className="absolute bottom-0 z-0 w-[100px] md:w-[144px]"
/>

      <img
  src="/images/bottom_wave1.png"
  alt="Bottom Wave"
  className="absolute bottom-0 z-0 
             w-[224px] left-[9px]     /* Mobile default */
             md:w-[180px] md:left-[100px]" /* Desktop override */
/>
    </div>
  );
}
