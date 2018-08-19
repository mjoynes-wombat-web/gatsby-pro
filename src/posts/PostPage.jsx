import React from 'react';
import graphql from 'graphql';

const PostPage = ({ data: { markdownRemark: { frontmatter, html } } }) => (
  <div>
    <p>{frontmatter.date}</p>
    <h1>{frontmatter.title}</h1>
    <p dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!){
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
