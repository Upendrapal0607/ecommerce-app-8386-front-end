import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css";
import { Link } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Slider1() {
  const navigate= useNavigate()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider" id="corousel-1">
      <Slider {...settings}>
        <div onClick={()=>navigate("Product?category=other")} className="box">
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/4130578570023_041_b2?$an-category$&qlt=80&fit=constrain"
            alt="erron"
          />
          <Link>The Summerset Maxi Dress</Link>
        </div>
        <div onClick={()=>navigate("Product?category=other")} className="box">
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/41047333_011_b2?$an-category$&qlt=80&fit=constrain"
            alt=""
          />
          <Link>Brass & Marble Knob</Link>
        </div>
        <div onClick={()=>navigate("Product?category=other")} className="box">
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/4120527680001_092_b?$an-category$&qlt=80&fit=constrain"
            alt=""
           onClick={()=>navigate("Product?category=other")}/>
          <img src="" alt="" />
          <Link>Pilco Denim Skirt</Link>
        </div>
        <div onClick={()=>navigate("Product?category=other")} className="box">
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/51917649_100_b2?$an-category$&qlt=80&fit=constrain"
            alt=""
          />
          <Link>Thia Knobs, Set of 2</Link>
        </div>
        <div onClick={()=>navigate("Product?category=other")} className="box">
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/4112522160116_060_b2?$an-category$&qlt=80&fit=constrain"
            alt=""
          />
          <Link>Pilcro Bella Henley Top</Link>
        </div>
        <div onClick={()=>navigate("Product?category=other")} className="box">
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/4123650590242_437_b2?$an-category$&qlt=80&fit=constrain"
            alt=""
          />
          <Link>The Colette Croped Wide-leg Pants</Link>
        </div>

        <div onClick={()=>navigate("Product?category=other")} className="box">
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/80730104_066_b2?$an-category$&qlt=80&fit=constrain"
            alt=""
          />
          <Link>Printed Shine Tie Front Kimono</Link>
        </div>
        <div onClick={()=>navigate("Product?category=other")} className="box">
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/4130916210153_009_b2?$an-category$&qlt=80&fit=constrain"
            alt=""
          />
          <Link>Meave Smocked-waist Zip-up Shirt</Link>
        </div>
      </Slider>
    </div>
  );
}

export function SliderSpacer() {
  return (
    <div className="slider-part-break">
      <h1 style={{ color: "black", fontWeight: "500" }}>Recently Viewed</h1>
    </div>
  );
}

