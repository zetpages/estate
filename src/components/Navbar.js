import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { FaAlignRight, FaInfinity, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../images/logo.svg";
import ModalF from "./ModalF";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };


  render() {
    return (
      <nav className="navbarm">
        <div className="nav-center">
          <div className="nav-header">
            <div className="logo_location">
              <Link to="/">
                <img src={logo} alt="Beach Resort" />
              </Link>
              <span className="loc_city"><FaMapMarkerAlt />Бишкек</span>
            </div>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <div className="nav_second">
            <ul
              // className="nav-links custom_info"
              className={this.state.isOpen ? "nav-links custom_info show-nav" : "nav-links"}
            >
              {/* <li>
                <span className="loc_city"><FaMapMarkerAlt />Бишкек</span>
              </li> */}
              <li>
                <Link className="publish_phone" to="/rooms"><FaPhone />+996 (772) 17-12-63</Link>
              </li>
              <li>
                <ModalF />
              </li>
            </ul>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/about">О компании</Link>
              </li>
              <li>
                <Link className="publish_list" to="/rooms">Обьявления <FaInfinity /></Link>
                {/* <Link className="publish_list" to="/rooms">Обьявления</Link> */}
              </li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}
