import React, { useState } from 'react';

import { Stack, Text, Box, Button, Fade, ScaleFade } from '@chakra-ui/react';

const categoryDescriptions = {
  developer:
    "I received a university degree in business and spent years figuring out what I actually wanted to do with it. I bounced from job to job before I decided that it would be cool to get a professional designation in accounting. I've never been more wrong.",
  gamer:
    'A lifelong gamer, I started with Super Mario World on the SNES when I was 6.',
  nerd:
    "Huuuuuge fan of D&D. I played my first game when I was 10 (I was a Dwarf Warrior). I still collect rule books & campaign settings even though I haven't played a live gaming session in a long time and watching the web series Critical Role has become a real hobby of mine as of late.",
};

const defaultState = {
  who: true,
  whoCategories: false,
  selectedCategory: '',
};

const styles = {
  who: { variant: 'link', fontSize: '4xl' },
  whoCategories: { variant: 'link', fontSize: '2xl' },
};

const CategoryDescription = ({ category }) => {
  return (
    <Box
      h="3xs"
      w="xl"
      shadow="outline"
      borderRadius="md"
      p={3}
      overflow="auto"
    >
      <Text>{categoryDescriptions[category]}</Text>
    </Box>
  );
};

const About = () => {
  const [state, setState] = useState(defaultState);

  return null;
  // <Box w="100%" h="100%">
  //   <Stack h="100%" w="100%" spacing={14} justify="center" align="center">
  //     <Fade in={state.who}>
  //       <Button
  //         {...styles.who}
  //         onClick={() =>
  //           setState((state) => {
  //             return {
  //               ...state,
  //               whoCategories: !state.whoCategories,
  //               selectedCategory: '',
  //             };
  //           })
  //         }
  //       >
  //         Who am I?
  //       </Button>
  //     </Fade>

  //     <ScaleFade in={state.whoCategories} initialScale={0.5}>
  //       <Stack direction="row" spacing={32}>
  //         <Button
  //           {...styles.whoCategories}
  //           onClick={() => {
  //             setState((state) => {
  //               return { ...state, selectedCategory: 'developer' };
  //             });
  //           }}
  //         >
  //           Developer
  //         </Button>
  //         <Button
  //           {...styles.whoCategories}
  //           onClick={() => {
  //             setState((state) => {
  //               return { ...state, selectedCategory: 'gamer' };
  //             });
  //           }}
  //         >
  //           Gamer
  //         </Button>
  //         <Button
  //           {...styles.whoCategories}
  //           onClick={() => {
  //             setState((state) => {
  //               return { ...state, selectedCategory: 'nerd' };
  //             });
  //           }}
  //         >
  //           Nerd
  //         </Button>
  //       </Stack>
  //     </ScaleFade>

  //     <ScaleFade in={state.selectedCategory} initialScale={0.5}>
  //       <CategoryDescription category={state.selectedCategory} />
  //     </ScaleFade>
  //   </Stack>
  // </Box>
};

export default About;
