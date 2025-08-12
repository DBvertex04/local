"use client";

import React, { useState } from "react";
import Step4 from "../BrokerSteps/Broker4";

const Step1: React.FC = () => {
  const [preferredTenants, setPreferredTenants] = useState<string[]>(["Anyone"]);
  const [furnishing, setFurnishing] = useState("Semi-Furnished");
  const [parking, setParking] = useState("Both");
  const [description, setDescription] = useState("");

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

  return (
    <form className="space-y-6">
      {/* Preferred Tenants */}
      <div>
        <label className="block text-[16px] font-semibold mb-2">Preffered Tenants</label>
        <div className="flex flex-wrap gap-3">
          {["Anyone", "Family", "Company", "Bachelor Female", "Bachelor Male"].map((tenant) => (
            <button
              type="button"
              key={tenant}
              onClick={() => toggleTenant(tenant)}
              className={`px-4 py-2 rounded-lg border ${
                preferredTenants.includes(tenant)
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-gray-100 border-gray-300 text-gray-500"
              }`}
            >
              {tenant}
            </button>
          ))}
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
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
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
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
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
      <button
        type="submit"
        className="w-full bg-[#2450A0] text-white py-3 rounded-lg font-medium"
      >
        SAVE & NEXT
      </button>
    </form>
  );
};

export default Step4;
