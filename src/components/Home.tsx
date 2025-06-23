import React from 'react';
import HomeTop from "./HomeTop/index.tsx";
import WaysToBuy from "./WaysToBuy/index.tsx";
import LookingFor from "./LookingFor/index.tsx";
import WhyChoose from "./WhyChoose/index.tsx";
import Testimonials from "./Testimonials/index.tsx";
import Faq from "./Faqs/index.tsx";
import BottomBanner from "./BottomBanner/index.tsx";

function Home() {
  return (
    <div>
        <HomeTop />
        <WaysToBuy />
        <LookingFor />
        <WhyChoose />
        <Testimonials />
        <Faq />
        <BottomBanner />
    </div>
  );
}

export default Home;
