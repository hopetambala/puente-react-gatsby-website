import React from "react"
import {
  Link
} from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
// import NavDropdown from 'react-bootstrap/NavDropdown'

// Style imports
import styles from "./header.module.scss"

//Logo imports
import Logo from '../components/footerLogo'

// Icon imports
import { Icon } from 'react-icons-kit'
import { ic_local_phone } from 'react-icons-kit/md/ic_local_phone'
import { ic_email } from 'react-icons-kit/md/ic_email'
import { ic_menu } from 'react-icons-kit/md/ic_menu'

const Header = () => {
  return (
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
            1-574-302-7756
          </Nav.Item>
          <Nav.Item className={styles.navContact}>
            <Icon className={styles.iconHeader} size={18} icon={ic_email} />
            info@puente-dr.com
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item className={styles.nav}>
            <Nav.Link className={styles.navItem} href="/about">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav}>
            <Nav.Link className={styles.navItem} href="/technology">Technology</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav}>
            <Nav.Link className={styles.navItem} href="/programs">Programs</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav}>
            <Nav.Link className={styles.navItem} href="/volunteer">Volunteers</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav}>
            <Nav.Link className={styles.navItem} href="/news">News</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.nav}>
            <Nav.Link className={styles.navDonate} href="/donate">Donate</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

// import React from "react"
// import {
//   Link,
//   useStaticQuery,
//   graphql
// } from "gatsby"
// import Img from "gatsby-image"
// import Button from 'react-bootstrap/Button'

// // Style / Icon Imports
// import headerStyles from './header.module.scss'
// import { Icon } from 'react-icons-kit'
// import { phone } from 'react-icons-kit/fa/phone'
// import { envelope } from 'react-icons-kit/fa/envelope'
// import { bars } from 'react-icons-kit/fa/bars'
// 
// const Header = () => {
//   const logo = useStaticQuery(graphql`
//     query {
//       logo: file(relativePath: { eq: "logo-black.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 200) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   const handleClick = () => {
//     console.log("test")
//     // ReactDOM.findDOMNode.getElementsByClassName('navSection')
//   }

//   return (
//     <div className={headerStyles.header}>
//       <div className={headerStyles.headerMain}>
//         <div className={headerStyles.logoSection}>
//           <Link to="/">
//             <Img className={headerStyles.logo} fluid={logo.logo.childImageSharp.fluid} />
//           </Link>
//         </div>
//         <div className={headerStyles.navSection}>
//           <div className={headerStyles.navContact}>
//             <div>
//               <Icon className={headerStyles.icon} size={20} icon={phone} />
//               <p>1-574-302-7756</p>
//             </div>
//             <div>
//               <Icon className={headerStyles.icon} size={20} icon={envelope} />
//               <p>info@punete-dr.com</p>
//             </div>
//           </div>
//           <div>
//             <ul className={headerStyles.navList}>
//               <li>
//                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/technology">Our Technology</Link>
//               </li>
//               <li>
//                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/programs">Programs</Link>
//               </li>
//               <li>
//                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/volunteer">Volunteers</Link>
//               </li>
//               <li>
//                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/news">News</Link>
//               </li>
//               <li>
//                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/donate">
//                   <Button className={headerStyles.buttonBackground}>
//                     Donate
//                   </Button>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className={headerStyles.burger}>
//           <Icon className={headerStyles.icon} onClick={handleClick} size={24} icon={bars} />
//         </div>
//       </div>
//     </div> 
//   )
// }
// export default Header