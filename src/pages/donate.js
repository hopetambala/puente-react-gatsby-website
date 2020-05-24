import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../components/layout"
import DonateForm from "../components/donateForm"

// Style Imports
import donateStyles from "./donate.module.scss"

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
        paragraph1 {
          content {
            content {
              value
            }
          }
        }
        title2
        address {
          content {
            content {
              value
            }
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
              <div className={donateStyles.title}>
                <h1>{data.contentfulDonationPage.title}</h1>
              </div>
            </div>
          </div>
          <div className={donateStyles.body}>
            <p>
              {data.contentfulDonationPage.paragraph1.content[0].content[0].value}
              <br /><br />
              {data.contentfulDonationPage.title2}
              <br /><br />
              {data.contentfulDonationPage.address.content[0].content[0].value}
              <br />
              {data.contentfulDonationPage.address.content[1].content[0].value}
              <br />
              {data.contentfulDonationPage.address.content[2].content[0].value}
            </p>
            <div className={donateStyles.donateSection}>
              <h2>Donation Amount</h2>
              <DonateForm />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default DonatePage
