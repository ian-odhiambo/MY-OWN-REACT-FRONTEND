import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Become a React Developer
            </h1>
            <p className="my-4 text-xl text-white">
              Find the React Job that fit your skills and needs
            </p>
          </div>
        </div>
      </section>

      {/* Developer and Explorers */}
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">For Developers</h3>
              <p className="mt-2 mb-4">
                Browse our react jobs and start your career today
              </p>
              <a
                href="/jobs.html"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-amber-500"
              >
                Browse Jobs
              </a>
            </div>
            <div className="bg-indigo-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">For Employers</h3>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <a
                href="/add-jobs.html"
                className="inline-block bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-800"
              >
                Add Job
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* browse Jobs */}
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

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="job.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-900"
        >
          view All jobs
        </a>
      </section>
    </>
  );
}

export default App;

// import React from "react";
// import { Linter } from "eslint";

// const App = () => {
//   const name = "ian";
//   // const x = 10;
//   // const y = 20;
//   // const names = ["Brad", "Mary", "Joe", "Sarah"];
//   return (
//     <>
//       <div className="text-5xl">App </div>
//       <p> Hello {name}</p>
//       <p>
//         The sum of {x} and {y} is {x + y}
//       </p>
//     </>
//   );
// };

// export default App;

// import React from 'react'

// export default function App() {
//   return (
//    <>
{
  /* <div>App</div> */
}
// <>
//   )
// }
