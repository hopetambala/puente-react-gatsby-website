import React from "react"
import { Link } from "gatsby"

import * as styles from "./index.module.scss"

const SubNav = () => (
  <nav className={styles.subNav} aria-label="The Puente Model">
    <div className={styles.inner}>
      <Link
        to="/model/"
        className={styles.tab}
        activeClassName={styles.tabActive}
        getProps={({ isCurrent }) => (isCurrent ? { "aria-current": "page" } : {})}
      >
        The Puente Model
      </Link>
      <Link
        to="/model/projects/"
        className={styles.tab}
        activeClassName={styles.tabActive}
        getProps={({ isCurrent }) => (isCurrent ? { "aria-current": "page" } : {})}
      >
        Signature Projects
      </Link>
      <Link
        to="/model/health/"
        className={styles.tab}
        activeClassName={styles.tabActive}
        getProps={({ isCurrent }) => (isCurrent ? { "aria-current": "page" } : {})}
      >
        Puente Health
      </Link>
    </div>
  </nav>
)

export default SubNav
