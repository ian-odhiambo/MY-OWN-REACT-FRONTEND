import React from 'react'
import jobs from '../jobs.json'

const JobListings = () => {

  console.log(jobs);//an array of jobs
  return (
     <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h1 className="text-xl text-blue-700 text-center font-bold">
            Browse Jobs
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Full Time</div>
                <h3 className="text-xl font-bold">Senior React Developer</h3>
              </div>
              <div className="mb-5">
                We are seeking a talented front-end developer to join our team
                in Nairobi County, Kenya. The ideal candidate will have strong
                skills in HTML, CSS and Javascript...
              </div>
              <h4 className="text-indigo-700 mb-2">KES70 - KES80/Year</h4>
              <div className="border border-gray-400"></div>
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-900 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Main HQ
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

          {/* job-listing */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-800 my-2">Remote</div>
                <div className="text-xl font-bold">
                  Front-End Engineer (React)
                </div>
              </div>
              <div className="mb-5">
                Join our team as a front-end developer in Eldoret. We are
                looking for a motivated individual with passion...
              </div>
              <div className="text-indigo-700 mb-2">KES140k - KES160k/Year</div>
              <div className="border border-gray-200 mb-5"></div>
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-800 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  Uasin-Gishu branch
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

          {/* job-listing-2 */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-800 my-2">Remote</div>
                <div className="text-xl font-bold">React.js Developer</div>
                <div className="mb-5">
                  Are you passionate about front-end developement? Join our team
                  in Elgeyo Marakwet county and work on exciting projects that
                  make a difference...
                </div>
                <div className="text-indigo-700 mb-2">
                  KES140k - KES160k/Year
                </div>
                <div className="border border-gray-200 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-800 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    RiftValley Branch
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
          </div>
        </div>
      </section>
  )
}

export default JobListings