import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from "gatsby"

import logo from '../img/bck.png'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
          blogs: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
    `}
    render={({ site, blogs }) => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <div class="container" style={{ backgroundColor: '#FFF', height: '100%', padding: '1.5rem' }}>
          <Link to="/" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: '100%'}} />
          </Link>
          <section class="main-content columns is-fullheight">
            <Navbar blogs={blogs} />
            {children}
        </section>
        </div>
      </div>
    )}
  />
)

export default TemplateWrapper
