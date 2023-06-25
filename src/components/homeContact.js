import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
const HomeContact = () => {
  return (
    <>
      <section className="contact-container">
        <div className="quote-container">
          <p className="quote">
            <span>‟</span>To deny people their human rights, is to challenge
            their very humanity. Nelson Mandela"
          </p>
          <div className="social-media">
            <p id="typing-animation">Follow Us</p>
            <ul>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <GoogleIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button type="button" className="submitForm">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomeContact;
