import Container from "../Componnent/Container";
import logo from "../assest/image/webinar_logo_retina.png";


export default function Header() {
  return (
    <div className="headerWrper">

      <Container>

        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link text-light" href="/">Home <span class="sr-only"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/webiner">Webinars</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="news">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/about">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/signup">Sign up Now</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="https://themeforest.net/item/betheme-responsive-multipurpose-wordpress-theme/7758048?iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1289117&mp_value1=&utm_campaign=af_impact_radius_1289117&utm_medium=affiliate&utm_source=impact_radius&irgwc=1&clickid=TKgWsK1xFxyNUBlxlHTHqyj7UkATErSALSl7xs0&iradid=275988&irpid=1289117&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1289117&utm_medium=affiliate&utm_source=impact_radius">Buy Now</a>
              </li>

            </ul>
          </div>
        </nav>
      </Container>
    </div>
  )
}
