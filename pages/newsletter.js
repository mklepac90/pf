import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import { newsletterFilePaths, NEWSLETTER_PATH } from '../utils/mdxUtils';

export default function Index({ posts }) {
  return (
    <Layout>
      <Flex>
        <Nav />
        <Flex flexDir="column">
          {posts.map((post) => (
            <>
              <Link href={`newsletter/${post.data.slug}`}>
                <a>{post.data.title}</a>
              </Link>
            </>
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = newsletterFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(NEWSLETTER_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

  return { props: { posts } };
}
