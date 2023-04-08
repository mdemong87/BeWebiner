import Container from "react-bootstrap/Container";
import NewsimageThree from "../../assest/image/webinar-blog-featured1-960x720.jpg";
import NewsimageFour from "../../assest/image/webinar-blog-featured2-960x720.jpg";
import NewsimageTwo from "../../assest/image/webinar-blog-featured4-960x720.jpg";
import NewsimageOne from "../../assest/image/webinar-blog-featured5-960x720.jpg";

import SingleNews from "./SingleNews";

export default function NewsWrper() {
    return (
        <div>
            <h1 className="newsHead">News</h1>
            <Container>
                <div className="row">
                    <SingleNews Newsimage={NewsimageOne} />
                    <SingleNews Newsimage={NewsimageTwo} />
                    <SingleNews Newsimage={NewsimageThree} />
                    <SingleNews Newsimage={NewsimageFour} />
                    <SingleNews Newsimage={NewsimageThree} />
                    <SingleNews Newsimage={NewsimageOne} />
                </div>



                <nav className="mt-5 mb-5 w-75 m-auto " aria-label="...">
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                            <a className="page-link back" href="#">2</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link text-muted" href="#">Next</a>
                        </li>
                    </ul>
                </nav>


            </Container>

        </div>
    )
}
