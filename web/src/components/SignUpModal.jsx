import React, { useState, useEffect } from "react";
import ModalPopup from "./common/ModalPopup";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { toast } from 'react-toastify';

const steps = ["User Details", "Address Details", "Verification", "Payment"];

export default function SignUpModal({ open = false, onClose }) {
  const [activeStep, setActiveStep] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [addressDetails, setAddressDetails] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });
  const [verificationDetails, setVerificationDetails] = useState({
    document1: null,
    document2: null,
    document3: null,
  });

  const isStepValid = () => {
    if (activeStep === 0) {
      const { name, phone, email } = userDetails;
      return name && phone && email;
    } else if (activeStep === 1) {
      const { address, city, state, pincode, country } = addressDetails;
      return address && city && state && pincode && country;
    } else if (activeStep === 2) {
      const { document1, document2, document3 } = verificationDetails;
      return document1 && document2 && document3;
    }
    return true;
  };

  useEffect(() => {
    isStepValid();
  }, [activeStep, userDetails, addressDetails, verificationDetails]);

  const handleNext = () => {
    if (!isStepValid()) {
      toast.error("Please fill all the required fields.");
      return;
    }

    if (activeStep === steps.length - 1) {
      console.log({
        ...userDetails,
        ...addressDetails,
        photo: "photo",
        pan: "pan",
        aadhar: "aadhar",
      });

      fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userDetails,
          ...addressDetails,
          photo: "photo",
          pan: "pan",
          aadhar: "aadhar",
        }),
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          response.json().then((data) => {
            console.log(data);
            toast.success("Registered Successfully");
          });
        } else if (response.status === 400) {
          response.json().then((data) => {
            console.log(data);
            toast.error(data.message);
          });
        }
      });
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (activeStep === 0) {
      setUserDetails({ ...userDetails, [name]: value });
    } else if (activeStep === 1) {
      setAddressDetails({ ...addressDetails, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setVerificationDetails({ ...verificationDetails, [name]: files[0] });
  };

  return (
    <ModalPopup
      open={open}
      onClose={onClose}
      className="w-[600px] p-4 rounded-md bg-white dark:bg-slate-800"
    >
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }} className="text-gray-900 dark:text-gray-100">
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        )}
        {activeStep === 0 && (
          <React.Fragment>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
            </form>
          </React.Fragment>
        )}

        {activeStep === 1 && (
          <React.Fragment>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={addressDetails.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={addressDetails.city}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={addressDetails.state}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                value={addressDetails.pincode}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={addressDetails.country}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </React.Fragment>
        )}

        {activeStep === 2 && (
          <React.Fragment>
            <div className="mb-4 mt-2">
              <label
                htmlFor="document1"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Photo
              </label>
              <input
                type="file"
                id="document1"
                name="document1"
                accept=".pdf, image/*"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="document2"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Aadhar Card
              </label>
              <input
                type="file"
                id="document2"
                name="document2"
                accept=".pdf, image/*"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="document3"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Pan Card
              </label>
              <input
                type="file"
                id="document3"
                name="document3"
                accept=".pdf, image/*"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </React.Fragment>
        )}

        {activeStep === 3 && (
          <React.Fragment>
            <div className="mb-4">
              <label
                htmlFor="qrcode"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Scan QR Code (GPay)
              </label>
              <div className="mt-1">
                <img
                  src="../assets/imgs/Untitled design.png"
                  alt="GPay QR Code"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="bankDetails"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Bank Details
              </label>
              <div className="mt-1 text-gray-900 dark:text-gray-100">
                <p className="text-sm font">Bank Name: <strong>Random Bank</strong></p>
                <p className="text-sm">Account Number: <strong>123456789012</strong></p>
                <p className="text-sm">IFSC Code: <strong>SBI12345</strong></p>
              </div>
            </div>
          </React.Fragment>
        )}

        {activeStep !== steps.length && (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </ModalPopup>
  );
}
