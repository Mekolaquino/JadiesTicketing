import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/Beach.jpg'
import heroImg2 from '../assets/images/taal.jpg'
import heroVideo from '../assets/images/video.mp4'
import Subtitle from './../shared/Subtitle'
import experienceImg from '../assets/images/experience.png'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from './../components/featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image gallery/MasonryImagesGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'

const Home = () => {

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <h1>
                Less Hassle, {""}
                <span className="highlight">More Travel</span>
              </h1>
              <p>
              Jadie’s Online Ticketing and Travel Tours is a home-based travel agency that provides a hassle free bookings for local and international airlines and hotels, ferry booking (Ocean Jet & 2Go) and bus booking (Philtranco, Jam Liner & DLTB). It assists in arranging for your package holiday tour and visa processing.
              </p>
            </div>

            <div>
              <p>
                  Travel Agency in Sucat
                   Open today until 5:00 PM
              </p>

              <button className="btn primary__btn text-white mb-3">
                Get Quotes
                </button>
            </div>

          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
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
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />

              <h2>With our all experience <br />we will serve you</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />  Molestias aspernatur inventore officiis. </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>12k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years of experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery__title">Visit our customer tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Testimonial'} />
            <h2 className="testimonial__title">What our customer say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter />
    </>
  )
}

export default Home