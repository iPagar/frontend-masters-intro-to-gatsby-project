import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            date(fromNow: true)
            title
            description
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <h1>Hello!</h1>
      <Link to="/about">About This Site</Link>

      <h2>Check out my recent blog posts</h2>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
          <small>posted {post.frontmatter.date}</small>
        </li>
      ))}
    </Layout>
  );
}
