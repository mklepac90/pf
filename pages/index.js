import { Flex, Grid, Text, Center } from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

export default function Index({ posts }) {
  return (
    <Center h="100%" w="100%">
      <Flex flexDir="column" pt={[4, 0]} pl={[2, 0]}>
        <Grid gridTemplateColumns="1fr 1fr">
          {posts.map((post, index) => (
            <>
              <Link href={`writing/${post.data.slug}`} key={index}>
                <a>
                  <Text fontWeight="bold">{post.data.title}</Text>
                </a>
              </Link>
              <Text ml="5rem">{post.data.pubDate}</Text>
            </>
          ))}
        </Grid>
      </Flex>
    </Center>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
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
