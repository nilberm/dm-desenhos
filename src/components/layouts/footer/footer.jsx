import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <div id="footer-box">
          <div id="logo-footer">
            <Link to="/">
              <div id="logo-dm-footer"></div>
            </Link>
          </div>
          <div id="social-medias">
            <Link to="/">
              <p className="icon-style">
                <i className="fa-brands fa-facebook fa-3x"></i>
              </p>

              <p>fb.com/dmdesenhos</p>
            </Link>
            <Link to="/">
              <p className="icon-style">
                <i className="fa-brands fa-instagram fa-3x"></i>
              </p>

              <p>@dmdesenhos</p>
            </Link>
            <Link to="/">
              <p className="icon-style">
                <i className="fa-brands fa-whatsapp fa-3x"></i>
              </p>

              <p>+55 85 98888-8888</p>
            </Link>
            <Link to="/">
              <p className="icon-style">
                <i className="fa-brands fa-youtube fa-3x"></i>
              </p>

              <p>yt.com/dmdesenhos</p>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Website developer and design by&nbsp;
          <a
            href="https://www.linkedin.com/in/nilberm/"
            target="_blank"
            rel="noreferrer"
          >
            @nilberm
          </a>
          . 2022 © - Nilber Mota Dev
        </p>
      </footer>
    </div>
  );
};

export default Footer;
