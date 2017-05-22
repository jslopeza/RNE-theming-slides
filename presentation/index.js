// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  CodePane,
  Link,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
// Requiring examples
import RNECurrent from "raw-loader!./using-rne-current.example";
import RNECurrentMess from "raw-loader!./using-rne-current-mess.example";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  palette: require("../assets/palette.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Theming React Native Components
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            how high ordered components help manipulate children
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>Who am I?</Heading>
          <Text size={6} textColor="secondary">
            <Link href="www.binoy.io">binoy.io</Link>
          </Text>
          <Text size={6} textColor="secondary">
            <Link href="https://twitter.com/@binoyp14">@binoyp14</Link>
          </Text>
          <Text size={6} textColor="secondary">
            <Link href="https://github.com/react-native-training/react-native-elements">
              react-native-training/react-native-elements
            </Link>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <Heading size={4}>Color Palette</Heading>
          <Image src={images.palette} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Using React Native Element</Heading>
          <CodePane source={RNECurrent} lang="jsx" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Using React Native Element</Heading>
          <CodePane source={RNECurrentMess} lang="jsx" />
        </Slide>
      </Deck>
    );
  }
}
