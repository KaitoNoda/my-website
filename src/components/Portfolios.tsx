import React, { Component, RefObject } from "react";
import Slider, { Settings } from "react-slick";

interface CenterModeProps {}

export default class CenterMode extends Component<CenterModeProps> {
  sliderRef: RefObject<Slider>;

  constructor(props: CenterModeProps) {
    super(props);
    this.sliderRef = React.createRef<Slider>();
  }

  render() {
    const settings: Settings = {
      className: "center",
      arrows: false,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };

    return (
      <div className="container">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <style>{cssstyle}</style>
        <h2 className="Header">Portfolios</h2>
        <Slider dots={true} ref={this.sliderRef} {...settings}>
          <div className="portfolio">
            <img src="/image1.jpg" />
          </div>
          <div className="portfolio">
            <img src="/image2.jpg" />
          </div>
          <div className="portfolio">
            <img src="/image3.jpg" />
          </div>
          <div className="portfolio">
            <img src="/image4.jpg" />
          </div>
          <div className="portfolio">
            <img src="/image5.jpg" />
          </div>
          <div className="portfolio">
            <img src="/image6.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.Header{
  width:250px;
  margin-bottom:50px;
  margin-left:200px;
  color:white;
  border-bottom:solid 1px white;
  font-size:30px;
}
.container {
  background:#111111;
  margin: 160px auto;
  padding: 80px 40px 40px 40px;
  width: 100%;
  height:600px;
}

.portfolio {
  height: 300px;
}
img {
  color: #fff;
  width: 70%;
  max-width: 300px;
  margin: 50px auto;
  padding: 2%;
  position: relative;
  text-align: center;
  opacity: 0.5;
}

.center .slick-center img {
  opacity: 1;
  transform: scale(1.58);
}
.center img {
  transition: all 0.9s ease;
}
`;
