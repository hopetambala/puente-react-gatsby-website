import React from 'react'
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../../components/layout"

// Style imports
import * as styles from "./index.module.scss"

const PrivacyPolicy = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulLegalPage(slug: { eq: "privacy-policy" }, node_locale: { eq: "en-US" }) {
        heroText
        bodyText {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{data.contentfulLegalPage.heroText}</h1>
        </div>
        <div className={styles.body}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulLegalPage.bodyText.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
