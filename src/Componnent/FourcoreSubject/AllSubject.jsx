import Container from "react-bootstrap/Container";
import imageFour from "../../assest/image/webinar-home-icon11.png";
import imageThree from "../../assest/image/webinar-home-icon22.png";
import imageTwo from "../../assest/image/webinar-home-icon33.png";
import imageOne from "../../assest/image/webinar-home-icon44.png";
import SingleSubject from "./SingleSubject";

export default function AllSubject() {
  return (
    <div className="allsubjuctWrp">
      <h1 className="text-center text-light p-5">Every webinar
        <br />
        covers 4 core subjects</h1>
      <Container>
        <div className="row allsubjectrow">
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <SingleSubject title="
Chart data" dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida." img={imageOne} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <SingleSubject title="

Currencies" dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida." img={imageTwo} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <SingleSubject title="

Money mechanics" dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida." img={imageThree} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <SingleSubject title="

Stress management" dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida." img={imageFour} />
          </div>
        </div>
      </Container>

      <button className="text-center SignUptodayBtn"> Sign Up Today</button>

    </div>
  )
}
