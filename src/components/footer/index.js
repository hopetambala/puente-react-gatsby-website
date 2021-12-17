import React, {useState} from 'react'
import {
  Link, useStaticQuery, graphql
} from "gatsby"
import Form from 'react-bootstrap/Form'
import addToMailchimp from 'gatsby-plugin-mailchimp'

// Component/Icon Imports
import Logo from '../logo'
import { Icon } from 'react-icons-kit'
import { facebook } from 'react-icons-kit/fa/facebook'
import { instagram } from 'react-icons-kit/fa/instagram'
import { youtubePlay } from 'react-icons-kit/fa/youtubePlay'
import { linkedin } from 'react-icons-kit/fa/linkedin'

// Style Imports
import '../../styles/styles.scss'
import footerStyles from './index.module.scss'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
    query{
      contentfulFooter{
        title
        badgetGallery {
          title
          resize (height: 100) {
            src
          }
        }
      }
    }
  `)

  const [person,setPerson] = useState({
    fName: '',
    lName: '',
    email: '', 
    message: '',
  })

  const handleSubmit = () => {
    const {
      fName,
      lName,
      email,
    } = person;

    addToMailchimp(email,
      {
        FNAME: fName,
        LNAME: lName,
      })
      .then(data => {
        setPerson({ message: data.msg })
      }
    )
  }

    return (
      <footer className={footerStyles.footer}>
        <div className={footerStyles.footerMain}>
          <div className={footerStyles.section}>
            <Link to="/">
              <Logo className={footerStyles.logo}/>
            </Link>
            <p>
              Puente is a 501(c)(3) nonprofit corporation fueled by forward-thinking,
              passionate individuals. Founded in 2018, and based in Constanza, Dominican Republic,
              with offices in Indiana.
            </p>
            <div>
              {data.contentfulFooter.badgetGallery.map((badges) => {
                return (
                  <img alt={badges.title} src={badges.resize.src} />
                )
              })}
            </div>
          </div>
          <div className={footerStyles.section}>
            <nav>
              <ul className={footerStyles.navList}>
                <h1>Menu</h1>
                <li>
                  <Link className={footerStyles.navItem} to="/about">About Us</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/technology">Our Technology</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/programs">Our Work</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/volunteer">Get Involved</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/news">News</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/merchandise">Merchandise</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/donate">Donate</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={footerStyles.section}>
            <h1>Contact</h1>
            <h2>Address:</h2>
            <p>51181 Whitewater Ln.</p>
            <p>South Bend, IN</p>
            <p>46628</p>
            <h2>Phone:</h2>
            <p>1-574-302-7756</p>
            <div className={footerStyles.icons}>
              <a aria-label="facebook" href="https://www.facebook.com/puentedr/" target="_blank" rel="noopener noreferrer"><Icon size={25} icon={facebook} /></a>
              <a aria-label="instagram" href="https://www.instagram.com/puentedr/" target="_blank" rel="noopener noreferrer"><Icon size={25} icon={instagram} /></a>
              <a aria-label="youtube" href="https://www.youtube.com/channel/UCDcD_DYPeLt4NZdVwKX8gDw"target="_blank" rel="noopener noreferrer" ><Icon size={25} icon={youtubePlay} /></a>
              <a aria-label="linkedin" href="https://www.linkedin.com/company/18499313/admin/" target="_blank" rel="noopener noreferrer"><Icon size={25} icon={linkedin} /></a>
            </div>
          </div>
          <div className={footerStyles.section}>
            <h1>Newsletter Sign-Up</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <div className={footerStyles.newsletter}>
                  <Form.Control
                    size="sm"
                    className={footerStyles.input}
                    type="textarea"
                    placeholder={"First Name"}
                    onChange={(e) => setPerson({ ...person, fName: e.target.value })}
                  />
                  <Form.Control
                    size="sm"
                    className={footerStyles.input}
                    type="textarea"
                    placeholder={"Last Name"}
                    onChange={(e) => setPerson({ ...person, lName: e.target.value })}
                  />
                  <Form.Control
                    size="sm"
                    className={footerStyles.input}
                    type="email"
                    placeholder={"Enter email..."}
                    onChange={(e) => setPerson({ ...person, email: e.target.value })} />
                  <div tabIndex={0} onClick={handleSubmit} onKeyDown={handleSubmit}
                    role="button" className={footerStyles.button}>
                    <p>Sign Up</p>
                  </div>
                </div>
                <p className={footerStyles.message} dangerouslySetInnerHTML={{ __html: person.message }}></p>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className={footerStyles.tos}>
          <Link className={footerStyles.tosText} to="/terms-of-service">Terms of Service</Link>
          <Link className={footerStyles.tosText} to="/acceptable-use">Acceptable Use</Link>
          <Link className={footerStyles.tosTextLast} to="/privacy-policy">Privacy Policy</Link>
        </div>
      </footer>
    )
}

export default Footer