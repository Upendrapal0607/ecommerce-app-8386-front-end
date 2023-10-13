import Product from "../../db.json";
import "./Landing.css";
import { Link } from "react-router-dom";
export function TopRatedPicks() {
  return (
    <div id="top-rated">
      <div className="top-rated-picked">
        {Product.Top_rated_picked?.map((item) => {
          return (
            <div key={item.id} className="top-rated-picked-box">
              <div className="top-rated-picked-image">
                <img src={item.image} alt="" />
              </div>
              <div className="top-rated-picked-details">
                <h1 style={{ color: "black" }}>{item.name}</h1>
                <p>{item.title}</p>
                <p>{item.star}</p>
                <p>{item.details}</p>
                <div>
                  <Link to={item?.id == 3 ? "/Product?category=shoes" : "/Product?category=cloth"} style={{ color: "blue" }}>
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="space-2">
        <h1 style={{ color: "black", fontWeight: "500" }}>You May Also Like</h1>
      </div>
    </div>
  );
}
