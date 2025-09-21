import React from 'react';
import fb from '../images/facebook.png'
import gmail from '../images/gmail.png'
import insta from '../images/instagram.jpg'
import tiktok from '../images/tiktok.png'
function Footer() {
  return (
    <>
      <div className="container my-5" style={{width: "100vw", position: "relative"}}>
        <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#929fba", width: "100vw", position: "absolute", right: "0vw", bottom: "-34vh"}}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" style={{border: "2px solid white ", padding: "20px", marginRight:"30vw", backgroundColor:"rgb(60, 60, 60)"}}>
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    FitX: A fit LIfe
                  </h6>
                  <p>
                    Welcome to FitX, where we sell Gym Accessories, Sports/Exercize Appearel
                     and Gym Supplements. We also have a tool to check your daily Diet.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <a href="#!" className="text-white">Gym Weights</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Clothing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Supplements</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Diet AI</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i className="fas fa-home mr-3"></i> Riyadh, Shareh-Sabala, SaudiArabia</p>
                  <p><i className="fas fa-envelope mr-3"></i> podpeople100@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i> +92 337-7577330</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ width: "3.5vw", backgroundColor: "deeppink"}}
                    href="#!"
                    role="button"
                  ><img src={insta} alt="" style={{width: "100%"}}/></a>

                  

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#dd4b39"}}
                    href="#!"
                    role="button"
                  ><img src={gmail} alt="" style={{width: "2vw"}}/></a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#333333"}}
                    href="#!"
                    role="button"
                  ><img src={tiktok} alt="" style={{width: "2vw"}}/></a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#0082ca"}}
                    href="#!"
                    role="button"
                  ><img src={fb} alt="" style={{width: "2vw"}}/></a>

                  
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2025 Copyright  :  
            <a className="text-white" href="https://mdbootstrap.com/" style={{textDecoration: "none"}}
            > FitX  :  A fit life</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;