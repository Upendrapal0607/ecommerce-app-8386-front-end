import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
export function BigSmallPoster() {
  const navigate = useNavigate()
  return (
    <div id="big-poster">
      <div className="big-image-poster" style={{ marginBottom: "30px" }}>
        <div onClick={() => { navigate("/Product") }} className="big-image-poster-box-1">
          <img
            src="https://images.ctfassets.net/5de70he6op10/1V3Atq484hyeMWCw1MVXas/12f900820a162ba443ed50c4fdfd42d3/484733140-ls_m3a.jpg?w=1756&q=80&fm=webp"
            alt=""
          />
          <div className="botton-text">
            <button style={{ padding: "1% 12%" }}>The Refarmation Shop</button>
          </div>
        </div>
        <div onClick={() => { navigate("/Product") }} className="big-image-poster-box-2">
          <img
            src="https://images.ctfassets.net/5de70he6op10/3rKgQlzbypafdDTvNckO2q/193350ddf772ecfdc9c89ee5879ff993/484733144-ls_m3b.jpg?w=856&q=80&fm=webp"
            alt=""
          />
          <div className="botton-text">
            <button>Shop Wedding</button>
          </div>
        </div>
      </div>
    </div>
  );
}
