import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import ViewAllJobs from '../components/ViewAllJobs'

const MainLayOut = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ViewAllJobs/>
    </>
  )
}

export default MainLayOut

//This is the layout that will e cutting across all the pages and the outlet means the content that changes while the single page application maintains the strucure that cuts across all the other pages , this being the header and the footer.usually the common structures is the elements embedded are the header, the footer and the outlet being the varying parts of the single-page application 