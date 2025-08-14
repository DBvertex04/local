// "use client";

// import { useState, ChangeEvent } from "react";

// export default function UploadListing() {
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
//   const [selectedImages, setSelectedImages] = useState<File[]>([]);
//   const [showAll, setShowAll] = useState<boolean>(false);

//   const TOTAL_IMAGES = 12;
//   const dummyImages = Array.from({ length: TOTAL_IMAGES }, () => "/upload_listing/img1.png");

//   const steps = [
//     { title: "Property Details" },
//     { title: "Price Details" },
//     { title: "Availability" },
//     { title: "Others" },
//     { title: "Upload Images" },
//   ];
//   const activeStep = 4; // Index starts from 0, so 4 = "Upload Images"

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files);
//       setSelectedImages((prev) => [...prev, ...filesArray]);
//     }
//   };

//   return (
//     <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden font-poppins">
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       {/* Background */}


//       <main className=" pb-12 flex justify-center relative z-10">
//         <div className="w-full px-4" style={{ maxWidth: "1000px" }}>

//           {/* Page Heading */}


//           {/* Stepper */}
//           <div className="flex flex-wrap justify-center gap-3 md:flex-nowrap mt-12 ">
//             {steps.map((step, index) => (
//               <div key={index} className="flex-1 flex flex-col items-center relative">
//                 {/* Circle */}


//                 {/* Label */}


//               </div>
//             ))}
//           </div>

//           {/* Upload Images Section */}
//           <div className="mt-6">
//             <label className="text-[16px] font-bold text-[#0A0909] block mb-2"style={{ fontFamily: "Poppins, sans-serif" }}>
//               Upload Images <span className="text-red-500">*</span>
//             </label>

