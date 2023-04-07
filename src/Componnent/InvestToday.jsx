import meneyImage from "../assest/image/webinar-money-stack.png";
import Container from "./Container";

export default function InvestToday() {
  return (
    <Container>
        <div className="text-center investWrp">
        <div>
            <img src={meneyImage} alt="money image" />
        </div>
        <div>
            <h2>Learn how to invest today</h2>

            <Container>
                <Container>
                <p className="text-muted">Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit at nulla. Suspendisse potenti. In non lacinia risus, ac tempor ipsum. Phasellus venenatis leo eu semper varius. Maecenas sit amet molestie leo.</p>
                </Container>
            </Container>
            <button className="text-center mt-5 SignUptodayBtn"> Sign Up Today</button>
        </div>
    </div>
    </Container>
  )
}
