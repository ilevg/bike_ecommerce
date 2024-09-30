import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./data/constants/logo";
import { fetchData } from "../../services/apiService";
import LinkTag from "../../UI/linkTag/LinkTag";
import Sidebar from "./components/sidebar/Sidebar";
import BurgerIcon from "../../assets/img/icons/burger-icon.png";
import { CartContext } from "../../context";
import styles from "./Header.module.scss";

import UserIcon from "../../assets/img/icons/user.png";
import CartIcon from "../../assets/img/icons/cart.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [navLinks, setNavLinks] = useState([]);
  const [cart] = useContext(CartContext);

  const checkAuth = localStorage.getItem("jwt");
  const authIconPath = checkAuth ? "/profile" : "/authentication";

  useEffect(() => {
    const fetchLinks = async () => {
      const { data } = await fetchData(
        "/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer"
      );
      setNavLinks(data.header.headerMenuItems);
    };
    fetchLinks();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setIsFixed(true) : setIsFixed(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "visible" : "hidden";
    document.body.style.marginRight = isOpen
      ? "0"
      : `${window.innerWidth - document.documentElement.clientWidth}px`;
  };

  const cartFullIconToggle = (linkRef) =>
    `${
      linkRef === "/cart" &&
      cart &&
      cart.products.length > 0 &&
      styles.headerIconCart
    }`;

  return (
    <>
      <div className={`${isFixed ? styles.headerSpacerVisible : ""}`}></div>
      <header
        className={`${styles.header} ${isFixed ? styles.headerVisible : ""}`}
      >
        <div className="container">
          <div className={styles.headerItems}>
            <Link to={logo.linkRef}>
              <img
                className={styles.headerLogo}
                src={logo.src}
                alt={logo.alt}
              />
            </Link>

            <ul className={styles.headerList}>
              {navLinks.map(({ ID, url, title }) => (
                <li key={ID}>
                  <LinkTag to={url} text={title}></LinkTag>
                </li>
              ))}
            </ul>

            <ul className={styles.headerIcons}>
              <li>
                <Link to={authIconPath}>
                  <img src={UserIcon} alt="Login icon" />
                </Link>
              </li>

              <li className={cartFullIconToggle("/cart")}>
                <Link to="/cart">
                  <img src={CartIcon} alt="Cart icon" />
                </Link>
              </li>

              <button
                className={styles.headerBurger}
                onClick={() => menuToggle()}
              >
                <img
                  className={styles.headerBurgerIcon}
                  src={BurgerIcon}
                  alt="burger-icon"
                />
              </button>
            </ul>
          </div>
        </div>
        <Sidebar isOpen={isOpen} menuToggle={menuToggle} />
      </header>
    </>
  );
};

export default Header;
