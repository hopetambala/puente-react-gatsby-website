import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../../../components/layout"
import SubNav from "../../../components/subNav"

import * as styles from "./index.module.scss"

// Eyebrow/subtitle metadata for the 3 health programs. Kept here rather than
// in Contentful because these are fixed 1:1 with the 3 program names and
// aren't something Greg/Emma update day to day (unlike the stats/stories
// below, which are Contentful entries so they can edit those themselves).
const PROGRAM_META = {
  "Casa a Casa": { eyebrow: "Monthly Home Visits", subtitle: "“House to House” · Launched 2019" },
  "Maternal Health": { eyebrow: "Prenatal & Postnatal Care", subtitle: "Introduced 2023" },
  Operativos: { eyebrow: "Mobile Community Clinics", subtitle: "Several times per year" },
}

// Greg/Emma sometimes ship CMS entries with a placeholder value (e.g. "[ X ]")
// while real numbers/stories are still being finalized. Flag those so they
// read as "coming soon" rather than looking like broken content.
const isPlaceholder = (value) =>
  typeof value === "string" && (/^\s*\[.*\]\s*$/.test(value.trim()) || /placeholder|tbd/i.test(value))

// Strip HTML tags so we can pattern-match placeholder text inside markdown-rendered fields.
const stripTags = (html) => (typeof html === "string" ? html.replace(/<[^>]*>/g, "") : "")

// Initials for the story-photo placeholder, e.g. "Maria Sanchez" -> "MS".
const initials = (name) =>
  typeof name === "string"
    ? name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : ""

const HealthPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHealthPage(node_locale: { eq: "en-US" }) {
        heroImage {
          title
          file {
            url
          }
        }
        heroText
        heroSubText
        introHeader
        introParagraph {
          childMarkdownRemark {
            html
          }
        }
        whyItMattersHeader
        whyItMattersSubtext
        programsHeader
        programsSubtext
        specialPatientProgramText {
          childMarkdownRemark {
            html
          }
        }
        byTheNumbersHeader
        byTheNumbersValues
        byTheNumbersLabels
        ctaStudentsBody {
          childMarkdownRemark {
            html
          }
        }
        ctaDonorsBody {
          childMarkdownRemark {
            html
          }
        }
      }
      allContentfulHealthStat(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          value
          description
          source
          order
        }
      }
      allContentfulHealthStory(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          quote {
            childMarkdownRemark {
              html
            }
          }
          name
          role
          order
          photo {
            title
            file {
              url
            }
          }
        }
      }
      allContentfulProjectTypes(filter: { projectTypeFour: { eq: null }, node_locale: { eq: "en-US" } }) {
        nodes {
          projectTypeOne
          projectOneLongDescription {
            childMarkdownRemark {
              html
            }
          }
          projectOneImage {
            title
            file {
              url
            }
          }
          projectTypeTwo
          projectTwoLongDescription {
            childMarkdownRemark {
              html
            }
          }
          projectTwoImage {
            title
            file {
              url
            }
          }
          projectTypeThree
          projectThreeLongDescription {
            childMarkdownRemark {
              html
            }
          }
          projectThreeImage {
            title
            file {
              url
            }
          }
        }
      }
    }
  `)

  const page = data.contentfulHealthPage
  const programsEntry = data.allContentfulProjectTypes.nodes[0]
  const stats = [...data.allContentfulHealthStat.nodes].sort((a, b) => a.order - b.order)
  const stories = [...data.allContentfulHealthStory.nodes].sort((a, b) => a.order - b.order)

  const programs = [
    {
      name: programsEntry.projectTypeOne,
      description: programsEntry.projectOneLongDescription,
      image: programsEntry.projectOneImage,
    },
    {
      name: programsEntry.projectTypeTwo,
      description: programsEntry.projectTwoLongDescription,
      image: programsEntry.projectTwoImage,
    },
    {
      name: programsEntry.projectTypeThree,
      description: programsEntry.projectThreeLongDescription,
      image: programsEntry.projectThreeImage,
    },
  ]

  return (
    <Layout>
      <Helmet>
        <title>Puente Health | Puente Desarrollo Internacional</title>
        <meta
          name="description"
          content="Puente Health delivers ongoing community healthcare in Constanza, DR through monthly home visits (Casa a Casa), maternal care groups, and mobile clinics (Operativos)."
        />
      </Helmet>
      <SubNav />
      <div className={styles.container}>
        <div className="cl-dlite-w-full">
          <div className={styles.bannerImage}>
            <img
              alt={page.heroImage.title}
              src={`${page.heroImage.file.url}?w=1800&h=700&fit=fill&fm=jpg&q=80`}
            />
          </div>
          <div className={styles.title}>
            <p className={styles.eyebrow}>The Puente Model</p>
            <h1>{page.heroText}</h1>
            <p className={styles.subtext}>{page.heroSubText}</p>
          </div>
        </div>

        <div className={styles.intro}>
          <h2>{page.introHeader}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: page.introParagraph.childMarkdownRemark.html,
            }}
          />
        </div>

        <div className={styles.whyItMatters}>
          <h2>{page.whyItMattersHeader}</h2>
          <p className={styles.sectionSubtext}>{page.whyItMattersSubtext}</p>
          <div className={styles.statsGrid}>
            {stats.map((stat) => {
              const draft = isPlaceholder(stat.value) || isPlaceholder(stat.description)
              return (
                <div
                  className={`${styles.statCard} ${draft ? styles.statCardDraft : ""}`}
                  key={stat.description}
                >
                  {draft && <span className={styles.draftBadge}>Coming soon</span>}
                  <p className={styles.statValue}>{stat.value}</p>
                  <p>{stat.description}</p>
                  <span>{stat.source}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.programsSection}>
          <div className={styles.programsHeader}>
            <h2>{page.programsHeader}</h2>
            <p className={styles.sectionSubtext}>{page.programsSubtext}</p>
          </div>
          {programs.map((program, i) => {
            const meta = PROGRAM_META[program.name.trim()] || {}
            return (
              <div
                className={`${styles.program} ${i % 2 === 1 ? styles.reverse : ""}`}
                key={program.name}
              >
                <div className={styles.programInfo}>
                  <p className={styles.eyebrowSmall}>{meta.eyebrow}</p>
                  <h3>{program.name}</h3>
                  {meta.subtitle && <p className={styles.programSubtitle}>{meta.subtitle}</p>}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: program.description.childMarkdownRemark.html,
                    }}
                  />
                </div>
                <div className={styles.programImage}>
                  <img
                    alt={program.image.title}
                    src={`${program.image.file.url}?w=800&h=500&fit=fill&fm=jpg&q=80`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.calloutSection}>
          <h3>Special Patient Program</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: page.specialPatientProgramText.childMarkdownRemark.html,
            }}
          />
        </div>

        <div className={styles.numbersSection}>
          <h2>{page.byTheNumbersHeader}</h2>
          <div className={styles.numbersGrid}>
            {page.byTheNumbersValues.map((value, i) => {
              const draft = isPlaceholder(value)
              return (
                <div className={`${styles.stat} ${draft ? styles.statCardDraft : ""}`} key={value + i}>
                  <p className={styles.statValue}>{value}</p>
                  <p>{page.byTheNumbersLabels[i]}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.storiesSection}>
          <h2>Stories from the Field</h2>
          <div className={styles.storiesGrid}>
            {stories.map((story) => (
              <div className={styles.storyCard} key={story.name + story.role}>
                <div className={styles.storyPhoto}>
                  {story.photo && (
                    <img alt={story.photo.title} src={`${story.photo.file.url}?w=400&h=400&fit=fill&fm=jpg&q=80`} />
                  )}
                </div>
                <div
                  className={styles.storyQuote}
                  dangerouslySetInnerHTML={{
                    __html: story.quote.childMarkdownRemark.html,
                  }}
                />
                <p className={styles.storyName}>
                  {story.name}, <span>{story.role}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`cl-dlite-flex ${styles.ctaSection}`}>
          <div className={styles.ctaPanel}>
            <p className={styles.eyebrowSmall}>For Students & Professionals</p>
            <h3>Volunteer with Puente Health</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: page.ctaStudentsBody.childMarkdownRemark.html,
              }}
            />
            <Link to="/volunteer/" className={styles.ctaButton}>
              Get Involved →
            </Link>
          </div>
          <div className={`${styles.ctaPanel} ${styles.ctaPanelLight}`}>
            <p className={styles.eyebrowSmallDark}>For Donors & Partners</p>
            <h3>Support Puente Health</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: page.ctaDonorsBody.childMarkdownRemark.html,
              }}
            />
            <Link to="/donate/" className={styles.ctaButtonDark}>
              Donate Now →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HealthPage
