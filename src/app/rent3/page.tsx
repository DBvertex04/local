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
//             <label className="text-[16px] font-semibold text-[#0A0909] block mb-2">
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

//   return (
//     <div
//       className="min-h-screen flex justify-center items-center bg-gray-50 p-4"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="mt-8 bg-white p-6 rounded-xl shadow-sm w-full max-w-2xl"
//       >
//         <label className="block text-[16px] font-semibold text-[#0A0909] mb-2">
//           Availability<span className="text-red-500">*</span>
//         </label>

//         {/* Availability Buttons */}
//         <div className="flex justify-between gap-2 mb-4">
//           {["Everyday", "Weekday", "Weekend"].map((label) => (
//             <button
//               type="button"
//               key={label}
//               onClick={() => setSelectedAvailability(label)}
//               className={`flex-1 border rounded-full py-2 text-sm font-medium transition ${
//                 selectedAvailability === label
//                   ? "bg-blue-50 border-blue-500 text-blue-600"
//                   : "bg-white border-gray-300 text-gray-500"
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>

//         {/* Date Picker */}
//         <div className="mb-4">
//           <label className="block text-[15px] font-semibold text-[#0A0909] mb-1">
//             Select Date<span className="text-red-500">*</span>
//           </label>
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
//           />
//         </div>

//         {/* Time Picker */}
//         <div className="mb-4">
//           <label className="block text-[15px] font-semibold text-[#0A0909] mb-1">
//             Select Time<span className="text-red-500">*</span>
//           </label>
//           <input
//             type="time"
//             value={selectedTime}
//             onChange={(e) => setSelectedTime(e.target.value)}
//             className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
//           />
//         </div>

//         {/* Save & Next Button */}
//         <button
//           type="submit"
//           className="w-full bg-[#2450A0] text-white py-3 rounded-full text-sm font-semibold"
//         >
//           SAVE & NEXT
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";

const Step4: React.FC = () => {
  const [preferredTenants, setPreferredTenants] = useState<string[]>(["Anyone"]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]); // ✅ Removed formData
  const [furnishing, setFurnishing] = useState("Semi-Furnished");
  const [parking, setParking] = useState("Both");
  const [description, setDescription] = useState("");

  const areaOptions = [
    "SECTOR-7 EXT",
    "SECTOR-5 (with part of-sec, 3 & 6)",
    "HOUSING BOARD SEC-7",
    "SECTOR-9",
    "SECTOR-9A",
    "SECTOR-10",
  ];

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
    <form className="space-y-6 px-4 md:px-[200px] py-6">
      {/* Preferred Areas */}
     {/* Preferred Tenants */}
<div>
  <label className="block text-[16px] font-semibold mb-2">
    Preferred Tenants <span className="text-red-500">*</span>
  </label>

  <div className="flex flex-wrap gap-3 w-full px-4 py-3">
    {["Anyone", "Family", "Company", "Bachelor Female", "Bachelor Male"].map((tenant) => {
      const isSelected = preferredTenants.includes(tenant);
      return (
        <div
          key={tenant}
          onClick={() => toggleTenant(tenant)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all
            ${isSelected
              ? "bg-[#E7ECF5] border-[#2450A0] text-[#2450A0]"
              : "bg-white border-gray-300 text-gray-600 hover:bg-[#f5faff]"}`}
        >
          {/* Circle */}
          <div
            className={`w-4 h-4 rounded-full border flex items-center justify-center
              ${isSelected ? "border-[#2450A0]" : "border-gray-400"}`}
          >
            {isSelected && (
              <div className="w-2 h-2 rounded-full bg-[#2450A0]" />
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
        <label className="block text-[16px] font-semibold mb-2">
          Furnishing <span className="text-red-500">*</span>
        </label>
        <select
          value={furnishing}
          onChange={(e) => setFurnishing(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none"
        >
          <option value="Fully-Furnished">Fully-Furnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>

      {/* Parking */}
      <div>
        <label className="block text-[16px] font-semibold mb-2">
          Parking <span className="text-red-500">*</span>
        </label>
        <select
          value={parking}
          onChange={(e) => setParking(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none"
        >
          <option value="None">None</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Both">Both</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-[16px] font-semibold mb-2">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder="Write A Message"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
          rows={3}
        />
      </div>

      {/* Save & Next */}
      <div className="col-span-2 text-right pt-5">
        <button
          style={{ marginRight: "147px" }}
          type="submit"
          className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full md:w-[40%]"
        >
          SAVE & NEXT
        </button>
      </div>
    </form>
  );
};

export default Step4;
