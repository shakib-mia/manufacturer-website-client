import React from "react";

const BusinessSummary = () => {
  return (
    <div className="bg-green-300 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center container">
        <div className="border-2 border-red-600 p-4 mx-auto lg:p-10 inline-block text-center my-2 flex justify-center items-center gap-4 w-32 h-32 overflow-hidden lg:w-52 lg:h-52 rounded-full">
          <div>
            <div>
              <i className="fas fa-user text-2xl"></i>
            </div>
            100+ Customers
          </div>
        </div>
        <div className="border-2 border-red-600 p-4 mx-auto lg:p-10 inline-block text-center my-2 flex justify-center items-center gap-4 w-32 h-32 overflow-hidden lg:w-52 lg:h-52 rounded-full">
          <div>
            <div>
              <i className="fa-solid fa-sack-dollar text-2xl"></i>
            </div>
            12M+ Annual Revenue
          </div>
        </div>
        <div className="border-2 border-red-600 p-4 mx-auto lg:p-10 inline-block text-center my-2 flex justify-center items-center gap-4 w-32 h-32 overflow-hidden lg:w-52 lg:h-52 rounded-full">
          <div>
            <div className="flex flex-row items-baseline justify-center">
              <i className="fa-solid fa-star-half-stroke"></i>
              <i className="fa-solid fa-star text-xl"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            33K+ Reviews
          </div>
        </div>
        <div className="border-2 border-red-600 p-4 mx-auto lg:p-10 inline-block text-center my-2 flex justify-center items-center gap-4 w-32 h-32 overflow-hidden lg:w-52 lg:h-52 rounded-full">
          <div>
            <div>
              <i class="fa-solid fa-screwdriver-wrench"></i>
            </div>
            50+ tools
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
