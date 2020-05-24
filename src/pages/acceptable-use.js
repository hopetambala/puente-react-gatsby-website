import React from 'react'
// import {
//   Link,
// } from "gatsby"

// Component Imports
import Layout from "../components/layout"

// Style imports
import styles from "./acceptable-use.module.scss"

const AcceptableUse = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Test</h1>
        </div>
        <div className={styles.body}>
          <p>Test</p>
        </div>
      </div>
    </Layout>
  )
}

export default AcceptableUse