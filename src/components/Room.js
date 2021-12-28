import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
import Carousel from "react-bootstrap/Carousel";

const Room = memo(({ room }) => {
  const { name, slug, images, price, size, address, id } = room;
  const [...listImages] = images;
  const square = price / size;

  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        {/* <img src={images[0] || defaultImg} alt="single room" /> */}
        <Carousel interval={null}>
          {listImages.map((item, index) => (
            <Carousel.Item key={index}>
              <img src={item} alt={name} />
            </Carousel.Item>
          ))}
          {/* {listImages.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))} */}
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
      <p>{price}$</p>
      <p>{size} площадь</p>
      <p>{square.toFixed(1)}$ за м.кв</p>
      <p>{address}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
