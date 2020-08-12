import React from "react"

// Style Imports
import '../../styles/styles.scss'
import styles from '../footer/index.module.scss'

const Logo = () => {
  return (
    <img className={styles.logo} src={require('../../images/logo-black.png')} alt="Puente Logo" />
  )
}

export default Logo