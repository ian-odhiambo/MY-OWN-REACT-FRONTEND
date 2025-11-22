import React from 'react'

const JobListing = ({job}) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-800 my-2">{job.type}</div>
                <div className="text-xl font-bold">
                  {job.title} 
                </div>
              </div>
              <div className="mb-5">
               {job.description}
              </div>
              <div className="text-indigo-700 mb-2">{job.salary}/per month</div>
              <div className="border border-gray-200 mb-5"></div>
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-800 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
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
  )
}

export default JobListing