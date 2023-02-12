import React, { useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'

import '../styles/tour.css'
import tourData from '../assets/data/tours'
import TourCard from  './../shared/TourCard'
import { Container, Row, Col } from 'reactstrap'
import ServiceList from '../services/ServiceList'

const Tour = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setpage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);


  return (
    <>
    <CommonSection title={'All Tour'} />
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="sevices__title">We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {tourData?.map(tour => (
            <Col lg='3' key={tour.id}>
              <TourCard tour={tour} />
            </Col>
          ))}

          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[ ...Array(pageCount).keys()].map(number => (
                <span key={number} onClick={() => setpage(number)}
                className={page === number ? "active__page" : ""}>
                  {number + 1}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Tour