import React, { useState } from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// Component Imports
import Layout from "../components/layout"

// Style/Icon Imports
import styles from "./news.module.scss"

const ReportsPage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      image: file(relativePath: { eq: "placeholder-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulNewsPage {
        headerText
        articlesMenuItem
        newslettersMenuItem
        reportsMenuItem
      }
    }
  `)
  const [key, setKey] = useState('one');
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.bannerImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
              <h1>{data.contentfulNewsPage.headerText}</h1>
            </div>
          </div>
          <div className={styles.section}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="one" title={data.contentfulNewsPage.articlesMenuItem}>
                <h2>Test</h2>
                <p>Test</p>
              </Tab>
              <Tab eventKey="two" title={data.contentfulNewsPage.newslettersMenuItem}>
                <h2>Test</h2>
                <p>Test</p>
              </Tab>
              <Tab eventKey="three" title={data.contentfulNewsPage.reportsMenuItem}>
                <h2>Test</h2>
                <p>Test</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ReportsPage
