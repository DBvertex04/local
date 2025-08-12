"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Step1Props {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    firmName?: string;
    officeAddress?: string;
    agreedToTerms: boolean;
  };
  formErrors: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    phone: boolean;
    agreedToTerms: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const Step1: React.FC<Step1Props> = ({
  formData,
  formErrors,
  handleChange,
  handleCheckbox,
  handleNext,
}) => {
  // Local state for property-related fields
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [bhkType, setBhkType] = useState("");

  return (
    <>
      {/* Property Details Form */}
      <form className="mt-6 space-y-5">
        {/* Location */}
        <input
          type="text"
          placeholder="Enter Rental House Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
        />

        {/* Property Available For */}
        <div>
       
            <div>
  <label style={{ fontSize: "15px", fontWeight: "600", color: "#0A0909" }}>
    Property Available For
  </label>
 
  <div className="flex gap-4 mt-2">
    {[
      { value: "only_rent", label: "Only Rent" },
      { value: "only_lease", label: "Only Lease" },
    ].map((option) => {
      const isSelected = propertyType === option.value;
      return (
        <div
          key={option.value}
          onClick={() => setPropertyType(option.value)}
          className={`flex items-center gap-3 px-4 py-3 rounded-2xl border font-semibold cursor-pointer transition-all
            ${
              isSelected
                ? "bg-[#E7ECF5] border-[#2450A0] text-[#2450A0]"
                : "bg-white border-[#E5E7EB] text-[#121828]/60 hover:bg-[#f5faff]"
            }`}
          style={{ borderWidth: "1.6px", maxWidth: "200px" }}
        >
          {/* Custom Radio Circle */}
          <div className="flex items-center justify-center w-5 h-5">
            <div
              style={{ padding: "11px", borderRadius: "20px", backgroundColor: "white" }}
              className={`w-5 h-5 rounded-full border-1 flex items-center justify-center transition-all duration-200
                ${isSelected ? "border-[#2450A0]" : "border-[#D1D5DB]"}`}
            >
              <div
                style={{ padding: "7px", borderRadius: "12px" }}
                className={`w-3 h-3 rounded-full transition-all duration-200
                  ${isSelected ? "bg-[#2450A0] shadow-[0_1px_6px_0_#c192f1]" : "bg-[#E5E7EB]"}`}
              ></div>
            </div>
          </div>
 
          <span style={{fontSize:'14px',fontWeight:'500'}}>{option.label}</span>
        </div>
      );
    })}
  </div>
</div>
 
        </div>

        {/* Property Name */}
        <div>
          <label className="block text-[16px] font-semibold text-[#0A0909] mb-2 mt-8">
            Property Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Property Name"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
          />
        </div>

        {/* BHK Type */}
       <div>
  <label className="block font-semibold mb-2 text-gray-900">BHK Type</label>
  <div className="grid grid-cols-3 gap-3">
    {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map((type) => {
      const isSelected = bhkType === type;
      return (
        <div
          key={type}
          onClick={() => setBhkType(type)}
          className={`flex items-center gap-4 px-4 py-4 rounded-2xl border font-extrabold cursor-pointer transition-all
            ${
              isSelected
                ? "bg-[#E7ECF5] border-[#2450A0] text-[#2450A0]"
                : "bg-white border-[#E5E7EB] text-[#121828]/60 hover:bg-[#f5faff]"
            }`}
          style={{ borderWidth: "1.6px", maxWidth: "200px" }}
        >
          {/* Custom Radio */}
          <div className="flex items-center justify-center w-5 h-5">
            <div
              style={{ padding: "14px", borderRadius: "12px", backgroundColor: "white" }}
              className={`w-5 h-5 rounded-full border-1 flex items-center justify-center transition-all duration-200
                ${isSelected ? "border-[#2450A0]" : "border-[#D1D5DB]"}`}
            >
              <div
                style={{ padding: "7px", borderRadius: "3px" }}
                className={`w-3 h-3 rounded-full transition-all duration-200
                  ${isSelected ? "bg-[#2450A0] shadow-[0_1px_6px_0_#c192f1]" : "bg-[#E5E7EB]"}`}
              ></div>
            </div>
          </div>
 
          <span style={{fontSize:'14px',fontWeight:'600'}}>{type}</span>
        </div>
      );
    })}
  </div>
</div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-[#2450A0] text-white py-3 rounded-lg font-medium"
        >
          SAVE & NEXT
        </button>
      </form>
    </>
  );
};

export default Step1;
