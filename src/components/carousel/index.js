import "bootstrap/dist/css/bootstrap.min.css";
import { uniqueId } from "lodash";
import BootstrapCarousel from "react-bootstrap/Carousel";
import React from "react";
import * as styles from "./index.module.scss";

const Carousel = ({ imagesURLs }) => {
  return (
    <BootstrapCarousel controls={false} fade>
      {imagesURLs &&
        imagesURLs.map((url) => (
          <BootstrapCarousel.Item className={styles.imageWrapper}>
            <div className={styles.imageWrapper}>
              <img src={url} alt={`${uniqueId()}`} />
            </div>
          </BootstrapCarousel.Item>
        ))}
    </BootstrapCarousel>
  );
};
export { Carousel };
