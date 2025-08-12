// "use client";

// import { useState } from "react";
// import Header2 from "@/components/Header2";

// export default function Uploadlisting() {
//     const [propertyTitle, setPropertyTitle] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [description, setDescription] = useState("");
//     const [shortPrice, setShortPrice] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log({ propertyTitle, expectedPrice, description });
//     };

//     const formatIndianPrice = (value: string) => {
//         const numericValue = value.replace(/[^0-9]/g, "");
//         if (numericValue === "") return "";
//         return Number(numericValue).toLocaleString("en-IN");
//     };

//     const getShortIndianCurrencyFormat = (amount: string): string => {
//         const number = parseInt(amount.replace(/,/g, "") || "0");

//         if (number >= 10000000) {
//             return `₹ ${(number / 10000000).toFixed(1)} Cr`;
//         } else if (number >= 100000) {
//             return `₹ ${(number / 100000).toFixed(1)} Lacs`;
//         } else if (number >= 1000) {
//             return `₹ ${(number / 1000).toFixed(1)} K`;
//         } else {
//             return `₹ ${number}`;
//         }
//     };

//     const handleExpectedPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const input = e.target.value;
//         const formatted = formatIndianPrice(input);
//         setExpectedPrice(formatted);
//         setShortPrice(getShortIndianCurrencyFormat(formatted));
//     };

//     return (

//         <div
//             className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//             <link
//                 href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
//                 rel="stylesheet"
//             />

//             {/* Decorative Bubbles */}
//             <div className="relative">
//                 <img
//                     src="/bubble.png"
//                     alt="Bubble 2"
//                     className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
//                 />
//                 <img
//                     src="/bubble1.png"
//                     alt="Bubble 1"
//                     className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
//                 />
//             </div>

//             {/* Header */}
//             <Header2 />

//             {/* Main Section */}
//             <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: "35px" }}>

//                 <div className="w-full px-4" style={{ maxWidth: "1090px" }}>
//                     <div className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white" style={{ border: 'solid #0000001C', borderRadius: '16px' }}>
//                         <img
//                             src="/facilities/call.png"
//                             alt="Call Icon"
//                             className="w-[29px] h-[29px]"
//                         />
//                     </div>
//                     <h2 className="text-2xl font-[700] text-black" style={{ marginTop: '33px' }}>Rent a Home</h2>
//                     <p className="text-sm text-gray-500 mt-3">
//                         Fill out the form with your requirements and we’ll connect you with
//                         properties that match your needs fast, easy, and reliable.
//                     </p>

//                     {/* Form */}

//                 </div>
//             </main>
//         </div>
//     );
// }
// "use client";

// import { useState } from "react";
// import Header2 from "@/components/Header2";

// export default function Uploadlisting() {
//     const [location, setLocation] = useState("");
//     const [propertyType, setPropertyType] = useState("only_rent");
//     const [propertyName, setPropertyName] = useState("");
//     const [bhkType, setBhkType] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log({
//             location,
//             propertyType,
//             propertyName,
//             bhkType
//         });
//     };

//     const steps = [
//         { label: "Property Details", active: true },
//         { label: "Price Details", active: false },
//         { label: "Availability", active: false },
//         { label: "Others", active: false },
//         { label: "Upload Images", active: false },
//     ];

//     return (
//         <div
//             className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//             <link
//                 href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
//                 rel="stylesheet"
//             />

//             {/* Decorative Bubbles */}
//             <div className="relative">
//                 <img
//                     src="/bubble.png"
//                     alt="Bubble 2"
//                     className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
//                 />
//                 <img
//                     src="/bubble1.png"
//                     alt="Bubble 1"
//                     className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
//                 />
//             </div>

//             {/* Header */}
//             <Header2 />

//             {/* Main Section */}
//             <main
//                 className="pt-[120px] pb-12 relative z-10"
//                 style={{ top: "35px" }}
//             >
//                 <div className="max-w-[1090px] mx-auto px-4 flex flex-col md:flex-row gap-10">

//                     {/* LEFT COLUMN – VERTICAL STEPPER */}
//                     <div className="md:w-1/4">
//                         <div className="flex md:flex-col gap-6 md:gap-8">
//                             {steps.map((step, index) => (
//                                 <div key={index} className="flex items-center md:items-start gap-3">
//                                     {/* Step Icon */}
//                                     <div
//                                         className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
//                                             step.active ? "border-[#2450A0]" : "border-gray-300"
//                                         }`}
//                                     >
//                                         {step.active && (
//                                             <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
//                                         )}
//                                     </div>

//                                     {/* Step Label */}
//                                     <span
//                                         className={`text-sm ${
//                                             step.active ? "text-[#2450A0] font-medium" : "text-gray-500"
//                                         }`}
//                                     >
//                                         {step.label}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN – FORM */}
//                     <div className="flex-1">
//                         <div
//                             className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white"
//                             style={{ border: "solid #0000001C", borderRadius: "16px" }}
//                         >
//                             <img
//                                 src="/facilities/call.png"
//                                 alt="Call Icon"
//                                 className="w-[29px] h-[29px]"
//                             />
//                         </div>

//                         <h2 className="text-2xl font-[700] text-black mt-[33px]">
//                             Rent a Home
//                         </h2>
//                         <p className="text-sm text-gray-500 mt-3">
//                             Fill out the form with your requirements and we’ll connect you
//                             with properties that match your needs fast, easy, and reliable.
//                         </p>

//                         {/* FORM */}
//                         <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
//                             {/* Location */}
//                             <input
//                                 type="text"
//                                 placeholder="Enter Rental House Location"
//                                 value={location}
//                                 onChange={(e) => setLocation(e.target.value)}
//                                 className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
//                             />

//                             {/* Property Available For */}
//                             <div>
//                                 <label className="block text-[16px] font-semibold mb-2 text-[#0A0909] mt-5">
//                                     Property Available For
//                                 </label>
//                                 <div className="flex items-center gap-4">
//                                     <label
//                                         className={`flex items-center gap-2 cursor-pointer ${
//                                             propertyType === "only_rent"
//                                                 ? "text-[#2450A0] font-semibold"
//                                                 : "text-[#121828]"
//                                         }`}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="propertyType"
//                                             value="only_rent"
//                                             checked={propertyType === "only_rent"}
//                                             onChange={(e) => setPropertyType(e.target.value)}
//                                             className="accent-blue-600"
//                                         />
//                                         Only Rent
//                                     </label>
//                                     <label
//                                         className={`flex items-center gap-2 cursor-pointer ${
//                                             propertyType === "only_lease"
//                                                 ? "text-[#2450A0] font-semibold"
//                                                 : "text-gray-700"
//                                         }`}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="propertyType"
//                                             value="only_lease"
//                                             checked={propertyType === "only_lease"}
//                                             onChange={(e) => setPropertyType(e.target.value)}
//                                             className="accent-blue-600"
//                                         />
//                                         Only Lease
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* Property Name */}
//                             <div>
//                                 <label className="block text-[16px] font-semibold text-[#0A0909] mb-2 mt-8">
//                                     Property Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter Your Property Name"
//                                     value={propertyName}
//                                     onChange={(e) => setPropertyName(e.target.value)}
//                                     className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
//                                 />
//                             </div>

//                             {/* BHK Type */}
//                             <div>
//                                 <label className="block text-[16px] font-semibold text-[#0A0909] mb-2 mt-5">
//                                     BHK Type
//                                 </label>
//                                 <div className="grid grid-cols-3 gap-3">
//                                     {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map(
//                                         (type) => (
//                                             <button
//                                                 type="button"
//                                                 key={type}
//                                                 onClick={() => setBhkType(type)}
//                                                 className={`border px-4 py-2 rounded-lg text-[14px] ${
//                                                     bhkType === type
//                                                         ? "text-[#2450A0] border-blue-500"
//                                                         : "bg-white text-gray-700 border-gray-300"
//                                                 }`}
//                                             >
//                                                 {type}
//                                             </button>
//                                         )
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Submit */}
//                             <button
//                                 type="submit"
//                                 className="w-full bg-[#2450A0] text-white py-3 rounded-lg font-medium"
//                             >
//                                 SAVE & NEXT
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }
"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Header2 from "@/components/Header2";
import Step1 from "@/components/RentSteps/Rent1";
import Step2 from "@/components/RentSteps/Rent2";
import Step3 from "@/components/BrokerSteps/Broker3";
import Step4 from "@/components/BrokerSteps/Broker4";

interface FormData {
  businessType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  commodities: string[];
  firmName?: string;
  agreedToTerms: boolean;
  areas?: string[];
}

interface FormErrors {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  commodities: boolean;
  agreedToTerms: boolean;
}

