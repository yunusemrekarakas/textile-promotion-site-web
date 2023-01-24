import React from "react";
import "./Footer.css";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github.png";
import logo from "../../Assets/lady-hurrem-logo.png";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-header">
        <div className="menu">
          <h1>Menuler</h1>
          <a>Anasayfa</a>
          <a>Hakkımızda</a>
          <a>Ürünler</a>
          <a>Referanslar</a>
          <a>Üretim</a>
          <a>iletişim</a>
        </div>
        <div className="product-menu">
          <h1>Ürünler</h1>
          <a>Şort</a>
          <a>Deri Tayt</a>
          <a>Pantolon</a>
          <a>Spor Tayt</a>
        </div>
        <div className="adress">
          <h1>Adres</h1>
          <p>Merkez, Özyurt Sk. No:9/A,</p>
          <p> 34164 Güngören/İstanbul</p>
        </div>
        <div className="company-logo">
           <img src={logo}></img>
        </div>
      </div>
      <div className="socials-icons">
        <a href="#">
          <img src={instagram}></img>
        </a>
        <a>
          <img src={linkedin}></img>
        </a>
        <a>
          <img src={github}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
