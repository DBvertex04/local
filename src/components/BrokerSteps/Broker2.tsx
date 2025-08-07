"use client";

import Image from "next/image";
import { useEffect } from "react";

interface FacilityItem {
  label: string;
  icon: string;
}

interface FormData {
  businessType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  commodities: string[];
  firmName?: string;
  agreedToTerms: boolean;
}

interface FormErrors {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  commodities: boolean;
  agreedToTerms: boolean;
}

interface Step2Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formErrors: FormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  handleNext: () => void;
  handleBack: () => void;
}

const furnishings: FacilityItem[] = [
  { label: "Apartment", icon: "/Broker/Apartment.png" },
  { label: "Independent House", icon: "/Broker/house.png" },
  { label: "Duplex", icon: "/Broker/duplex.png" },
  { label: "Independent Floor", icon: "/Broker/independent_house.png" },
  { label: "Villa", icon: "/Broker/Raid.png" },
  { label: "Studio", icon: "/Broker/studio.png" },
  { label: "Penthouse", icon: "/Broker/Yurt.png" },
  { label: "Plot", icon: "/Broker/Parking.png" },
  { label: "Farm House", icon: "/Broker/Farm.png" },
  { label: "Agricultural Land", icon: "/Broker/agriculture.png" },
];

const societyAmenities: FacilityItem[] = [
  { label: "Office", icon: "/Broker/office.png" },
  { label: "Retail Shop", icon: "/Broker/Group.png" },
  { label: "Showroom", icon: "/Broker/showroom.png" },
  { label: "Warehouse", icon: "/Broker/warehouse.png" },
  { label: "Plot", icon: "/Broker/Tiny.png" },
  { label: "Others", icon: "/Broker/Yurt.png" },
];

export default function Step2({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
  handleNext,
  handleBack,
}: Step2Props) {
  useEffect(() => {
    console.log("FormData:", formData);
    console.log("FormErrors:", formErrors);
    console.log("Furnishings:", furnishings);
    console.log("Society Amenities:", societyAmenities);
  }, [formData, formErrors]);

  const toggleFacility = (item: string) => {
    setFormData((prev) => {
      const currentCommodities = Array.isArray(prev.commodities) ? prev.commodities : [];
      if (currentCommodities.includes(item)) {
        return {
          ...prev,
          commodities: currentCommodities.filter((f) => f !== item),
        };
      } else {
        return { ...prev, commodities: [...currentCommodities, item] };
      }
    });
    if (formErrors.commodities) {
      setFormErrors((prev) => ({ ...prev, commodities: false }));
    }
  };

  return (
    <form className="space-y-5">
      <div className="flex items-start gap-2 bg-[#e7eef9] p-2 rounded-md w-full md:w-[600px]">
        <Image
          src="/broker/icon.png"
          alt="Info Icon"
          width={16}
          height={16}
          className="flex-shrink-0"
        />
        <p
          style={{ fontSize: "13px", fontWeight: "500" }}
          className="text-[#2450A0]"
        >
          All things chosen next are for leads that will be provided so choose
          carefully.
        </p>
      </div>

      {/* 🔹 Residential Section */}
      <div className="w-full">
        <h3 className="font-semibold mb-4 text-[15px]">
          Residential<span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4" style={{width:'874px'}}>
          {furnishings.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => toggleFacility(item.label)}
              className={`flex items-center justify-start rounded-lg p-2 sm:p-3 md:p-4 transition-all h-[60px] sm:h-[100px] md:flex-col md:justify-center ${
                formData.commodities.includes(item.label)
                  ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]"
                  : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"
              }`}
            >
              <div className="w-[24px] sm:w-[35px] md:w-[44px] flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] sm:w-[35px] sm:h-[35px] md:w-[44px] md:h-[50px]"
                />
              </div>
              <span
                key={`label-${item.label}`}
                className={`font-medium ml-2 md:ml-0 ${
                  formData.commodities.includes(item.label)
                    ? "text-[#0052CC]"
                    : "text-[#51535a]"
                } text-[11px] sm:text-[12px] md:text-[15px] md:mt-2 sm:mt-0`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Commercial Section */}
      <div className="w-full">
        <h3 className="font-semibold mb-4 text-[15px]">
          Commercial<span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4" style={{width:'874px'}}>
          {societyAmenities.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => toggleFacility(item.label)}
              className={`flex items-center justify-start rounded-lg p-2 sm:p-3 md:p-4 transition-all h-[60px] sm:h-[100px] md:flex-col md:justify-center ${
                formData.commodities.includes(item.label)
                  ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]"
                  : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"
              }`}
            >
              <div className="w-[24px] sm:w-[35px] md:w-[44px] flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] sm:w-[35px] sm:h-[35px] md:w-[44px] md:h-[50px]"
                />
              </div>
              <span
                key={`label-${item.label}`}
                className={`font-medium ml-2 md:ml-0 ${
                  formData.commodities.includes(item.label)
                    ? "text-[#0052CC]"
                    : "text-[#51535a]"
                } text-[11px] sm:text-[12px] md:text-[15px] md:mt-2 sm:mt-0`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 🔺 Validation Message */}
      {formErrors.commodities && (
        <p className="text-red-500 text-sm mt-1">
          At least one commodity is required
        </p>
      )}

      {/* 🔻 Navigation Buttons */}
      <div className="flex justify-between" style={{width:'874px'}}>
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-300 text-gray-900 px-6 py-2 rounded-full w-[48%]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-[48%]"
        >
          Save and Next
        </button>
      </div>
    </form>
  );
}