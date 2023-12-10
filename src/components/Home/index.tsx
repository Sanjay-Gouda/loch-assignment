import "./style.css";
import Signup from "./signup";
import { Bell } from "../../assets/svg/bell";
import cohort from "../../assets/Cohorts.png";
import { Eye } from "../../assets/svg/eye";
import { Logo } from "../../assets/svg/logo";

import Slider from "infinite-react-carousel";
import TestimonialCard from "../Card/testimonialCard";
import { feedback } from "../../constants/data/testimonial";
import { HeaderBell } from "../../assets/svg/headerBell";
import NotificationCard from "../Card/notificationCard";
import { States } from "../../assets/svg/states";
import { Clock } from "../../assets/svg/clock";
const HomePage = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    className: "slide_box",
    // dots: true,
    virtualList: true,
    duration: 200,
    arrows: false,
    slidesToShow: 1,
    slidesPerRow: 2,
    // slidesToShow: 1.5,
  };
  return (
    <>
      <div className="home-wrapper">
        <div className="left-wrapper">
          <div className="top-content-wrapper">
            <div className="content-wrapper">
              <HeaderBell />
              <h1 className="bell-heading">
                Get notified when a highly correlated whale makes a move
              </h1>
              <p className="bell-subheading">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="top-slider-wrapper">
              <Slider {...settings}>
                <div className="carousal-wrapper">
                  <NotificationCard
                    icon={<Bell />}
                    isSave={false}
                    about="We'll be sending notifications to youhere"
                  />
                </div>
                <div className="carousal-wrapper">
                  <NotificationCard
                    icon={<States />}
                    isSave={true}
                    about="Notify me when any wallets
                    move more than"
                  />
                </div>
                <div className="carousal-wrapper">
                  <NotificationCard
                    icon={<Clock />}
                    isSave={true}
                    about="Notify me when any wallet dormant for"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="mid-wrapper">
            <div className="top-content-wrapper">
              <div className="image-wrapper">
                <img src={cohort} />
              </div>

              <div className="content-wrapper mid">
                <Eye />
                <h1 className="bell-heading eye">
                  Watch what the whales are doing{" "}
                </h1>
                <p className="bell-subheading eye">
                  All whales are not equal. Know exactly what the whales
                  impacting YOUR portfolio are doing.
                </p>
              </div>
            </div>
            <div className="divide-wrapper">
              <h1 className="bell-heading">Testimonial</h1>

              <div className="divider"></div>
            </div>
            <div className="testimonial-wrapper">
              <Logo />
              <div className="slider-wrapper">
                <Slider {...settings}>
                  {feedback?.map((data) => (
                    <TestimonialCard {...data} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <Signup />
      </div>
    </>
  );
};

export default HomePage;
