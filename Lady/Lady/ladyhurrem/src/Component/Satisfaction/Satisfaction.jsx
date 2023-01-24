import React from 'react'
import "./Satisfaction.css"
import image1 from "../../Assets/icon-1.png"
import image2 from "../../Assets/icon-2.png"
import image3 from "../../Assets/icon-3.png"
const Reference = () => {
  return (
    <div className="Satisfaction">
       <div className="Satisfaction-center">
        <div className="card-1">
            <img src={image1}></img>
            <h3>YÜKSEK KALİTE</h3>
            <p>Dünya standartlarında üretimi için kaliteden ödün vermiyoruz.</p>
        </div>
        <div className="card-2">
        <img src={image2}></img>
            <h3>%100 MÜŞTERİ MEMNUNİYETİ</h3>
            <p>İş süreçlerimizin tümünde %100 müşteri memnuniyetini hedefliyoruz.</p>
        </div>
        <div className="card-3">
        <img src={image3}></img>
            <h3>ÇEVRE DOSTU ÜRETİM</h3>
            <p>Geri Kazanılmış ham maddeleri yeniden kullanarak çevreye dost bir üretim politikası sürdürüyoruz.</p>
        </div>
       </div>
    </div>
  )
}

export default Reference