import React from 'react'
import './booking.css'


const Booking = ({ tour }) => {
    const { price } = tour;
  return (
    
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>P{price} <span>/per person</span></h3>
        </div>
    </div>
    
  )
}

export default Booking