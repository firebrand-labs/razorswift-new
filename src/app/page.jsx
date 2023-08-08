import React from "react";
import Navbar from "../components/navbar";
import Herosec from "../components/heroban";
import Secsec from "../components/updateseccont";
import Whatwe from "../components/whatwedo";
import Careersec from "../components/careersec";
import Whysec from "../components/whysec";
const page = () => {
  return (
    <div>
      <Navbar />
      <Herosec />
      <Secsec />
      <Whatwe />
      <Careersec />
      <Whysec />
    </div>
  );
};

export default page;
