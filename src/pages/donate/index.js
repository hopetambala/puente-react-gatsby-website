import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../../components/layout"

// Style Imports
import * as donateStyles from "./index.module.scss"

const DonatePage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulDonationPage {
        logo {
          title
          resize (height: 1000) {
            src            
          }
        }
        title
        pageText {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className={donateStyles.container}>
          <div className={donateStyles.banner}>
            <div className={donateStyles.bannerImage}>
              <img alt={data.contentfulDonationPage.logo.title} src={data.contentfulDonationPage.logo.resize.src} fluid />
              <div className={donateStyles.body}>
                <div className={donateStyles.title}>
                  <h1>{data.contentfulDonationPage.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.contentfulDonationPage.pageText.childMarkdownRemark.html,
                    }}
                  />
                </div>
                <div className={donateStyles.donateSection}>
                  <iframe title="donate" src="https://givebutter.com/embed/c/8vtwH6" className={donateStyles.donateForm} name="givebutter" frameborder="0" scrolling="no" seamless allowpaymentrequest />
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
