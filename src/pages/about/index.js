import React, { useState } from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"
import ReactPlayer from 'react-player/youtube'
import _ from 'lodash'

// Component Imports
import Layout from "../../components/layout"
import MemberBio from './MemberBio'
import BioModal from './MemberBio/Modal'

// Style/Icon Imports
import aboutStyles from "./index.module.scss"
import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/fa/plus'

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulAboutPage {
        heroImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        heroText
        heroSubText{
          childMarkdownRemark {
            html
          }
        }
        missionHeader
        missionText {
          childMarkdownRemark {
            html
          }
        }
        visionHeader
        visionText {
          childMarkdownRemark {
            html
          }
        }
        annualReport
        annualReportText {
          childMarkdownRemark {
            html
          }
        }
      }
    allContentfulTeamMemberModel{
      nodes{
        name
        position
        linkedin
        bio {
          childMarkdownRemark{
            html
          }
        }
        image {
          title
          resize (height: 250) {
            src            
          }
        }
      }
    }
    contentfulFeaturedVolunteers {
      volunteerOneImage {
        title
        resize (height: 250) {
      	  src
        }
      }
      volunteerName
      volunteerOneRole
      volunteerOneBio {
        childMarkdownRemark {
          html
        }
      }
      volunteerTwoImage {
        title
        resize (height: 250) {
      	  src
        }
      }
      volunteerTwoName
      volunteerTwoRole
      volunteerTwoBio {
        childMarkdownRemark {
          html
        }
      }
      volunteerThreeImage {
        title
        resize (height: 250) {
      	  src
        }
      }
      volunteerThreeName
      volunteerThreeRole
      volunteerThreeBio {
        childMarkdownRemark {
          html
        }
      }
      volunteerFourImage {
        title
        resize (height: 250) {
      	  src
        }
      } 
      volunteerFourName
      volunteerFourRole
      volunteerFourBio {
        childMarkdownRemark {
          html
        }
      } 
    }
    contentfulLandingPage {
      ourPartnersText {
        childMarkdownRemark {
          html
        }
      }
      partnerships {
        title
        resize (height: 200) {
          src
        }
      }
    }
  }
  `)

  const [volunteerShow, setVolunteerShow] = useState(false);
  const [volunteerTwoShow, setVolunteerTwoShow] = useState(false);
  const [volunteerThreeShow, setVolunteerThreeShow] = useState(false);
  const [volunteerFourShow, setVolunteerFourShow] = useState(false);

  const { nodes } = data.allContentfulTeamMemberModel
  const profiles = _.uniqBy(nodes,'name')

  return (
    <div>
      <Layout>
        <div className={aboutStyles.container}>
          <div className={aboutStyles.banner}>
            <div className={aboutStyles.bannerImage}>
              <img alt={data.contentfulAboutPage.heroImage.title} src={data.contentfulAboutPage.heroImage.resize.src} fluid />
              <div id="who-we-are" className={aboutStyles.title}>
                <div className={aboutStyles.about}>
                  <div className={aboutStyles.aboutText}>
                    <h1>{data.contentfulAboutPage.heroText}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.contentfulAboutPage.heroSubText.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={aboutStyles.aboutVideo}>
                    <ReactPlayer width='100%' controls='true' url='https://www.youtube.com/watch?v=0XwQzkQjF1s.' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={aboutStyles.body}>
            <div className={aboutStyles.missionSection}>
              <h2>{data.contentfulAboutPage.missionHeader}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulAboutPage.missionText.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className={aboutStyles.visionSection}>
              <h2>{data.contentfulAboutPage.visionHeader}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulAboutPage.visionText.childMarkdownRemark.html,
                }}
              />
            </div>
            <div id="staff" className={aboutStyles.staffSection}>
              <h2>Our Team</h2>
              <div className={aboutStyles.employeeRow}>
                <div className={aboutStyles.employees}>
                  <MemberBio linkedin profile={profiles[0]} />
                  <MemberBio linkedin profile={profiles[3]} />
                </div>
                <div className={aboutStyles.employees}>
                  <MemberBio linkedin profile={profiles[2]} />
                  <MemberBio linkedin profile={profiles[5]} />
                </div>
              </div>
              <div className={aboutStyles.employeeRow}>
                <div className={aboutStyles.employees}>
                  <MemberBio linkedin profile={profiles[1]} />
                  <MemberBio linkedin profile={profiles[6]} />
                </div>
                <div className={aboutStyles.employees}>
                  <MemberBio linkedin profile={profiles[4]} />
                  <MemberBio linkedin profile={profiles[7]} />
                </div>
              </div>
            </div>
            <div id="volunteers" className={aboutStyles.volunteerSection}>
              <h2>Featured Volunteers</h2>
              <div className={aboutStyles.employeeRow}>
                <div className={aboutStyles.employees}>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulFeaturedVolunteers.volunteerOneImage.title} src={data.contentfulFeaturedVolunteers.volunteerOneImage.resize.src} fluid />
                      <Icon onClick={() => setVolunteerShow(true)} className={aboutStyles.icon} size={24} icon={plus} />
                      <BioModal
                        show={volunteerShow}
                        onHide={() => setVolunteerShow(false)}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.contentfulFeaturedVolunteers.volunteerOneBio.childMarkdownRemark.html,
                          }}
                        />
                      </BioModal>
                    </div>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerOneRole}</h3>
                  </div>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulFeaturedVolunteers.volunteerTwoImage.title} src={data.contentfulFeaturedVolunteers.volunteerTwoImage.resize.src} fluid />
                      <Icon onClick={() => setVolunteerTwoShow(true)} className={aboutStyles.icon} size={24} icon={plus} />
                      <BioModal
                        show={volunteerTwoShow}
                        onHide={() => setVolunteerTwoShow(false)}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.contentfulFeaturedVolunteers.volunteerTwoBio.childMarkdownRemark.html,
                          }}
                        />
                      </BioModal>
                    </div>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerTwoName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerTwoRole}</h3>
                  </div>
                </div>
                <div className={aboutStyles.employees}>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulFeaturedVolunteers.volunteerThreeImage.title} src={data.contentfulFeaturedVolunteers.volunteerThreeImage.resize.src} fluid />
                      <Icon onClick={() => setVolunteerThreeShow(true)} className={aboutStyles.icon} size={24} icon={plus} />
                      <BioModal
                        show={volunteerThreeShow}
                        onHide={() => setVolunteerThreeShow(false)}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.contentfulFeaturedVolunteers.volunteerThreeBio.childMarkdownRemark.html,
                          }}
                        />
                      </BioModal>
                    </div>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerThreeName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerThreeRole}</h3>
                  </div>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulFeaturedVolunteers.volunteerFourImage.title} src={data.contentfulFeaturedVolunteers.volunteerFourImage.resize.src} fluid />
                      <Icon onClick={() => setVolunteerFourShow(true)} className={aboutStyles.icon} size={24} icon={plus} />
                      <BioModal
                        show={volunteerFourShow}
                        onHide={() => setVolunteerFourShow(false)}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.contentfulFeaturedVolunteers.volunteerFourBio.childMarkdownRemark.html,
                          }}
                        />
                      </BioModal>
                    </div>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerFourName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerOneRole}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div id="partners" className={aboutStyles.sectionPartners}>
              <h2>Our Partners</h2>
              <div className={aboutStyles.partnerImages}>
                {data.contentfulLandingPage.partnerships.map((partnerships) => {
                  return (
                    <img alt={partnerships.title} src={partnerships.resize.src} />
                  )
                })}
              </div>
            </div>
            <div className={aboutStyles.sectionReport}>
              <h2 id="report">{data.contentfulAboutPage.annualReport}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulAboutPage.annualReportText.childMarkdownRemark.html,
                }}
              />
              <p className={aboutStyles.reportLink}><a target="_blank" rel="noopener noreferrer" href="https://issuu.com/puente-dr/docs/puente_2019_annual_report">Read 2019 Report</a></p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage