import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../components/layout"
import DonateCTA from "../components/DonateCTA"

// Style Imports
import merchStyles from "./merchandise.module.scss"

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
          resize (height: 250) {
      	    src
          }
        }
        blackLongsleeve {
          title
          resize (height: 250) {
      	    src
          }
        }
        blackPullover {
          title
          resize (height: 250) {
      	    src
          }
        }
        blackTank {
          title
          resize (height: 250) {
      	    src
          }
        }
        blackTee {
          title
          resize (height: 250) {
      	    src
          }
        }
        womensBlackTee {
          title
          resize (height: 250) {
      	    src
          }
        }
        blueBaseball {
          title
          resize (height: 250) {
      	    src
          }
        }
        bluePullover {
          title
          resize (height: 250) {
      	    src
          }
        }
        blueTank {
          title
          resize (height: 250) {
      	    src
          }
        }
        blueTee {
          title
          resize (height: 250) {
      	    src
          }
        }
        womensBlueTank {
          title
          resize (height: 250) {
      	    src
          }
        }
        yellowCrew {
          title
          resize (height: 250) {
      	    src
          }
        }
        yellowTee {
          title
          resize (height: 250) {
      	    src
          }
        }
        whiteTee {
          title
          resize (height: 250) {
      	    src
          }
        }
        womensYellowTank {
          title
          resize (height: 250) {
      	    src
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
                    <img alt={data.contentfulMerchandisePage.blackTee.title} src={data.contentfulMerchandisePage.blackTee.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blueTee.title} src={data.contentfulMerchandisePage.blueTee.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.whiteTee.title} src={data.contentfulMerchandisePage.whiteTee.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.yellowTee.title} src={data.contentfulMerchandisePage.yellowTee.resize.src} />
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
                    <img alt={data.contentfulMerchandisePage.womensBlackTee.title} src={data.contentfulMerchandisePage.womensBlackTee.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.womensTee}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blueBaseball.title} src={data.contentfulMerchandisePage.blueBaseball.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>3/4 Sleeve Baseball Tee</h3>
                    <h4>{data.contentfulMerchandisePage.thirtyFive}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blackLongsleeve.title} src={data.contentfulMerchandisePage.blackLongsleeve.resize.src} />
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
                    <img alt={data.contentfulMerchandisePage.blackPullover.title} src={data.contentfulMerchandisePage.blackPullover.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.pullover}</h3>
                    <h4>{data.contentfulMerchandisePage.fourtyFive}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.bluePullover.title} src={data.contentfulMerchandisePage.bluePullover.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.pullover}</h3>
                    <h4>{data.contentfulMerchandisePage.fourtyFive}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.yellowCrew.title} src={data.contentfulMerchandisePage.yellowCrew.resize.src} />
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
                    <img alt={data.contentfulMerchandisePage.blackTank.title} src={data.contentfulMerchandisePage.blackTank.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tank}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.blueTank.title} src={data.contentfulMerchandisePage.blueTank.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.tank}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.womensBlueTank.title} src={data.contentfulMerchandisePage.womensBlueTank.resize.src} />
                  </a>
                  <div className={merchStyles.productInfo}>
                    <h3>{data.contentfulMerchandisePage.womensTank}</h3>
                    <h4>{data.contentfulMerchandisePage.thirty}</h4>
                  </div>
                </div>
                <div className={merchStyles.product}>
                  <a className={merchStyles.img} href="https://www.bonfire.com/store/puente-merch/" target="_blank" rel="noopener noreferrer" >
                    <img alt={data.contentfulMerchandisePage.womensYellowTank.title} src={data.contentfulMerchandisePage.womensYellowTank.resize.src} />
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
                    <img alt={data.contentfulMerchandisePage.snapbackImage.title} src={data.contentfulMerchandisePage.snapbackImage.resize.src} />
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