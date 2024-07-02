import React from "react"
import BiddingHeader from "../components/biddingPage/BiddingHeader";
import Event from "../components/biddingPage/Event";
import {initialData} from "../db/db";

const BiddingPage = () => {
    return (
        <div>
            <BiddingHeader/>
            <div className="flex flex-wrap gap-[1.3rem] mb-10">
                {initialData.map(event => {
                    return (
                        <Event
                            key={event.id}
                            eventId={event.id}
                            eventName={event.eventName}
                            locationState={event.locationOfEvent.state}
                            bidIncrease={event.bidIncrease}
                            endDateTime={event.endDateTime}
                            startDateTime={event.startDateTime}
                            startPrice={event.startPrice}
                            vehicleDetails={event.vehicleDetails}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BiddingPage