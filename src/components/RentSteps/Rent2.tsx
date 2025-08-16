// "use client";

// import Image from "next/image";

// interface FacilityItem {
//   label: string;
//   icon: string;
// }

// interface FormData {
//   businessType: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   commodities: string[];
//   firmName?: string;
//   agreedToTerms: boolean;
// }

// interface FormErrors {
//   firstName: boolean;
//   lastName: boolean;
//   email: boolean;
//   phone: boolean;
//   commodities: boolean;
//   agreedToTerms: boolean;
// }

// interface Step2Props {
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
//   formErrors: FormErrors;
//   setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
//   handleNext: () => void;
//   handleBack: () => void;
// }

// const furnishings: FacilityItem[] = [
//   { label: "Apartment", icon: "/Broker/Apartment.png" },
//   { label: "Independent House", icon: "/Broker/house.png" },
//   { label: "Duplex", icon: "/Broker/duplex.png" },
//   { label: "Independent Floor", icon: "/Broker/independent_house.png" },
//   { label: "Villa", icon: "/Broker/Raid.png" },
//   { label: "Studio", icon: "/Broker/studio.png" },
//   { label: "Penthouse", icon: "/Broker/Yurt.png" },
//   { label: "Plot", icon: "/Broker/Parking.png" },
//   { label: "Farm House", icon: "/Broker/Farm.png" },
//   { label: "Agricultural Land", icon: "/Broker/agriculture.png" },
// ];

// const societyAmenities: FacilityItem[] = [
//   { label: "Office", icon: "/Broker/office.png" },
//   { label: "Retail Shop", icon: "/Broker/Group.png" },
//   { label: "Showroom", icon: "/Broker/showroom.png" },
//   { label: "Warehouse", icon: "/Broker/warehouse.png" },
//   { label: "Plot", icon: "/Broker/Tiny.png" },
//   { label: "Others", icon: "/Broker/Yurt.png" },
// ];

// export default function Step2({
//   formData,
//   setFormData,
//   formErrors,
//   setFormErrors,
//   handleNext,
//   handleBack,
// }: Step2Props) {
//   const toggleFacility = (item: string) => {
//     setFormData((prev) => {
//       const currentCommodities = prev.commodities || [];
//       if (currentCommodities.includes(item)) {
//         return {
//           ...prev,
//           commodities: currentCommodities.filter((f) => f !== item),
//         };
//       } else {
//         return { ...prev, commodities: [...currentCommodities, item] };
//       }
//     });
//     if (formErrors.commodities) {
//       setFormErrors((prev) => ({ ...prev, commodities: false }));
//     }
//   };

//   return (
//     <form className="space-y-5">
//       <div className="flex items-start gap-2 bg-[#e7eef9] p-2 rounded-md w-full md:w-[600px]">
//         <img
//           src="/broker/icon.png"
//           alt="Info Icon"
//           className="w-4 h-4 mt-[1px] flex-shrink-0"
//         />

//       </div>

//       {/* 🔹 Residential Section */}
//       <div className="w-full md:w-[840px]">
//         <h3 className="font-semibold mb-4 text-[15px]">
//           Residential<span className="text-red-500">*</span>
//         </h3>
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
//           {furnishings.map((item) => (
//             <button
//               key={item.label}
//               type="button"
//               onClick={() => toggleFacility(item.label)}
//               className={`flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-0 rounded-lg p-2 sm:p-3 md:p-4 transition-all 
//           h-[60px] sm:h-[70px] md:h-[110px] 
//           ${
//             formData.commodities.includes(item.label)
//               ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]"
//               : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"
//           }`}
//             >
//               <img
//                 src={item.icon}
//                 alt={item.label}
//                 className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
//               />
//               <span
//                 className={`font-medium text-left md:text-center ${
//                   formData.commodities.includes(item.label)
//                     ? "text-[#0052CC]"
//                     : "text-[rgba(113,117,128,1)]"
//                 } text-[10px] sm:text-[13px] md:text-[15px]`}
//               >
//                 {item.label}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 🔹 Commercial Section */}
//       <div className="w-full md:w-[840px] mt-6">
//         <h3 className="font-semibold mb-4 text-[15px]">
//           Commercial<span className="text-red-500">*</span>
//         </h3>
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
//           {societyAmenities.map((item) => (
//             <button
//               key={item.label}
//               type="button"
//               onClick={() => toggleFacility(item.label)}
//               className={`flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-0 rounded-lg p-2 sm:p-3 md:p-4 transition-all 
//           h-[60px] sm:h-[70px] md:h-[110px] 
//           ${
//             formData.commodities.includes(item.label)
//               ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]"
//               : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"
//           }`}
//             >
//               <img
//                 src={item.icon}
//                 alt={item.label}
//                 className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
//               />
//               <span
//                 className={`font-medium text-left md:text-center ${
//                   formData.commodities.includes(item.label)
//                     ? "text-[#0052CC]"
//                     : "text-[rgba(113,117,128,1)]"
//                 } text-[10px] sm:text-[12px] md:text-[15px]`}
//               >
//                 {item.label}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 🔺 Validation Message */}
//       {formErrors.commodities && (
//         <p className="text-red-500 text-sm mt-1">
//           At least one commodity is required
//         </p>
//       )}

