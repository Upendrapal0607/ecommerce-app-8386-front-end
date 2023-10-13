import React from "react";
import { TopPoster } from "../Componants/MultipleLandingPages/TopPoster";
import { ImagePoster } from "../Componants/MultipleLandingPages/ImagePoster";
import { BigSmallPoster } from "../Componants/MultipleLandingPages/BigSmallPoster";
import { MothersDayImage } from "../Componants/MultipleLandingPages/MothersDayImage";
import { TopRatedPicks } from "../Componants/MultipleLandingPages/TopRatedPicks";
import { MoretoExplore } from "../Componants/MultipleLandingPages/MoretoExplore";
import {
  Slider1,
  Slider2,
  SliderSpacer2,
} from "../Componants/MultipleLandingPages/Carousel";


const Homepage = () => {
  return (
    <div>
      <TopPoster />

      <ImagePoster />

      <BigSmallPoster />

      <MothersDayImage />

      <TopRatedPicks />

      <Slider1 />

      <SliderSpacer2 />

      <Slider2 />

      <SliderSpacer2 />

      <MoretoExplore />
    </div>
  );
};

export default Homepage;
