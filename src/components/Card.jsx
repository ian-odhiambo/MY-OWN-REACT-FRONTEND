import React from 'react'

const Card = ({children, bg='bg-gray-200'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card

// this being a component that is being exported to the HomeCard.jsx,to come with alraedy styled container container enclosing the two card(For Developers and For Employers) 

//Explanation for the function,
// const Card = ({children, bg='bg-gray-200'})-two parametrs are being passed here for the children which is going to be the h1s and paragraghs and the buttons and the custom style for the containers Cards is going to have the same styles cutting across all the children (h1s and paragraghs) assigned the syntax tags of <Card/>. The attribute bg with styling of bg-gray-200 can be overridden where it the card component was exported and used in the HomeCard.jsx where weve enclosed the children in the syntax tag <Card/>.this can be done by using the bg attribute and utilising class for color and set it to another color for the overide for the previous styling of the background color that comes with every card component , this is now overriden in the homecard.jsx where it is going to be used. 

// The concept that cuts across for you to learn is that this is a sub-component purposefully for the container that wraps around every card that is in the HomeCards.jsx and it is going to be exported to cover every card 
