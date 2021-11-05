import { Flex, Text, Center } from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { newsletterFilePaths, NEWSLETTER_PATH } from '../utils/mdxUtils';

export default function Newsletter({ posts }) {
  return (
    <Center h="100%" w="100%">
      <Flex flexDir="column">
        {posts.map((post, index) => (
          <Link key={index} href={`/newsletter/${post.data.slug}`}>
            <a>
              <Text fontWeight="bold">{post.data.title}</Text>
            </a>
          </Link>
        ))}
      </Flex>
    </Center>
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
