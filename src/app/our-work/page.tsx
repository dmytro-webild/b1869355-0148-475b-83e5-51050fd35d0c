"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function WorkPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Our Work", id: "/our-work" },
        { name: "Get Involved", id: "/get-involved" },
        { name: "Partners", id: "/partners" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="One Love Initiative"
    />
  </div>

  <div id="work-project" data-section="work-project">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "s1", title: "Identify Needs", tags: ["Step 1"], imageSrc: "http://img.b2bpic.net/free-photo/supermarket-banner-with-various-items_23-2149500960.jpg" },
        { id: "s2", title: "Organize Drives", tags: ["Step 2"], imageSrc: "http://img.b2bpic.net/free-photo/empty-frame-surrounded-by-bath-products_23-2148439201.jpg" },
        { id: "s3", title: "Assemble Kits", tags: ["Step 3"], imageSrc: "http://img.b2bpic.net/free-photo/beauty-product-composition-towels_23-2147817704.jpg" },
        { id: "s4", title: "Deliver", tags: ["Step 4"], imageSrc: "http://img.b2bpic.net/free-photo/postpartum-box-still-life_23-2151174340.jpg" },
      ]}
      title="Current Project"
      description="Children's Hygiene Kit Drive, distributed via Crisis Assistance Ministry."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Work Highlights"
      description="A look at our past and ongoing projects across the city."
      features={[
        { id: "w1", title: "School Supply Drives", descriptions: ["We mobilize students to secure and distribute essential tools for academic success."], imageSrc: "http://img.b2bpic.net/free-photo/group-young-teens-celebrating-world-youth-day-by-doing-activities-together_23-2151478299.jpg?_wi=2" },
        { id: "w2", title: "Holiday Support Kits", descriptions: ["We coordinate donation efforts to provide comfort and relief during the festive season."], imageSrc: "http://img.b2bpic.net/free-photo/high-angle-people-cutting-paper_23-2149394479.jpg?_wi=2" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            { label: "About", href: "/about" },
            { label: "Our Work", href: "/our-work" },
            { label: "Partners", href: "/partners" },
          ],
        },
        {
          items: [
            { label: "Get Involved", href: "/get-involved" },
            { label: "Contact", href: "/contact" },
            { label: "Email: oneloveinitiative.official@gmail.com", href: "mailto:oneloveinitiative.official@gmail.com" },
          ],
        },
      ]}
      logoText="One Love Initiative"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}