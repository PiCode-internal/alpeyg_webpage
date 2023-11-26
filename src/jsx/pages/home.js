import React from 'react';
import Header from './header';
import "../css/home.css";
import backgroundImg from "../images/Looper-1.png";
import starImg from "../images/Burst-pucker-2.png";
import { Link } from "react-router-dom";
import logo from "../images/Alpeyg Logo 2.png";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import { useWindowDimensions } from '../common';

const Home = () => {
  const {width} = useWindowDimensions();
  let show = width > 767;

  const handleAboutSection = () => {
    const applySection = document.getElementById("about_section");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleContactSection = () => {
    const applySection = document.getElementById("contact_section");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>

      <div className='main_wrapper'>
        <img className='background_img' src={backgroundImg} alt="backgroundImg" />
        <Header handleAboutSection={handleAboutSection} handleContactSection={handleContactSection} />
        <div className='container'>
          <div className='row'>
            <div className='col-12 first_main_Section'>
              <div className='main_heading'>
                <div className='star_div'>
                  <img src={starImg} className='starImg' alt="starImg" />
                </div>
                <h1 className='title'> Elevating lives ! </h1>
              </div>
              <h1 className='title'>Entertain, empower, transform !</h1>
              {
                show ?
                  <p className='deatils_text'>Founded in 2021 in Luxemburg, at the heart of continental Europe, <br />
                    Alpeyg is a partnership company limited by shares, <br />
                    which creates, develops, and commercializes online services <br />
                    for large audience throughout the world.
                  </p>
                  :
                  <p className='deatils_text'>Founded in 2021 in Luxemburg, at the heart of continental Europe, 
                    Alpeyg is a partnership company limited by shares, <br />
                    which creates, develops, and commercializes online services 
                    for large audience throughout the world.
                  </p>
              }

              <div className='contact_us_btn_div'>
                <button className='contact_us'  type="button" onClick={() => handleContactSection()}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12 about_section' id="about_section">
            <h1 className='about_title'>About</h1>
            {
              show ?
                <>
                  <p className='about_detail'>Driven by a true sense of duty towards betterment of our digitalized society,<br />
                    <span className='about_span_text'>Alpeyg products’</span> main focus are <br />
                    the <span className='about_span_text'> human well-being </span> and  <span className='about_span_text'> permanent enrichment. </span></p>
                  <p className='about_detail'>
                    <span className='about_span_text'> Personalization of our services </span> while abiding by the strictest international rules<br />
                    in terms of personal data management, enable us to propose<br />
                    the best to our users at <span className='about_span_text'> most affordable price </span>   while giving assurance<br />
                    to our users will always be the most revered stakeholders, <img src={starImg} className='starImg_about' alt="starImg" /><br />
                    without ever becoming or treated as a product.</p>
                  <p className='about_detail'>
                    Our very first product is a mobile application<br />
                    that aims at elevating the lives of its users,<br />
                    <span className='about_span_text'> through entertainment, empowerment and self-transformation. </span><br />
                  </p>
                </>
                :
                <>
                  <p className='about_detail'>Driven by a true sense of duty towards betterment of our digitalized society,
                    <span className='about_span_text'>Alpeyg products’</span> main focus are
                    the <span className='about_span_text'> human well-being </span> and  <span className='about_span_text'> permanent enrichment. </span></p>
                  <p className='about_detail'>
                    <span className='about_span_text'> Personalization of our services </span> while abiding by the strictest international rules
                    in terms of personal data management, enable us to propose
                    the best to our users at <span className='about_span_text'> most affordable price </span>   while giving assurance
                    to our users will always be the most revered stakeholders, <img src={starImg} className='starImg_about' alt="starImg" /><br />
                    without ever becoming or treated as a product.</p>
                  <p className='about_detail'>
                    Our very first product is a mobile application
                    that aims at elevating the lives of its users,
                    <span className='about_span_text'> through entertainment, empowerment and self-transformation. </span>
                  </p>
                </>

            }

          </div>
        </div>

      </div>

      <div className='footer_main_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 footer_content_div' id={"contact_section"}>
              <div className='col-lg-4 first_footer_div'>
                <div className='footer_logo_div'>

                  <img className='logo_footer' src={logo} alt="logo" />
                </div>
                <div className='email_div'>
                  <img src={mail} className='email' alt="email" />
                  <p>contact@alpeyg.com</p>
                </div>
                <div className='phone_div'>
                  <img src={phone} className='phone' alt="phone" />
                  <p>+33 7 69479878</p>
                </div>
              </div>
              <div className='second_footer_div'>
                <h4 className='link_title'>Links</h4>
                <div className='mt-4'>
                  <Link to="/" className='linkk'><p className='footer_links '>Home</p></Link>
                  <a href='/' className='linkk'><p className='footer_links'>About us</p></a>
                  <a href='/' className='linkk'><p className='footer_links'>Bookings</p></a>
                </div>
              </div>
            </div>
            <div className='col-12 line_div'>

              <hr className='horizontal-line' />
              <p className='copyright_text'>Copyright 2023 alpeyg.com All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}


export default Home