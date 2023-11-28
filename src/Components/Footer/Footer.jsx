import React from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contentDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH!</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Vista Voyage!
              </a>
            </div>
            <div className="footerParagraph">
              Something something something Something something something
              Something something something Something something something
              Something something something Something something something
              Something something something
            </div>
            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* group one */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </ul>
            </div>

            {/* group two  */}
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  RentCars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  TripAdvisor
                </li>
              </ul>
            </div>

            {/* group three  */}
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  California
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Indonesia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Europe
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Oceania
                </li>
              </ul>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME </small>
            <small> COPYRIGHTS RESERVED - PD - 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
