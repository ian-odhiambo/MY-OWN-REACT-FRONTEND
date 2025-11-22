import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"

function App() {
  

  return (
    <>
      <Navbar />

      <Hero title="John Wick website" />

    
      
      {/* Developer and Explorers */}

      <HomeCards  />

      {/* browse Jobs */}
     
      < JobListings />
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
