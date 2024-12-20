import React, { useState } from "react";
import NavbarHost from "../../components/host/NavbarHost";
import Footer from "../../components/user/Footer";
import StepIndicator from "../../components/host/StepIndicator";
import Facilities from "../../components/host/Facilities";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePropertyImages } from "../../store/reducers/addProperties.reducer";
import { AppDispatch, RootState } from "../../store/config/store.config";

const AddProperty3: React.FC = () => {
  const steps = [
    { name: "Property Type", path: "/host/add-property-1" },
    { name: "Description", path: "/host/add-property-2" },
    { name: "Upload Documents", path: "/host/add-property-3" },
    { name: "Amenities", path: "/host/add-property-4" },
    { name: "Completed", path: "/host/add-property-5" },
  ];

  const dispatch = useDispatch<AppDispatch>();

  // Local state for images and modal
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { propertyImages } = useSelector(
    (store: RootState) => store.properties.addProperty
  );
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const newImages: string[] = [];
      const fileReaders: Promise<string>[] = [];

      // Process files into base64 strings
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        const fileReaderPromise = new Promise<string>((resolve) => {
          reader.onloadend = () => {
            const base64String = reader.result as string;
            resolve(base64String);
          };
          reader.readAsDataURL(file);
        });

        fileReaders.push(fileReaderPromise);
      });

      // Wait for all FileReaders to complete
      Promise.all(fileReaders).then((base64Strings) => {
        base64Strings.forEach((base64String) => {
          if (!images.includes(base64String)) {
            newImages.push(base64String);
          }
        });

        // Update state and dispatch action
        const updatedImages = [...images, ...newImages];
        setImages(updatedImages);
        dispatch(updatePropertyImages(updatedImages));
        console.log(updatedImages); // Verify the updated state
      });
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    dispatch(updatePropertyImages(updatedImages));
  };

  const openModal = (image: string) => setSelectedImage(image);

  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <NavbarHost />
      <div className="p-16 flex items-center justify-center">
        <StepIndicator steps={steps} currentStep={2} />
      </div>
      <div className="px-8 md:px-16 flex flex-col gap-8 overflow-hidden">
        <h1 className="text-4xl font-bold md:w-[50%] text-header-600">
          Add facilities available at your place.
        </h1>
        <Facilities />
      </div>

      {/* Image Upload Section */}
      <div className="md:px-16 px-8 flex flex-col gap-4 md:gap-8 overflow-hidden py-16">
        <h1 className="text-2xl md:text-4xl font-bold md:w-[50%] text-header-600">
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
                src={image}
                alt={`Uploaded ${index}`}
                className="w-32 h-32 object-cover rounded-md cursor-pointer"
                onClick={() => openModal(image)}
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

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4"
            onClick={(e) => e.stopPropagation()}
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

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between px-4 md:px-16 pb-20">
        <div className="flex gap-4 items-center">
          <Link
            to="/host/add-property-4"
            className="bg-blue-600 text-white py-2 px-8 rounded-full max-md:text-sm"
          >
            Next
          </Link>
          <Link
            to="/host/add-property-2"
            className="bg-blue-600 text-white py-2 px-8 rounded-full max-md:text-sm"
          >
            Back
          </Link>
        </div>
        <button className="bg-header-600 text-white py-2 px-8 rounded-full max-md:text-sm">
          Cancel
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AddProperty3;
