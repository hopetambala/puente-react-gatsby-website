import React from "react";
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby";

// Component Imports
import Layout from "../../../components/layout";

// Style Imports
import eventStyles from "./index.module.scss";
import { Carousel } from "../../../components/carousel";

const EventPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulEventPage {
          logo {
            title
            resize(height: 1000) {
              src
            }
          }
          title
          pageText {
            childMarkdownRemark {
              html
            }
          }
          pastPhotos {
            file {
              url
            }
          }
          givebutterLink
          #   eventGallery {
          #     title
          #     resize (height: 500) {
          #       src
          #     }
          #   }
          #   title2
          #   sponsorshipText {
          #     childMarkdownRemark {
          #       html
          #     }
          #   }
          #   title3
          #   gallerySponsors {
          #     title
          #     resize (height: 400) {
          #       src
          #     }
          #   }
        }
      }
    `
  );
  const { pastPhotos } = data.contentfulEventPage;

  const photoUrls = pastPhotos.map((photo) => photo.file.url);

  return (
    <div>
      <Layout>
        <div className={eventStyles.container}>
          <div className={eventStyles.banner}>
            <div className={eventStyles.bannerImage}>
              <img
                alt={data.contentfulEventPage.logo.title}
                src={data.contentfulEventPage.logo.resize.src}
                fluid
              />
              {/* Latest Event Text */}
              <div className={eventStyles.title}>
                <h1>{data.contentfulEventPage.title}</h1>
              </div>
              <div className={eventStyles.sectionPartners}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      data.contentfulEventPage.pageText.childMarkdownRemark
                        .html,
                  }}
                  className={eventStyles.eventSection}
                />
                <div className={eventStyles.eventSection}>
                  <iframe
                    title="event"
                    src={data.contentfulEventPage.givebutterLink}
                    className={eventStyles.eventForm}
                    name="givebutter"
                    frameborder="0"
                    scrolling="no"
                    seamless
                    allowpaymentrequest
                  />
                </div>
              </div>
              {/* <div id="Current Sponsors Text" className={eventStyles.title}>
                <h1>{data.contentfulEventPage.title3}</h1>
              </div>  
              <div className={eventStyles.partnerImages}>
                {data.contentfulEventPage.gallerySponsors.map((sponsor) => {
                  return (
                    <img url={""} alt={sponsor.title} src={sponsor.resize.src} />
                  )
                })}
              </div>
              <div id="Sponsorship Text" className={eventStyles.title}>
                <h1>{data.contentfulEventPage.title2}</h1>
              </div>  
              <div className={eventStyles.sectionPartners}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulEventPage.sponsorshipText.childMarkdownRemark.html,
                  }}
                />
              </div>
              <div className={eventStyles.partnerImages}>
                {data.contentfulEventPage.eventGallery.map((sponsor) => {
                  return (
                    <img url={""} alt={sponsor.title} src={sponsor.resize.src} />
                  )
                })}
              </div> */}

              <div className={eventStyles.pastEventsWrapper}>
                <div>
                  <h1 className={eventStyles.title}>Past Events</h1>
                </div>
                <div className={eventStyles.carousel}>
                  <Carousel imagesURLs={photoUrls} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EventPage;
