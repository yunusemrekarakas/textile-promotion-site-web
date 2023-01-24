import React from 'react'
import "./Reference.css"
import image1 from "../../Assets/Amazon.png"
import image2 from "../../Assets/Arabam.png"
import image3 from "../../Assets/hepsiburada.png"
import image4 from "../../Assets/n11.png"
import image5 from "../../Assets/Trendyol.png"
const Reference = () => {
  return (
    <div className="reference">
        <h1 className="stroke-text">Referanslar</h1>
        <hr className="hr"></hr>
        <div className="references">
            <div className="reference-card">
              <img src={image1}></img>
            </div>
            <div className="reference-card">
              <img src={image2}></img>
            </div>
            <div className="reference-card">
              <img src={image3}></img>
            </div>
            <div className="reference-card">
              <img src={image4}></img>
            </div>
            <div className="reference-card">
              <img src={image5}></img>
            </div>
        </div>   
    </div>
  )
}

export default Reference