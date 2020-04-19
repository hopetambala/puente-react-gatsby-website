import React from "react"
import { 
  Link,
  // useStaticQuery,
  // graphql
 } from "gatsby"
// import Img from "gatsby-image"

// Style Imports
import headerStyles from './header.module.scss'

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     headerLogo: file(relativePath: { eq: "alt-logo-black.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <h1>
          <Link className={headerStyles.title} to="/">Puente</Link>
        </h1>
      </div>
      <div className={headerStyles.navigation}>
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
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/donate">Donate</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header> 
  )
}
export default Header