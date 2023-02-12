import React from 'react'
import './../styles/about.css'
import { Container, Row, Col } from 'reactstrap'
import about from '../assets/images/about.png'
import Testimonial from '../components/Testimonial/Testimonial'
import Subtitle from '../shared/Subtitle'
import CommonSection from '../shared/CommonSection'

const About = () => {
  return (
    <>
    <CommonSection title={'About Us'} />
    <section className="about">
        <div className="row">
        <div className="image">
            <img src={about} alt=""/>
        </div>

        <div className="content">
            <h3>why choose us?</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, neque debitis incidunt qui ipsum sed doloremque a molestiae in veritatis ullam similique sunt aliquam dolores dolore? Quasi atque debitis nobis!</p>
            <a href="/tour" className="btn primary__btn text-white mb-3">Our Tours</a>
        </div>

        </div>
    </section>
    <section>
        <Container>
            <Row>
            <Col lg='12'>
                <Subtitle subtitle={'Fans Love'} />
                <h2 className="testimonial__title">What our fans say about</h2>
            </Col>
            <Col lg='12'>
                <Testimonial />
            </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default About