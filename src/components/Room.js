import React from "react";
import { Link } from "react-router-dom";
// import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
import Carousel from "react-bootstrap/Carousel";
import AgentImg from "../images/Zhoomart.jpg"
import {FaPhone, FaCouch, FaParking} from "react-icons/fa"

const Room = memo(({ room }) => {
  const { slug, images, price, size, address, capacity, type, storeys, parking, playground} = room;
  const [...listImages] = images;
  const square = price / size;
  // console.log(slug + " " + price + " " + size + " " + address + " " + capacity + " " + type + " " + storeys + " " +parking + " " + playground);

  return (
    <article className="room">
        <div className="img-container">
          <Carousel interval={null}>
            {listImages.map((item, index) => (
              <Carousel.Item key={index}>
                <Link to={`/rooms/${slug}`} className="img_parent">
                {/* <Link to={`/rooms/${slug}`} onClick={()=>{window.location.href = `/rooms/${slug}`}} className="img_parent"> */}
                  <img src={item} alt={address} />
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="price-top">
            <h6>${size}</h6>
            <p>м.кв</p>
          </div>
        </div>
        <div className="room_content">
          <p className="room_price">{price}$</p>
          <div className="parking_playground">
            <p className="room_price_square">{square.toFixed(1)}$ за м.кв {playground ? <FaCouch /> : ''} {parking ? <FaParking /> : ''}</p>
          </div>
          <p className="small_info">{capacity} - комн.{type} | {size} кв.м | {storeys} эт.</p>
          <p className="room_address">{address}</p>
          <div className="bottom_agent">
            <div className="agent_left">
              <div className="agent_img">
                <img src={AgentImg} alt="agent" />
              </div>
              <div className="agent_name">
                <p>Акимов</p>
                <p>Жоомарт</p>
              </div>
            </div>
            <div className="agent_phone_name">
              <a className="agent_call" href="tel:+996772171263"><FaPhone/>Позвонить</a>
            </div>
          </div>
        </div>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    // name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    parking: PropTypes.bool.isRequired,
    playground: PropTypes.bool.isRequired
  })
};
export default Room;
