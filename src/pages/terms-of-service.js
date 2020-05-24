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
      contentfulTermsOfServicePage {
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
          <h1>{data.contentfulTermsOfServicePage.heroText}</h1>
        </div>
        <div className={styles.body}>
          {data.contentfulTermsOfServicePage.bodyText.content.map((bullet) => {
            return (
              <p>{bullet.content[0].value}</p>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default AcceptableUse