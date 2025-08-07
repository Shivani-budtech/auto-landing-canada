import React from 'react';
import LandingHomeTop from "./LandingHomeTop/index.tsx";
import LandingWaysToBuy from "./LandingWaysToBuy/index.tsx";
import LookingFor from "./LookingFor/index.tsx";
import LandingBottomBanner from "./LandingBottomBanner/index.tsx";
import LandingStepsToFollow from "./LandingStepsToFollow/index.tsx";
import LandingTrusted from "./LandingTrusted/index.tsx";
import LandingDifferentWork from "./LandingDifferentWork/index.tsx";

function Home() {
  return (
    <div>
        <LandingHomeTop />
        <LandingWaysToBuy />
        <LookingFor />
        <LandingStepsToFollow />
        <LandingTrusted />
        <LandingDifferentWork />
        <LandingBottomBanner />
    </div>
  );
}

export default Home;
