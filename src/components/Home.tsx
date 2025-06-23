import React, { lazy, Suspense } from 'react';
import HomeTop from "./HomeTop/index.tsx";

const WaysToBuy = lazy(() => import("./WaysToBuy/index.tsx"));
const LookingFor = lazy(() => import("./LookingFor/index.tsx"));
const WhyChoose = lazy(() => import("./WhyChoose/index.tsx"));
const Testimonials = lazy(() => import("./Testimonials/index.tsx"));
const Faq = lazy(() => import("./Faqs/index.tsx"));
const BottomBanner = lazy(() => import("./BottomBanner/index.tsx"));

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
