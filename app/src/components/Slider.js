// Libraries
import React from "react";

// Components
import HeroSlider, { Slide, OverlayContainer } from "hero-slider";

// Assets
const bg1 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630460503606E03_DXXX.jpg";
const bg2 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631270503687E03_DXXX.jpg";
const bg3 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630970503657E01_DXXX.jpg";
const bg4 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630500405147E01_DXXX.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: "#FFF"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "140vmin"
      }}
    >
      <OverlayContainer
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.33)",
          textAlign: "center"
        }}
      >
        <h1>A weather log for Martians.</h1>
        <h5>Season: Summer</h5>
        <h2>Sol 445</h2>
        <h3>February 28</h3>
        <h3>High:9° F</h3>
        <h3>Low:-135° F</h3>
      </OverlayContainer>
      <Slide
        background={{
          backgroundImage: bg4,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center"
        }}
      />
      <Slide
        background={{
          backgroundImage: bg1,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center"
        }}
      />
      <Slide
        background={{
          backgroundImage: bg2,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center"
        }}
      />
      <Slide
        background={{
          backgroundImage: bg3,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center"
        }}
      />
    </HeroSlider>
  );
}
