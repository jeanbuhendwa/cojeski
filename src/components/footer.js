import img1 from "../Img/Info/footer-img2.jpeg";
import img2 from "../Img/Info/footer-img1.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={img1} alt="Footer image" />
        <img src={img2} alt="Footer image" />
      </div>
      <p className="footer-text">
        ©{currentYear} COJESKI-DRC |{" "}
        <span className="spantext">All Rights Reserved</span>
      </p>
    </div>
  );
};

export default Footer;
