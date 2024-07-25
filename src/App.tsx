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
import { PrimaryButton } from "./components/primitives/PrimaryButton";
import { SecondaryButton } from "./components/primitives/SecondaryButton";
import { Navigation } from "./components/Navigation.tsx";

function App() {
  return (
    <>
      <Navigation />
      <main className="ml-72 p-12">
        <Heading1>Checking</Heading1>
      </main>
    </>
  );
}

export default App;
