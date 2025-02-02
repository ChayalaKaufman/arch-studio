import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import Leaders from "../components/Leaders";
import OurHeritage from "../components/OurHeritage";
import OverlappingHero from "../components/OverlappingHero";

export default function AboutPage() {
  return (
    <Layout>
      <SideText>About Us</SideText>
      <OverlappingHero
        imageName="image-hero.jpg"
        page="about"
        subHeaderText="Your team of professionals"
        paragraphText="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
      />

      <OurHeritage />
      <Leaders />
    </Layout>
  );
}
