import React from "react";
import ModalPopup from "./common/ModalPopup";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["User Details", "Address Details", "Verification", "Payment"];

export default function SignUpModal({ open = false, onClose }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-700 dark:text-gray-300"
                    onClick={() => {
                      const passwordInput = document.getElementById(
                        "password"
                      );
                      if (passwordInput.type === "password") {
                        passwordInput.type = "text";
                      } else {
                        passwordInput.type = "password";
                      }
                    }}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
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
                  // className="w-32 h-64"
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
