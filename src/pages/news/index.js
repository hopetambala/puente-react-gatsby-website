import React, { useState, useMemo } from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../../components/layout"
import EventCard from "../../components/EventCard"

// Style/Icon Imports
import * as styles from "./index.module.scss"

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 4
  
  const data = useStaticQuery(
    graphql`
    query {
      image: file(relativePath: { eq: "placeholder-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulNewsPage {
        headerImage {
          title
          file {
            url
          }
        }
      }
      allContentfulEventPage {
        nodes {
          id
          title
          status
          createdAt
          logo {
            title
            file {
              url
            }
          }
          pageText {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)

  // Group and sort events
  const grouped = useMemo(() => {
    const allEvents = data.allContentfulEventPage.nodes
    
    const upcoming = allEvents.filter((e) => e.status === "upcoming")
    const current = allEvents.filter((e) => e.status === "current")
    // All events that aren't current or upcoming are "past"
    const past = allEvents.filter((e) => e.status !== "upcoming" && e.status !== "current")
    
    // Sort past events from most recent to oldest
    past.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    
    return { upcoming, current, past }
  }, [data.allContentfulEventPage.nodes])

  // Paginate events within each section (4 per page)
  const getPaginatedEvents = (events) => {
    const startIdx = (currentPage - 1) * eventsPerPage
    const endIdx = startIdx + eventsPerPage
    return events.slice(startIdx, endIdx)
  }

  // Calculate total pages needed (based on largest section)
  const maxEventsInSection = Math.max(
    grouped.upcoming.length,
    grouped.current.length,
    grouped.past.length
  )
  const totalPages = Math.ceil(maxEventsInSection / eventsPerPage)

  const paginatedUpcoming = getPaginatedEvents(grouped.upcoming)
  const paginatedCurrent = getPaginatedEvents(grouped.current)
  const paginatedPast = getPaginatedEvents(grouped.past)
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.bannerImage}>
              <img alt={data.contentfulNewsPage.headerImage.title} src={`${data.contentfulNewsPage.headerImage.file.url}?h=1000`} fluid />
              <h1>Puente Events</h1>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.eventsTab}>
              {/* Upcoming Events */}
              {grouped.upcoming.length > 0 && (
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.badge}>Upcoming</span>
                    Upcoming Events
                  </h3>
                  <div className={styles.eventsGrid}>
                    {paginatedUpcoming.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section>
              )}

              {/* Current Events */}
              {grouped.current.length > 0 && (
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.badge}>Current</span>
                    Current Events
                  </h3>
                  <div className={styles.eventsGrid}>
                    {paginatedCurrent.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section>
              )}

              {/* Past Events */}
              {grouped.past.length > 0 && (
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.badge}>Past</span>
                    Past Events
                  </h3>
                  <div className={styles.eventsGrid}>
                    {paginatedPast.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section>
              )}

              {/* No events at all */}
              {grouped.upcoming.length === 0 && grouped.current.length === 0 && grouped.past.length === 0 && (
                <div className={styles.emptyState}>
                  <p>No events found.</p>
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className={styles.paginationControls}>
                  <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    className={styles.paginationButton}
                  >
                    ← Previous
                  </button>
                  <span className={styles.pageInfo}>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    className={styles.paginationButton}
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default EventsPage
