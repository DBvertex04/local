// "use client";

// import { useState } from "react";
// import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

// export default function AvailabilitySection() {
//   const [availability, setAvailability] = useState("Everyday");
//   const [date, setDate] = useState("06/07/2025");
//   const [time, setTime] = useState("06:15:00");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log({
//       availability,
//       date,
//       time,
//     });
//   };

//   const RadioButton = ({
//     id,
//     label,
//   }: {
//     id: string;
//     label: string;
//   }) => (
//     <div className="relative">
//       <input
//         id={id}
//         type="radio"
//         name="availability"
//         value={label}
//         checked={availability === label}
//         onChange={() => setAvailability(label)}
//         className="sr-only" // Hide the default radio button
//       />
//       <label
//         htmlFor={id}
//         className={`flex items-center justify-center px-6 py-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
//           ${
//             availability === label
//               ? "bg-[#2450A0] text-white"
//               : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//           }`}
//       >
//         {availability === label && (
//           <div className="w-4 h-4 mr-2 bg-white border-2 border-[#2450A0] rounded-full flex items-center justify-center">
//             <div className="w-2 h-2 bg-[#2450A0] rounded-full"></div>
//           </div>
//         )}
//         {label}
//       </label>
//     </div>
//   );

//   return (
//     <div
//       className="relative text-gray-900  min-h-screen overflow-hidden"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />
//       <div className="w-full max-w-md p-8 space-y-6 border border-gray-200 rounded-lg shadow-md">
//         <form onSubmit={handleSubmit}>
//           {/* Availability Section */}
//           <div>
//             <label className="block text-lg font-semibold text-[#0A0909] mb-3">
//               Availability<span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center space-x-4">
//               <RadioButton id="everyday" label="Everyday" />
//               <RadioButton id="weekday" label="Weekday" />
//               <RadioButton id="weekend" label="Weekend" />
//             </div>
//           </div>

//           {/* Select Date Section */}
//           <div className="mt-6">
//             <label
//               htmlFor="date"
//               className="block text-lg font-semibold text-[#0A0909] mb-3"
//             >
//               Select Date<span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 id="date"
//                 type="text"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 placeholder="DD/MM/YYYY"
//                 className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
//               />
//               <FaCalendarAlt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
//             </div>
//           </div>

//           {/* Select Time Section */}
//           <div className="mt-6">
//             <label
//               htmlFor="time"
//               className="block text-lg font-semibold text-[#0A0909] mb-3"
//             >
//               Select Time<span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 id="time"
//                 type="text"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 placeholder="HH:MM:SS"
//                 className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
//               />
//               <FaRegClock className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
//             </div>
//           </div>

//           {/* Save & Next Button */}
//           <div className="mt-8">
//             <button
//               type="submit"
//               className="w-full bg-[#2450A0] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
//             >
//               SAVE & NEXT
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";

export default function AvailabilityPage() {
  const [selectedAvailability, setSelectedAvailability] = useState("Everyday");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      availability: selectedAvailability,
      date: selectedDate,
      time: selectedTime,
    });
  };

  const areaOptions = ["Everyday", "Weekday", "Weekend"];

  return (
    <div
      className="relative text-gray-900 min-h-screen overflow-hidden bg-gray-50"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <main className="pb-12 flex justify-center relative z-10">
        <div className="w-full px-4" style={{ maxWidth: "1090px" }}>
          <form
            onSubmit={handleSubmit}
            className="mt-8 bg-white p-6 rounded-xl shadow-sm w-full"
          >
            {/* Availability */}
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2"style={{ fontFamily: "Poppins, sans-serif" }}>
              Availability<span className="text-red-500">*</span>
            </label>

            <div className="flex gap-4 w-full mb-6 flex-nowrap overflow-x-auto">
              {areaOptions.map((option) => {
                const isSelected = selectedAvailability === option;
                return (
                  <div
                    key={option}
                    onClick={() => setSelectedAvailability(option)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all text-sm font-medium
          ${isSelected
                        ? "bg-[#1218280D] border-[#2450A0] text-[#2450A0]"
                        : "bg-white border-gray-300 text-[#121828] hover:bg-[#f5faff]"
                      }`}
                  >
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-[8px] border transition-all duration-200
            ${isSelected
                          ? "border-[#2450A0] bg-[#F0F4FF]"
                          : "border-gray-300 bg-white"
                        }`}
                    >
                      {isSelected && (
                        <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]"></div>
                      )}
                    </div>
                    {option}
                  </div>
                );
              })}
            </div>


            {/* Date Picker */}
            {/* <div className="mb-4">
              <label className="block text-[16px] font-semibold text-[#0A0909] mb-1">
                Select Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                placeholder="06/07/2025"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
            </div> */}
            <div className="mb-4 relative">
              <label className="block text-[16px] font-semibold text-[#0A0909] mb-1"style={{ fontFamily: "Poppins, sans-serif" }}>
                Select Date<span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="06/07/2025"
                value={selectedDate}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
              />

              <img
                src="/calender.png" // public folder me PNG
                alt="calendar"
                className="absolute right-4 top-12 -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>


            {/* Time Picker */}
            {/* <div className="mb-4">
              <label className="block text-[16px] font-semibold text-[#0A0909] mb-1">
                Select Time<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="06:15.00"
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
            </div> */}
            <div className="mb-4 relative">
              <label className="block text-[16px] font-semibold text-[#0A0909] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                Select Time<span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="06:15.00"
                value={selectedTime}
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
              />

              <img
                src="/timedate.png" // Public folder me apka clock PNG
                alt="clock"
                className="absolute right-4 top-12 -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>


            {/* Save & Next Button */}
            <div className="text-right pt-5">
              <button
                style={{ marginRight: "147px" }}
                type="submit"
                className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full md:w-[40%]"
              >
                SAVE & NEXT
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
