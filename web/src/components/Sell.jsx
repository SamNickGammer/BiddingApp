import React from "react";
import ModalPopup from "./common/ModalPopup";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Sell({ open, onClose }) {
    

  return (
    <ModalPopup
      open={open}
      onClose={onClose}
      className="w-[600px] p-4 rounded-md bg-white dark:bg-slate-800"
    >
      <Box sx={{ width: "100%" }}>
      <Stepper activeStep={0} alternativeLabel>
        {["Seller Info", "Vehicle Info", "Vehicle Documents"].map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        <form>
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerContact"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Seller Contact
            </label>
            <input
              type="tel"
              id="sellerContact"
              name="sellerContact"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="vehicleModel"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Vehicle Model
            </label>
            <input
              type="text"
              id="vehicleModel"
              name="vehicleModel"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="vehicleYear"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Vehicle Year
            </label>
            <input
              type="number"
              id="vehicleYear"
              name="vehicleYear"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="vehicleRC"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Vehicle RC
            </label>
            <input
              type="file"
              id="vehicleRC"
              name="vehicleRC"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </React.Fragment>
      </Box>
    </ModalPopup>
  );
}
