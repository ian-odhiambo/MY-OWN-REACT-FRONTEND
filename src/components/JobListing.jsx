import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";//this is a new update on this named import from the react-icon packages for icons,i see now youd have to specify what is inside the parenthesis 

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false); // in the array, showFullDescription  Creates a switch that starts as OFF (false)  the current state (OFF or ON. setShowFullDescription = the button to flip the switch

  let description = job.description; //declaration where the description from our server is asigned to a variable, because our conditon is going to be based on the description useState(false) = it starts OFF. This state is dependant on the button to flip the switch to true therefore On your localhost: The button hasn't been clicked yet, so showFullDescription = false. Take it more like a switch starts off, when you want it on, flip the switch.

  if (!showFullDescription) {
    description = description.substring(0, 90) + "..."; // This description we have obtained from our mock server For each description to show up onto our cards, the number of letters within the description is up the 90 th character that will be shown, and it is concatenated with the three dots
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-800 my-2">{job.type}</div>
          <div className="text-xl font-bold">{job.title}</div>
        </div>
        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-600 mb-5 hover:text-indigo-800"
        >
          {showFullDescription ? "less" : "more"}
        </button>

        <div className="text-indigo-700 mb-2">{job.salary}/per month</div>
        <div className="border border-gray-200 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-800 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
          <a
            href="job.html"
            className="h-[36px] bg-indigo-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
