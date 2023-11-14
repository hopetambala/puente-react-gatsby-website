import React from 'react'
import Helmet from "react-helmet"
import {
  graphql,
  useStaticQuery,
} from "gatsby"
import favicon from '../../images/favicon.ico'

// Component Imports
import Header from '../header'
import Footer from '../footer'

//Style Imports
import '../../styles/styles.scss'
import * as layoutStyles from './index.module.scss'

const Layout = (props) => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={layoutStyles.container}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="icon" href={favicon} />
        <script src="https://givebutter.com/js/widget.js" type="text/javascript" />
      </Helmet>
      <div className={layoutStyles.header}>
        <Header />
      </div>
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout