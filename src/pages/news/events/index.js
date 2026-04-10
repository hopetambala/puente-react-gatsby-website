import React, { useState, useEffect, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../../components/layout"
import EventCard from "../../../components/EventCard"
import * as styles from "./index.module.scss"

const EventsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulEventPage(sort: { createdAt: DESC }) {
          nodes {
            id
            title
            status
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
    `
  )

  const [displayedEvents, setDisplayedEvents] = useState([])
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const eventsPerPage = 9

  // Group events by status
  const groupEventsByStatus = (events) => {
    return {
      upcoming: events.filter((e) => e.status === "upcoming"),
      current: events.filter((e) => e.status === "current"),
      past: events.filter((e) => e.status === "past"),
    }
  }

  // Load more events on scroll
  const loadMoreEvents = useCallback(() => {
    const allEvents = data.allContentfulEventPage.nodes
    const startIdx = page * eventsPerPage
    const endIdx = startIdx + eventsPerPage
    const newEvents = allEvents.slice(startIdx, endIdx)

    if (newEvents.length === 0) {
      setHasMore(false)
    } else {
      setDisplayedEvents((prev) => [...prev, ...newEvents])
      setPage((prev) => prev + 1)
    }
  }, [page, data.allContentfulEventPage.nodes])

  // Load initial events
  useEffect(() => {
    const allEvents = data.allContentfulEventPage.nodes
    const initialEvents = allEvents.slice(0, eventsPerPage)
    setDisplayedEvents(initialEvents)
    setPage(1)
    setHasMore(allEvents.length > eventsPerPage)
  }, [data])

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const pageHeight = document.documentElement.scrollHeight

      // Trigger load when user is within 500px of bottom
      if (scrollPosition >= pageHeight - 500 && hasMore) {
        loadMoreEvents()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [loadMoreEvents, hasMore])

  const grouped = groupEventsByStatus(displayedEvents)

  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Our Events</h1>
            <p>Discover all upcoming, current, and past events from Puente</p>
          </div>

          {/* Upcoming Events */}
          {grouped.upcoming.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.badge}>Upcoming</span>
                Upcoming Events
              </h2>
              <div className={styles.grid}>
                {grouped.upcoming.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          )}

          {/* Current Events */}
          {grouped.current.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.badge}>Current</span>
                Current Events
              </h2>
              <div className={styles.grid}>
                {grouped.current.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          )}

          {/* Past Events */}
          {grouped.past.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.badge}>Past</span>
                Past Events
              </h2>
              <div className={styles.grid}>
                {grouped.past.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          )}

          {/* No events */}
          {displayedEvents.length === 0 && (
            <div className={styles.emptyState}>
              <p>No events found.</p>
            </div>
          )}

          {/* Loading indicator */}
          {!hasMore && displayedEvents.length > 0 && (
            <div className={styles.endMessage}>
              <p>No more events to load</p>
            </div>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default EventsPage