export default function BrokerProfilePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    businessType: "Individual",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    commodities: [],
    firmName: "",
    agreedToTerms: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    commodities: false,
    agreedToTerms: false,
  });

  const steps = [
    "Personal Details",
    "Price Details",
    "Availability",
    "Others",
    "Upload Images"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in formErrors) {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (name in formErrors) {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      const errors = {
        firstName: formData.firstName.trim() === "",
        lastName: formData.lastName.trim() === "",
        email: formData.email.trim() === "",
        phone: formData.phone.trim() === "",
        agreedToTerms: !formData.agreedToTerms,
        commodities: false,
      };
      setFormErrors(errors);
      if (Object.values(errors).some((val) => val)) return;
    } else if (currentStep === 1) {
      const errors = {
        ...formErrors,
        commodities: formData.commodities.length === 0,
      };
      setFormErrors(errors);
      if (errors.commodities) return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      window.location.href = "/next-page";
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step1
            formData={formData}
            formErrors={formErrors}
            handleChange={handleChange}
            handleCheckbox={handleCheckbox}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      default:
        return <div className="text-center py-10">Step Coming Soon</div>;
    }
  };

  return (
    <div
      className="relative bg-gray-50 min-h-screen text-gray-900"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Header2 />
      <div className="block lg:hidden pt-[130px] px-4">
        <div
            className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white"
            style={{ border: "solid #0000001C", borderRadius: "16px",marginTop:'30px' }}
           >
            <img
              src="/facilities/call.png"
              alt="Call Icon"
              className="w-[29px] h-[29px]"
            />
          </div>
        <h2 className="text-2xl font-extrabold mt-10">Rent a Home</h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill out the form with your requirements and we’ll connect you
          with properties that match your needs fast, easy, and reliable.
        </p>

        <div className="relative grid grid-cols-4 gap-[40px] mb-6">
          <div className="absolute top-[4px] left-[6px] right-[6px] h-1 bg-gray-300 z-0" />
          {steps.map((step, index) => {
            const isCompleted = index < currentStep; // ✅ already completed
            const isCurrent = index === currentStep; // 🎯 current step
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-start"
              >
                {/* ✅ Tick for completed steps */}
                {isCompleted ? (
                  <div className="w-5 h-5 rounded-full bg-[#2450A0] text-white flex items-center justify-center mb-1">
                    <FaCheck size={10} />
                  </div>
                ) : (
                  // ⭕ Circle for current or upcoming steps
                  <div
                    className={`rounded-full mb-1 border-4 ${
                      isCurrent
                        ? "w-4 h-4 border-[#2450A0] bg-white"
                        : "w-3 h-3 border-gray-300 bg-gray-300"
                    }`}
                  />
                )}

                <span
                  className={`text-[11px] font-semibold ${
                    isCompleted || isCurrent ? "text-[#2450A0]" : "text-black"
                  }`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>

        {renderStep()}
      </div>

      {/* Desktop View */}
      <main className="hidden lg:block pt-[140px] px-4">
        <div className="max-w-[1388px] mx-auto grid grid-cols-[449px_1fr]">
          {/* Sidebar Stepper */}
          <div className="relative p-6">
            <ul className="relative ml-6 mt-6 space-y-8">
              <div className="absolute left-[33px] top-0 w-[2px] h-full bg-gray-300 z-0" />
              {steps.map((step, i) => {
                const isActiveOrCompleted = i <= currentStep;
                return (
                  <li
                    key={i}
                    className={`flex items-center p-4 rounded-[19px] gap-4 relative z-10 ${
                      isActiveOrCompleted
                        ? "bg-[#2450a0] text-white"
                        : "group transition hover:bg-[#2450A0] hover:text-white cursor-pointer"
                    }`}
                    style={{ width: "250px" }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${
                        isActiveOrCompleted
                          ? "bg-[#f4f5f8]"
                          : "bg-white border border-gray-300 group-hover:border-[#2450A0]"
                      } flex items-center justify-center`}
                      style={{
                        width: i === 2 ? "63px" : i === 3 ? "41px" : "46px",
                      }}
                    >
                      <Image
                        src={`/step-icons/step${i + 1}${
                          isActiveOrCompleted ? "blue" : "gray"
                        }.svg`}
                        alt={`Step ${i + 1}`}
                        width={24}
                        height={24}
                        style={{ width: "100px" }}
                      />
                    </div>
                    <p
                      className={`font-bold ${
                        isActiveOrCompleted
                          ? "text-white"
                          : "text-[#2a2a2a] group-hover:text-white"
                      }`}
                      style={{ fontSize: "18px" }}
                    >
                      {step}
                    </p>
                  </li>
                );
              })}
            </ul>
            {/* <div className="mt-20">
              <p className="text-3xl font-extrabold text-black">Welcome,</p>
              <p className="text-3xl font-extrabold text-[#2450a0]">
                Signup{" "}
                <span className="text-black font-medium">to Continue!</span>
              </p>
              <p className="text-sm mt-1 text-gray-500">
                Already Have Account{" "}
                <a href="#" className="text-[#2450A0] underline">
                  Login here
                </a>
              </p>
            </div> */}
          </div>

          {/* Step Content */}
          <div
            className="bg-white rounded-[35px] shadow-md p-10 mt-[30px]"
            style={{ width: "1037px" }}
          >
            <p className="text-sm font-medium text-gray-500">
              Step {currentStep + 1} / {steps.length}
            </p>
            <h2 className="text-3xl font-bold mb-2">Rent a Home</h2>
            <p className="text-sm text-gray-500 mb-6">
               Fill out the form with your requirements and we’ll connect you
              with properties that match your needs fast, easy, and reliable.
            </p>

            {renderStep()}
          </div>
        </div>
      </main>
    </div>
  );
}
 