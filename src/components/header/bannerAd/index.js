import React from "react";
import * as styles from "./index.module.scss";
import { Link } from "gatsby";

const BannerAd = () => (
  <div className={styles.banner}>
    <Link className={styles.link} to="/donate-monthly">
      Join Puente's Amigos, our monthly giving community!{" "}
      <span role="img" aria-label="congrats">
        🎉
      </span>
    </Link>
  </div>
);

export default BannerAd;
