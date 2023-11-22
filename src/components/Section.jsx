import React from "react";
import "./section.css"
import Amazon from "./assets/amazon.webp";
import Pic1 from "./assets/p1.webp";
import Pic2 from "./assets/p2.webp";

const Section = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "5rem",
          paddingBottom: "2.5rem",
          backgroundColor: "#f7f6f6",
        }}
      >
        <div
          style={{ position: "relative", display: "flex" }}
          className="index-module--container--pL-5P"
        >
          <div
            id="carouselExampleRide"
            class="carousel slide main-caro"
            data-bs-ride="true"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Pic2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Amazon} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Pic1} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>

          
          </div>

          <div class="index-module--contentContainer--oW29e">
            <div>
                <p>HUElite</p>
                <h1>HUElite Spectrum Strip</h1>
                <h5>60led/mtr</h5>

                <div className="flex-container">
                <button
                  style={{
                    marginRight: "30px",
                    marginTop: "15px",
                    height: "40px",
                    width: "100px",
                    backgroundColor: "#000000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#ffffff", fontWeight: 500 }}>5 mtr</h4>
                </button>
                <button
                  style={{
                    marginRight: "30px",
                    marginTop: "15px",
                    height: "40px",
                    width: "100px",
                    backgroundColor: "#000000aa",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#ffffff", fontWeight: 500 }}>10 mtr</h4>
                </button>
        

                </div>
                <h2 style={{ marginBottom: 0, marginTop: "20px" }}>Rs-1399/-</h2>
                <h6
                style={{
                  margin: 0,
                  backgroundColor: "#27AE60",
                  borderRadius: "50px",
                  padding: "5px 15px",
                  width: "fit-content",
                  color: "#ffffff",
                  fontFamily: "Ubuntu",
                }}
              >
                Buy now & get upto Rs-50 off
              </h6>
            </div>
            <div style={{ marginTop: "30px" }}>

            <a>
            <h3 style={{ color: "#fff", textAlign: "center" }}>
                  Buy from Amazon
                </h3>
                </a>
                </div>
                
                <div>
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Description
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      
     <p>Huelite LED light strips are packed with rich colors and fantastic light effects, perfect for any indoor occasion like bedrooms, kitchens, and bathrooms. They can be easily controlled using Huelite 3.0 App.</p>
    <ul>
        <li>Music Sync: Syncing lights at the rhythm of your music.</li>
        <li>Convenient Voice Control: Works with Alexa.</li>
        <li>Smart App Control: Control your lights via Wi-Fi.</li>
        <li>Easy Installation: Mount to any dry and clean surface.</li>
        <li>Colorful Life: Decorate with 16Million+ colors to choose from.</li>
        <li>Custom DIY Function: Choose your favourite effects on the app.</li>
        <li>Control from Anywhere: Control your space at your fingertips- literally.</li>
        
    </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      PRODUCT SPECIFICATION
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        
      </div>
    </div>
  </div>
  </div>
                </div>
        </div>
        </div>
      
      </div>
    </>
  );
};

export default Section;
