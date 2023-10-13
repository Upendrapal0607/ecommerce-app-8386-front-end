import "./Landing.css";
import motherimage1 from "../../Images/Motherimage.jpg";
import motherimage2 from "../../Images/Motherimage1.jpg";
import { Link, useNavigate } from "react-router-dom";

export function MothersDayImage() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mother-image-poster" style={{ marginBottom: "30px" }}>
        <div onClick={() => navigate("/Product?category=gift")} className="image-poster-box">
          <img src={motherimage1} alt="" />
          <div className="botton-text">
            <button style={{ padding: "1% 12%" }}>Mother's Day Gift</button>
          </div>
        </div>
        <div onClick={() => navigate("/Product?category=gift")} className="image-poster-box">
          <img src={motherimage2} alt="" />
          <div className="botton-text">
            <button style={{ padding: "1% 12%" }}>Shop Wedding</button>
          </div>
        </div>
      </div>
      <div onClick={() => navigate("/Product?category=cloth")} className="full-image">
        <div>
          <img
            src="https://images.ctfassets.net/5de70he6op10/2XUxhNlu24HaHTFRAghRS3/f30d5364574fc72b718e910f087b2685/484733194-ls_m5a.jpg?w=2640&q=80&fm=webp"
            alt=""
          />
        </div>
        <div className="botton-text">
          <button className="new-clothing-btn" style={{ padding: "5px 4%" }}>
            Shop New Clothing
          </button>
        </div>
      </div>

      <div className="breaking-other-product-1">
        <h1 style={{ color: "black", fontWeight: "500" }}>Top-Rated Picks</h1>
        <Link to='/Product' style={{ color: "#1E88E5" }}>
          Shop All
        </Link>
      </div>
    </div>
  );
}
