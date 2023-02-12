import React from 'react'
import '../styles/tour-details.css'


import { Container, Row, Col} from 'reactstrap'
import { useParams } from 'react-router-dom' 
import tourData from '../assets/data/tours'
import { Link } from 'react-router-dom'

const TourDetails = () => {

  const {id} = useParams()

  const tour = tourData.find(tour=> tour.id === id)

  const {photo, title, desc, price, city, address, maxGroupSize} = tour
  
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className='tour__content'>
            <img src={photo} alt="" />
          </div>
        </Col>

        <Col lg='4'>
        <div className='tour__info'>
              <h2>{title}</h2>

              <div className="d-flex align-items-center gap-5">
                <span>
                  <i className='ri-map-pin-fill'></i>{address}
                </span>
              </div>

              <div className="tour__extra-details">
                <span>
                  <i className='ri-map-pin-2-line'></i>{city}
                </span>
                <span>
                  <i className='ri-money-dollar-circle-line'></i>P{price} /per person
                </span>
                <span>
                  <i className='ri-group-line'></i>{maxGroupSize}
                </span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>

              <h5>Payment</h5>
              <p>Please check your email for payment option</p>

              <button className="btn primary__btn">
                <Link mailto="jadies@gmail.com" w="100%">Inquire Now</Link>
                </button>
            </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}

export default TourDetails