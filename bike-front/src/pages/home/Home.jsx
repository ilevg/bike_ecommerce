import React from "react";

import SectionBanner from "./modules/sectionBanner/SectionBanner";
import SectionBlogLinks from "./modules/sectionBlogLinks/SectionBlogLinks";
import SectionSlider from "./modules/sectionSlider/SectionSlider";
import SectionCatalog from "./modules/sectionCatalog/SectionCatalog";
import SectionBenefits from "./modules/sectionBenefits/SectionBenefits";
import SectionEuqip from "./modules/sectionEuqip/SectionEuqip";
import SectionMountain from "./modules/sectionMountain/SectionMountain";
import SectionDetails from "./modules/sectionDetails/SectionDetails";
import SectionContact from "./modules/sectionContact/SectionContact";

const Home = () => {
  return (
    <>
      <SectionBanner />
      <SectionBlogLinks />
      <SectionSlider />
      <SectionCatalog />
      <SectionBenefits />
      <SectionEuqip />
      <SectionMountain />
      <SectionDetails />
      <SectionContact />
    </>
  );
};

export default Home;
