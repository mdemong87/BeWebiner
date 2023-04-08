import imgetwo from "../../assest/image/webinar-webinars-app.jpg";
import imgeone from "../../assest/image/webinar-webinars-finance.jpg";
import SingleInvester from "./SingleInvester";

export default function WebinerInvertWrp() {
    return (
        <div>
            <SingleInvester imge={imgeone} />
            <SingleInvester imge={imgetwo} />
        </div>
    )
}
