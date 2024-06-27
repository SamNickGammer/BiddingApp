import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TruckBid from "../assets/imgs/bidTruck.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
          <div>
            <img src={TruckBid} className="" alt="bidTruck" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
          <div>
          <Box className="content-center" textAlign="">
            <h1 className="text-6xl font-bold font-mono dark:text-white  text-black ">Bid Hub:</h1>
            <h1 className="text-4xl font-bold font-mono dark:text-white  text-black ">Your Bid,</h1>
            <h1 className="text-4xl font-bold font-mono dark:text-white  text-black ">Your Choice</h1>
            <br />
            <p className="text-lg font-sans dark:text-white  text-black">
              At BidHub, effortlessly bid on vehicles from banks and insurance
              companies. Discover a wide range of 2 wheelers, 4 wheelers,
              commercial vehicles, tractors, and JCBs available across India.
              Secure your next vehicle with ease and convenience through our
              platform.
            </p>
          </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
