import man from "../assest/image/home-slider-man2.png";

export default function Banner() {
  return (
    <div className="bannerWrp">
        <div className="d-flex dDlex">
            <div>
                <img className="man" src={man} alt="" />
            </div>
            <div className="bannerText">
               <h1 className="text-light">Learn how to invest visely <br/> with <br/> michael Errolth</h1>
              <button>Sign Up Now</button>
            </div>
        </div>
    </div>
  )
}
