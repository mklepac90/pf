import {
  Box,
  Divider,
  Flex,
  Grid,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import Logo from "../public/logo.svg";

export default function Index({ posts }) {
  return (
    <Layout>
      <Grid gridTemplateRows="auto 1fr auto" height="100vh">
        <Box background="black">
          <Flex flexDirection="column" justify="center" align="center">
            <Box mt="4rem">
              <Logo />
            </Box>
            <Text
              my={8}
              color="white"
              fontSize="0.75rem"
              textAlign="center"
              maxW={["40%", "30%"]}
            >
              We made the mistakes, so you don't have to We made the mistakes,
              so you don't have to We made the mistakes, so you don't have to We
              so you don't have to We made the mistakes, so you don't have to We
              you don't have to
            </Text>
          </Flex>
        </Box>
        <Box background="white">
          <Grid
            gridTemplateColumns="repeat(auto-fit, minmax(240px, 400px)) minmax(240px, 400px)"
            gridRowGap="2rem"
            gridColumnGap="2rem"
            gridAutoColumns="1fr"
            gridAutoFlow="row dense"
            gridTemplateRows="auto"
            maxW="1100px"
            mx="auto"
            px="8rem"
            mt="4rem"
          >
            <Text
              as="h2"
              gridColumnStart="span 2"
              gridColumnEnd="span 2"
              fontSize="2em"
              color="#ec7f37"
            >
              Chapters
            </Text>
            <Box>
              <Text as="h3" fontSize="1.5em" color="#ec7f37">
                Chapter 1: On Arrival
              </Text>
              <Text as="h5" fontSize="0.7em" color="hsl(225deg, 15%, 50%)">
                Getting all the ducks in order
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontSize="1.5em" color="#ec7f37">
                Chapter 2: Transport
              </Text>
              <Text as="h5" fontSize="0.7em" color="hsl(225deg, 15%, 50%)">
                Getting around
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontSize="1.5em" color="#ec7f37">
                Chapter 3: Govt
              </Text>
              <Text as="h5" fontSize="0.7em" color="hsl(225deg, 15%, 50%)">
                Getting important documents
              </Text>
            </Box>
            <Box>
              <Text as="h3" fontSize="1.5em" color="#ec7f37">
                Chapter 4: Preethika
              </Text>
              <Text as="h5" fontSize="0.7em" color="hsl(225deg, 15%, 50%)">
                Call me Preethika
              </Text>
            </Box>
          </Grid>
        </Box>
        <footer>
          <Box
            fontSize="0.7em"
            textAlign="center"
            background="black"
            color="white"
          >
            Made with ♥️ in Toronto by Yesh and Preethika Yendamuri
          </Box>
        </footer>
      </Grid>
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
