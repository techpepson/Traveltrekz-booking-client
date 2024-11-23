import React, { useState } from "react";
import NavbarHost from "../../components/host/NavbarHost";
import Footer from "../../components/user/Footer";
import StepIndicator from "../../components/host/StepIndicator";
import Facilities from "../../components/host/Facilities";
import {Link} from 'react-router-dom'

const AddProperty3: React.FC = () => {
  const steps = [
    { name: "Property Type", path: "/host/add-property-1" },
    { name: "Description", path: "/host/add-property-2" },
    { name: "Upload Documents", path: "/host/add-property-3" },
    { name: "Amenities", path: "/host/add-property-4" },
    { name: "Completed", path: "/host/add-property-5" },
  ];

  const [images, setImages] = useState<File[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const uploadedImages = Array.from(files);

    // Prevent adding more than 5 images
    if (images.length + uploadedImages.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }

    // Filter only image files
    const validImages = uploadedImages.filter((file) =>
      file.type.startsWith("image/")
    );

    if (validImages.length < uploadedImages.length) {
      alert("Only image files are allowed.");
    }

    setImages((prevImages) => [...prevImages, ...validImages]);
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type !== "application/pdf") {
      alert("Only PDF documents are allowed.");
      return;
    }
    setPdfFile(file || null);
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <NavbarHost />
      <div className="p-16 flex items-center justify-center">
        <StepIndicator steps={steps} currentStep={2} />
      </div>
      <div className="px-16 flex flex-col gap-8 overflow-hidden">
        <h1 className="text-4xl font-bold w-[50%] text-header-600">
          Add facilities available at your place.
        </h1>
        <Facilities />
      </div>
      <div className="px-16 flex flex-col gap-8 overflow-hidden py-16">
        <h1 className="text-4xl font-bold w-[50%] text-header-600">
          Upload Images
        </h1>
        <input
          type="file"
          className="file-input w-full max-w-xs border rounded-2xl"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        <div className="flex gap-4 flex-wrap">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`Uploaded ${index}`}
                className="w-32 h-32 object-cover rounded-md cursor-pointer"
                onClick={() => openModal(URL.createObjectURL(image))}
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="px-16 flex flex-col gap-8 overflow-hidden pb-16">
        <h1 className="text-4xl font-bold w-[50%] text-header-600">
          Upload Legal Document
        </h1>
        <input
          type="file"
          className="file-input w-full max-w-xs border rounded-2xl"
          accept="application/pdf"
          onChange={handlePdfUpload}
        />
        {pdfFile && (
          <div className="mt-4">
            <p className="text-green-600 font-bold">{pdfFile.name}</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-md"
            />
          </div>
        </div>
      )}

        <div className="flex items-center justify-between px-16 pb-20">
            <div className="flex gap-4 items-center">
                <Link to="/host/add-property-4" className="bg-blue-600 text-white py-2 px-8 rounded-full">Next</Link>
                <Link to="/host/add-property-2" className="bg-blue-600 text-white py-2 px-8 rounded-full">Back</Link>
            </div>
            <button className="bg-header-600 text-white py-2 px-8 rounded-full">Cancel</button>
        </div>
      <Footer />
    </div>
  );
};

export default AddProperty3;
