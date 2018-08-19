import React from 'react';
import graphql from 'graphql';
import PropTypes from 'prop-types';

import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h1>Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => <PostListing key={node.id} post={node} />)}
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
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
        html
        excerpt(pruneLength: 280)
      }
    }
  }
}
`;
