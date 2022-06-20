import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <div id="footer-box">
          <div id="logo-footer">
            <a href="#">
              <div id="logo-dm-footer"></div>
            </a>
          </div>
          <div id="social-medias">
            <a href="#">
              <p className="icon-style">
                <i className="fa-brands fa-facebook fa-3x"></i>
              </p>

              <p>fb.com/dmdesenhos</p>
            </a>
            <a href="#">
              <p className="icon-style">
                <i className="fa-brands fa-instagram fa-3x"></i>
              </p>

              <p>@dmdesenhos</p>
            </a>
            <a href="#">
              <p className="icon-style">
                <i className="fa-brands fa-whatsapp fa-3x"></i>
              </p>

              <p>+55 85 98888-8888</p>
            </a>
            <a href="#">
              <p className="icon-style">
                <i className="fa-brands fa-youtube fa-3x"></i>
              </p>

              <p>yt.com/dmdesenhos</p>
            </a>
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
