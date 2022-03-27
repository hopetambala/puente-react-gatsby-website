import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../../../components/layout"

// Style Imports
import eventStyles from "./index.module.scss"

const DonatePage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulEventPage {
        logo {
          title
          resize (height: 1000) {
            src            
          }
        }
        title
        pageText {
          childMarkdownRemark {
            html
          }
        }
        givebutterLink
        eventGallery {
          title
          resize (height: 500) {
            src
          }
        }
        title2
        sponsorshipText {
          childMarkdownRemark {
            html
          }
        }
        title3
        gallerySponsors {
          title
          resize (height: 250) {
            src
          }
        }
      }
    }
  `)
  return (  
    <div>
      <Layout>
        <div className={eventStyles.container}>
          <div className={eventStyles.banner}>
            <div className={eventStyles.bannerImage}>
              <img alt={data.contentfulEventPage.logo.title} src={data.contentfulEventPage.logo.resize.src} fluid />
              {/* Latest Event Text */}
              <div className={eventStyles.title}>
                <h1>{data.contentfulEventPage.title}</h1>
              </div>  
              <div className={eventStyles.sectionPartners} style={{display:"flex"}}>
                <div
                style={{flex:1}}
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulEventPage.pageText.childMarkdownRemark.html,
                  }}
                />
                <div className={eventStyles.donateSection} style={{flex:1}}>
                  <iframe title="event" src={data.contentfulEventPage.givebutterLink} className={eventStyles.donateForm} name="givebutter" frameborder="0" scrolling="no" seamless allowpaymentrequest />
                </div>
              </div>
              {/* Current Sponsors Text */}
              <div className={eventStyles.title}>
                <h1>{data.contentfulEventPage.title3}</h1>
              </div>  
              <div className={eventStyles.partnerImages}>
                {data.contentfulEventPage.gallerySponsors.map((sponsor) => {
                  return (
                    <img url={""} alt={sponsor.title} src={sponsor.resize.src} />
                  )
                })}
              </div>
              {/* Sponsorship Text */}
              <div className={eventStyles.title}>
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default DonatePage
