import React from "react"

const BiddingHeader = () => {
    return (
        <div className="flex justify-between mb-4">
            <div className="text-[18px] font-bold text-gray-900 dark:text-white">Events</div>
            <div className="flex gap-8">
                <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 dark:border-gray-600 pb-1 text-gray-900 dark:text-white transition hover:border-gray-600 dark:hover:border-gray-400">
                            <span className="text-sm font-medium"> Availability </span>
                            <span className="transition group-open:-rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
                        </summary>
                        <div
                            className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                            <div
                                className="w-96 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                <header className="flex items-center justify-between p-4">
                                    <span className="text-sm text-gray-700 dark:text-gray-300"> 0 Selected </span>
                                    <button
                                        type="button"
                                        className="text-sm text-gray-900 dark:text-white underline underline-offset-4"
                                    >
                                        Reset
                                    </button>
                                </header>

                                <ul className="space-y-1 border-t border-gray-200 dark:border-gray-700 p-4">
                                    <li>
                                        <label
                                            htmlFor="FilterInStock"
                                            className="inline-flex items-center gap-2"
                                        >
                                            <input
                                                type="checkbox"
                                                id="FilterInStock"
                                                className="size-5 rounded border-gray-300 dark:border-gray-600"
                                            />

                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {" "}
                                                In Stock (5+){" "}
                      </span>
                                        </label>
                                    </li>

                                    <li>
                                        <label
                                            htmlFor="FilterPreOrder"
                                            className="inline-flex items-center gap-2"
                                        >
                                            <input
                                                type="checkbox"
                                                id="FilterPreOrder"
                                                className="size-5 rounded border-gray-300 dark:border-gray-600"
                                            />

                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {" "}
                                                Pre Order (3+){" "}
                      </span>
                                        </label>
                                    </li>

                                    <li>
                                        <label
                                            htmlFor="FilterOutOfStock"
                                            className="inline-flex items-center gap-2"
                                        >
                                            <input
                                                type="checkbox"
                                                id="FilterOutOfStock"
                                                className="size-5 rounded border-gray-300 dark:border-gray-600"
                                            />

                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {" "}
                                                Out of Stock (10+){" "}
                      </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 dark:border-gray-600 pb-1 text-gray-900 dark:text-white transition hover:border-gray-600 dark:hover:border-gray-400">
                            <span className="text-sm font-medium"> Price </span>

                            <span className="transition group-open:-rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
                        </summary>

                        <div
                            className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                            <div
                                className="w-96 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {" "}
                      The highest price is $600{" "}
                  </span>

                                    <button
                                        type="button"
                                        className="text-sm text-gray-900 dark:text-white underline underline-offset-4"
                                    >
                                        Reset
                                    </button>
                                </header>

                                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                                    <div className="flex justify-between gap-4">
                                        <label
                                            htmlFor="FilterPriceFrom"
                                            className="flex items-center gap-2"
                                        >
                                            <span className="text-sm text-gray-600 dark:text-gray-300">$</span>

                                            <input
                                                type="number"
                                                id="FilterPriceFrom"
                                                placeholder="From"
                                                className="w-full rounded-md border-gray-200 dark:border-gray-700 shadow-sm sm:text-sm dark:bg-gray-700 dark:text-white"
                                            />
                                        </label>

                                        <label
                                            htmlFor="FilterPriceTo"
                                            className="flex items-center gap-2"
                                        >
                                            <span className="text-sm text-gray-600 dark:text-gray-300">$</span>

                                            <input
                                                type="number"
                                                id="FilterPriceTo"
                                                placeholder="To"
                                                className="w-full rounded-md border-gray-200 dark:border-gray-700 shadow-sm sm:text-sm dark:bg-gray-700 dark:text-white"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default BiddingHeader;
