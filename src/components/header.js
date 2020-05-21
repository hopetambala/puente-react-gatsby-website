import React from "react"
import { 
  Link,
  useStaticQuery,
  graphql
 } from "gatsby"
import Img from "gatsby-image"
import Button from 'react-bootstrap/Button'

// Style / Icon Imports
import headerStyles from './header.module.scss'
import { Icon } from 'react-icons-kit'
import { phone } from 'react-icons-kit/fa/phone'
import { envelope } from 'react-icons-kit/fa/envelope'
import { bars } from 'react-icons-kit/fa/bars'

const Header = () => {
  const logo = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.headerMain}>
        <div className={headerStyles.logoSection}>
          <Link to="/">
            <Img className={headerStyles.logo} fluid={logo.logo.childImageSharp.fluid} />
          </Link>
        </div>
        <div className={headerStyles.navSection}>
          <div className={headerStyles.navContact}>
            <Icon className={headerStyles.icon} size={20} icon={phone} />
            <p>1-574-302-7756</p>
            <Icon className={headerStyles.icon} size={20} icon={envelope} />
            <p>info@punete-dr.com</p>
          </div>
          <div>
            <ul className={headerStyles.navList}>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Us</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/technology">Our Technology</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/programs">Programs</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/volunteer">Volunteers</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/news">News</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/donate">
                  <Button className={headerStyles.buttonBackground}>
                    Donate
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={headerStyles.burger}>
          <Icon className={headerStyles.icon} size={24} icon={bars} />
        </div>
      </div>
    </div> 
  )
}
export default Header