import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../../components/layout"
import DonateCTA from "../../components/DonateCTA"

// Style Imports
import * as merchStyles from "./index.module.scss"

const MerchandisePage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulMerchandisePage {
        headerText
        headerSubText {
          childMarkdownRemark {
            html
          }
        }
        sectionSubText
        sectionOne
        sectionTwo
        sectionThree
        sectionFour
        snapbackImage {
          title
          file {
      	    url
          }
        }
        blackLongsleeve {
          title
          file {
      	    url
          }
        }
        blackPullover {
          title
          file {
      	    url
          }
        }
        blackTank {
          title
          file {
      	    url
          }
        }
        blackTee {
          title
          file {
      	    url
          }
        }
        womensBlackTee {
          title
          file {
      	    url
          }
        }
        blueBaseball {
          title
          file {
      	    url
          }
        }
        bluePullover {
          title
          file {
      	    url
          }
        }
        blueTank {
          title
          file {
      	    url
          }
        }
        blueTee {
          title
          file {
      	    url
          }
        }
        womensBlueTank {
          title
          file {
      	    url
          }
        }
        yellowCrew {
          title
          file {
      	    url
          }
        }
        yellowTee {
          title
          file {
      	    url
          }
        }
        whiteTee {
          title
          file {
      	    url
          }
        }
        womensYellowTank {
          title
          file {
      	    url
          }
        }
        pullover
        tee
        crew
        tank
        racerback
        womensTee
        womensTank
        snapback
        longsleeve
        thirty
        thirtyFive
        fourtyFive
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className={merchStyles.container}>
          <div className={merchStyles.title}>
            <h1>{data.contentfulMerchandisePage.headerText}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulMerchandisePage.headerSubText.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className={merchStyles.body}>
            <div className={merchStyles.section}>
              <div className={merchStyles.sectionHeader}>
                <h2>{data.contentfulMerchandisePage.sectionOne}</h2>
                <p>{data.contentfulMerchandisePage.sectionSubText}</p>
              </div>
              <div className={merchStyles.sectionProducts}>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blackTee.title} src={data.contentfulMerchandisePage.blackTee.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blueTee.title} src={data.contentfulMerchandisePage.blueTee.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.whiteTee.title} src={data.contentfulMerchandisePage.whiteTee.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.yellowTee.title} src={data.contentfulMerchandisePage.yellowTee.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
              </div>
              <div className={merchStyles.sectionProducts}>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.womensBlackTee.title} src={data.contentfulMerchandisePage.womensBlackTee.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.womensTee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blueBaseball.title} src={data.contentfulMerchandisePage.blueBaseball.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>3/4 Sleeve Baseball Tee</h3>
                    <h4>{data.contentfulMerchandisePage.thirtyFive}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blackLongsleeve.title} src={data.contentfulMerchandisePage.blackLongsleeve.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.longsleeve}</h3>
                    <h4>{data.contentfulMerchandisePage.thirtyFive}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={merchStyles.section}>
              <div className={merchStyles.sectionHeader}>
                <h2>{data.contentfulMerchandisePage.sectionTwo}</h2>
                <p>{data.contentfulMerchandisePage.sectionSubText}</p>
              </div>
              <div className={merchStyles.sectionProducts}>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blackPullover.title} src={data.contentfulMerchandisePage.blackPullover.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.pullover}</h3>
                    <h4>{data.contentfulMerchandisePage.fourtyFive}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.bluePullover.title} src={data.contentfulMerchandisePage.bluePullover.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.pullover}</h3>
                    <h4>{data.contentfulMerchandisePage.fourtyFive}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.yellowCrew.title} src={data.contentfulMerchandisePage.yellowCrew.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.crew}</h3>
                    <h4>{data.contentfulMerchandisePage.fourtyFive}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={merchStyles.section}>
              <div className={merchStyles.sectionHeader}>
                <h2>{data.contentfulMerchandisePage.sectionThree}</h2>
                <p>{data.contentfulMerchandisePage.sectionSubText}</p>
              </div>
              <div className={merchStyles.sectionProducts}>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blackTank.title} src={data.contentfulMerchandisePage.blackTank.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tank}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blueTank.title} src={data.contentfulMerchandisePage.blueTank.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tank}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.womensBlueTank.title} src={data.contentfulMerchandisePage.womensBlueTank.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.womensTank}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.womensYellowTank.title} src={data.contentfulMerchandisePage.womensYellowTank.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.womensTank}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={merchStyles.section}>
              <div className={merchStyles.sectionHeader}>
                <h2>{data.contentfulMerchandisePage.sectionFour}</h2>
                <p>{data.contentfulMerchandisePage.sectionSubText}</p>
              </div>
              <div className={merchStyles.sectionProducts}>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.snapbackImage.title} src={data.contentfulMerchandisePage.snapbackImage.file.url} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.snapback}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DonateCTA />
      </Layout>
    </div>
  )
}

export default MerchandisePage