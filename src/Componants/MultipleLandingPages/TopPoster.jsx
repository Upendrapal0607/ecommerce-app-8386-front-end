import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../../Images/TopImagePoster1.jpg";
import logo2 from "../../Images/Refarmation.jpg";
import "./Landing.css";
export function TopPoster() {
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate("/Product")} className="Poster1-Image">
        <div className="Image-poster-1">
          <img src={logo1} alt="" />
        </div>
        <div onClick={() => navigate("/Product")} className="Image-poster-2">
          <img src={logo2} alt="" />
        </div>
      </div>
    </div>
  );
}
