import React from "react"
import { 
  Link,
  useStaticQuery,
  graphql
 } from "gatsby"
import Img from "gatsby-image"
import Button from 'react-bootstrap/Button'

// Style Imports
import headerStyles from './header.module.scss'

const Header = () => {
  const logo = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "alt-logo-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerMain}>
        <div className={headerStyles.logoSection}>
          <Link to="/">
            <Img className={headerStyles.logo} fluid={logo.logo.childImageSharp.fluid} />
          </Link>
        </div>
        <div className={headerStyles.navSection}>
          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <Link className={headerStyles.secondaryNavItem} activeClassName={headerStyles.activeNavItem} to="/community">Community Empowerment</Link>
              </li>
              <li>
                <Link className={headerStyles.secondaryNavItem} activeClassName={headerStyles.activeNavItem} to="/volunteers">Volunteers</Link>
              </li>
              <li>
                <Link className={headerStyles.secondaryNavItem} activeClassName={headerStyles.activeNavItem} to="/reports">Annual Report</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Us</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/technology">Our Technology</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Past Projects</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/faq">FAQs</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/donate">
                  <Button className={headerStyles.buttonBackground}>
                    Donate
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header> 
  )
}
export default Header