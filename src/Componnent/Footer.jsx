import React from 'react';
import Container from 'react-bootstrap/Container';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineWhatsApp } from "react-icons/ai";
import footerlogo from "../assest/image/webinar-footer.png";

export default function Footer() {
  return (
    <Container>
      <div>
        <div className='d-flex justify-content-between align-items-center m-5 footer'>
          <div>
            <h3>Sing Up Now!</h3>
            <input className='p-1 mt-3 mb-3' type="text" placeholder='jhon@gamil.com' />
            <button className='FooteryBtn'>Send</button>
            <p>Mauris accumsan, massa non consectetur condimentu.</p>
          </div>
          <div>
            <img className=' text-center footerlogo' src={footerlogo} alt="logo" />
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center m-5 mb-4 footer'>
          <div className='pb-2'>© 2023 Betheme by Md Emon Hossen | All Rights Reserved | Powered by React js </div>
          <div className='pb-2 d-flex gap-2 '>
            <AiFillFacebook className='text-muted ficons' />
            <AiFillLinkedin className='text-muted ficons' />
            <AiFillInstagram className='text-muted ficons' />
            <AiOutlineWhatsApp className='text-muted ficons' />
            <AiFillYoutube className='text-muted ficons' />

          </div>
        </div>
      </div>
    </Container>
  )
}

