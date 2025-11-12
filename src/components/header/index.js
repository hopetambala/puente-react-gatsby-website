import React, { useLayoutEffect, useState } from "react"
import {
  Link
} from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// Style imports
import * as styles from "./index.module.scss"

//Logo imports
import Logo from '../logo'

// Icon imports
import { Icon } from 'react-icons-kit'
import { ic_local_phone } from 'react-icons-kit/md/ic_local_phone'
import { ic_email } from 'react-icons-kit/md/ic_email'
import { ic_menu } from 'react-icons-kit/md/ic_menu'
import BannerAd from "./bannerAd"

const Header = () => {

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [width] = useWindowSize();

  if (width > 768) {
    return (
      <>
        <BannerAd />
        <Navbar
          className={styles.navBackground}
          collapseOnSelect
          expand="lg"
          onScroll
        >
          <Navbar.Brand className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Icon className={styles.icon} size={32} icon={ic_menu} />
          </Navbar.Toggle>
          <Navbar.Collapse
            className={styles.navMenu}
            id="responsive-navbar-nav"
          >
            <Nav className="ml-auto">
              <Nav.Item className={styles.navContact}>
                <Icon
                  className={styles.iconHeader}
                  size={18}
                  icon={ic_local_phone}
                />
                <Nav.Link href="tel:+15743027756">1-574-302-7756</Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.navContact}>
                <Icon className={styles.iconHeader} size={18} icon={ic_email} />
                <Nav.Link href="mailto:info@puente-dr.org">
                  info@puente-dr.org
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item className={styles.nav}>
                <NavDropdown
                  className={styles.navItem}
                  href="/about"
                  title={
                    <Link style={{ color: "#000" }} to="/about">
                      About Us
                    </Link>
                  }
                  id="menu-nav-dropdown"
                >
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/about#who-we-are">
                      Who We Are
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/about#staff">
                      Our U.S. Staff
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/about#dominican-staff">
                      Our D.R. Staff
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/about#partners">
                      Our Partners
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/about#reports">
                      Annual Report
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item className={styles.nav}>
                <NavDropdown
                  className={styles.navItem}
                  href="/about"
                  title={
                    <Link style={{ color: "#000" }} to="/technology">
                      Our Technology
                    </Link>
                  }
                  id="menu-nav-dropdown"
                >
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link
                      style={{ color: "#000" }}
                      to="/technology#mobile-data-collection"
                    >
                      Mobile Data Collection
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link
                      style={{ color: "#000" }}
                      to="/technology#data-analysis"
                    >
                      Data Analysis & Management
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link
                      style={{ color: "#000" }}
                      to="/technology#testimonials"
                    >
                      Testimonials
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/technology#pricing">
                      Pricing
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link
                      style={{ color: "#000" }}
                      to="/technology#request-demo"
                    >
                      Request a Demo
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item className={styles.nav}>
                <NavDropdown
                  className={styles.navItem}
                  href="/about"
                  title={
                    <Link style={{ color: "#000" }} to="/programs">
                      Our Work
                    </Link>
                  }
                  id="menu-nav-dropdown"
                >
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/programs#model">
                      The Puente Model
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/programs#impact">
                      Our Impact
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link
                      style={{ color: "#000" }}
                      to="/programs#signature-projects"
                    >
                      Signature Projects
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link
                      style={{ color: "#000" }}
                      to="/programs#signature-programs"
                    >
                      Signature Programs
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item className={styles.nav}>
                <NavDropdown
                  className={styles.navItem}
                  href="/about"
                  title={
                    <Link style={{ color: "#000" }} to="/volunteer">
                      Get Involved
                    </Link>
                  }
                  id="menu-nav-dropdown"
                >
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/volunteer#volunteer">
                      Volunteer
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/volunteer#partner">
                      Become a Partner
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/donate-monthly">
                      Join our monthly donor program
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item className={styles.nav}>
                <NavDropdown
                  className={styles.navItem}
                  href="/news"
                  title={
                    <Link style={{ color: "#000" }} to="/news">
                      News
                    </Link>
                  }
                  id="menu-nav-dropdown"
                >
                  <NavDropdown.Item className={styles.dropdownItem}>
                    <Link style={{ color: "#000" }} to="/news/event">
                      See our latest event!
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              {/* <Nav.Item className={styles.nav}>
              <Nav.Link className={styles.navItem} href="/news">News</Nav.Link>
            </Nav.Item> */}
              <Nav.Item className={styles.nav}>
                <Nav.Link className={styles.navItem} href="/merchandise">
                  Merchandise
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.nav}>
                <Nav.Link className={styles.navDonate} href="/donate">
                  Donate
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  } else {
    return (
      <>      
      <BannerAd />
      <Navbar className={styles.navBackground} collapseOnSelect expand="lg">
        <Navbar.Brand className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <Icon className={styles.icon} size={32} icon={ic_menu} />
        </Navbar.Toggle>
        <Navbar.Collapse className={styles.navMenu} id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item className={styles.navContact}>
              <Icon className={styles.iconHeader} size={18} icon={ic_local_phone} />
              <Nav.Link href="tel:+15743027756">
                1-574-302-7756
            </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navContact}>
              <Icon className={styles.iconHeader} size={18} icon={ic_email} />
              <Nav.Link href="mailto:info@puente-dr.org">
                info@puente-dr.org
            </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Item className={styles.nav}>
              <Nav.Link className={styles.navItem} href="/about">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.nav}>
              <Nav.Link className={styles.navItem} href="/technology">Our Technology</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.nav}>
              <Nav.Link className={styles.navItem} href="/programs">Our Work</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.nav}>
              <Nav.Link className={styles.navItem} href="/volunteer">Get Involved</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.nav}>
              <Nav.Link className={styles.navItem} href="/news">News</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.nav}>
              <Nav.Link className={styles.navItem} href="/merchandise">Merchandise</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.nav}>
              <Nav.Link className={styles.navDonate} href="/donate">Donate</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>

    )
  }
}

export default Header