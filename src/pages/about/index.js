import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"
import ReactPlayer from 'react-player/youtube'
import _ from 'lodash'

// Component Imports
import Layout from "../../components/layout"
import MemberBio from './MemberBio'

// Style/Icon Imports
import aboutStyles from "./index.module.scss"

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
    allContentfulTeamMemberModel(sort: {fields: order, order: ASC}){
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
        team
      }
    }
    allContentfulTeamMemberDominicanModel(sort: {fields: order, order: ASC}){
      nodes{
        name
        position
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

  const { nodes } = data.allContentfulTeamMemberModel
  const profiles = _.chunk(_.uniqBy(nodes,'name'), 4)

  const { nodes:domNodes } = data.allContentfulTeamMemberDominicanModel
  const domProfiles = _.chunk(_.uniqBy(domNodes,'name'), 4)

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
              <h2>Our U.S.Team</h2>
              {profiles && profiles.map((row)=>
                <div className={aboutStyles.employeeRow}> 
                  <div className={aboutStyles.employees}>
                    {row.slice(0,2).map((employee)=>
                    <MemberBio linkedin profile={employee} />
                    )}
                  </div>
                  <div className={aboutStyles.employees}>
                    {row.slice(2,4).map((employee)=>
                    <MemberBio linkedin profile={employee} />
                    )}
                  </div>
              </div>)}
            </div>
            <div id="dominican-staff" className={aboutStyles.staffSection}>
              <h2>Our Dominican Team</h2>
              {domProfiles && domProfiles.map((row)=>
                <div className={aboutStyles.employeeRow}> 
                  <div className={aboutStyles.employees}>
                    {row.slice(0,2).map((employee)=>
                    <MemberBio profile={employee} />
                    )}
                  </div>
                  <div className={aboutStyles.employees}>
                    {row.slice(2,4).map((employee)=>
                    <MemberBio profile={employee} />
                    )}
                  </div>
              </div>)}
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
              <p className={aboutStyles.reportLink}><a target="_blank" rel="noopener noreferrer" href="https://puente-dr.github.io/annual-report/">Read Annual Reports</a></p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage