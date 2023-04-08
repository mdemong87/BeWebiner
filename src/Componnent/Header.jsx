import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assest/image/webinar_logo_retina.png";


export default function Header() {

  const [activerone, setactiverone] = useState(false);
  const [activertwo, setactivertwo] = useState(false);
  const [activerthree, setactiverthree] = useState(false);
  const [activerfour, setactiverfour] = useState(false);
  const [activerfive, setactiverfive] = useState(false);
  const [activersix, setactiversix] = useState(false);




  return (
    <div className="headerWrper">

      <Container>

        <Navbar expand="lg">
          <Container>

            <Navbar.Brand href="/">
              <img className='logo' src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle className=" border text-light" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" w-100 text-center headerWrper navheaderWrper">
                <Nav.Link className={`text-light naver ${activerone ? "active" : ""} `} href="/">Home</Nav.Link>
                <Nav.Link className={`text-light naver ${activertwo ? "active" : ""} `} href="/webiner">Webinars</Nav.Link>
                <Nav.Link className={`text-light naver ${activerthree ? "active" : ""} `} href="/news">News</Nav.Link>
                <Nav.Link className={`text-light naver ${activerfour ? "active" : ""} `} href="/about">About us</Nav.Link>
                <Nav.Link className={`text-light naver ${activerfive ? "active" : ""} `} href="/signup">Sign up Now</Nav.Link>
                <Nav.Link className={`text-light naver ${activersix ? "active" : ""} `} href="https://themeforest.net/item/betheme-responsive-multipurpose-wordpress-theme/7758048?iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1289117&mp_value1=&utm_campaign=af_impact_radius_1289117&utm_medium=affiliate&utm_source=impact_radius&irgwc=1&clickid=TKgWsK1xFxyNUBlxlHTHqyj7UkATAFRNqwXFV00&iradid=275988&irpid=1289117&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1289117&utm_medium=affiliate&utm_source=impact_radius">Buy Now</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container >
    </div >
  )
}
