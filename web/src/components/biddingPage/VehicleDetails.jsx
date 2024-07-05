import React, {useState, useEffect} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {convertNumberToCurrencyFormat} from '../../utils/utitity';

export default function VehicleDetails({vehicle}) {
    // State to manage the quantity input value
    const [quantity, setQuantity] = useState(vehicle.startPrice);

  // Function to handle incrementing quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + vehicle.bidIncrease);
  };

  // Function to handle decrementing quantity, with minimum value of the start price
  const decrementQuantity = () => {
    if (quantity > vehicle.startPrice) {
      setQuantity((prevQuantity) => prevQuantity - vehicle.bidIncrease);
    }
  };

  // State for auto slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect for auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicle.image.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [vehicle.image.length]);

    return (
        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white dark:bg-slate-800">
            <div className="flex">
                <div className="h-56 w-56 rounded-md overflow-hidden">
                    <Carousel
                        selectedItem={currentIndex}
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={2000}
                        infiniteLoop={true}
                        onChange={(index) => setCurrentIndex(index)}
                    >
                        {vehicle.image.map((img, idx) => (
                            <div key={idx}>
                                <img alt={`Vehicle ${idx}`} src={img} className="h-full w-full object-cover"/>
                            </div>
                        ))}
                    </Carousel>
                </div>

        <div className="ml-4 flex-1 text-gray-900 dark:text-gray-100">
          <div>
            <dl>
              <div>
                <dt className="sr-only">Vehicle Name</dt>
                <dd className="font-medium">{vehicle.name}</dd>
              </div>
              <div className="flex">
                <div>
                  <dt className="sr-only">Price</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">
                    {convertNumberToCurrencyFormat(vehicle.startPrice)}
                  </dd>
                </div>
                <div className="flex ml-5">
                  <div>
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
                  </div>
                  <div>
                    <dt className="sr-only">Increment</dt>
                    <dd className="text-sm text-red-600 dark:text-gray-400">
                      {convertNumberToCurrencyFormat(vehicle.bidIncrease)}
                    </dd>
                  </div>
                </div>
              </div>
            </dl>

                        <div className="mt-6 flex items-center gap-8 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg className="h-6 w-6 text-indigo-700 dark:text-indigo-500"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                                </svg>
                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500 dark:text-gray-400">Yard</p>
                                    <p className="font-medium">{vehicle.yardName}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">LAN</p>
                                <p className="font-medium">{vehicle.loanAccountNumber}</p>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg className="h-6 w-6 text-indigo-700 dark:text-indigo-500"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                </svg>
                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500 dark:text-gray-400">KM</p>
                                    <p className="font-medium">{vehicle.mileage}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Reg. NO.</p>
                                <p className="font-medium">{vehicle.regNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">YOR</p>
                                <p className="font-medium">{vehicle.yearOfRegistration}</p>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg className="h-6 w-6 text-indigo-700 dark:text-indigo-500"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                                </svg>
                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500 dark:text-gray-400">Chasis No.</p>
                                    <p className="font-medium">{vehicle.chasisNo}</p>
                                </div>
                            </div>
                        </div>

                        {/* Download PDF Button */}
                        <div className="mt-4">
                            <a
                                className="px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-500"
                                href='https://morth.nic.in/sites/default/files/dd12-13_0.pdf'
                                target='_blank' rel="noreferrer"
                            >
                                Download RC
                            </a>
                        </div>

                        {/* Quantity input box with increment and decrement buttons */}
                        <div className="mt-4 flex justify-end mr-8  space-x-2 items-center">
                            <button
                                className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-red-500"
                                onClick={decrementQuantity}
                            >
                                -
                            </button>
                            <div>{convertNumberToCurrencyFormat(quantity)}</div>
                            <button
                                className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-green-500"
                                onClick={incrementQuantity}
                            >
                                +
                            </button>
                            <button
                                className="px-4 py-1 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-indigo-500">
                                Bid
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
