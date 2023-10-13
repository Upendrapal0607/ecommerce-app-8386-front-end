import { useNavigate } from "react-router-dom";
import React from "react";

import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";
import image4 from "../../Images/image4.jpg";
import "./Landing.css";
export function ImagePoster() {

  const navigate = useNavigate();

  return (
    <div id="image-poster">
      <div className="image-poster" style={{ marginBottom: "30px" }}>
        <div onClick={() => navigate("/Product?category=dress-cloth")} className="image-poster-box">
          <img src={image1} alt="" />
          <div className="botton-text">
            <button>Shop Dresses</button>
          </div>
        </div>
        <div onClick={() => navigate("/Product?category=clothe")} className="image-poster-box">
          <img src={image2} alt="" />
          <div className="botton-text">
            <button>Shop New Clothing</button>
          </div>
        </div>

        <div onClick={() => navigate("/Product?category=jewelary")} className="image-poster-box">
          <img src={image3} alt="" />
          <div className="botton-text">
            <button>Shop Jewelry</button>
          </div>
        </div>
        <div onClick={() => navigate("/Product?category=grocery")} className="image-poster-box">
          <img src={image4} alt="" />
          <div className="botton-text">
            <button>Shop Reformation</button>
          </div>
        </div>
      </div>
    </div>
  );
}
