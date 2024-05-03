import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/1.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <>
      <Navbar />

      <div className={style.homediv1}>
        <div className={style.homediv2}>
          <div>
            <Carousel responsive={responsive} infinite={true} autoPlay={true}>
              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n3.sdlcdn.com/imgs/k/r/l/ONDC_WEB_BANNER_12oct-f3080.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n2.sdlcdn.com/imgs/k/v/r/web_home_903_new_12-13ad3.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n2.sdlcdn.com/imgs/k/s/i/ethnicwear-ef4d9.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n3.sdlcdn.com/imgs/k/s/i/cookware-bc6ef.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n1.sdlcdn.com/imgs/k/s/i/sport_shoe-6f9df.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n3.sdlcdn.com/imgs/k/s/i/utility-86032.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n4.sdlcdn.com/imgs/k/s/i/bedsheets0512-a7f6e.jpg"
                  alt=""
                />
              </div>
            </Carousel>
          </div>

          <div>
            <img src={image1} className={style.direction} alt="" />
            <p className={style.directionp}>Your Delivery Pincode</p>
            <p className={style.directionp2}>
              Enter your pincode to check availability
            </p>
            <p className={style.directionp3}>and faster delivery options</p>
            <p className={style.direcpin}>Pincode : 721024</p>
          </div>
        </div>

        <div className={style.maintranding}>
          <p className={style.tranding}>TRENDING PRODUCTS</p>

          <div className={style.prodiv1}>

          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
