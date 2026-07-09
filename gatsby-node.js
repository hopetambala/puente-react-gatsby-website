/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions }) => {
  // /programs/ was split into /model/, /model/projects/, /model/health/.
  // gatsby-plugin-s3 reads this redirect store on postBuild and turns it into
  // an S3 website routing rule, so no manual S3 console config is needed.
  actions.createRedirect({
    fromPath: "/programs/",
    toPath: "/model/",
    isPermanent: true,
    redirectInBrowser: true,
  })
}
