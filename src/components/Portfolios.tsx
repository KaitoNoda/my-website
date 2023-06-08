import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  className: "center",
  arrows: false,
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
};

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

.portfolio img {
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
 .slick-dots li button::before {
  font-size: 13px;
  color: #fff;
  opacity: 0.4;
  margin-top:20px;
}

.slick-dots li.slick-active button::before {
  color: #fff;
  opacity: 1;
}
`;

export const Portfolios: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const handleClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="container">
      <style>{cssstyle}</style>
      <h2 className="Header">Portfolios</h2>
      <Slider dots={true} ref={sliderRef} {...settings}>
        <div className="portfolio">
          <img src="/image1.jpg" onClick={() => handleClick(0)} />
        </div>
        <div className="portfolio">
          <img src="/image2.jpg" onClick={() => handleClick(1)} />
        </div>
        <div className="portfolio">
          <img src="/image3.jpg" onClick={() => handleClick(2)} />
        </div>
        <div className="portfolio">
          <img src="/image4.jpg" onClick={() => handleClick(3)} />
        </div>
        <div className="portfolio">
          <img src="/image5.jpg" onClick={() => handleClick(4)} />
        </div>
        <div className="portfolio">
          <img src="/image6.jpg" onClick={() => handleClick(5)} />
        </div>
      </Slider>
    </div>
  );
};
