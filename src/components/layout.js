import React from 'react'
import Helmet from "react-helmet"
import {
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Header from './header'
import Footer from './footer'

//Style Imports
import '../styles/styles.scss'
import layoutStyles from './layout.module.scss'

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
      </Helmet>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout