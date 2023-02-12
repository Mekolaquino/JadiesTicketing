import React from 'react'
import { Form } from 'reactstrap'
import '../styles/contact.css'
import CommonSection from '../shared/CommonSection'

import contact from '../assets/images/contact-img.svg'

const Contact = () => {
  return (
  <>
  <CommonSection title={'Contact Us'} />
    <section className="contact">
        <div className="row">
            <div className="image">
                <img src={contact} alt=""/>
            </div>

            <Form action="" method="post">
                <h3>Get into us!</h3>
                <input type="text" name="name" maxlength="50" className="box" placeholder="Enter your name" required/>
                <input type="number" name="number" min="0" max="9999999999" className="box" placeholder="Enter your number" required maxlength="10"/>
                <input type="email" name="email" maxlength="50" className="box" placeholder="Enter your email" required/>
                <textarea name="msg" className="box" required placeholder="Enter your message" maxlength="500" cols="30" rows="10"></textarea>
                <input type="submit" value="send message" name="send" className="btn primary__btn text-white mb-3"/>
            </Form>

        </div>
</section>
</>
  )
}

export default Contact