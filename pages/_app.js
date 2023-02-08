import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Config from "../components/Config";
import HeaderMenu from "../components/HeaderMenu";
import MenuLink from "../components/MenuLink";
import Layout from "../components/Layout";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  layout: Layout,
  "header_menu": HeaderMenu,
  "menu_link": MenuLink,
};

storyblokInit({
  accessToken: "IGlw4E8TFzQvnei74z7JIAtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }){ 
  return (
    <Layout story={pageProps.config}>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;