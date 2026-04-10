import React from "react";
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby";
import { useLocation } from "@reach/router";

// Component Imports
import Layout from "../../../components/layout";

// Style Imports
import * as eventStyles from "./index.module.scss";
import { Carousel } from "../../../components/carousel";

const EventPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventId = queryParams.get("id");

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulEventPage {
          nodes {
            id
            logo {
              title
              file {
                url
              }
            }
            title
            pageText {
              childMarkdownRemark {
                html
              }
            }
            titleOfPhotoSection
            pastPhotos {
              file {
                url
              }
            }
            givebutterLink
          }
        }
      }
    `
  );

  // Find the selected event by ID, or default to first event
  const selectedEvent = eventId 
    ? data.allContentfulEventPage.nodes.find(e => e.id === eventId)
    : data.allContentfulEventPage.nodes[0];

  if (!selectedEvent) {
    return (
      <div>
        <Layout>
          <div className={eventStyles.container}>
            <p>Event not found.</p>
          </div>
        </Layout>
      </div>
    );
  }

  const { pastPhotos } = selectedEvent;

  const photoUrls = pastPhotos ? pastPhotos.map((photo) => photo.file.url) : [];

  return (
    <div>
      <Layout>
        <div className={eventStyles.container}>
          <div className={eventStyles.event}>
            <div className={eventStyles.bannerImage}>
              <img
                alt={selectedEvent.logo.title}
                src={`${selectedEvent.logo.file.url}?h=1000`}
                fluid
              />
              {/* Latest Event Text */}
              <div className={eventStyles.title}>
                <h1>{selectedEvent.title}</h1>
              </div>
              <div className={eventStyles.sectionPartners}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedEvent.pageText.childMarkdownRemark.html,
                  }}
                  className={eventStyles.eventSection}
                />
                <div className={eventStyles.eventSection}>
                  <iframe
                    title="event"
                    src={selectedEvent.givebutterLink}
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

              {photoUrls.length > 0 && <div className={eventStyles.pastEventsWrapper}>
                {selectedEvent.titleOfPhotoSection && (
                  <div>
                    <h1 className={eventStyles.title}>{selectedEvent.titleOfPhotoSection}</h1>
                  </div>
                )}
                <div className={eventStyles.carousel}>
                  <Carousel imagesURLs={photoUrls} />
                </div>
              </div>}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EventPage;
