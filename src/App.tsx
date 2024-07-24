import "./App.css";
import { Heading1 } from "./components/typography/Heading1";
import { Heading2 } from "./components/typography/Heading2";
import { Heading3 } from "./components/typography/Heading3";
import { Heading4 } from "./components/typography/Heading4";
import { BodyText } from "./components/typography/BodyText";
import { LeadText } from "./components/typography/LeadText";
import { LargeText } from "./components/typography/LargeText";
import { SmallText } from "./components/typography/SmallText";
import { MutedText } from "./components/typography/MutedText";
import { ListText } from "./components/typography/ListText";
import { LinkText } from "./components/typography/LinkText";
import { PrimaryButton } from "./components/PrimaryButton";
import { SecondaryButton } from "./components/SecondaryButton";

function App() {
  return (
    <>
      <PrimaryButton>Get started</PrimaryButton>
      <SecondaryButton>Cancel</SecondaryButton>
      <Heading1>Heading 1: Taxing Laughter: The Joke Tax Chronicles</Heading1>
      <Heading2>Heading 2: The People of the Kingdom</Heading2>
      <Heading3>Heading 3: The Joke Tax</Heading3>
      <Heading4>Heading 4: People stopped telling jokes</Heading4>
      <BodyText>
        Body: The king, seeing how much happier his subjects were, realized the
        error of his ways and repealed the joke tax.
      </BodyText>
      <LeadText>
        Lead: A modal dialog that interrupts the user with important content and
        expects a response.
      </LeadText>
      <LargeText>Large: Are you sure absolutely sure?</LargeText>
      <SmallText>Small: Email address</SmallText>
      <MutedText>Muted: Enter your email address.</MutedText>
      <ul>
        <ListText>1st level of puns: 5 gold coins</ListText>
        <ListText>2nd level of jokes: 10 gold coins</ListText>
        <ListText>3rd level of one-liners: 20 gold coins</ListText>
      </ul>
      <LinkText>https://launchschool.com/</LinkText>
    </>
  );
}

export default App;
