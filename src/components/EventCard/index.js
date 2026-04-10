import React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.scss"

const EventCard = ({ event }) => {
  // SSR-safe HTML stripping using regex (document is not available at build time)
  const stripHtml = (html) => {
    if (!html) return ""
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
  }

  const description = event.pageText?.childMarkdownRemark?.html
    ? stripHtml(event.pageText.childMarkdownRemark.html)
    : ""
  
  const preview = description.length > 150 
    ? description.substring(0, 150) + "..." 
    : description

  const statusLabel = {
    upcoming: "Upcoming",
    current: "Current Event",
    past: "Past Event"
  }[event.status] || event.status

  const statusClass = `status-${event.status}`

  return (
    <div className={styles.card}>
      <Link to={`/news/event?id=${event.id}`} className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          {event.logo?.file?.url && (
            <img
              alt={event.title}
              src={`${event.logo.file.url}?w=400&h=300&fit=fill`}
              className={styles.image}
            />
          )}
          <div className={`${styles.badge} ${styles[statusClass]}`}>
            {statusLabel}
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{event.title}</h3>
          {preview && <p className={styles.description}>{preview}</p>}
          <span className={styles.readMore}>Learn more →</span>
        </div>
      </Link>
    </div>
  )
}

export default EventCard
