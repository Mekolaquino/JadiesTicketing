import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesDate = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "lorem asfgou dsakdjoihf dsaljdisagflbd skhdaoush."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "lorem asfgou dsakdjoihf dsaljdisagflbd skhdaoush."
    },
    {
        imgUrl: customizationImg,
        title: "Customazation",
        desc: "lorem asfgou dsakdjoihf dsaljdisagflbd skhdaoush."
    }
] 

const ServiceList = () => {
  return (
    <>
    {servicesDate.map((item, index) => (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
    </>
  )
}

export default ServiceList