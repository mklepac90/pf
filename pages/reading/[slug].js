import { Alert, Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import fs from 'fs';
import matter, { read } from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import path from 'path';
import CustomLink from '../../components/CustomLink';
import Layout from '../../components/Layout';
import Callout from '../../components/Callout';
import { readingFilePaths, READING_PATH } from '../../utils/mdxUtils';
import Nav from '../../components/Nav';

const components = {
  a: CustomLink,
  Head,
  Alert,
  Divider,
  Callout,
};

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <Layout>
      <Flex>
        <Nav />
        <Box mb="0" mt={4} px={12}>
          <Text as="h1">{frontMatter.title}</Text>
          {frontMatter.description && (
            <Box as="p" opacity="0.6" mb={6}>
              {frontMatter.description}
            </Box>
          )}
          <main>
            <Stack spacing={4} mb={8}>
              {content}
            </Stack>
          </main>
        </Box>
      </Flex>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(READING_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = readingFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
