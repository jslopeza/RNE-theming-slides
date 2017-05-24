// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  CodePane,
  Image,
  List,
  ListItem,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
// Requiring examples
import RNECurrent from "raw-loader!./using-rne-current.example";
import RNECurrentMess from "raw-loader!./using-rne-current-mess.example";
import RNEThemed from "raw-loader!./using-rne-themed.example";
import ThemeProvider1 from "raw-loader!./theme-provider-1.example";
import ThemeProvider2 from "raw-loader!./theme-provider-2.example";
import UsingContext from "raw-loader!./using-context.example";
import CssTheming from "raw-loader!./css-theming.example";
import ConstantThemeManager from "raw-loader!./constant-theme.example";
import RNEThemedFinal from "raw-loader!./rne-themed-final.example";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const images = {
  palette: require("../assets/palette.png"),
  preview: require("../assets/preview.png"),
  codeReuse: require("../assets/code-reuse.jpg"),
  propsPassing: require("../assets/props-passing.png"),
  contextPassing: require("../assets/context-passing.png")
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
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Who am I?</Heading>
          <Text size={6} lineHeight={1.2} textColor="secondary">
            Binoy Patel
          </Text>
          <Text size={6} lineHeight={1.2} textColor="secondary">
            binoy.io
          </Text>
          <Text size={6} lineHeight={1.2} textColor="secondary">
            @binoyp14
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <Heading size={4}>Color Palette</Heading>
          <Image src={images.palette} width="80%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Using React Native Elements</Heading>
          <CodePane source={RNECurrent} lang="jsx" />
        </Slide>
        <Slide transition={"spin"} bgColor="primary">
          <Heading size={5} textColor="secondary">Component Preview</Heading>
          <Image src={images.preview} width="60%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Implementation</Heading>
          <CodePane source={RNECurrentMess} lang="jsx" />
        </Slide>
        <Slide transition="spin" bgColor="primary">
          <Image src={images.codeReuse} width="80%" />
        </Slide>
        <Slide transition="fade" bgColor="primary">
          <Heading size={4} textColor="secondary">With Theming Support</Heading>
          <CodePane source={RNEThemed} lang="jsx" />
        </Slide>
        <Slide transition="slide" bgColor="primary">
          <Heading size={5} textColor="secondary">How does it work?</Heading>
          <List>
            <Appear><ListItem textColor="tertiary">High Order Components</ListItem></Appear>
            <Appear><ListItem textColor="tertiary">Context</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Rendering the Children</Heading>
          <CodePane source={ThemeProvider1} lang="jsx" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">What is Context</Heading>
          <Text lineHeight={1.4}>To understand context, first lets take a look at how props are passed to children</Text>
          <Image src={images.propsPassing} width="60%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text lineHeight={1.4}>Unlike props which need to be passed down by each child. Child components can actually require the context as they need</Text>
          <Image src={images.contextPassing} width="60%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6}>Using Context</Heading>
          <CodePane source={UsingContext} lang="jsx" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Context inside the ThemeProvider</Heading>
          <CodePane source={ThemeProvider2} lang="jsx" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Comparing different paradigms</Heading>
          <Text>CSS Way in React Native</Text>
          <CodePane source={CssTheming} lang="jsx" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text>Theming Each component</Text>
          <CodePane source={ConstantThemeManager} lang="jsx" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text>React Native Elements Way</Text>
          <CodePane source={RNEThemedFinal} lang="jsx" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text>Resources</Text>
          <List>
            <ListItem>github.com/binoy14/react-native-theming</ListItem>
            <ListItem>github.com/react-native-training/react-native-elements</ListItem>
            <ListItem>Slides: binoy14.github.io/RNE-theming-slides</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
