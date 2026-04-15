import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import StickyServices from "../components/StickyServices";
import SocialProof from "../components/SocialProof";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";

export default function Home({ colors, dark }) {
  return (
    <>
      <Hero colors={colors} />
      <Marquee colors={colors} />
      <StickyServices colors={colors} />
      <SocialProof colors={colors} />
      <HowItWorks colors={colors} />
      <CallToAction colors={colors} dark={dark} />
    </>
  );
}
