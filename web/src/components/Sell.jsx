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
       
      </Box>
    </ModalPopup>
  );
}
