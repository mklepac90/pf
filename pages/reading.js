import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import { readingFilePaths, READING_PATH } from '../utils/mdxUtils';

export default function Index({ posts }) {
  return (
    <Layout>
      <Flex flexDir={['column', 'row']}>
        <Nav />
        <Box borderBottom="1px dotted #000" paddingBottom="20px" />
        <Flex flexDir="column" pt={[4, 0]} pl={[2, 0]}>
          {posts.map((post) => (
            <>
              <Link href={`reading/${post.data.slug}`}>
                <a>
                  <Text fontWeight="bold">{post.data.title}</Text>
                </a>
              </Link>
            </>
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = readingFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(READING_PATH, filePath));
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