//             {/* Preview */}
//             <div className="grid grid-cols-3 gap-2 sm:gap-3 relative">
//               {dummyImages.slice(0, 3).map((img, index) => (
//                 <div key={index} className="relative">
//                   <img src={img} className="w-full rounded-lg object-cover" />
//                   {index === 2 && !showAll && (
//                     <div
//                       onClick={() => setShowAll(true)}
//                       className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold cursor-pointer rounded-lg"
//                     >
//                       +{TOTAL_IMAGES - 3} more
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {showAll && (
//               <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
//                 {dummyImages.slice(3).map((img, index) => (
//                   <img key={index + 3} src={img} className="w-full rounded-lg object-cover" />
//                 ))}
//               </div>
//             )}

//             {selectedImages.length > 0 && (
//               <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
//                 {selectedImages.map((file, index) => (
//                   <img
//                     key={index}
//                     src={URL.createObjectURL(file)}
//                     alt={`upload-${index}`}
//                     className="w-full rounded-lg object-cover"
//                   />
//                 ))}
//               </div>
//             )}

//             {/* Upload Button */}
//             <div className="mt-4">
//               <label htmlFor="uploadImages">
//                 <div className="w-full py-3 text-center cursor-pointer border border-[#2450A0] rounded-full">
//                   <span className="text-[#2450A0] text-[14px] font-semibold">UPLOAD MORE IMAGES</span>
//                   <input
//                     type="file"
//                     id="uploadImages"
//                     multiple
//                     accept="image/*"
//                     style={{ display: "none" }}
//                     onChange={handleImageUpload}
//                   />
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* Submit */}
//           <div className="col-span-2 text-right pt-5">
//             <button
//               style={{ marginRight: "147px" }}
//               type="submit"
//               className="bg-[#2450A0] text-white px-6 py-2 y- rounded-full w-full md:w-[40%]"
//             >
//               SAVE & NEXT
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";

// export default function AvailabilityPage() {
//   const [selectedAvailability, setSelectedAvailability] = useState("Everyday");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({
//       availability: selectedAvailability,
//       date: selectedDate,
//       time: selectedTime,
//     });
//   };

//   const areaOptions = ["Everyday", "Weekday", "Weekend"];

//   return (
//     <div
//       className="relative text-gray-900 min-h-screen overflow-hidden bg-gray-50"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       <main className="pb-12 flex justify-center relative z-10">
//         <div className="w-full px-4" style={{ maxWidth: "1090px" }}>
//           <form
//             onSubmit={handleSubmit}
//             className="mt-8 bg-white p-6 rounded-xl shadow-sm w-full"
//           >
//             {/* Availability */}
//             <label className="block text-[16px] font-semibold text-[#0A0909] mb-2"style={{ fontFamily: "Poppins, sans-serif" }}>
//               Availability<span className="text-red-500">*</span>
//             </label>

//             <div className="flex gap-4 w-full mb-6 flex-nowrap overflow-x-auto">
//               {areaOptions.map((option) => {
//                 const isSelected = selectedAvailability === option;
//                 return (
//                   <div
//                     key={option}
//                     onClick={() => setSelectedAvailability(option)}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all text-sm font-medium
//           ${isSelected
//                         ? "bg-[#1218280D] border-[#2450A0] text-[#2450A0]"
//                         : "bg-[#1218280D] border-gray-300 text-[#121828] hover:bg-[#f5faff]"
//                       }`}
//                   >
//                     <div
//                       className={`w-6 h-6 flex items-center justify-center rounded-[8px] border transition-all duration-200
//             ${isSelected
//                           ? "border-[#2450A0] bg-[#1218280D]"
//                           : "border-gray-300 bg-white"
//                         }`}
//                     >
//                       {isSelected && (
//                         <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]"></div>
//                       )}
//                     </div>
//                     {option}
//                   </div>
//                 );
//               })}
//             </div>


//             {/* Date Picker */}
//             {/* <div className="mb-4">
//               <label className="block text-[16px] font-semibold text-[#0A0909] mb-1">
//                 Select Date<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 placeholder="06/07/2025"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
//               />
//             </div> */}
//             <div className="mb-4 relative">
//               <label className="block text-[16px] font-semibold text-[#0A0909] mb-1"style={{ fontFamily: "Poppins, sans-serif" }}>
//                 Select Date<span className="text-red-500">*</span>
//               </label>

//               <input
//                 type="text"
//                 placeholder="06/07/2025"
//                 value={selectedDate}
//                 onFocus={(e) => (e.target.type = "date")}
//                 onBlur={(e) => {
//                   if (!e.target.value) e.target.type = "text";
//                 }}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
//               />

//               <img
//                 src="/calender.png" // public folder me PNG
//                 alt="calendar"
//                 className="absolute right-4 top-12 -translate-y-1/2 w-5 h-5 pointer-events-none"
//               />
//             </div>


//             {/* Time Picker */}
//             {/* <div className="mb-4">
//               <label className="block text-[16px] font-semibold text-[#0A0909] mb-1">
//                 Select Time<span className="text-red-500">*</span>
//               </label>
//               <input
//                 placeholder="06:15.00"
//                 type="time"
//                 value={selectedTime}
//                 onChange={(e) => setSelectedTime(e.target.value)}
//                 className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
//               />
//             </div> */}
//             <div className="mb-4 relative">
//               <label className="block text-[16px] font-semibold text-[#0A0909] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
//                 Select Time<span className="text-red-500">*</span>
//               </label>

//               <input
//                 type="text"
//                 placeholder="06:15.00"
//                 value={selectedTime}
//                 onFocus={(e) => (e.target.type = "time")}
//                 onBlur={(e) => {
//                   if (!e.target.value) e.target.type = "text";
//                 }}
//                 onChange={(e) => setSelectedTime(e.target.value)}
//                 className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
//               />

//               <img
//                 src="/timedate.png" // Public folder me apka clock PNG
//                 alt="clock"
//                 className="absolute right-4 top-12 -translate-y-1/2 w-5 h-5 pointer-events-none"
//               />
//             </div>


//             {/* Save & Next Button */}
//             <div className="text-right pt-5">
//               <button
//                 style={{ marginRight: "147px" }}
//                 type="submit"
//                 className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full md:w-[40%]"
//               >
//                 SAVE & NEXT
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }


// AVAILBILITY

"use client";
import React, { useState } from "react";

