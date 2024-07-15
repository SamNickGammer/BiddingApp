import React, { useEffect, useState } from "react"
import {convertNumberToCurrencyFormat, formatDateAndTime, getUniqueVehicleTypes} from "../../utils/utitity";
import {useNavigate} from "react-router-dom";
import {routerNavigation} from "../../utils/router";

export default function Event({
                                  eventName,
                                  locationState,
                                  startPrice,
                                  bidIncrease,
                                  startDateTime,
                                  endDateTime,
                                  vehicleDetails,
                                  eventId
                              }) {
    const {
        endDate,
        endTime,
        startDate,
        startTime
    } = formatDateAndTime(startDateTime, endDateTime)

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

    },[eventId])

    const onClickNavigate=()=>{
        if(isLoggedIn){
            
            navigate(routerNavigation(`/biding/${eventId}`))

        }
        else{
            alert("Please login first");
        }

    }
   

    return (
        <div onClick={onClickNavigate}
              className="block rounded-lg p-4 shadow-sm shadow-indigo-100 max-w-[18rem] transform transition duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-slate-800 dark:shadow-none">
            <div className="overflow-hidden rounded-md">
                <img
                    alt=""
                    src="https://t4.ftcdn.net/jpg/00/26/80/01/360_F_26800115_YlmErNLIVZeNZXPzUc3z4GAD1gGkVABu.jpg"
                    className="h-56 w-full object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className="mt-2 text-gray-900 dark:text-gray-100">
                <div className="flex items-baseline">
                    <p className="text-sm">Start Price:</p>
                    <div
                        className='text-sm text-gray-500 dark:text-gray-400 font-medium mr-[5px]'>{convertNumberToCurrencyFormat(startPrice ?? 0)}</div>

                    <div className="flex items-center ml-8">
                        <p className="text-sm">Increment: </p>
                        <svg
                            className="w-3 h-3 text-green-600 dark:text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                        <div className='text-[10px] leading-[14px] text-green-500 dark:text-green-400 font-medium'>
                            {convertNumberToCurrencyFormat(bidIncrease ?? 0)}
                        </div>
                    </div>
                </div>
                <div className="font-medium">{eventName}</div>
                <div className="flex justify-between items-center mt-2">
                    <div className='text-green-500 dark:text-green-400'>
                        <div className='text-[12px] font-medium'>{startDate}</div>
                        <div className='text-[11px]'>{startTime}</div>
                    </div>
                    <div>
                        <img className='size-[20px]' src={require('../../assets/icons/right-arrow-50.png')} alt=""/>
                    </div>
                    <div className='text-end text-red-500 dark:text-red-400'>
                        <div className='text-[12px] font-medium'>{endDate}</div>
                        <div className='text-[11px]'>{endTime}</div>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                            className="size-4 text-indigo-700 dark:text-indigo-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                        </svg>
                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500 dark:text-gray-400">Location</p>
                            <p className="font-medium">{locationState}</p>
                        </div>
                    </div>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <img className='size-4' src={require('../../assets/icons/car-icons.png')} alt=""/>
                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500 dark:text-gray-400">Total Vehicles</p>
                            <p className="font-medium">{`${vehicleDetails.length} (${getUniqueVehicleTypes(vehicleDetails)})`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
