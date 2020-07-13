import React from 'react'
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../components/layout"

// Style imports
import styles from "./acceptable-use.module.scss"

const AcceptableUse = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulAcceptableUsePage {
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
          <h1>{data.contentfulAcceptableUsePage.heroText}</h1>
        </div>
        <div className={styles.body}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulAcceptableUsePage.bodyText.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default AcceptableUse