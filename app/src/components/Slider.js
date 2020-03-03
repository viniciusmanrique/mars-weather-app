import React, { Component } from "react";
import HeroSlider, { Slide, OverlayContainer } from "hero-slider";
import axios from "axios";
import slideGenerate from "../helpers/slideGenerate";

// Assets
const bg1 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630460503606E03_DXXX.jpg";
const bg2 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631270503687E03_DXXX.jpg";
const bg3 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630970503657E01_DXXX.jpg";
const bg4 =
  "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630500405147E01_DXXX.jpg";

export default class BasicSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null
    }
  }
  async componentDidMount() {
    let dataObjects = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ghJNmFOs0h7dUNTchYuHRb1DHl3Xd5MDtnpDx2aT")
    let data = dataObjects.data.photos;
    let dataIndex = [0, 100, 200, 300, 400, 500, 600, 700, 800]
    let slideArr = [];

    for (const index of dataIndex) {
      let photo = data[index].img_src;
      slideArr.push(photo)
    };
    this.setState({
      photos: slideArr
    })
  }
  async componentDidUpdate(prevProp, prevState) {
    if (prevState.photos !== this.state.photos) {
      this.setState({
        photos: this.state.photos
      })
    }
  }
  render() {
    return (
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="vertical"
        initialSlide={1}
        className="hero-slider"
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 3000,
          height: "120vh"
        }}
      >
        <OverlayContainer
          className="overlay-container"
        ></OverlayContainer>
        {slideGenerate(this.state.photos)}
      </HeroSlider>
    );
  }
}
