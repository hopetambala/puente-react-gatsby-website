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
          resize(height: 1000) {
            src
          }
        }
        logoMonthly {
          title
          resize(height: 1000) {
            src
          }
        }
        title
        pageText {
          childMarkdownRemark {
            html
          }
        }
        monthlyDonorContent {
          childMarkdownRemark {
            html
          }
        }
    
        monthlyDonorTiers {
          title
          resize(height: 300) {
            src
          }
        }
        monthlyDonorTiersList {
          childMarkdownRemark {
            html
          }
        }
        monthlyDonorHowItWorks {
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
              <img alt={data.contentfulDonationPage.logo.title} src={data.contentfulDonationPage.logoMonthly.resize.src} fluid />
              <div className={donateStyles.body}>
                <div className={donateStyles.donateSection}>
                  <iframe title="donate" src="https://givebutter.com/embed/c/yuDENI" className={donateStyles.donateForm} name="givebutter" frameborder="0" scrolling="no" seamless allowpaymentrequest />
                </div>
                <div className={donateStyles.title}>
                  <div className={donateStyles.content} dangerouslySetInnerHTML={{
                        __html: data.contentfulDonationPage.monthlyDonorContent.childMarkdownRemark.html,
                      }}
                  /> 
                  <div className={donateStyles.content} dangerouslySetInnerHTML={{
                      __html: data.contentfulDonationPage.monthlyDonorHowItWorks.childMarkdownRemark.html,
                    }}
                  />                   
                </div>
              </div>
            </div>
            <div className={donateStyles.bodyMonthly} >
              <div className={donateStyles.tierImages}>
                {data.contentfulDonationPage.monthlyDonorTiers.map((image)=>
                    <img alt={data.contentfulDonationPage.logo.title} src={image.resize.src} fluid />)
                }
              </div>
            </div>
            <div className={donateStyles.bodyMonthly}>
              <div
                className={donateStyles.content}
                dangerouslySetInnerHTML={{
                  __html: data.contentfulDonationPage.pageText.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default DonatePage
