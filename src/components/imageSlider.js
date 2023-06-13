import Carousel from "react-bootstrap/Carousel";
import brandingOne from "../Img/branding/branding-one.jpeg";
import brandingTwo from "../Img/branding/branding-two.jpeg";
import brandingThree from "../Img/branding/branding-three.jpeg";
import brandingFour from "../Img/branding/branding-four.jpeg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const ImageSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3500}>
          <div className="overlay">
            <img
              className="d-block w-100 imgSlide"
              src={brandingOne}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bolder lh-base textBranding">
              The Collective of Youth Organizations for Solidarity in the
              Democratic Republic of Congo | COJESKI-DRC
            </h3>
            <p className="brandingPara animation">
              {" "}
              brings together various interests parties which are involved in
              human rights without exclusion
            </p>
            <div className="iconContainer">
              <KeyboardDoubleArrowDownIcon className="animation-icon" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <div className="overlay">
            <img
              className="d-block w-100 imgSlide"
              src={brandingTwo}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bolder lh-base textBranding">
              The Collective of Youth Organizations for Solidarity in the
              Democratic Republic of Congo | COJESKI-DRC
            </h3>
            <p className="brandingPara animation">
              {" "}
              brings together various interests parties which are involved in
              human rights without exclusion
            </p>
            <div className="iconContainer">
              <KeyboardDoubleArrowDownIcon className="animation-icon" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <div className="overlay">
            <img
              className="d-block w-100 imgSlide"
              src={brandingThree}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bolder lh-base textBranding">
              The Collective of Youth Organizations for Solidarity in the
              Democratic Republic of Congo | COJESKI-DRC
            </h3>
            <p className="brandingPara animation">
              {" "}
              brings together various interests parties which are involved in
              human rights without exclusion
            </p>
            <div className="iconContainer">
              <KeyboardDoubleArrowDownIcon className="animation-icon" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <div className="overlay">
            <img
              className="d-block w-100 imgSlide"
              src={brandingFour}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bolder lh-base textBranding">
              The Collective of Youth Organizations for Solidarity in the
              Democratic Republic of Congo | COJESKI-DRC
            </h3>
            <p className="brandingPara animation">
              {" "}
              brings together various interests parties which are involved in
              human rights without exclusion
            </p>
            <div className="iconContainer">
              <KeyboardDoubleArrowDownIcon className="animation-icon" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ImageSlider;
