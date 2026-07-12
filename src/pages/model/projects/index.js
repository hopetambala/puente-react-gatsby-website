import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../../../components/layout"
import SubNav from "../../../components/subNav"

import * as styles from "./index.module.scss"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulProjectPage(node_locale: { eq: "en-US" }) {
        signatureProjectsHeader
        signatureProjectsParagraph {
          childMarkdownRemark {
            html
          }
        }
        sectionHeader
        sectionParagraph {
          childMarkdownRemark {
            html
          }
        }
        impactNumbers
        impactDescriptions
        additionalStatsValues
        additionalStatsLabels
      }
      allContentfulProject(
        filter: { category: { eq: "signature-project" }, node_locale: { eq: "en-US" } }
        sort: { order: ASC }
      ) {
        nodes {
          name
          longDescription {
            childMarkdownRemark {
              html
            }
          }
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
  `)

  const page = data.contentfulProjectPage

  const projectList = data.allContentfulProject.nodes.map((project) => ({
    title: project.name,
    description: project.longDescription,
    image: project.image,
  }))

  const bannerImage = projectList[2].image

  return (
    <Layout>
      <Helmet>
        <title>Signature Projects | Puente</title>
        <meta
          name="description"
          content="See how Puente's data-driven infrastructure projects — latrines, water filters, cement floors, and more — transform health outcomes in vulnerable Dominican communities."
        />
      </Helmet>
      <SubNav />
      <div className={styles.container}>
        <div className="cl-dlite-w-full">
          <div className={styles.bannerImage}>
            <img
              alt={bannerImage.title}
              src={`${bannerImage.file.url}?w=1800&h=700&fit=fill&fm=jpg&q=80`}
            />
          </div>
          <div className={styles.title}>
            <p className={styles.eyebrow}>The Puente Model</p>
            <h1>{page.signatureProjectsHeader}</h1>
            <p className={styles.subtext}>
              Data-driven infrastructure that improves health outcomes in the Dominican Republic&rsquo;s
              most vulnerable communities.
            </p>
          </div>
        </div>

        <div className={styles.intro}>
          <div
            dangerouslySetInnerHTML={{
              __html: page.signatureProjectsParagraph.childMarkdownRemark.html,
            }}
          />
        </div>

        <div className={styles.statsStrip}>
          <div className={styles.statsStripInner}>
            {page.additionalStatsValues.map((value, i) => (
              <div className={styles.stat} key={value + i}>
                <h2>{value}</h2>
                <p>{page.additionalStatsLabels[i]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.projectsList}>
          {projectList.map((project, i) => (
            <div className={`${styles.project} ${i % 2 === 1 ? styles.reverse : ""}`} key={project.title}>
              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.description.childMarkdownRemark.html,
                  }}
                />
              </div>
              <div className={styles.projectImage}>
                <img
                  alt={project.image.title}
                  src={`${project.image.file.url}?w=800&h=500&fit=fill&fm=jpg&q=80`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.impactSection}>
          <div
            className={styles.quote}
            dangerouslySetInnerHTML={{
              __html: page.sectionParagraph.childMarkdownRemark.html,
            }}
          />
          <div className={styles.impactStats}>
            {page.impactNumbers.map((value, i) => (
              <div className={styles.stat} key={value + i}>
                <h2>{value}</h2>
                <p>{page.impactDescriptions[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
