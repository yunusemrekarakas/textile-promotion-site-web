import React from 'react';
import "./Product.css"
import image1 from "../../Assets/image-slide-1.jpg";
import image2 from "../../Assets/image-slide-2.jpg";
import image3 from "../../Assets/image-slide-3.jpg";
import image4 from "../../Assets/image-slide-4.jpg";
const Product = () => {
  return (
<div className="product">
    <div className="products">
        <div className="product-card" style={{backgroundImage:'url('+ image1 +')'}}>
            <div className="product-card-image">
                <div className="content">
                    <h1>SPOR TAYT</h1>
                 <a href='#' className='btn'>İNCELE</a>  
                </div>
            </div>
        </div>
        <div className="product-card" style={{backgroundImage:'url('+ image2 +')'}}>
            <div className="product-card-image">
                <div className="content">
                    <h1>PANTOLON</h1>
                 <a href='#' className='btn'>İNCELE</a>  
                </div>
            </div>
        </div>
        <div className="product-card" style={{backgroundImage:'url('+ image3 +')'}}>
            <div className="product-card-image">
                <div className="content">
                    <h1>Şort</h1>
                 <a href='#' className='btn'>İNCELE</a>  
                </div>
            </div>
        </div>
        <div className="product-card" style={{backgroundImage:'url('+ image4 +')'}}>
            <div className="product-card-image">
                <div className="content">
                    <h1>DERİ TAYT</h1>
                 <a href='#' className='btn'>İNCELE</a>  
                </div>
            </div>
        </div>
        </div>
      </div>
  );
}

export default Product;
