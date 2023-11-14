import React from "react"

// Style Imports
import '../../styles/styles.scss'
import * as styles from '../footer/index.module.scss'
import logoBlack from "../../images/logo-black.png"; // Adjust the path accordingly



const Logo = () => {
  return (
    <img className={styles.logo} src={logoBlack} alt="Puente Logo" />
  );
}

export default Logo