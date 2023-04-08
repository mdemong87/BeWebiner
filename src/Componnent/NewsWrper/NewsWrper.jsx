import Container from "react-bootstrap/Container";
import SingleNews from "./SingleNews";

export default function NewsWrper() {
    return (
        <div>
            <h1 className="newsHead">News</h1>
            <Container>
                <div className="row">
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />
                    <SingleNews />
                </div>



                <nav className="mt-5 mb-5 w-75 m-auto " aria-label="...">
                    <ul class="pagination d-flex justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>


            </Container>

        </div>
    )
}
