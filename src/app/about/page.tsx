import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise Page",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Advertise"
        description=""
      /> */}
      <AboutSectionOne />
      
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
