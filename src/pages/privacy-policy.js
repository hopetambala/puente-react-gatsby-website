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
      contentfulPrivacyPolicy {
        heroText
        bodyText {
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
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{data.contentfulPrivacyPolicy.heroText}</h1>
        </div>
        <div className={styles.body}>
          <p>{data.contentfulPrivacyPolicy.bodyText.content[0].content[0].value}</p>
          {data.contentfulPrivacyPolicy.bodyText.content.slice(1).map((bullet) => {
            return (
              <li>{bullet.content[0].value}</li>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default AcceptableUse