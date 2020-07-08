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
      contentfulFaqPage {
        heroImage {
          title
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        {/* <div className={merchStyles.container}>
          <div className={merchStyles.banner}>
            <div className={merchStyles.bannerImage}>
              <img alt={data.contentfulFaqPage.heroImage.title} src={data.contentfulFaqPage.heroImage.resize.src} fluid />
              <div className={merchStyles.title}>
                <h1>Merchandise</h1>
              </div>
            </div>
          </div>
          <div className={merchStyles.body}>
            <p>
              Support our work in style by purchasing gear through the links below. All
              proceeds go towards furthering Puente's misison and catalyzing data driven
              development in undererved communites. 
            </p>
          </div>
        </div> */}
      </Layout>
    </div>
  )
}

export default MerchandisePage