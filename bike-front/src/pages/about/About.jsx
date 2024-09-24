import BrandCarousel from "../../UI/brandCarousel/BrandCarousel";
import PagesTitle from "../../components/pagesTitle/PagesTitle";

import titleBgImage from "../../assets/img/titlesBg/about.png";
import SectionContact from "./sectionContact/SectionContact";
import SectionMain from "./sectionMain/SectionMain";
import SectionGalery from "./sectionGalery/SectionGalery";

const About = () => {
  return (
    <>
      <PagesTitle img={titleBgImage} pageName="About Us" />
      <SectionMain />
      <SectionGalery />
      <SectionContact />
      <BrandCarousel />
    </>
  );
};

export default About;
