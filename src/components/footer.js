import React from 'react'
import {
  Link,
  // useStaticQuery,
  // graphql
} from "gatsby"
// import Img from "gatsby-image"
import Form from 'react-bootstrap/Form'
import addToMailchimp from 'gatsby-plugin-mailchimp'

// Component/Icon Imports
import Logo from './footerLogo'
import { Icon } from 'react-icons-kit'
import { facebook } from 'react-icons-kit/fa/facebook'
import { instagram } from 'react-icons-kit/fa/instagram'
import { youtubePlay } from 'react-icons-kit/fa/youtubePlay'
import { linkedin } from 'react-icons-kit/fa/linkedin'

// Style Imports
import '../styles/styles.scss'
import footerStyles from './footer.module.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: '',
      lName: '',
      email: '', 
      message: '',
    }
  }

  handleChange = e => {
    this.setState({ email: e.target.value })
  }

  handleSubmit = () => {
    const {
      fName,
      lName,
      email,
    } = this.state;

    addToMailchimp(email,
      {
        FNAME: fName,
        LNAME: lName,
      })
      .then(data => {
        console.log(data)
        this.setState({ message: data.msg })
      }
    )
  }

  render() {
    const {
      message,
    } = this.state;
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
          </div>
          <div className={footerStyles.section}>
            <nav>
              <ul className={footerStyles.navList}>
                <h1>Menu</h1>
                <li>
                  <Link className={footerStyles.navItem} to="/about">About Us</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/technology">Technology</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/programs">Programs</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/donate">Donate</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/volunteer">Volunteer</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/news">News</Link>
                </li>
                <li>
                  <Link className={footerStyles.navItem} to="/faq">FAQs</Link>
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
              <a href="https://www.facebook.com/puentedr/"><Icon size={25} icon={facebook} /></a>
              <a href="https://www.instagram.com/puentedr/"><Icon size={25} icon={instagram} /></a>
              <a href="https://www.youtube.com/channel/UCDcD_DYPeLt4NZdVwKX8gDw"><Icon size={25} icon={youtubePlay} /></a>
              <a href="https://www.linkedin.com/company/18499313/admin/"><Icon size={25} icon={linkedin} /></a>
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
                    onChange={(e) => this.setState({ fName: e.target.value })}
                  />
                  <Form.Control
                    size="sm"
                    className={footerStyles.input}
                    type="textarea"
                    placeholder={"Last Name"}
                    onChange={(e) => this.setState({ lName: e.target.value })}
                  />
                  <Form.Control
                    size="sm"
                    className={footerStyles.input}
                    type="email"
                    placeholder={"Enter email..."}
                    onChange={(e) => this.setState({ email: e.target.value })} />
                  <div tabIndex={0} onClick={this.handleSubmit} onKeyDown={this.handleSubmit}
                    role="button" className={footerStyles.button}>
                    <p>Sign Up</p>
                  </div>
                </div>
                <p className={footerStyles.message} dangerouslySetInnerHTML={{ __html: message }}></p>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className={footerStyles.tos}>
          <Link className={footerStyles.tosText} to="/service">Terms of Service</Link>
          <Link className={footerStyles.tosText} to="/acknowledgements">Acknowledgement of Use</Link>
          <Link className={footerStyles.tosTextLast} to="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    )
  }
}

export default Footer