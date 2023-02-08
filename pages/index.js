import Head from "next/head";
import styles from "../styles/Home.module.css";
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../components/Layout";
 
export default function Home({ story, preview }) {
  story = useStoryblokState(story, {}, preview);
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>{"My Site"}</h1>
      </header>
      {/* <Layout> */}
      <StoryblokComponent blok={story.content} />
    {/* </Layout> */}
     </div>
  );
}
 
export async function getStaticProps(context) {
  let slug = "home";
 
  let sbParams = {
    version: "published",
  };
 
  if (context.preview) {
    sbParams.version = "draft";
  }
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get('cdn/stories/config');
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: context.preview || false,
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}