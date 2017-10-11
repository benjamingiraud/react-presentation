// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Layout,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Text,
  Image,
  ComponentPlayground
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/reactlogo.png"),
  facebook: require("../assets/facebook.svg"),
  instagram: require("../assets/instagram.png"),
  wordpress: require("../assets/wordpress.png"),
  netflix: require("../assets/netflix.png")
};

preloader(images);

const theme = createTheme({
  primary: "#E5E5E5",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logo} margin="auto" width="25%" />
          <Heading size={1} lineHeight={1} fit caps textColor="secondary">
            React
          </Heading>
          <Text margin="auto" textColor="tertiary" size={1} fit bold>
            Plus qu'une simple librairie JavaScript !
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>React ? Quésaco ?</Heading>
          <List>
            <Appear>
              <ListItem>Une librairie pour créer des interfaces utilisateurs</ListItem>
            </Appear>
            <Appear>
              <ListItem>Le "V" de MVC</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 4</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 auto 2em autto" size={3} textColor="tertiary" caps>Comment ça marche ?</Heading>
          <List>
            <Appear>
              <ListItem>Composants</ListItem>
            </Appear>
            <Appear>
              <ListItem>Propriétées (props)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Etats (states)</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading lineHeight={1} margin="0 auto 2em auto" size={3} textColor="secondary" caps>Qui utilise React ?</Heading>
          <Layout>
            <Fill>
              <Image src={images.facebook} width="100%" />
            </Fill>
            <Fill>
              <Image src={images.instagram} width="100%" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.wordpress} width="100%" />
            </Fill>
            <Fill>
              <Image src={images.netflix} width="100%" margin="auto auto auto 1em" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading margin="0 auto 2em autto" size={3} textColor="tertiary" caps>Vous n'avez rien compris ?</Heading>
          <BlockQuote>
            <Quote size={6}>M'en bat les c*uilles ça marche</Quote>
            <Cite>Formation dev 2017</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
