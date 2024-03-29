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

const AcceptableUse = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulTermsOfServicePage {
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
          <h1>{data.contentfulTermsOfServicePage.heroText}</h1>
        </div>
        <div className={styles.body}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulTermsOfServicePage.bodyText.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default AcceptableUse