//       {/* 🔻 Navigation Buttons */}
//       <div
//         className="flex justify-between w-[343px] md:w-[850px]"
//         style={{ marginTop: "18px" }}
//       >
//         {/* Back button — sirf desktop me dikhe */}
//         <button
//           type="button"
//           onClick={handleBack}
//           className="hidden md:block bg-gray-300 text-gray-900 px-6 py-2 rounded-full w-[48%]"
//         >
//           Back
//         </button>

//         {/* Save and Next — har screen pe dikhe */}
//         <button
//           type="button"
//           onClick={handleNext}
//           className="bg-[#2450A0] text-white px-6 py-2 rounded-full md:w-[48%] w-full"
//         >
//           Save and Next
//         </button>
//       </div>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
export default function Uploadlisting() {
  const [propertyTitle, setPropertyTitle] = useState("");
  const [expectedPrice, setExpectedPrice] = useState("");
  const [description, setDescription] = useState("");
  const [shortPrice, setShortPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ propertyTitle, expectedPrice, description });
  };

  const formatIndianPrice = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "") return "";
    return Number(numericValue).toLocaleString("en-IN");
  };

  const getShortIndianCurrencyFormat = (amount: string): string => {
    const number = parseInt(amount.replace(/,/g, "") || "0");

    if (number >= 10000000) {
      return `₹ ${(number / 10000000).toFixed(1)} Cr`;
    } else if (number >= 100000) {
      return `₹ ${(number / 100000).toFixed(1)} Lacs`;
    } else if (number >= 1000) {
      return `₹ ${(number / 1000).toFixed(1)} K`;
    } else {
      return `₹ ${number}`;
    }
  };

  const handleExpectedPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatIndianPrice(input);
    setExpectedPrice(formatted);
    setShortPrice(getShortIndianCurrencyFormat(formatted));
  };






  // Stepper configuration
  const steps = [
    { label: "Property Details" },
    { label: "Price Details" },
    { label: "Availability" },
    { label: "Others" },
    { label: "Upload Images" },
  ];
  const activeIndex = 1; // "Price Details" is the current step
  const [checked, setChecked] = useState(false)

  return (

    <div
      className="relative text-gray-900  min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />



      {/* Header */}

      {/* Main Section */}
      <main className=" pb-12 flex justify-center relative z-10" >

        <div className="w-full px-4" style={{ maxWidth: "1090px" }}>




          {/* Stepper */}


          {/* Expected Rent */}
          <div className="mt-8 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              Expected Rent<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#0A090926] rounded-full px-3 py-2 bg-white text-[#2450A0]">
              <span className="text-blue-600 font-medium">₹</span>
              <input
                type="text"
                value={expectedPrice}
                onChange={handleExpectedPriceChange}
                placeholder="0"
                className="flex-1 ml-2 focus:outline-none"
              />
              <span className="text-[#0A090966] text-[15px]">/Month</span>
            </div>
            {shortPrice && (
              <p className=" absolute right-3 text-[#2450A0] text-sm mt-1">{shortPrice}</p>
            )}
          </div>

          {/* Expected Deposit */}
          <div className="mt-5 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              Expected Deposit<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#0A090926] rounded-full px-3 py-2 bg-white text-[#2450A0]">
              <span className="text-blue-600 font-medium">₹</span>
              <input
                type="text"
                placeholder="0"
                className="flex-1 ml-2 focus:outline-none"
              />
              <span className="text-[#0A090966] text-[15px]">/Month</span>
            </div>
            <p className=" absolute right-3 text-[#2450A0] text-sm mt-1">₹ 1.2 Lacs</p>
          </div>

          {/* Rent Negotiable */}
          <div className="mt-8 flex items-center gap-2">
            <div
              onClick={() => setChecked(!checked)}
              className={`w-6 h-6 rounded-[8px] border flex items-center justify-center cursor-pointer transition-all
      ${checked ? "border-[#2450A0] shadow-[0_0_6px_2px_rgba(150,71,255,0.3)]" : "border-gray-400"}
    `}
            >
              {checked && (
                <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]"></div>
              )}
            </div>

            <label
              onClick={() => setChecked(!checked)}
              className="text-[14px] text-[#0A0909] font-semibold cursor-pointer"
            >
              Rent Negotiable
            </label>
          </div>


          {/* Monthly Maintenance */}
          {/* <div className="mt-6">
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2">
              Monthly Maintenance<span className="text-red-500">*</span>
              
            </label>
            <select className="w-full border rounded-full px-3 py-2 text-sm text-[#0A090966] bg-white focus:outline-none">
              
              <option>Maintenance Included</option>
              <option>Extra Charges</option>
            </select>
            
          </div> */}
          <div className="mt-6 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2">
              Monthly Maintenance<span className="text-red-500">*</span>
            </label>

            <select
              className="w-full border rounded-full px-3 py-2 pr-10 text-sm text-[#0A090966] bg-white focus:outline-none appearance-none"
            >
              <option>Maintenance Included</option>
              <option>Extra Charges</option>
            </select>

            <img
              src="/vector.png" // apka PNG public folder me hona chahiye
              alt="arrow"
              className="absolute right-3 top-12 -translate-y-1/2 w-4 h-2 pointer-events-none"
            />
          </div>


          {/* Save & Next Button */}
          <div className="col-span-2 text-right pt-5">
            <button
              onClick={handleSubmit}
              style={{ marginRight: "147px" }}
              type="submit"
              className="bg-[#2450A0] text-white px-6 py-2 y- rounded-full w-full md:w-[40%]"
            >
              SAVE & NEXT
            </button>
          </div>


        </div>
      </main>
    </div>
  );
}

