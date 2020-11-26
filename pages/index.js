import { Box, List, ListItem, Text } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Index({ posts }) {
  return (
    <Layout>
      <Text as="h1" mb={8} fontSize="2xl">
        Immigrant Handbook
      </Text>
      <Box as="p" mb={8} textAlign="center">
        We made the mistakes, so you don't have to
      </Box>
      <List>
        {posts.map((post) => (
          <ListItem key={post.filePath} mb={2} fontSize="3xl" fontWeight="bold">
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
            <Text fontSize="md" fontWeight="normal">
              {post.data.description}
            </Text>
          </ListItem>
        ))}
      </List>
    </Layout>
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

  return { props: { posts } };
}
