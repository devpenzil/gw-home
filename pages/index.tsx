import type { NextPage } from "next";
import HeroSpotlight from "../components/herospotlight/HeroSpotlight";
import TitleComponent from "../components/titleelement/TitleComponent";

const Home: NextPage = () => {
  return (
    <div>
      <TitleComponent title="Home" />
      <HeroSpotlight />
    </div>
  );
};

export default Home;
