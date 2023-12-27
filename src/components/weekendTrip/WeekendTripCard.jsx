import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const WeekendTripCard = ({ imageUrl, location, about }) => {
  return (
    <div className="flex flex-col shadow-md gap-3 border-2 rounded-lg  border-gray-200  justify-center">
      <img src={imageUrl} className="h-72" alt={location} />
      <h5 className="px-5 text-xl font-medium">{location}</h5>
      <div className="flex pb-4  px-3 text-gray-500 items-center gap-2">
        <FaLocationDot color="#0F9898" size={30} />
        <p>{about}</p>
      </div>
    </div>
  );
};

export default WeekendTripCard;
