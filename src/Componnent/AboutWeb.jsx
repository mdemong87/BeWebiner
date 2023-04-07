import Container from "./Container";
import about from "../assest/image/webinar-home-meeting.jpg";

export default function AboutWeb() {
  return (
    <Container>
        <div className="d-flex justify-content-between gap-5 border aboutWrp">
            <div className="w-100 ">
                <img className="w-100 h-100" src={about} alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center">
                <h2>About Webinar</h2>
                <p className="text-muted">Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit at nulla. Suspendisse potenti. In non lacinia risus, ac tempor ipsum.</p>
                <div className="d-flex gap-5 pt-3">
                <div className=" h3 aboutCircle">25%</div>
                <div className="h3 aboutCircle">45%</div>
                </div>
            </div>
        </div>
    </Container>
  )
}
