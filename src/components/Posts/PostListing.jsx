import React from 'react';
import Link from 'gatsby-link';

function getExcerpt(html) {
  return html.slice(html.indexOf('<!-- start-excerpt -->'), html.indexOf('<!-- end excerpt -->'));
}

const PostListing = ({ post: { frontmatter, html, fields: { slug } } }) => (
  <article>
    <h2><Link to={slug}>{frontmatter.title}</Link></h2>
    <span>{frontmatter.date}</span>
    <p dangerouslySetInnerHTML={{ __html: getExcerpt(html) }} />
  </article>
);

export default PostListing;
