import React from "react"

// Component Imports
import Layout from "../../components/layout"
import * as styles from "./index.module.scss"

const ErrorPage = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <h1>404 Error</h1>
          <p>Oh No! Something went wrong!</p>
        </div>
      </Layout>
    </div>
  )
}

export default ErrorPage