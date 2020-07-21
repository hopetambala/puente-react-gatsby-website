import React, { useState } from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
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
        headerImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        headerText
        articlesMenuItem
        articleList {
          childMarkdownRemark {
            html
          }
        }
        newslettersMenuItem
        newsletters {
          childMarkdownRemark {
            html
          }
        }
        reportsMenuItem
        reportsList {
          childMarkdownRemark {
            html
          }
        }
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
              <img alt={data.contentfulNewsPage.headerImage.title} src={data.contentfulNewsPage.headerImage.resize.src} fluid />
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulNewsPage.articleList.childMarkdownRemark.html,
                  }}
                />
              </Tab>
              <Tab eventKey="two" title={data.contentfulNewsPage.newslettersMenuItem}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulNewsPage.newsletters.childMarkdownRemark.html,
                  }}
                />
              </Tab>
              <Tab eventKey="three" title={data.contentfulNewsPage.reportsMenuItem}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulNewsPage.reportsList.childMarkdownRemark.html,
                  }}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ReportsPage
