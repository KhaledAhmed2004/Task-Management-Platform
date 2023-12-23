import Hero from "../components/hero/hero";
import DisplaySection from "../displaySection/DisplaySection";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="space-y-2">
      <Hero></Hero>
      <DisplaySection></DisplaySection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
