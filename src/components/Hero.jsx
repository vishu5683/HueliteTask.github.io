import React from "react";
import Amazon from "./assets/amazon.webp";
import Pic1 from "./assets/p1.webp"
import Pic2 from "./assets/p2.webp"

const Hero = () => {
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
           <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src= {Pic1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src= {Pic2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src= {Amazon} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div
              className="index-module--imgWidth--pfUdd"
              style={{
                overflow: "hidden",
                position: "relative",
                display: "flex",
                boxShadow: "0px 0px 13px 0px rgba(64,64,64,0.75)",
              }}
            >
          
            </div>
            <div
              className="index-module--imgWidth--pfUdd"
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 3,
              }}
            >
              {/* Your content goes here */}
            </div>
          </div>
          <div className="index-module--contentContainer--oW29e">
            {/* Your content goes here */}
            <div>
              <p style={{ margin: 0 }}>HUElite</p>
              <h1 style={{ margin: 0 }}>HUElite Spectrum Strip</h1>
              <h5 style={{ margin: 0 }}>60led/mtr</h5>
              <div
                className="flex-container"
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
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
              <a
                target="_blank"
                href="https://www.amazon.in/s?me=ADEJJYXA274FU&ref=sf_seller_app_share_new"
                id="AMZ_BUY_BUTTON_homepage"
                style={{
                  height: "50px",
                  width: "100%",
                  backgroundColor: "#000",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3 style={{ color: "#fff", textAlign: "center" }}>
                  Buy from Amazon
                </h3>
              </a>
            </div>

            <div>
              <div>
                <div
                  style={{
                    padding: "10px 0px",
                    borderBottom: "1px solid #aaa",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <h4 style={{ margin: "0", flex: "1" }}>Description</h4>
                    {/* <svg
  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
  focusable="false"
  aria-hidden="true"
  viewBox="0 0 24 24"
  data-testid="KeyboardArrowDownIcon"
  style={{ transition: 'transform 0.5s ease-in-out 0s', transform: 'rotate(180deg)' }}
>
  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
</svg> */}
                  </div>
                </div>

                <div
                  style={{
                    overflow: "hidden scroll",
                    transition: "max-height 0.5s ease-in-out 0s",
                    maxHeight: "300px",
                  }}
                  class="index-module--contentContainer--y56ir"
                >
                  <div style={{ margin: "15px 10px" }}>
                    <p>
                      Huelite LED light strips are packed with rich colors and
                      fantastic light effects, perfect for any indoor occasion
                      like bedrooms, kitchens, and bathrooms. They can be easily
                      controlled using Huelite 3.0 App.
                    </p>
                    <ul style={{ marginTop: "1rem" }}>
                      <li style={{ marginTop: "0" }}>
                        Music Sync: Syncing lights at the rhythm of your music.
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        Convenient Voice Control: Works with Alexa.
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        Smart App Control: Control your lights via Wi-Fi.
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        Easy Installation: Mount to any dry and clean surface.
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        Colorful Life: Decorate with 16 Million+ colors to
                        choose from.
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        Custom DIY Function: Choose your favorite effects on the
                        app.
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        Control from Anywhere: Control your space at your
                        fingertips - literally.
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    padding: "10px 0px",
                    borderBottom: "1px solid #aaa",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <h3 style={{ margin: "0", flex: "1" }}>
                      PRODUCT SPECIFICATION
                    </h3>
                    {/* <svg
    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="KeyboardArrowDownIcon"
    style={{ transition: 'transform 0.5s ease-in-out 0s', transform: 'rotate(180deg)' }}
  >
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
  </svg> */}
                  </div>
                </div>

                <div
                  style={{
                    overflow: "hidden scroll",
                    transition: "max-height 0.5s ease-in-out 0s",
                    maxHeight: "300px",
                    padding: "0px",
                  }}
                  class="index-module--contentContainer--y56ir"
                >
                  <div style={{ margin: "15px 10px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        minHeight: "40px",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderColor: "#aaa",
                        padding: "0px 10px",
                      }}
                    >
                      <div style={{ display: "flex", flex: "1" }}>
                        <p
                          style={{
                            margin: "5px 0px",
                            fontWeight: "500",
                            color: "#444",
                          }}
                        >
                          Length
                        </p>
                      </div>
                      <div style={{ display: "flex", flex: "1" }}>
                        <p style={{ margin: "5px 0px", color: "#444" }}>
                          5 Meter
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        minHeight: "40px",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderColor: "#aaa",
                        padding: "0px 10px",
                      }}
                    >
                      <div style={{ display: "flex", flex: "1" }}>
                        <p
                          style={{
                            margin: "5px 0px",
                            fontWeight: "500",
                            color: "#444",
                          }}
                        >
                          Wattage
                        </p>
                      </div>
                      <div style={{ display: "flex", flex: "1" }}>
                        <p style={{ margin: "5px 0px", color: "#444" }}>
                          14.4 Watt at full brightness
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        minHeight: "40px",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderColor: "#aaa",
                        padding: "0px 10px",
                      }}
                    >
                      <div style={{ display: "flex", flex: "1" }}>
                        <p
                          style={{
                            margin: "5px 0px",
                            fontWeight: "500",
                            color: "#444",
                          }}
                        >
                          Contains
                        </p>
                      </div>
                      <div style={{ display: "flex", flex: "1" }}>
                        <p style={{ margin: "5px 0px", color: "#444" }}>
                          1 x 5m of LED lightstrip + controller + power supply
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        minHeight: "40px",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderColor: "#aaa",
                        padding: "0px 10px",
                      }}
                    >
                      <div style={{ display: "flex", flex: "1" }}>
                        <p
                          style={{
                            margin: "5px 0px",
                            fontWeight: "500",
                            color: "#444",
                          }}
                        >
                          Brightness
                        </p>
                      </div>
                      <div style={{ display: "flex", flex: "1" }}>
                        <p style={{ margin: "5px 0px", color: "#444" }}>
                          1100+ Lumens per meter
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        minHeight: "40px",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderColor: "#aaa",
                        padding: "0px 10px",
                      }}
                    >
                      <div style={{ display: "flex", flex: "1" }}>
                        <p
                          style={{
                            margin: "5px 0px",
                            fontWeight: "500",
                            color: "#444",
                          }}
                        >
                          Standby Power
                        </p>
                      </div>
                      <div style={{ display: "flex", flex: "1" }}>
                        <p style={{ margin: "5px 0px", color: "#444" }}>
                          0.3 Watt
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        minHeight: "40px",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderColor: "#aaa",
                        padding: "0px 10px",
                      }}
                    >
                      <div style={{ display: "flex", flex: "1" }}>
                        <p
                          style={{
                            margin: "5px 0px",
                            fontWeight: "500",
                            color: "#444",
                          }}
                        >
                          Working Hours
                        </p>
                      </div>
                      <div style={{ display: "flex", flex: "1" }}>
                        <p style={{ margin: "5px 0px", color: "#444" }}>
                          50,000 hours
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        minHeight: "40px",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderColor: "#aaa",
                        padding: "0px 10px",
                      }}
                    >
                      <div style={{ display: "flex", flex: "1" }}>
                        <p
                          style={{
                            margin: "5px 0px",
                            fontWeight: "500",
                            color: "#444",
                          }}
                        >
                          Warranty
                        </p>
                      </div>
                      <div style={{ display: "flex", flex: "1" }}>
                        <p style={{ margin: "5px 0px", color: "#444" }}>
                          1 year warranty + Lifetime Tech support
                        </p>
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

export default Hero;
