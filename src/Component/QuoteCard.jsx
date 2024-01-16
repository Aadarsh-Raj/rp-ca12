import React from 'react'
import './Style/quote.css'
const QuoteCard = (props) => {
  return (
    <>
    
    <div className="card-item">
            <div className="card-para">
            <h2>{props.para}</h2>
            </div>
            <div className="card-title">
        <h4>{props.speaker}</h4>
            </div>
        </div>
    </>
  )
}

export default QuoteCard
