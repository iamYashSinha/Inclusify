import React from "react"; // Import React
import Hero from "../components/common/sections/Hero"; // Correct the import path for Hero
import LandingLayout from "../components/common/layouts/LandingLayouts"; // Correct the import path for LandingLayout

export default function Landing() {
  const imageURL =
    "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <LandingLayout>
      <Hero
        title="Build this rad landing page from scratch"
        subtitle="This is the subheader section where you describe the basic benefits of your product"
        image={imageURL}
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}
