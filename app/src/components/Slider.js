import React from "react";
import HeroSlider, { Slide, OverlayContainer } from "hero-slider";

// Assets
const bg1 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630460503606E03_DXXX.jpg";
const bg2 =
  "https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG";
const bg3 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630970503657E01_DXXX.jpg";
const bg4 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630500405147E01_DXXX.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="vertical"
      initialSlide={1}
      style={{
        color: "#FFF",
        margin: 0,
        padding: 0
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 3000,
        height: "140vh"
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
          textAlign: "left"
        }}
      ></OverlayContainer>
      <Slide
        background={{
          backgroundImage: bg4,
          backgroundAttachment: "fixed",
          backgroundPosition: "center top"
        }}
      />
      <Slide
        background={{
          backgroundImage: bg1,
          backgroundAttachment: "fixed",
          backgroundPosition: "center top"
        }}
      />
      <Slide
        background={{
          backgroundImage: bg2,
          backgroundAttachment: "fixed",
          backgroundPosition: "center top"
        }}
      />
      <Slide
        background={{
          backgroundImage: bg3,
          backgroundAttachment: "fixed",
          backgroundPosition: "center top"
        }}
      />
    </HeroSlider>
  );
}
