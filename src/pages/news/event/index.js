import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../../../components/layout"

// Style Imports
import eventStyles from "./index.module.scss"

const DonatePage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulEventPage {
        logo {
          title
          resize (height: 1000) {
            src            
          }
        }
        title
        givebutterLink
      }
    }
  `)
  return (  
    <div>
      <Layout>
        <div className={eventStyles.container}>
          <div className={eventStyles.banner}>
            <div className={eventStyles.bannerImage}>
              <img alt={data.contentfulEventPage.logo.title} src={data.contentfulEventPage.logo.resize.src} fluid />
              <div className={eventStyles.body}>
                <div className={eventStyles.title}>
                  <h1>{data.contentfulEventPage.title}</h1>
                </div>
                <div className={eventStyles.donateSection}>
                  <iframe title="event" src={data.contentfulEventPage.givebutterLink} className={eventStyles.donateForm} name="givebutter" frameborder="0" scrolling="no" allowpaymentrequest />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default DonatePage
