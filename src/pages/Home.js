import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import SlickSlider from "../components/SlickSlider";
import MainHero from "../components/MainHero";
import SearchContainer from "../components/SearchContainer";
import RoomsContainer from "../components/RoomsContainer";

const home = () => {
  return (
    <>
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
      <Services />
      {/* <FeaturedRooms /> */}
      <SlickSlider />
    </>
  );
};

export default home;
