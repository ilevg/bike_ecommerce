import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import Button from "../../UI/button/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo/logo-white.png";
import phone from "../../assets/img/footer/phone.png";
import navigator from "../../assets/img/footer/navigator.png";
import mail from "../../assets/img/footer/mail.png";
import LinkTag from "../../UI/linkTag/LinkTag";
import classNames from "classnames";
import { LinksListContext } from "../../context";

const Footer = () => {
  const [links] = useContext(LinksListContext);
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className="container">
          <div>
            <h2 className={styles.footerTitle}>subscribe to our news</h2>
            <div className={styles.footerSubWrapper}>
              <input
                type="email"
                placeholder="E-mail"
                className={styles.footerSubInput}
              />
              <div className={styles.footerBtnDesc}>
                <Button width={180} text="Subscribe" imgUrl="" alt="" />
              </div>
              <div className={styles.footerBtnMob}>
                <Button text="Subscribe" imgUrl="" alt="" />
              </div>
            </div>
            <div>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <span className={styles.checkboxLable}>
                I agree to the processing of personal data
              </span>
            </div>
          </div>

          <div className={styles.footerBody}>
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className={styles.foterLogo} />
              </Link>
              <span className={styles.footerLogoDesc}>
                The World-bikes company specializes in the sale of cycling
                products.
              </span>
            </div>

            <div className={styles.footerContent}>
              <div
                className={classNames(
                  styles.footerLinksWrapper,
                  styles.footerLinksFirst
                )}
              >
                <h4 className={styles.footerLinksTitle}>Catalog</h4>
                <ul className={styles.footerLinksList}>
                  {links.map(({ ID, url, title }) => {
                    return (
                      <li key={ID}>
                        <LinkTag to={url} text={title} color=""></LinkTag>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                className={classNames(
                  styles.footerLinksWrapper,
                  styles.footerLinksSec
                )}
              >
                <h4 className={styles.footerLinksTitle}>For the client</h4>
                <ul className={styles.footerLinksList}>
                  <li>
                    {" "}
                    <LinkTag
                      to="/about"
                      text="ABOUT US"
                      color=""
                    ></LinkTag>{" "}
                  </li>
                  <li>
                    <LinkTag
                      to="/deliverypay"
                      text="DELIVERY AND PAYMENT"
                      color=""
                    ></LinkTag>
                  </li>
                  <li>
                    <LinkTag to="/blog" text="BLOG" color=""></LinkTag>
                  </li>
                  <li>
                    <LinkTag to="/contact" text="CONTACTS" color="">
                      Contacts
                    </LinkTag>
                  </li>
                </ul>
              </div>
              <div className={styles.footerLinksWrapper}>
                <h4 className={styles.footerLinksTitle}>Contacts</h4>
                <ul className={styles.footerLinksList}>
                  <li className={styles.foterListItem}>
                    <img src={phone} alt="phone" />
                    <div>
                      <a href="tel:+13242342343">+1(324)234-23-43</a>
                      <div>
                        <a href="tel:+13242652356">+1(324)265-23-56</a>
                      </div>
                    </div>
                  </li>
                  <li className={styles.foterListItem}>
                    <img src={navigator} alt="navigator" />
                    <div>
                      <a href="https://maps.app.goo.gl/NrY2DcMgqxB6ygVa7">
                        London,
                        <br />
                        Centrum str, 7/8
                      </a>
                    </div>
                  </li>
                  <li className={styles.foterListItem}>
                    <img src={mail} alt="mail" />
                    <a href="mailto:worlbike@mail.com">worlbike@mail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.footerFooter}>
            <span>© 2023 WORLD BIKE</span>
            <span>Пользовательское соглашение</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
