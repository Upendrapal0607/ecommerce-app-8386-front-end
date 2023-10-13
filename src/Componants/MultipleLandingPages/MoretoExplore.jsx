import Product from "../../db.json";
import "./Landing.css";
import { Link } from "react-router-dom";
export function MoretoExplore() {

  return (
    <div>
      <div className="top-rated-picked-2">
        {Product.RecentlyViewed?.map((item) => {
          return (
            <div
              key={item.id}
              className="top-rated-picked-box"
              style={{ marginTop: "30px" }}
            >
              <div className="top-rated-picked-image-2">
                <img src={item.image} alt="" />
              </div>
              <div className="top-rated-picked-details">
                <h1 style={{ color: "black" }}>{item.name}</h1>
                <p>{item.title}</p>
                <p>{item.star}</p>
                <p>{item.details}</p>
                <div>
                  <Link to={item.id == 2 ? "/Product?category=other" : "/Product?category=cloth"} style={{ color: "blue" }}>
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="space-3"></div>
    </div>
  );
}
