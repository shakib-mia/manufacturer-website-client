import React from "react";

const BusinessSummary = () => {
  return (
    <div className="bg-green-300 py-10">
      <div className="flex flex-wrap container mx-auto justify-around">
        <div className="border-2 border-red-600 p-10 inline-block  text-center w-50 h-32 rounded-full">
          <i className="fas fa-user text-2xl"></i>
          <br />
          100+ Customers
        </div>
        <div className="border-2 border-red-600 p-10 inline-block text-center w-50 h-32 rounded-full">
          <i className="fa-solid fa-sack-dollar text-2xl"></i>
          <br />
          12M+ Annual Revenue
        </div>
        <div className="border-2 border-red-600 p-10 inline-block text-center w-50 h-32 rounded-full">
          <div>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star text-xl"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
          </div>
          33K+ Reviews
        </div>
        <div className="border-2 border-red-600 p-10 inline-block text-center w-50 h-32 rounded-full">
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <br />
          50+ tools
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
