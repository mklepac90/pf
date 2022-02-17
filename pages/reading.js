import { Center, Flex, Text, Stack, Box } from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { readingFilePaths, READING_PATH } from '../utils/mdxUtils';

export default function Reading({ posts }) {
  return null;
  // <Center h="100%" w="100%">
  //   <Flex flexDir="column">
  //     {posts.map((post, index) => (
  //       <Box key={index}>
  //         <Stack direction="row" spacing={20}>
  //           <Link href={`/reading/${post.data.slug}`}>
  //             <a>
  //               <Text fontWeight="bold">{post.data.title}</Text>
  //             </a>
  //           </Link>
  //           <Text>{post.data.status}</Text>
  //         </Stack>
  //       </Box>
  //     ))}
  //   </Flex>
  // </Center>
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
