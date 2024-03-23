import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact Page"
        description=""
      /> */}

      <Contact />
      <div className="bg-[#111111] py-20">
  <div className="text-left pl-40">
 
    <p className="font-normal text-3xl text-white leading-[30px] m-0" style={{ fontFamily: 'Gotham' }}>
      This is a statement
    </p>
    <p className="font-semibold text-3xl leading-[44px] underline m-0" style={{ color: '#FFBA08', fontFamily: 'Gotham Black' }}>
      Market Your Brand with Us.
    </p>
   
  </div>
</div>

    </>
  );
};

export default ContactPage;
