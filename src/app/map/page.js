"use client";
import { useState } from "react"; // 🔹 For state management
import Image from "next/image"; // 🔹 For optimized images
import { IoMdClose, IoIosArrowDown } from "react-icons/io"; // 🔹 Icons for UI
import { FaHeart, FiHeart } from "react-icons/fi"; // 🔹 Heart icons for like
import Header2 from "@/components/Header2"; // 🔹 Your custom header
import Footer from "@/components/Footer"; // 🔹 Your custom footer
import Link from "next/link"; // 🔹 For navigation

export default function PropertyWithMap() {
  // 🔸 State definitions
  const [likedStates, setLikedStates] = useState(Array(6).fill(false)); // 🔹 Like states for 6 cards
  const [sortOrder, setSortOrder] = useState(""); // 🔹 Sort order (asc/desc)
  const [showDropdown, setShowDropdown] = useState(false); // 🔹 Sort dropdown visibility
  const [location, setLocation] = useState(""); // 🔹 Location input
  const [showMobileMap, setShowMobileMap] = useState(false); // 🔹 Mobile map toggle
  const [showFilter, setShowFilter] = useState(false); // 🔹 Filter modal visibility

  // 🔹 Calculate liked count
  const likedCount = likedStates.filter(Boolean).length;

  // 🔹 Toggle like for a card
  const toggleLike = (index) => {
    const updatedLikes = [...likedStates];
    updatedLikes[index] = !updatedLikes[index];
    setLikedStates(updatedLikes);
  };

  // 🔸 Property data (your 6 cards)
  const propertyData = [
    {
      price: 280000,
      ownerType: "By Owner",
      bhk: 2,
      bath: 2,
      sqft: 900,
      address: "1030 Spruce St, Aurora, IL",
      imageUrl: "/Card media container.png",
    },
    {
      price: 350000,
      ownerType: "By Dealer",
      bhk: 3,
      bath: 2,
      sqft: 1200,
      address: "221B Baker Street, London",
      imageUrl: "/Card media.png",
    },
    {
      price: 180000,
      ownerType: "By Owner",
      bhk: 1,
      bath: 1,
      sqft: 600,
      address: "742 Evergreen Terrace, Springfield",
      imageUrl: "/Card media container.png",
    },
    {
      price: 420000,
      ownerType: "By Dealer",
      bhk: 4,
      bath: 3,
      sqft: 1600,
      address: "1600 Pennsylvania Ave NW, DC",
      imageUrl: "/Card media.png",
    },
    {
      price: 310000,
      ownerType: "By Owner",
      bhk: 3,
      bath: 2,
      sqft: 1100,
      address: "12 Grimmauld Place, London",
      imageUrl: "/Card media container.png",
    },
    {
      price: 265000,
      ownerType: "By Dealer",
      bhk: 2,
      bath: 2,
      sqft: 950,
      address: "4 Privet Drive, Little Whinging",
      imageUrl: "/Card media.png",
    },
  ];

  // 🔹 Sort property data
  const sortedData = [...propertyData].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  // 🔸 Filters for mobile and desktop
  const filters = ["For Sale", "BHK", "Sqft.", "Bath", ""];

  return (
    <div className="text-gray-900 min-h-screen flex flex-col font-nunito">
      {/* 🔹 Header */}
      <Header2 />

      {/* 🔹 Main Content */}
      <div className="flex-grow mt-[150px]">
        {/* 📱 Mobile Map View */}
        {showMobileMap ? (
          <div className="block md:hidden mt-24 px-4">
            {/* 🔹 Mobile Map Header with Back Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Map View</h2>
              <button
                onClick={() => setShowMobileMap(false)}
                className="text-blue-600 text-sm font-semibold"
              >
                Back to List
              </button>
            </div>
            {/* 🔹 Static Map Image */}
            <Image
              src="/maplocation.png" // 🖼️ Your map image
              alt="Map View"
              width={600}
              height={800}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        ) : (
          <>
            {/* 🖥️ Desktop Filters (Location, Like Counter, Filters, Sort) */}
            <div className="hidden md:flex items-center justify-between gap-4 max-w-screen-xl mx-auto px-4 mt-4">
              {/* 🔹 Location Input */}
              <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-4 py-2 shadow-sm flex-shrink-0 w-[500px]">
                <Image
                  src="/locationblue.png"
                  alt="Location"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mx-2 text-black text-base bg-transparent outline-none flex-grow"
                />
                <IoMdClose
                  className="text-gray-400 text-sm cursor-pointer ml-auto"
                  onClick={() => setLocation("")}
                />
                <Image
                  src="/global.png"
                  alt="Globe"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </div>
              {/* 🔹 Like Counter */}
              <div className="w-12 h-12 bg-white border border-[#E5E5E5] rounded-2xl flex items-center justify-center mr-[270px]">
                <div className="bg-gray-100 rounded-2xl px-2 py-1 flex flex-col items-center justify-center">
                  <span className="text-xs font-semibold text-gray-800 leading-tight">
                    {likedCount.toString().padStart(2, "0")}
                  </span>
                  {likedCount > 0 ? (
                    <FaHeart className="text-[#2450A0] text-base mt-[2px]" />
                  ) : (
                    <FiHeart className="text-gray-400 text-base mt-[2px]" />
                  )}
                </div>
              </div>
              {/* 🔹 Filter Buttons (BHK, Bath, Sqft) */}
              {filters.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1.5 bg-[#edf1fd] text-sm text-[#2b56b6] font-medium rounded-full flex-shrink-0 cursor-pointer"
                  onClick={() => setShowFilter(true)}
                >
                  {item} <IoIosArrowDown />
                </div>
              ))}
              {/* 🔹 Sort Dropdown */}
              <div className="relative">
                <div
                  className="bg-white border border-gray-300 rounded-2xl px-3 py-2 w-35 flex items-center gap-2 shadow-sm cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="flex items-center bg-gray-100 px-2 py-1 rounded-2xl">
                    <p className="text-sm text-gray-700 whitespace-nowrap">
                      Sort by
                    </p>
                    <IoIosArrowDown className="text-gray-500 text-base ml-1" />
                  </div>
                  <Image
                    src="/arrow-swap.png"
                    alt="Swap"
                    width={16}
                    height={16}
                  />
                </div>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                    <button
                      onClick={() => {
                        setSortOrder("asc");
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => {
                        setSortOrder("desc");
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      Price: High to Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 🖥️ Desktop Layout: Map + Cards */}
            <div className="hidden md:flex mt-8 mx-auto max-w-screen-xl px-4">
              {/* 🗺️ Left: Sticky Map */}
              <div className="md:w-1/2 h-[calc(100vh-120px)] sticky top-[120px]">
                <Image
                  src="/maplocation.png" // 🖼️ Your map image
                  alt="Map"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* 📦 Right: Scrollable Cards */}
              <div className="md:w-1/2 overflow-y-auto h-[calc(100vh-120px)] px-4 py-6">
                <div className="grid grid-cols-2 gap-2">
                  {sortedData.map((property, index) => (
                    <div
                      key={index}
                      className="bg-white w-full shadow-md overflow-hidden"
                    >
                      <div className="relative">
                        <Image
                          src={property.imageUrl}
                          alt={`Property ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-56 object-contain"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleLike(index);
                          }}
                          className="absolute top-2 right-2"
                        >
                          <Image
                            src={
                              likedStates[index]
                                ? "/Heart buttion.svg"
                                : "/Heart buttion icon.svg"
                            }
                            alt="like"
                            width={20}
                            height={20}
                            className="w-10 h-10 transition-all duration-200"
                          />
                        </button>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-extrabold text-black">
                            ${parseInt(property.price).toLocaleString("en-US")}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 -mt-2">
                          {property.ownerType}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700">
                            <span className="text-[#2b56b6]">
                              {property.bhk}
                            </span>{" "}
                            BHK
                          </span>
                          <span className="bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700">
                            <span className="text-[#2b56b6]">
                              {property.bath}
                            </span>{" "}
                            Bath
                          </span>
                          <span className="bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700">
                            <span className="text-[#2b56b6]">
                              {property.sqft}
                            </span>{" "}
                            sqft
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-600 border border-gray-200 px-3 py-1 rounded-full">
                          <Image
                            src="/loc.png"
                            alt="location"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                          <span>{property.address}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 📱 Mobile View: Property Cards + Map Toggle */}
            <div className="md:hidden px-4 mt-32 mb-20">
              {/* 🔹 Mobile Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-3 py-2 shadow-sm">
                    <Image
                      src="/locationblue.png"
                      alt="Location"
                      width={20}
                      height={20}
                    />
                    <input
                      type="text"
                      placeholder="Enter location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mx-2 text-black text-base bg-transparent outline-none"
                    />
                    <IoMdClose
                      className="text-gray-400 text-sm cursor-pointer"
                      onClick={() => setLocation("")}
                    />
                    <Image
                      src="/global.png"
                      alt="Globe"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </div>
                  <div className="w-12 h-12 bg-white border border-[#E5E5E5] rounded-2xl flex items-center justify-center">
                    <div className="bg-gray-100 w-10 h-10 rounded-2xl px-1 py-1 flex flex-col items-center justify-center">
                      <span className="text-xs font-semibold text-gray-800 leading-tight">
                        {likedCount.toString().padStart(2, "0")}
                      </span>
                      <FiHeart className="text-[#2b56b6] text-base mt-[2px]" />
                    </div>
                  </div>
                </div>

                {/* 🔹 Mobile Filters */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1">
                    {filters.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 px-3 py-1.5 bg-[#edf1fd] text-sm text-[#2b56b6] font-medium rounded-full flex-shrink-0 cursor-pointer"
                        onClick={() => setShowFilter(true)}
                      >
                        {item} <IoIosArrowDown />
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <div
                      className="bg-white border border-gray-300 rounded-2xl px-3 py-2 w-33 flex items-center gap-2 shadow-sm cursor-pointer"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded-2xl">
                        <p className="text-sm text-gray-700 whitespace-nowrap">
                          Sort by
                        </p>
                        <IoIosArrowDown className="text-gray-500 text-base ml-1" />
                      </div>
                      <Image
                        src="/arrow-swap.png"
                        alt="Swap"
                        width={16}
                        height={16}
                      />
                    </div>
                    {showDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                        <button
                          onClick={() => {
                            setSortOrder("asc");
                            setShowDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          Price: Low to High
                        </button>
                        <button
                          onClick={() => {
                            setSortOrder("desc");
                            setShowDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          Price: High to Low
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 🔹 Mobile Property Cards (1 per row) */}
              <div className="grid grid-cols-1 gap-2 py-10">
                {sortedData.map((property, index) => (
                  <div
                    key={index}
                    className="bg-white w-full rounded-lg shadow-lg overflow-hidden relative"
                  >
                    <div className="relative">
                      <Image
                        src={property.imageUrl}
                        alt={`Property ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike(index);
                        }}
                        className="absolute top-2 right-2"
                      >
                        <Image
                          src={
                            likedStates[index]
                              ? "/Heart buttion.svg"
                              : "/Heart buttion icon.svg"
                          }
                          alt="like"
                          width={20}
                          height={20}
                          className="w-10 h-10 transition-all duration-200 mt-[200px]"
                        />
                      </button>
                    </div>
                    <div className="p-4 space-y-1">
                      <h2 className="text-lg font-extrabold text-black">
                        ${parseInt(property.price).toLocaleString("en-US")}
                        SUBJECT: Re: Complete Code for Merged Property and Map
                        Layout with Specific Desktop Filter Arrangement
                      </h2>
                      <p className="text-xs text-gray-600">
                        {property.ownerType}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">{property.bhk}</span>{" "}
                          BHK
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">
                            {property.bath}
                          </span>{" "}
                          Bath
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">
                            {property.sqft}
                          </span>{" "}
                          sqft
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-600">
                        <Image
                          src="/loc.png"
                          alt="location"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <p className="text-sm text-gray-800 font-semibold">
                          {property.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 🔹 Filter Modal (Mobile) */}
            {showFilter && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 md:px-0">
                <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
                  <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowFilter(false)}
                  >
                    <IoMdClose size={20} />
                  </button>
                  <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="accent-[#2450A0]" />
                      <span>2 BHK</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="accent-[#2450A0]" />
                      <span>3 BHK</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="accent-[#2450A0]" />
                      <span>Apartment</span>
                    </label>
                  </div>
                  <button
                    onClick={() => setShowFilter(false)}
                    className="mt-6 w-full bg-[#2450A0] text-white py-2 rounded-md hover:bg-[#1f3f7f]"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}

            {/* 📍 Mobile Floating Map View Button */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 block md:hidden">
              <button onClick={() => setShowMobileMap(true)}>
                <Image
                  src="/mapview.png"
                  alt="Map View"
                  width={150}
                  height={150}
                  className="w-32"
                />
              </button>
            </div>
          </>
        )}
      </div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}
