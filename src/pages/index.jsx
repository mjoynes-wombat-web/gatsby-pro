import React from 'react';
import graphql from 'graphql';
import PropTypes from 'prop-types';

const PostListing = () => <div>Hello</div>;

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({ node }) => <PostListing post={node} />)}
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        desc: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMMM DD YYYY")
        }
        html
      }
    }
  }
}
`;
