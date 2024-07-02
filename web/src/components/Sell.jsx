import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Sell() {
  const [ownerPhoto, setOwnerPhoto] = useState(null);
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehiclePhoto, setVehiclePhoto] = useState(null);
  const [vehicleDocument, setVehicleDocument] = useState(null);

  const handleOwnerPhotoChange = (e) => {
    setOwnerPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleVehiclePhotoChange = (e) => {
    setVehiclePhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleVehicleDocumentChange = (e) => {
    setVehicleDocument(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Post your AD
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Box className="w-[600px] p-4 rounded-md bg-white dark:bg-slate-800 shadow-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Sell Your Vehicle
            </h2>

            {/* Section 1: Vehicle Owner */}
            <div className="mb-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 mb-4">
                Vehicle Owner
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="ownerPhone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="ownerPhone"
                    name="ownerPhone"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="ownerPhoto"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    id="ownerPhoto"
                    name="ownerPhoto"
                    accept="image/*"
                    onChange={handleOwnerPhotoChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  {ownerPhoto && (
                    <div className="mt-2">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open(ownerPhoto, "_blank")}
                      >
                        Preview Photo
                      </Button>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Section 2: Vehicle Details */}
            <div className="mb-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 mb-4">
                Vehicle Details
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="vehicleBrand"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Vehicle Brand
                  </label>
                  <input
                    type="text"
                    id="vehicleBrand"
                    name="vehicleBrand"
                    value={vehicleBrand}
                    required
                    onChange={(e) => setVehicleBrand(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="vehicleType"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Vehicle Type
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    required
                    value={vehicleType}
                    onChange={handleVehicleTypeChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="2W">2W</option>
                    <option value="3W">3W</option>
                    <option value="FC">FC</option>
                    <option value="CV">CV</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Truck">Truck</option>
                    <option value="Bus">Bus</option>
                    <option value="Van">Van</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="vehiclePhoto"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Vehicle Photo
                  </label>
                  <input
                    type="file"
                    id="vehiclePhoto"
                    name="vehiclePhoto"
                    accept="image/*"
                    onChange={handleVehiclePhotoChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  {vehiclePhoto && (
                    <div className="mt-2">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open(vehiclePhoto, "_blank")}
                      >
                        Preview Photo
                      </Button>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="registrationNo"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Registration No.
                  </label>
                  <input
                    type="text"
                    id="registrationNo"
                    name="registrationNo"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="yearOfRegistration"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Year of Registration
                  </label>
                  <input
                    type="text"
                    id="yearOfRegistration"
                    name="yearOfRegistration"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="chasiNo"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Chasi No.
                  </label>
                  <input
                    type="text"
                    id="chasiNo"
                    name="chasiNo"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="fuelType"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Fuel Type
                  </label>
                  <select
                    id="fuelType"
                    name="fuelType"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                    <option value="CNG & Hybrid">CNG & Hybrid</option>
                    <option value="Electricity">Electricity</option>
                    <option value="LPG">LPG</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="engineNo"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Engine No.
                  </label>
                  <input
                    type="text"
                    id="engineNo"
                    name="engineNo"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="mileage"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mileage
                  </label>
                  <input
                    type="text"
                    id="mileage"
                    name="mileage"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="vehicleDocument"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Vehicle Document (PDF)
                  </label>
                  <input
                    type="file"
                    id="vehicleDocument"
                    name="vehicleDocument"
                    accept="application/pdf"
                    onChange={handleVehicleDocumentChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  {vehicleDocument && (
                    <div className="mt-2">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open(vehicleDocument, "_blank")}
                      >
                        Preview Document
                      </Button>
                    </div>
                  )}
                </div>
              </form>
            </div>

            <div className="flex justify-end">
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
