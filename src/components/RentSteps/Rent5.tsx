"use client";

import { useState, ChangeEvent } from "react";

export default function UploadListing() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  const TOTAL_IMAGES = 12;
  const dummyImages = Array.from({ length: TOTAL_IMAGES }, () => "/upload_listing/img1.png");

  const steps = [
    { title: "Property Details" },
    { title: "Price Details" },
    { title: "Availability" },
    { title: "Others" },
    { title: "Upload Images" },
  ];
  const activeStep = 4; // Index starts from 0, so 4 = "Upload Images"

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedImages((prev) => [...prev, ...filesArray]);
    }
  };

  return (
    <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden font-poppins">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Background */}


      <main className=" pb-12 flex justify-center relative z-10">
        <div className="w-full px-4" style={{ maxWidth: "1000px" }}>

          {/* Page Heading */}


          {/* Stepper */}
          <div className="flex flex-wrap justify-center gap-3 md:flex-nowrap mt-12 ">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 flex flex-col items-center relative">
                {/* Circle */}


                {/* Label */}


              </div>
            ))}
          </div>

          {/* Upload Images Section */}
          <div className="mt-6">
            <label className="text-[16px] font-bold text-[#0A0909] block mb-2"style={{ fontFamily: "Poppins, sans-serif" }}>
              Upload Images <span className="text-red-500">*</span>
            </label>

            {/* Preview */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 relative">
              {dummyImages.slice(0, 3).map((img, index) => (
                <div key={index} className="relative">
                  <img src={img} className="w-full rounded-lg object-cover" />
                  {index === 2 && !showAll && (
                    <div
                      onClick={() => setShowAll(true)}
                      className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold cursor-pointer rounded-lg"
                    >
                      +{TOTAL_IMAGES - 3} more
                    </div>
                  )}
                </div>
              ))}
            </div>

            {showAll && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                {dummyImages.slice(3).map((img, index) => (
                  <img key={index + 3} src={img} className="w-full rounded-lg object-cover" />
                ))}
              </div>
            )}

            {selectedImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                {selectedImages.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`upload-${index}`}
                    className="w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            )}

            {/* Upload Button */}
            <div className="mt-4">
              <label htmlFor="uploadImages">
                <div className="w-full py-3 text-center cursor-pointer border border-[#2450A0] rounded-full">
                  <span className="text-[#2450A0] text-[14px] font-semibold">UPLOAD MORE IMAGES</span>
                  <input
                    type="file"
                    id="uploadImages"
                    multiple
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </div>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="col-span-2 text-right pt-5">
            <button
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