import React from "react";
// import { Link } from "react-router-dom";
// import Hero from "../components/Hero";
// import Banner from "../components/Banner";
import Services from "../components/Services";
// import FeaturedRooms from "../components/FeaturedRooms";
import SlickSlider from "../components/SlickSlider";
import MainHero from "../components/MainHero";
import SearchContainer from "../components/SearchContainer";
import Middle from '../images/Mid.jpg';
import Secure from '../images/security.svg';
// import RoomsContainer from "../components/RoomsContainer";

const home = () => {
  return (
    <div className="custom_wrapper">
      {/* <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero> */}
      <MainHero />
      <SearchContainer />
      {/* <RoomsContainer /> */}
      {/* <FeaturedRooms /> */}
      <SlickSlider />
      <Services />
      <section className="contact_form">
        <div className="contact_form_inner">
          <div className="contact_content">
            <h1>Найдите свой дом вместе</h1>
            <p>
              Вот список величайших лозунгов компаний по недвижимости за все время. За этими броскими лозунгами следует Greatest Real Estate.
            </p>
            <div className="content_form">
              <input type="text" placeholder="+996(___) ___- ___" />
              <button className="form_btn">Отправить</button>
            </div>
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </section>
      <section className="adv">
        <div className="containers">
          <div className="adv_parent">
            <div className="adv_to_left">
              <div className="adv_card">
                <div className="card_img">
                  <img src={Secure} alt="security" />
                </div>
                <h3>100% Security</h3>
                <p>For many of us, buying a home is a dre and one not easily attainable. </p>
              </div>
              <div className="adv_card">
                <div className="card_img">
                  <img src={Secure} alt="security" />
                </div>
                <h3>100% Security</h3>
                <p>For many of us, buying a home is a dre and one not easily attainable. </p>
              </div>
              <div className="adv_card">
                <div className="card_img">
                  <img src={Secure} alt="security" />
                </div>
                <h3>100% Security</h3>
                <p>For many of us, buying a home is a dre and one not easily attainable. </p>
              </div>
            </div>

            <div className="adv_to_mid">
              <div className="mid_img">
                <img src={Middle} alt="just center" />
              </div>
            </div>

            <div className="adv_to_right">
              <div className="adv_card">
                <div className="card_img">
                  <img src={Secure} alt="security" />
                </div>
                <h3>100% Security</h3>
                <p>For many of us, buying a home is a dre and one not easily attainable. </p>
              </div>
              <div className="adv_card">
                <div className="card_img">
                  <img src={Secure} alt="security" />
                </div>
                <h3>100% Security</h3>
                <p>For many of us, buying a home is a dre and one not easily attainable. </p>
              </div>
              <div className="adv_card">
                <div className="card_img">
                  <img src={Secure} alt="security" />
                </div>
                <h3>100% Security</h3>
                <p>For many of us, buying a home is a dre and one not easily attainable. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
