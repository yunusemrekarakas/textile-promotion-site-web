import React from 'react'
import image from  "../../Assets/image-slide-1.jpg"
import image2 from  "../../Assets/image-slide-2.jpg"
import image3 from  "../../Assets/image-slide-3.jpg"
import image4 from  "../../Assets/image-slide-4.jpg"
import "./Products.css"
const Products = () => {
    const Short = () => {
        const a= document.getElementById("boxProduct-1");
        a.style.display="none";
        const b= document.getElementById("boxProduct");
        b.style.display="block";
       }
      const Pants = () => {
        const a= document.getElementById("boxProduct");
        a.style.display="none";
        const b= document.getElementById("boxProduct-1");
        b.style.display="block";
       }
  return (
    <div className='Products'>  
        <div className='Products-btn'>
            <div className='btn'>
                <button className='shorts' onClick={Short}>Shorts</button>
            </div>
            <div className='btn'>
                <button className='Pants' onClick={Pants}>Pants</button>
            </div>
            <div className='btn'>
                <button className='Sport' >Sport</button>
            </div>
            <div className='btn'>
                <button className='Leather' >Leather</button>
            </div>
        </div>
        <div className='products-box'id='boxProduct'>
            <div className='box' >
                 <div className='product-box'>
                        <img src={image} alt="" />
                        
                 </div>
                 <div className='product-box'>
                        <img src={image2} alt="" /> 
                 </div> 
                 <div className='product-box'>
                        <img src={image3} alt="" /> 
                 </div> 
                 <div className='product-box'>
                        <img src={image4} alt="" /> 
                 </div>    
            </div>
        </div>
        <div className='products-box'id='boxProduct-1'style={{display:"none"}}>
            <div className='box' >
                 <div className='product-box'>
                        <img src={image2} alt="" />
                 </div>
                 <div className='product-box'>
                        <img src={image3} alt="" /> 
                 </div> 
                 <div className='product-box'>
                        <img src={image} alt="" /> 
                 </div> 
                 <div className='product-box'>
                        <img src={image4} alt="" /> 
                 </div>    
            </div>
        </div>
       
    </div>
  )
}

export default Products