import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="container-large">
        <div className="l-footer__grid">
          <div className="l-footer__block l-footer__block--details">
            <p className="l-footer__headline">Scan. Detect. Remove.</p>
            <ul className="l-footer__social">
              {[
                {
                  href: "https://twitter.com/certosoftware",
                  title: "Twitter",
                  icon: "#icon-twitter",
                },
                {
                  href: "https://www.facebook.com/CertoSoftware/",
                  title: "Facebook",
                  icon: "#icon-facebook",
                },
                {
                  href: "https://www.youtube.com/channel/UCpL_UdvDlwD9E-0My15YHOA",
                  title: "YouTube",
                  icon: "#icon-youtube",
                },
              ].map((item, index) => (
                <li key={index} className="social-media__item">
                  <a
                    href={item.href}
                    className="social-media__link"
                    title={`Certo ${item.title} profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="social-media__icon" width="36" height="36">
                      <use href={`/images/icons.svg${item.icon}`} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="menu-secondary">
              <li>
                <a
                  href="https://www.certosoftware.com/privacy-policy/"
                  className="menu-item"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.certosoftware.com/terms-of-service/"
                  className="menu-item"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="l-footer__block l-footer__block--links">
            <p className="l-footer__headline l-footer__headline--large">
              Certo
            </p>
            <ul className="menu-footer-menu">
              {[
                { href: "/iphone-spyware-detection/", label: "iPhone" },
                { href: "/android-spyware-detection/", label: "Android" },
                { href: "/support/", label: "Help" },
                { href: "/about/", label: "About" },
                { href: "/insights/", label: "Insights" },
                { href: "/resources/", label: "Resources" },
                { href: "/affiliates/", label: "Affiliates" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`https://www.certosoftware.com${item.href}`}
                    className="decorated-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="l-footer__block l-footer__block--form">
            <form
              id="newsletter-signup-form-footer"
              className="newsletter"
              method="post"
            >
              <div className="newsletter__content">
                <div className="newsletter__details">
                  <h2 className="headline-5">Sign up to our newsletter</h2>
                  <p>
                    Receive the latest mobile security news, exclusive
                    discounts, & offers.
                  </p>
                </div>
                <div className="newsletter__input-group">
                  <input
                    type="email"
                    name="EMAIL"
                    className="newsletter__input"
                    placeholder="Email address"
                    required
                  />
                  <button className="newsletter__button" type="submit">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="l-footer__block l-footer__block--copyright">
            <p className="l-footer__text">
              Copyright © 2024 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            {/* <p className="l-footer__text">
              Designed & developed by{" "}
              <a
                href="https://biggerpicture.agency"
                title="Bigger Picture"
                target="_blank"
              >
                Bigger Picture
              </a>
            </p> */}
          </div>

          <div className="l-footer__block l-footer__block--logos">
            <figure className="logos__logo">
              <img
                src="https://certo-software.imgix.net/app/uploads/2021/12/coalition_against_stalkerware_logo.png"
                alt="Coalition Against Stalkerware"
              />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
