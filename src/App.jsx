import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import HomePage from "./PAGES/HomePage";
import MainLayOut from "./LAYOUT/MainLayOut";
import JobsPage from "./PAGES/JobsPage";
import NotFoundPage from "./PAGES/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
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



// THIS IS THE COMPONENTS BEING RENDERED,ya kushikilia page,
{
  /* <Navbar />

      <Hero title="John Wick website" subtitle="Find a job in mercy killing" /> */
}

{
  /* Developer and Explorers */
}

{
  /* <HomeCards /> */
}

{
  /* browse Jobs */
}

{
  /* <JobListings />
      <ViewAllJobs /> */
}


