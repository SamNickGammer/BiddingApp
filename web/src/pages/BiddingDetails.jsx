import React from 'react';
import {useParams} from "react-router-dom";
import {initialData} from "../db/db";
import VehicleDetails from "../components/biddingPage/VehicleDetails";

export default function BiddingDetails() {
    let {id} = useParams(); // need add verification for id if the provided id is really a bidding id or not.
    const bidding = initialData.find(d => d.id === id);
    return (
        <div className='min-h-screen'>
            <div className='flex flex-wrap gap-[1.3rem] mb-10 flex-col'>
                {bidding.vehicleDetails.map((vehicle) => {
                    return (
                        <VehicleDetails vehicle={vehicle}/>

                    )
                })}
            </div>
        </div>
    )
}