export function Slider2() {
  const [image_condition1, set_image_condtion1] = useState(true);
  const [image_condition2, set_image_condtion2] = useState(true);
  const [image_condition3, set_image_condtion3] = useState(true);
  const [image_condition4, set_image_condtion4] = useState(true);
  const [image_condition5, set_image_condtion5] = useState(true);
  const [image_condition6, set_image_condtio6] = useState(true);
  const [image_condition7, set_image_condtion7] = useState(true);
  const [image_condition8, set_image_condtion8] = useState(true);
  const [image_condition9, set_image_condtion9] = useState(true);
  const [image_condition10, set_image_condtion10] = useState(true);
  const navigate= useNavigate()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtion1(!image_condition1);
          }}
          onMouseLeave={() => {
            set_image_condtion1(!image_condition1);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src={
              image_condition1
                ? "https://images.urbndata.com/is/image/Anthropologie/4139952400010_000_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
                : "https://images.urbndata.com/is/image/Anthropologie/4139952400010_000_b?$an-category$&qlt=80&fit=constrain"
            }
            alt="erron"
          />
          <Link>Refarmation Juliette Dress</Link>
        </div>
        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtion2(!image_condition2);
          }}
          onMouseLeave={() => {
            set_image_condtion2(!image_condition2);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src={
              image_condition2
                ? "https://images.urbndata.com/is/image/Anthropologie/4139952400014_023_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
                : "https://images.urbndata.com/is/image/Anthropologie/4139952400014_023_b2?$an-category$&qlt=80&fit=constrain"
            }
            alt=""
          />
          <Link>Refarmation Autumn Linen Jumpsuit</Link>
        </div>
        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtion3(!image_condition3);
          }}
          onMouseLeave={() => {
            set_image_condtion3(!image_condition3);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src={
              image_condition3
                ? "https://images.urbndata.com/is/image/Anthropologie/4139952400016_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
                : "https://images.urbndata.com/is/image/Anthropologie/4139952400016_010_b2?$an-category$&qlt=80&fit=constrain"
            }
            alt=""
           onClick={()=>navigate("Product?category=other")}/>
          <img src="" alt="" />
          <Link>Lifarmation Abigail Linen Top</Link>
        </div>
        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtion4(!image_condition4);
          }}
          onMouseLeave={() => {
            set_image_condtion4(!image_condition4);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src={
              image_condition4
                ? "https://images.urbndata.com/is/image/Anthropologie/83439513_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
                : "https://images.urbndata.com/is/image/Anthropologie/83439513_012_b2?$an-category$&qlt=80&fit=constrain"
            }
            alt=""
          />
          <Link>Flamingo Estate Euforia Body Scrub</Link>
        </div>
        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtion5(!image_condition5);
          }}
          onMouseLeave={() => {
            set_image_condtion5(!image_condition5);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src={
              image_condition5
                ? "https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b16?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
                : "https://images.urbndata.com/is/image/Anthropologie/4130084320091_049_b2?$an-category$&qlt=80&fit=constrain"
            }
            alt=""
          />
          <Link>The Colatte Cropped Wide Leg Pants</Link>
        </div>
        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtio6(!image_condition6);
          }}
          onMouseLeave={() => {
            set_image_condtio6(!image_condition6);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src={
              image_condition6
                ? "https://images.urbndata.com/is/image/Anthropologie/76124932_266_a?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
                : "https://images.urbndata.com/is/image/Anthropologie/76124932_266_b?$an-category$&qlt=80&fit=constrain"
            }
            alt=""
          />
          <Link>The Colette Croped Wide-leg Pants</Link>
        </div>

        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtion7(!image_condition7);
          }}
          onMouseLeave={() => {
            set_image_condtion7(!image_condition7);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src={
              image_condition7
                ? "https://images.urbndata.com/is/image/Anthropologie/58028085_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
                : "https://images.urbndata.com/is/image/Anthropologie/58028085_001_b2?$an-category$&qlt=80&fit=constrain"
            }
            alt=""
          />
          <Link>Meave Drop-Waist Dress</Link>
        </div>
        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtion8(!image_condition8);
          }}
          onMouseLeave={() => {
            set_image_condtion8(!image_condition8);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src={
              image_condition8
                ? "https://images.urbndata.com/is/image/Anthropologie/4112916210065_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
                : "https://images.urbndata.com/is/image/Anthropologie/4112916210065_011_b2?$an-category$&qlt=80&fit=constrain"
            }
            alt=""
          />
          <Link>Capri Blue Volcano Matte Black Jar</Link>
        </div>
        {/* <div onClick={()=>navigate("Product?category=other")} className="box"  onMouseEnter={()=>{set_image_condtion9(!image_condition9)}} onMouseLeave={()=>{set_image_condtion9(!image_condition9)}}>
              <img src="https://images.ctfassets.net/5de70he6op10/1wvoOBYHC9zcXpOFI0rASL/c19a5326e17d028f98f7e694fe9442bb/484733230-ls_customerfave_b.jpg?w=630&q=80&fm=webp" alt="" />
              <Link>Capri Blue Pink Shimmar Jar</Link>
            </div> */}
        <div
          className="box"
          onMouseEnter={() => {
            set_image_condtion10(!image_condition10);
          }}
          onMouseLeave={() => {
            set_image_condtion10(!image_condition10);
          }}
        onClick={()=>navigate("Product?category=other")} >
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/4130916210153_009_b2?$an-category$&qlt=80&fit=constrain"
            alt=""
          />
          <Link>By Anthropologie Babydoll Top</Link>
        </div>
      </Slider>
    </div>
  );
}

export function SliderSpacer2() {
  return (
    <div className="slider-part-break-2">
      <h1 style={{ color: "black", fontWeight: "500" }}>Most Popular Items</h1>
    </div>
  );
}
