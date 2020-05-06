# Puente Website

[![Build Status](https://travis-ci.com/hopetambala/puente-react-gatsby-website.svg?branch=master)](https://travis-ci.com/hopetambala/puente-react-gatsby-website)
![](https://img.shields.io/badge/react-✓-blue.svg)


Puente Website is a modern, responsive website built using Gatsby.js and Content.

<!-- [AWS S3 URL](http://dashboard-react-cra-clientside.s3-website.us-east-1.amazonaws.com/) -->

## Project Layout
| Key Folder | Parent Folder | Description |
| - | - | - |
| templates | src | Holds the modules for retrieving data and custom functions | 
| pages | src | Holds the main layout folders for content | 
| components | src | Holds the smaller components that are within layouts | 


## Development

This project is built with [ReactJS](https://reactjs.org), [Gatsby](https://www.gatsbyjs.org/), and [Contentful](https://www.contentful.com/). Gatsby use's [GraphQL](https://graphql.org/) to retrieve data from Contentful. 

This project is a bootstrapped using Gatsby

Here are some quick commands to get started:

- `npm install`: Install Node dependencies
- `npm run develop`: Start the gatsby development server.
- `npm setup`: Run's a setup script that connects this application to the Contentful CMS. Needs system arguments
- `npm build`: Build a production optimized bundle of the app.

### AWS + s3

Get this React App working on AWS by [installing the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html#cliv2-mac-install-cmd).

#### Deploy in your terminal

Create a s3 bucket
```
$ aws s3 mb s3://your-bucket-name
```

List to see your s3 buckets.
```
$ aws s3 ls
```

Build and deploy your app!
```
$ npm run build && aws s3 sync build/ s3://your-bucket-name
```

#### Permissions and Settings
There's a decent amount that'll be necessary to get this publically consumed on the AWS website itself. Follow [this](https://www.newline.co/fullstack-react/articles/deploying-a-react-app-to-s3/) guide to get those hammered out.

## Resources

- [CSS Boxes](https://www.bypeople.com/css-boxes/)
- [Flexbox](http://flexbox.buildwithreact.com/)


