import React from "react";
import logo from "../assets/IMAGES/reac.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center md:items-stretch md-justify-start">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink to="/">
              <img className="h-10 w-auto" src={logo} alt="React jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Jobs
                </NavLink>

                <NavLink
                  to="/add-job"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Add-Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//Alternatively we can have the function for the the arrow function assigned to a variable and place it inside the component function at the very top like this , though i will comment it out

//import React from "react";
// import logo from "../assets/IMAGES/reac.svg";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {

//  const LinkClass = ({isActive}) => isActive ? "bg-black text-white hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : 'text-white hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

//   return (
//     <nav className="bg-indigo-700 border-b border-indigo-500">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-center md:items-stretch md-justify-start">
//           <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
//             <NavLink to="/">
//               <img className="h-10 w-auto" src={logo} alt="React jobs" />
//               <span className="hidden md:block text-white text-2xl font-bold ml-2">
//                 React Jobs
//               </span>
//             </NavLink>

//             <div className="md:ml-auto">
//               <div className="flex space-x-2">
//                 <NavLink
//                   to="/"
//                   className={LinkClass}
//                 >
//                   Home
//                 </NavLink>

//                 <NavLink
//                   to="/jobs"
//                   className={LinkClass}
//                 >
//                   Jobs
//                 </NavLink>

//                 <NavLink
//                   to="/add-job"
//                   className={LinkClass}
//                 >
//                   Add-Job
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
