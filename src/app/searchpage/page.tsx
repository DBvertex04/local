'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import Header2 from "@/components/Header2";
import { ProjectorIcon } from 'lucide-react';

export default function PropertyDetail() {
 const [selected, setSelected] = useState("NoBroker Rank");
  const [propertyType, setPropertyType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const isSelected = (type: string) => selected === type;
    const [sortOpen, setSortOpen] = useState(false);
  const [rankOpen, setRankOpen] = useState(false);
const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = ["NoBroker Rank", "Top Rated", "Most Popular"];

 const projects = [
    {
      id: 1,
      img: "/builder/img11.jpg",
      price: "₹56.2–₹97.2L",
      bhk: "1,2,3 BHK",
      name: "JSB Nakshatra Gokul",
    },
    {
      id: 2,
      img: "/builder/img6.jpg",
      price: "₹84.2–₹89.1L",
      bhk: "2 BHK",
      name: "YK And Sons Heights",
    },
    {
      id: 3,
      img: "/builder/img3.jpg",
      price: "₹45.2–₹76.5L",
      bhk: "1,3 BHK",
      name: "Sunrise Residency",
    },
    {
      id: 4,
      img: "/builder/img11.jpg",
      price: "₹56.2–₹97.2L",
      bhk: "1,2,3 BHK",
      name: "JSB Nakshatra Gokul",
    },
    {
      id: 5,
      img: "/builder/img6.jpg",
      price: "₹84.2–₹89.1L",
      bhk: "2 BHK",
      name: "YK And Sons Heights",
    },
    {
      id: 6,
      img: "/builder/img3.jpg",
      price: "₹45.2–₹76.5L",
      bhk: "1,3 BHK",
      name: "Sunrise Residency",
    },
  ];
 const Projector = [
    {
      id: 1,
      img: "/searchpage/img11.png",
      price: "₹56.2–₹97.2L",
      bhk: "1,2,3 BHK",
      name: "JSB Nakshatra Gokul",
    },
    {
      id: 2,
      img: "/builder/img1.png",
      price: "₹84.2–₹89.1L",
      bhk: "2 BHK",
      name: "YK And Sons Heights",
    },
    {
      id: 3,
      img: "/builder/img3.jpg",
      price: "₹45.2–₹76.5L",
      bhk: "1,3 BHK",
      name: "Sunrise Residency",
    },
    {
      id: 4,
      img: "/builder/img11.jpg",
      price: "₹56.2–₹97.2L",
      bhk: "1,2,3 BHK",
      name: "JSB Nakshatra Gokul",
    },
    {
      id: 5,
      img: "/builder/img6.jpg",
      price: "₹84.2–₹89.1L",
      bhk: "2 BHK",
      name: "YK And Sons Heights",
    },
    {
      id: 6,
      img: "/builder/img3.jpg",
      price: "₹45.2–₹76.5L",
      bhk: "1,3 BHK",
      name: "Sunrise Residency",
    },
  ];

 
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
            <div className="w-full px-4 md:px-8 py-4">
      {/* Top Filter + Sort */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        {/* Filter Button */}
        <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-full text-sm text-gray-700 bg-white shadow-sm hover:bg-gray-50">
           <div className="flex items-center gap-2" style={{backgroundColor:'#1218280D',padding:'4px',borderRadius:'11px'}}>
  <Image
    src="/searchpage/document_filter.png"
    alt="Filter"
    width={16}
    height={16}
  />
  <span className="text-sm text-gray-700 font-medium" style={{fontSize:'12px'}}>Filter</span>
  <Image
    src="/r_step8/arrow_down.png"
    alt=""
    width={20}
    height={20}
  />
</div>

         
        </button>

        {/* Sort by Button */}
        <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-full text-sm text-gray-700 bg-white shadow-sm hover:bg-gray-50" >
         <div className="flex items-center gap-2" style={{backgroundColor:'#1218280D',padding:'4px',borderRadius:'11px'}}>
          
          <span className="text-sm text-gray-700 font-medium" style={{fontSize:'12px'}}>Sort by</span>
          
          <Image src="/r_step8/arrow_down.png" alt="" width={20} height={20} />
         
</div>
 <Image src="/searchpage/twotone.png" alt="" width={20} height={20} />
        </button>
      </div>

      {/* Breadcrumb */}
      <div className="mt-3 text-sm text-[#2450A0] font-medium" style={{fontSize:'15px',marginTop:'20px'}}>
        Home / Mumbai / Bandhan Heritage
      </div>

      {/* NoBroker Rank Dropdown */}
       <div className="mt-3 relative w-full">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white shadow-sm hover:bg-gray-50"
      style={{height:'55px',borderRadius:'19px'}}>
        <span style={{fontSize:'15px',color:'#0A090966',fontWeight:'500'}}>{selected}</span>
        <Image
          src="/r_step8/arrow_down.png"
          alt=""
          width={24}
          height={24}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
              {/* Property Card */}
<div className="flex gap-6 flex-wrap justify-center">
  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-md overflow-hidden mt-6 max-w-[547px]">
    {/* Image Section */}
  <div className="relative">
  <Image
    src="/searchpage/img1.png"
    alt="Property"
    width={400}
    height={250}
    className="
      w-full h-[200px] object-cover
      mt-[17px] md:mt-0
      md:w-[552px] md:h-[400px]
      rounded-lg
    "
  />

  {/* Overlay for image count */}
  <span
  className="absolute bottom-2 right-6 bg-opacity-60 text-white text-xs px-2 py-1 rounded md:mb-[28px]"
>
  16/20
</span>

</div>

    {/* Details Section */}
    <div className="p-4">
      <h3 className="font-semibold text-sm text-gray-900" style={{fontSize:'16px',fontWeight:'700'}}>
        1 RK Apartment In Vishnu Park Apartment For Sale In Virar West
      </h3>
      <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs" style={{border:'solid  #0000000D 1px',borderRadius:'13px',marginTop:'12px'}}>
        <Image
          src="/lead_list/location.png"
          alt="Location"
          width={14}
          height={14}
        />
        <span style={{fontSize:'10px',fontWeight:'600'}}>1030 Spruce St, Aurora, IL 60506</span>
      </div>
      <div className="flex items-center justify-between mt-2" style={{marginTop:'19px'}}>
  {/* Price */}
  <p className="text-[#2450A0] font-bold text-lg">$280,000</p>

  {/* BHK Box */}
  <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-xl px-3 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
    <Image src="/searchpage/bed_icon.png" alt="BHK" width={30} height={16} />
    
<span style={{fontWeight:'500',color:'#2450A0',fontSize:'12px'}}>East <span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BHK</span></span>

  </div>
</div>

       <div className="flex gap-2 mt-3 text-xs">
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/bed_icon.png" alt="BHK" width={30} height={16} />
          
                              <span style={{fontWeight:'500',color:'#121828',fontSize:'13px'}}>1 RK</span><span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BHK</span>

        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/bath.png" alt="Bath" width={30} height={16} />
          <span style={{fontWeight:'700',color:'#2450A0',fontSize:'16px'}}>2</span><span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BA</span>
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/tool.png" alt="Sqft" width={30} height={16} />
          
                    <span style={{fontWeight:'700',color:'#2450A0',fontSize:'16px'}}>24<span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>sqft</span></span>

        </div>
      </div>
      <div className="flex items-center justify-between mt-4 flex-nowrap">
        <button className="bg-[#2450A0] text-white text-xs px-4 py-2 rounded-lg shadow hover:bg-[#1e3f82] whitespace-nowrap">
          GET OWNER DETAILS
        </button>
        <div className="flex items-center gap-3 text-xs text-gray-500 flex-shrink-0">
          <div className="flex items-center gap-1" style={{padding:'6px',backgroundColor:'#F3F6FA',borderRadius:'11px'}}>
            <Image src="/searchpage/heart.png" alt="Likes" width={20} height={14}  />
            <span>25k</span>
          </div>
          <Image src="/searchpage/call.png" alt="Share" width={30} height={14} />
          <Image src="/searchpage/info.png" alt="More" width={30} height={14} />
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-md overflow-hidden mt-6 max-w-[547x]">
    {/* Image Section */}
    <div className="relative">
 <Image
  src="/searchpage/img2.png"
  alt="Property"
  width={400}
  height={250}
  className="
    w-[96%] h-[200px] object-cover
    ml-[10px] mt-[12px] md:ml-[13px] md:mt-[15px]
    md:w-[480px] md:h-[360px]
    md:rounded-[24px] md:border-[2px] md:border-white
    md:shadow-[0px_2px_2px_2px_#f0f0f0]
  "
/>



      <span className="absolute bottom-2 right-6  bg-opacity-60 text-white text-xs px-2 py-1 rounded">
        16/20
      </span>
    </div>
    {/* Details Section */}
    <div className="p-4">
      <h3 className="font-semibold text-sm text-gray-900 mt-[0px] md:mt-[25px] " style={{fontSize:'16px',fontWeight:'700'}}>
        1 RK Apartment In Vishnu Park Apartment For Sale In Virar <br />
        West
      </h3>
      <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs" style={{border:'solid  #0000000D 1px',borderRadius:'13px',marginTop:'12px'}}>
        <Image
          src="/lead_list/location.png"
          alt="Location"
          width={14}
          height={14}
        />
        <span style={{fontSize:'10px',fontWeight:'600'}}>1030 Spruce St, Aurora, IL 60506</span>
      </div>
      <div className="flex items-center justify-between mt-[19px] md:mt-[19px]">
  {/* Price */}
  <p className="text-[#2450A0] font-bold text-lg">$280,000</p>

  {/* BHK Box */}
  <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-xl px-3 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
    <Image src="/searchpage/bed_icon.png" alt="BHK" width={30} height={16} />
    
<span style={{fontWeight:'500',color:'#2450A0',fontSize:'12px'}}>East <span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BHK</span></span>

  </div>
</div>

       <div className="flex gap-2 mt-3 text-xs">
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/bed_icon.png" alt="BHK" width={30} height={16} />
          
                              <span style={{fontWeight:'500',color:'#121828',fontSize:'13px'}}>1 RK</span><span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BHK</span>

        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/bath.png" alt="Bath" width={30} height={16} />
          <span style={{fontWeight:'700',color:'#2450A0',fontSize:'16px'}}>2</span><span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BA</span>
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/tool.png" alt="Sqft" width={30} height={16} />
          
                    <span style={{fontWeight:'700',color:'#2450A0',fontSize:'16px'}}>24<span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>sqft</span></span>

        </div>
      </div>
      <div className="flex items-center justify-between mt-4 flex-nowrap">
        <button className="bg-[#2450A0] text-white text-xs px-4 py-2 rounded-lg shadow hover:bg-[#1e3f82] whitespace-nowrap">
          GET OWNER DETAILS
        </button>
        <div className="flex items-center gap-3 text-xs text-gray-500 flex-shrink-0" >
          <div className="flex items-center gap-1" style={{padding:'6px',backgroundColor:'#F3F6FA',borderRadius:'11px'}}>
            <Image src="/searchpage/heart.png" alt="Likes" width={20} height={14} />
            <span>25k</span>
          </div>
          <Image src="/searchpage/call.png" alt="Share" width={30} height={14} />
          <Image src="/searchpage/info.png" alt="More" width={30} height={14} />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="w-full mt-6">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-lg font-semibold">
          Top Builder <span className="text-[#2450A0]">Projects</span>
        </h2>
        <button className="flex items-center gap-2 text-red-500 border border-red-500 rounded-full text-sm px-4 py-1">
  VIEW ALL
  <img src="/searchpage/arrow.png" alt="" />
</button>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar mt-3 px-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" overflow-hidden min-w-[200px] max-w-[220px]"
          >
            {/* Image */}
           <div className="w-[180px] overflow-hidden">
  {/* Image */}
  <div className="relative">
  {/* Image */}
  <Image
    src={project.img}
    alt={project.name}
    width={300}
    height={200}
    className="w-full h-[150px] object-cover rounded-t-2xl"
  />

  {/* Details Box overlapping image */}
  <div className="p-3 bg-white rounded-2xl shadow-[0px_0px_20px_0px_#0000002B] -mt-5 mx-3 relative z-10" style={{width:'180px',right:'12px'}}>
    {/* Price + BHK */}
    <div className="flex items-center justify-between">
      <p className="text-black font-bold text-sm">{project.price}</p>
      <span
        className="text-gray-500 text-xs"
        style={{ fontWeight: '400', color: '#0A090966' }}
      >
        {project.bhk}
      </span>
    </div>

    {/* Project Name */}
    <p
      className="mt-1 text-xs text-gray-800 font-medium leading-snug"
      style={{ fontSize: '14px', fontWeight: '400' }}
    >
      {project.name}
    </p>
      <button
      className="w-full bg-[#2450A0] text-white text-xs font-medium py-2 mt-2"
      style={{ borderRadius: '14px' }}
    >
      VIEW
    </button>
  </div>
</div>



  {/* View Button */}
  
</div>

          </div>
        ))}
      </div>
    </div>
    <div className="flex gap-6 flex-wrap justify-center">
  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-md overflow-hidden mt-6 max-w-[547px]">
    {/* Image Section */}
  <div className="relative">
  <Image
  src="/builder/img5.jpg"
  alt="Property"
  width={400}
  height={250}
  className="
    w-[96%] h-[200px] object-cover
    ml-[10px] mt-[12px] md:ml-[13px] md:mt-[15px]
    md:w-[480px] md:h-[360px]
    md:rounded-[24px] md:border-[2px] md:border-white
    md:shadow-[0px_2px_2px_2px_#f0f0f0]
  "
/>

  {/* Overlay for image count */}
  <span
  className="absolute bottom-2 right-6 bg-opacity-60 text-white text-xs px-2 py-1 rounded md:mb-[28px]"
>
  16/20
</span>

</div>

    {/* Details Section */}
    <div className="p-4">
      <h3 className="font-semibold text-sm text-gray-900" style={{fontSize:'16px',fontWeight:'700'}}>
        1 RK Apartment In Vishnu Park Apartment For Sale In Virar West
      </h3>
      <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs" style={{border:'solid  #0000000D 1px',borderRadius:'13px',marginTop:'12px'}}>
        <Image
          src="/lead_list/location.png"
          alt="Location"
          width={14}
          height={14}
        />
        <span style={{fontSize:'10px',fontWeight:'600'}}>1030 Spruce St, Aurora, IL 60506</span>
      </div>
      <div className="flex items-center justify-between mt-2" style={{marginTop:'19px'}}>
  {/* Price */}
  <p className="text-[#2450A0] font-bold text-lg">$280,000</p>

  {/* BHK Box */}
<div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-xl px-3 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
    <Image src="/searchpage/bed_icon.png" alt="BHK" width={30} height={16} />
    
<span style={{fontWeight:'500',color:'#2450A0',fontSize:'12px'}}>East <span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BHK</span></span>

  </div>
</div>

       <div className="flex gap-2 mt-3 text-xs">
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/bed_icon.png" alt="BHK" width={30} height={16} />
          
                              <span style={{fontWeight:'500',color:'#121828',fontSize:'13px'}}>1 RK</span><span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BHK</span>

        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/bath.png" alt="Bath" width={30} height={16} />
          <span style={{fontWeight:'700',color:'#2450A0',fontSize:'16px'}}>2</span><span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BA</span>
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/tool.png" alt="Sqft" width={30} height={16} />
          
                    <span style={{fontWeight:'700',color:'#2450A0',fontSize:'16px'}}>24<span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>sqft</span></span>

        </div>
      </div>
      <div className="flex items-center justify-between mt-4 flex-nowrap">
        <button className="bg-[#2450A0] text-white text-xs px-4 py-2 rounded-lg shadow hover:bg-[#1e3f82] whitespace-nowrap">
          GET OWNER DETAILS
        </button>
        <div className="flex items-center gap-3 text-xs text-gray-500 flex-shrink-0">
          <div className="flex items-center gap-1" style={{padding:'6px',backgroundColor:'#F3F6FA',borderRadius:'11px'}}>
            <Image src="/searchpage/heart.png" alt="Likes" width={20} height={14}  />
            <span>25k</span>
          </div>
          <Image src="/searchpage/call.png" alt="Share" width={30} height={14} />
          <Image src="/searchpage/info.png" alt="More" width={30} height={14} />
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-md overflow-hidden mt-6 max-w-[547x]">
    {/* Image Section */}
    <div className="relative">
 <Image
  src="/builder/img4.png"
  alt="Property"
  width={400}
  height={250}
  className="
    w-[96%] h-[200px] object-cover
    ml-[10px] mt-[12px] md:ml-[13px] md:mt-[15px]
    md:w-[480px] md:h-[360px]
    md:rounded-[24px] md:border-[2px] md:border-white
    md:shadow-[0px_2px_2px_2px_#f0f0f0]
  "
/>



      <span className="absolute bottom-2 right-6  bg-opacity-60 text-white text-xs px-2 py-1 rounded">
        16/20
      </span>
    </div>
    {/* Details Section */}
    <div className="p-4">
      <h3 className="font-semibold text-sm text-gray-900 mt-[0px] md:mt-[25px] " style={{fontSize:'16px',fontWeight:'700'}}>
        1 RK Apartment In Vishnu Park Apartment For Sale In Virar <br />
        West
      </h3>
      <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs" style={{border:'solid  #0000000D 1px',borderRadius:'13px',marginTop:'12px'}}>
        <Image
          src="/lead_list/location.png"
          alt="Location"
          width={14}
          height={14}
        />
        <span style={{fontSize:'10px',fontWeight:'600'}}>1030 Spruce St, Aurora, IL 60506</span>
      </div>
      <div className="flex items-center justify-between mt-[19px] md:mt-[19px]">
  {/* Price */}
  <p className="text-[#2450A0] font-bold text-lg">$280,000</p>

  {/* BHK Box */}
  <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-xl px-3 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
    <Image src="/searchpage/bed_icon.png" alt="BHK" width={30} height={16} />
    
<span style={{fontWeight:'500',color:'#2450A0',fontSize:'12px'}}>East <span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BHK</span></span>

  </div>
</div>

       <div className="flex gap-2 mt-3 text-xs">
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/bed_icon.png" alt="BHK" width={30} height={16} />
          
                              <span style={{fontWeight:'500',color:'#121828',fontSize:'13px'}}>1 RK</span><span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BHK</span>

        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/bath.png" alt="Bath" width={30} height={16} />
          <span style={{fontWeight:'700',color:'#2450A0',fontSize:'16px'}}>2</span><span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>BA</span>
        </div>
        <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1" style={{borderRadius:'13px',backgroundColor:'#1E4FA20D'}}>
          <Image src="/searchpage/tool.png" alt="Sqft" width={30} height={16} />
          
                    <span style={{fontWeight:'700',color:'#2450A0',fontSize:'16px'}}>24<span style={{fontSize:'13px',color:'#0A0909A6',fontWeight:'500'}}>sqft</span></span>

        </div>
      </div>
      <div className="flex items-center justify-between mt-4 flex-nowrap">
        <button className="bg-[#2450A0] text-white text-xs px-4 py-2 rounded-lg shadow hover:bg-[#1e3f82] whitespace-nowrap">
          GET OWNER DETAILS
        </button>
        <div className="flex items-center gap-3 text-xs text-gray-500 flex-shrink-0" >
          <div className="flex items-center gap-1" style={{padding:'6px',backgroundColor:'#F3F6FA',borderRadius:'11px'}}>
            <Image src="/searchpage/heart.png" alt="Likes" width={20} height={14} />
            <span>25k</span>
          </div>
          <Image src="/searchpage/call.png" alt="Share" width={30} height={14} />
          <Image src="/searchpage/info.png" alt="More" width={30} height={14} />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="w-full mt-6">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-lg font-semibold">
          Premium <span className="text-[#2450A0]">Properties</span>
        </h2>
        

<button className="flex items-center gap-2 text-red-500 border border-red-500 rounded-full text-sm px-4 py-1">
  VIEW ALL
  <img src="/searchpage/arrow.png" alt="" />
</button>

      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar mt-3 px-2">
        {Projector.map((project) => (
          <div
            key={project.id}
            className=" overflow-hidden min-w-[200px] max-w-[220px]"
          >
            {/* Image */}
           <div className="w-[180px] overflow-hidden">
  {/* Image */}
  <div className="relative">
  {/* Image */}
  <Image
    src={project.img}
    alt={project.name}
    width={300}
    height={200}
    className="w-full h-[150px] object-cover rounded-t-2xl"
  />

  {/* Details Box overlapping image */}
  <div className="p-3 bg-white rounded-2xl shadow-[0px_0px_20px_0px_#0000002B] -mt-5 mx-3 relative z-10" style={{width:'180px',right:'12px'}}>
    {/* Price + BHK */}
    <div className="flex items-center justify-between">
      <p className="text-black font-bold text-sm">{project.price}</p>
      <span
        className="text-gray-500 text-xs"
        style={{ fontWeight: '400', color: '#0A090966' }}
      >
        {project.bhk}
      </span>
    </div>

    {/* Project Name */}
    <p
      className="mt-1 text-xs text-gray-800 font-medium leading-snug"
      style={{ fontSize: '14px', fontWeight: '400' }}
    >
      {project.name}
    </p>
      <button
      className="w-full bg-[#2450A0] text-white text-xs font-medium py-2 mt-2"
      style={{ borderRadius: '14px' }}
    >
      VIEW
    </button>
  </div>
</div>



  {/* View Button */}
  
</div>

          </div>
        ))}
      </div>
    </div>


          {/* Form Box */}
         {/* Offer Card */}

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
