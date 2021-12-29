import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaAlignRight, FaInfinity, FaPhone, FaPlus, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../images/logo.svg";

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
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
            <ul className="nav-links custom_info">
              <li>
                <span className="loc_city"><FaMapMarkerAlt />Бишкек</span>
              </li>
              <li>
                <Link className="publish_phone" to="/rooms"><FaPhone />+996 (772) 17-12-63</Link>
              </li>
              <li>
                <Link className="publish_modal"><FaPlus />Заказать звонок</Link>
              </li>
            </ul>
          </div>
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
      </nav>
    );
  }
}
