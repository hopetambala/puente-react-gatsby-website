import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../../components/layout"
import SubNav from "../../components/subNav"

import * as styles from "./index.module.scss"

const ModelPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulProjectPage(node_locale: { eq: "en-US" }) {
        heroImage {
          title
          file {
            url
          }
        }
        heroText
        heroSubText {
          childMarkdownRemark {
            html
          }
        }
        puenteModelImage {
          title
          file {
            url
          }
        }
        puenteModelText {
          childMarkdownRemark {
            html
          }
        }
      }
      projectsCardImage: contentfulAsset(
        contentful_id: { eq: "4Q1KXRQHadpBAwhTMOYlV9" }
        node_locale: { eq: "en-US" }
      ) {
        title
        file {
          url
        }
      }
      healthCardImage: contentfulAsset(
        contentful_id: { eq: "4znWg5qUXecuQUUd8l8HMr" }
        node_locale: { eq: "en-US" }
      ) {
        title
        file {
          url
        }
      }
    }
  `)

  const page = data.contentfulProjectPage

  return (
    <Layout>
      <Helmet>
        <title>The Puente Model | Puente Desarrollo Internacional</title>
        <meta
          name="description"
          content="Learn how Puente uses data collection, community training, and local leadership to drive sustainable development in the Dominican Republic."
        />
      </Helmet>
      <SubNav />
      <div className={styles.container}>
        <div className="cl-dlite-w-full">
          <div className={styles.bannerImage}>
            <img
              alt={page.heroImage.title}
              src={`${page.heroImage.file.url}?w=1800&h=800&fit=fill&fm=jpg&q=80`}
            />
          </div>
          <div className={styles.title}>
            <h1>{page.heroText}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: page.heroSubText.childMarkdownRemark.html,
              }}
            />
            <div className={styles.puenteModel}>
              <img
                alt={page.puenteModelImage.title}
                src={`${page.puenteModelImage.file.url}?w=900&fit=fill&fm=jpg&q=80`}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: page.puenteModelText.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.exploreSection}>
          <div className={styles.exploreCard}>
            <img
              alt={data.projectsCardImage.title}
              src={`${data.projectsCardImage.file.url}?w=800&h=500&fit=fill&fm=jpg&q=80`}
            />
            <h3>Signature Projects</h3>
            <p>
              Data-driven infrastructure — latrines, water filters, cement floors, and more — that
              transform health outcomes for families in need.
            </p>
            <Link to="/model/projects/" className={styles.exploreLink}>
              Learn More →
            </Link>
          </div>
          <div className={styles.exploreCard}>
            <img
              alt={data.healthCardImage.title}
              src={`${data.healthCardImage.file.url}?w=800&h=500&fit=fill&fm=jpg&q=80`}
            />
            <h3>Puente Health</h3>
            <p>
              Ongoing health programs in Constanza — monthly home visits, mobile clinics, and
              maternal care — bringing consistent support to underserved families.
            </p>
            <Link to="/model/health/" className={styles.exploreLink}>
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ModelPage
