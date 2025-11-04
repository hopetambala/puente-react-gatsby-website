# Puente Website



Puente Website is a modern, responsive website built using Gatsby.js and Content.

https://puente-dr.netlify.app

## Project Layout
| Key Folder | Parent Folder | Description |
| - | - | - |
| pages | src | Holds the main layout folders for content | 
| components | src | Holds the smaller components that are within layouts | 


## Development

This project is built with [ReactJS](https://reactjs.org), [Gatsby](https://www.gatsbyjs.org/), and [Contentful](https://www.contentful.com/). Gatsby use's [GraphQL](https://graphql.org/) to retrieve data from Contentful. 

This project is a bootstrapped using Gatsby

Here are some quick commands to get started:

- `yarnpkg install`: Install Node dependencies
- `yarnpkg run develop`: Start the gatsby development server.
- `yarnpkg run build`: Build a production optimized bundle of the app.
- `yarnpkg run deploy`: Deploy a production optimized bundle of the app to AWS s3

### AWS + s3

Get this React App working on AWS by [installing the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html#cliv2-mac-install-cmd).

#### Deploy in your terminal

```
$ yarn run deploy-dev
```

[Takes you here](http://website-react-gatsby.s3-website-us-east-1.amazonaws.com/) 

#### Permissions and Settings
There's a decent amount that'll be necessary to get this publically consumed on the AWS website itself. Follow [this](https://www.newline.co/fullstack-react/articles/deploying-a-react-app-to-s3/) guide to get those hammered out.

## Resources

- [CSS Boxes](https://www.bypeople.com/css-boxes/)
- [Flexbox](http://flexbox.buildwithreact.com/)
- [Google Domains to S3](https://medium.com/@limichelle21/connecting-google-domains-to-amazon-s3-d0d9da467650)


