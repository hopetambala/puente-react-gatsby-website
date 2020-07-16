import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../components/layout"

// Style Imports
import merchStyles from "./merchandise.module.scss"

const MerchandisePage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulMerchandisePage {
        headerText
        headerSubText {
          childMarkdownRemark {
            html
          }
        }
        sectionSubText
        sectionOne
        sectionTwo
        sectionThree
        snapbackImage {
          title
          resize (height: 250) {
      	    src
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className={merchStyles.container}>
          <div className={merchStyles.title}>
            <h1>{data.contentfulMerchandisePage.headerText}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulMerchandisePage.headerSubText.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className={merchStyles.body}>
            <div className={merchStyles.section}>
              <div className={merchStyles.sectionHeader}>
                <h2>{data.contentfulMerchandisePage.sectionThree}</h2>
                <p>{data.contentfulMerchandisePage.sectionSubText}</p>
              </div>
              <div className={merchStyles.sectionProducts}>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/puente-snapbacks/" >
                    <img alt={data.contentfulMerchandisePage.snapbackImage.title} src={data.contentfulMerchandisePage.snapbackImage.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>Puente Snapback</h3>
                    <h4>$25.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default MerchandisePage