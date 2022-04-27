import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import Bg from "components/bg";
import Section from "components/section";
import PostCard from "components/post-card";
import { allBlogs } from "contentlayer/generated";

export async function getStaticProps() {
  return { props: { posts: allBlogs } };
}

export default function CareerPage({ posts }) {
  console.log(posts);
  const isEmpty = posts.length === 0;

  return (
    <>
      <Head>
        <title>Blog - Upstash</title>
      </Head>

      <Box as="section" py={["100px", "140px"]} textAlign="center">
        <Container maxW="3xl">
          <Heading as="h1" fontWeight="extrabold" size="3xl">
            Blog
          </Heading>
        </Container>
      </Box>

      {!isEmpty && (
        <Section id="list" py={["100px", "120px"]}>
          <Bg />

          <Container maxW="2xl">
            {posts.map((post) => {
              return <PostCard key={post.slug} {...post} />;
            })}
          </Container>
        </Section>
      )}
    </>
  );
}