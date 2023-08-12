import React from "react";

import Herosec from "../components/heroban";
import Secsec from "../components/updateseccont";
import Whatwe from "../components/whatwedo";
import Cardropdown from "../components/career-dropdown";
import Careersec from "../components/careersec";
import Whysec from "../components/whysec";
import Getstart from "../components/getstart";
import Footer from "../components/footer";
import Layout from "../../src/helpers/Layout";
import Internsec from "../components/internsec";
const page = () => {
  return (
    <div>
      <Layout>
        <Herosec />
        <Secsec />
        <Whatwe />
        <Cardropdown />
        {/* <Careersec /> */}
        <Internsec />
        <Whysec />
        <Getstart />
      </Layout>
    </div>
  );
};

export default page;
