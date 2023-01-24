import React from "react";
import "./Header.css";
import Logo from "../../Assets/lady-hurrem-logo.png";

const Header = () => {
  function openCloseBars() {
    var x = document.getElementById("bars");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      <div className="header">
        <div>
          {" "}
          <img src={Logo} alt="" />
        </div>
        <div class="header-menu" id="header-menu">
          <a href="#anasayfa" class="active">
            {" "}
            Ana Sayfa
          </a>
          <a href="#Hakkımızda">Hakkımızda</a>
          <a href="#Ürünler">Ürünler</a>
          <a href="#üretim">üretim</a>
          <a href="#iletişim">iletişim</a>
        </div>
        <div>
          <button className="btn">İletişim</button>
        </div>
        <i className="fa fa-bars" onClick={openCloseBars}></i>
        <div className="bars" id="bars">
          <div className="border-1">
            <ul>
            <li><a href="#anasayfa" class="active">
              {" "}
              Ana Sayfa
            </a></li>
            <li><a href="#Hakkımızda">Hakkımızda</a></li>
            <li><a href="#Ürünler">Ürünler</a></li>
            <li> <a href="#üretim">üretim</a></li>
            <li><a href="#iletişim">iletişim</a></li>
            <li><button className="btn">İletişim</button></li>
          </ul>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
