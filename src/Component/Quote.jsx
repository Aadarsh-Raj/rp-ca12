import React from 'react'
import QuoteCard from './QuoteCard'
import data from "./data.json";
const Quote = () => {
  return (
    <>
     <div className="card-container">
    {
        
        data.map((ele)=> {
            return (<QuoteCard {...ele}/>)
        })
    }
   </div>
    
    </>
  )
}

export default Quote
