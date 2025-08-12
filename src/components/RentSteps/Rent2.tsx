"use client";

import Image from "next/image";

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
  const toggleFacility = (item: string) => {
    setFormData((prev) => {
      const currentCommodities = prev.commodities || [];
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
        <img
          src="/broker/icon.png"
          alt="Info Icon"
          className="w-4 h-4 mt-[1px] flex-shrink-0"
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
      <div className="w-full md:w-[840px]">
        <h3 className="font-semibold mb-4 text-[15px]">
          Residential<span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {furnishings.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => toggleFacility(item.label)}
              className={`flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-0 rounded-lg p-2 sm:p-3 md:p-4 transition-all 
          h-[60px] sm:h-[70px] md:h-[110px] 
          ${
            formData.commodities.includes(item.label)
              ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]"
              : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"
          }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
              />
              <span
                className={`font-medium text-left md:text-center ${
                  formData.commodities.includes(item.label)
                    ? "text-[#0052CC]"
                    : "text-[rgba(113,117,128,1)]"
                } text-[10px] sm:text-[13px] md:text-[15px]`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Commercial Section */}
      <div className="w-full md:w-[840px] mt-6">
        <h3 className="font-semibold mb-4 text-[15px]">
          Commercial<span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {societyAmenities.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => toggleFacility(item.label)}
              className={`flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-0 rounded-lg p-2 sm:p-3 md:p-4 transition-all 
          h-[60px] sm:h-[70px] md:h-[110px] 
          ${
            formData.commodities.includes(item.label)
              ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]"
              : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"
          }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
              />
              <span
                className={`font-medium text-left md:text-center ${
                  formData.commodities.includes(item.label)
                    ? "text-[#0052CC]"
                    : "text-[rgba(113,117,128,1)]"
                } text-[10px] sm:text-[12px] md:text-[15px]`}
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
      <div
        className="flex justify-between w-[343px] md:w-[850px]"
        style={{ marginTop: "18px" }}
      >
        {/* Back button — sirf desktop me dikhe */}
        <button
          type="button"
          onClick={handleBack}
          className="hidden md:block bg-gray-300 text-gray-900 px-6 py-2 rounded-full w-[48%]"
        >
          Back
        </button>

        {/* Save and Next — har screen pe dikhe */}
        <button
          type="button"
          onClick={handleNext}
          className="bg-[#2450A0] text-white px-6 py-2 rounded-full md:w-[48%] w-full"
        >
          Save and Next
        </button>
      </div>
    </form>
  );
}
