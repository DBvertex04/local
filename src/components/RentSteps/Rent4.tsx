// "use client";

// import React, { useState } from "react";
// import Step4 from "../BrokerSteps/Broker4";

// const Step1: React.FC = () => {
//   const [preferredTenants, setPreferredTenants] = useState<string[]>(["Anyone"]);
//   const [furnishing, setFurnishing] = useState("Semi-Furnished");
//   const [parking, setParking] = useState("Both");
//   const [description, setDescription] = useState("");

//   const toggleTenant = (tenant: string) => {
//     if (tenant === "Anyone") {
//       setPreferredTenants(["Anyone"]);
//     } else {
//       setPreferredTenants((prev) =>
//         prev.includes(tenant)
//           ? prev.filter((t) => t !== tenant)
//           : [...prev.filter((t) => t !== "Anyone"), tenant]
//       );
//     }
//   };

//   return (
//     <form className="space-y-6">
//       {/* Preferred Tenants */}
//       <div>
//         <label className="block text-[16px] font-semibold mb-2">Preffered Tenants</label>
//         <div className="flex flex-wrap gap-3">
//           {["Anyone", "Family", "Company", "Bachelor Female", "Bachelor Male"].map((tenant) => (
//             <button
//               type="button"
//               key={tenant}
//               onClick={() => toggleTenant(tenant)}
//               className={`px-4 py-2 rounded-lg border ${
//                 preferredTenants.includes(tenant)
//                   ? "bg-blue-100 border-blue-500 text-blue-700"
//                   : "bg-gray-100 border-gray-300 text-gray-500"
//               }`}
//             >
//               {tenant}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Furnishing */}
//       <div>
//         <label className="block text-[16px] font-semibold mb-2">
//           Furnishing <span className="text-red-500">*</span>
//         </label>
//         <select
//           value={furnishing}
//           onChange={(e) => setFurnishing(e.target.value)}
//           className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
//         >
//           <option value="Fully-Furnished">Fully-Furnished</option>
//           <option value="Semi-Furnished">Semi-Furnished</option>
//           <option value="Unfurnished">Unfurnished</option>
//         </select>
//       </div>

//       {/* Parking */}
//       <div>
//         <label className="block text-[16px] font-semibold mb-2">
//           Parking <span className="text-red-500">*</span>
//         </label>
//         <select
//           value={parking}
//           onChange={(e) => setParking(e.target.value)}
//           className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
//         >
//           <option value="None">None</option>
//           <option value="Car">Car</option>
//           <option value="Bike">Bike</option>
//           <option value="Both">Both</option>
//         </select>
//       </div>

//       {/* Description */}
//       <div>
//         <label className="block text-[16px] font-semibold mb-2">
//           Description <span className="text-red-500">*</span>
//         </label>
//         <textarea
//           placeholder="Write A Message"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
//           rows={3}
//         />
//       </div>

//       {/* Save & Next */}
//       <button
//         type="submit"
//         className="w-full bg-[#2450A0] text-white py-3 rounded-lg font-medium"
//       >
//         SAVE & NEXT
//       </button>
//     </form>
//   );
// };

// export default Step4;
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
                style={{ padding: '14px', borderRadius: '12px', backgroundColor: 'white' }}
                className={`flex items-center text[14px] text-bold gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all
            ${isSelected
                    ? "bg-[#1218280D] border-[#2450A0] text-[#2450A0]"
                    : "bg-white border-gray-300 text-[#121828] hover:bg-[#f5faff]"}`}
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

