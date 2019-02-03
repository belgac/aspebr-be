import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { AboutPageTemplate } from '../templates/about-page';
import Content, { HTMLContent } from '../components/Content';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data
    console.log(post);
    return (
      <Layout>
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: {homepage: {eq: true}}) {
      html
      frontmatter {
        title
        homepage
      }
    }
  }
`