const Step4: React.FC = () => {
  const [preferredTenants, setPreferredTenants] = useState<string[]>(["Anyone"]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]); // ✅ Removed formData
  const [furnishing, setFurnishing] = useState("Semi-Furnished");
  const [parking, setParking] = useState("Both");
  const [description, setDescription] = useState("");

  // const areaOptions = [
  //   "SECTOR-7 EXT",
  //   "SECTOR-5 (with part of-sec, 3 & 6)",
  //   "HOUSING BOARD SEC-7",
  //   "SECTOR-9",
  //   "SECTOR-9A",
  //   "SECTOR-10",
  // ];

  const toggleTenant = (tenant: string) => {
    if (tenant === "Anyone") {
      setPreferredTenants(["Anyone"]);
    } else {
      setPreferredTenants((prev) =>
        prev.includes(tenant)
          ? prev.filter((t) => t !== tenant)
          : [...prev.filter((t) => t !== "Anyone"), tenant]
      );
    }
  };

  // ✅ Added missing toggleArea
  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area)
        ? prev.filter((a) => a !== area)
        : [...prev, area]
    );
  };

  return (
    <form className="space-y-6 px-4 md:px-[300px] py-6">
      {/* Preferred Areas */}
      {/* Preferred Tenants */}
      <div>
        <label className="text-[#0A0909] text-[16px] font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
          Preferred Tenants <span className="text-red-500">*</span>
        </label>

        <div className="flex  text[14px] text-bold flex-wrap gap-8 w-full px-4 py-3" style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {["Anyone", "Family", "Company", "Bachelor Female", "Bachelor Male"].map((tenant) => {
            const isSelected = preferredTenants.includes(tenant);
            return (
              <div
                key={tenant}
                onClick={() => toggleTenant(tenant)}
                style={{ padding: '14px', borderRadius: '12px', }}
                className={`flex items-center text[14px] text-bold gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all
            ${isSelected
                    ? "bg-[#1218280D] border-[#2450A0] text-[#2450A0]"
                    : "bg-[#1218280D] border-gray-300 text-[#121828] hover:bg-[#f5faff]"}`}
              >
                {/* Circle */}
                <div
                  onClick={() => (!isSelected)}
                  className={`w-6 h-6 flex items-center justify-center rounded-[8px] border transition-all duration-200
    ${isSelected ? "border-[#2450A0] bg-[#F0F4FF]" : "border-gray-300 bg-white"}
  `}
                >
                  {isSelected && (
                    <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]"></div>
                  )}
                </div>

                <span className="text-sm font-medium">{tenant}</span>
              </div>
            );
          })}
        </div>
      </div>


      {/* Furnishing */}
      <div>
        <label
          className="text-[#0A0909] text-[16px] font-bold mb-2 block"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Furnishing <span className="text-red-500">*</span>
        </label>

        <div className="relative w-full">
          <select
            value={furnishing}
            onChange={(e) => setFurnishing(e.target.value)}
            className="w-full border text-[#0A090966] border-gray-300 rounded-full px-4 py-3 pr-12 focus:outline-none appearance-none"
          >
            <option value="Fully-Furnished">Fully-Furnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>

          {/* Arrow PNG */}
          <img
            src="/Vector.png" // make sure this is in /public folder
            alt="arrow"
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-2"
          />
        </div>
      </div>


      {/* Parking */}
      <div>
        <label
          className="text-[#0A0909] text-[16px] font-bold mb-2 block"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Parking <span className="text-red-500">*</span>
        </label>

        <div className="relative w-full">
          <select
            value={parking}
            onChange={(e) => setParking(e.target.value)}
            className="w-full text-[#0A090966] border border-gray-300 rounded-full px-4 py-3 pr-12 focus:outline-none appearance-none"
          >
            <option value="None">None</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Both">Both</option>
          </select>

          {/* Arrow PNG */}
          <img
            src="/Vector.png" // make sure it's in /public folder
            alt="arrow"
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-2"
          />
        </div>
      </div>


      {/* Description */}
      <div>
        <label className="text-[#0A0909] text-[16px] font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Description <span className="text-red-500">*</span>
        </label>
        <div className="relative w-full">
          <textarea
            placeholder="Write A Message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
            rows={3}
          />
        </div>
      </div>

      {/* Save & Next */}
      <div className="col-span-2 text-right pt-5">
        <button
          style={{ marginRight: "147px" }}
          type="submit"

          style={{ fontFamily: "Poppins, sans-serif" }}
          className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full md:w-[40%] "
        >
          SAVE & NEXT
        </button>
      </div>
    </form>
  );
};

export default Step4;
