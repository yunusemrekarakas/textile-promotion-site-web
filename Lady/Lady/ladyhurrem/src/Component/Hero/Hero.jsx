import React, { useState } from "react"
import "./Hero.css"
import { testimonialsData } from "../../Data/testimonialsData"
import LeftArrow from "../../Assets/leftArrow.png"
import RightArrow from "../../Assets/rightArrow.png"
const Hero = () => {
    const [selected, setSelected] = useState(0);
    const tlenght = testimonialsData.length;
    return (
      <>
        <div className="hero">
            <div className="left-t">
              <span className="stroke-text">LADY HÜRREM</span>
              <p>
              Firmamız LADY HÜRREM 2013 yılından bu yana giyim sektöründe faaliyet göstermektedir. Firmamız Asya, Avrupa Afrika ve Amerika ya ihracat yaparak tecrübesini arttırmış olup, sektördeki kadın giyim ve tayt üretiminde kaliteli marka olarak yerini sağlamlaştırmıştır.
              </p>
              <p>İstanbul Güngören'de bulunan firmamız 70 çalışma arkadaşına sahiptir. Firmamızda müşterilerimizin kurumsal ihtiyaçlarını daha çok ön planda tutan yüksek kaliteli kumaşlar yelpazesi ile kadın tayt ve kadın giyim üretiminde üst sıralarda yer almaktadır.</p>
              <p>Yılların geliştirmiş olduğu uzmanlık ve tecrübeyle, her zaman önceliği kalite olan firmamız, tekstil sektörüne yenilikler katarak, yılın modasına uyumlu, doğa dostu ve insan sağlığını önde tutan ürünlerimiz ile, sizlere en güzel şekilde hizmet vermeye devam edecektir.(Production of Leggings, فيزون)</p>
            </div>
            <div className="right-t">
              <div className="border-1"></div>
              <div className="border-2"></div>
              <img className="image" src={testimonialsData[selected].image} alt="" />
              <div className="Arrows">
               <img className="Arrow-left"
                  onClick={() => {
                    selected === 0
                      ? setSelected(tlenght - 1)
                      : setSelected((prev) => prev - 1);
                  }}
                  src={LeftArrow}
                />
                <img className="Arrow-right"
                  onClick={() => {
                    selected === tlenght - 1
                      ? setSelected(0)
                      : setSelected((prev) => prev + 1);
                  }}
                  src={RightArrow}
                />
              </div>
            </div>
        </div>
      </>
    );
  };
export default Hero;
