export default function VehicleDetails() {
    return (
        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white dark:bg-slate-800">
            <div className="flex">
                <img
                    alt=""
                    src="https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-450/494X300/himalayan-4506565cc8f0ef04.jpg?imwidth=400&impolicy=resize"
                    className="h-56 w-56 rounded-md object-cover"
                />

                <div className="ml-4 flex-1 text-gray-900 dark:text-gray-100">
                    <div>
                        <dl>
                            <div>
                                <dt className="sr-only">Price</dt>
                                <dd className="text-sm text-gray-500 dark:text-gray-400">$240,000</dd>
                            </div>
                            <div>
                                <dt className="sr-only">VechicleName</dt>
                                <dd className="font-medium">ROYAL ENFIELD HIMALAYAN</dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex items-center gap-8 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="h-6 w-6 text-indigo-700 dark:text-indigo-500"
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
                                    <p className="text-gray-500 dark:text-gray-400">Parking</p>
                                    <p className="font-medium">Extra Parking From 24.06.2024</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="h-6 w-6 text-indigo-700 dark:text-indigo-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500 dark:text-gray-400">KM</p>
                                    <p className="font-medium">2 km</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="h-6 w-6 text-indigo-700 dark:text-indigo-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500 dark:text-gray-400">Chasis No:</p>
                                    <p className="font-medium">NA</p>
                                </div>
                            </div>
                        </div>

                        {/* Add buttons or other elements here */}
                        <div className="mt-4 flex space-x-2">
                            <button
                                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-indigo-500">
                                Button 1
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg shadow-sm hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                                Button 2
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}
