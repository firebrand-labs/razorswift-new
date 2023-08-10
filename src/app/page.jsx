import React from "react";
import Navbar from "../components/navbar";
import Herosec from "../components/heroban";
import Secsec from "../components/updateseccont";
import Whatwe from "../components/whatwedo";
import Careersec from "../components/careersec";
import Whysec from "../components/whysec";
import Getstart from "../components/getstart";
import Footer from "../components/footer";
import Internsec from "../components/internsec";
const page = () => {
  return (
    <div>
      <Navbar />
      <Herosec />
      <Secsec />
      <Whatwe />
      <Careersec />
      <Internsec />
      <Whysec />
      <Getstart />
      <Footer />
    </div>
  );
};

export default page;
