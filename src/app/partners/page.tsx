"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function PartnersPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
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

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Supporters"
      description="Local organizations that help us bridge the gap."
      names={[
        "Corporate Partners",        "Nonprofit Allies",        "Community Groups",        "Schools",        "Local Business"]}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Partner Benefits"
      description="How we provide value to our community partners."
      features={[
        {
          id: "b1",          title: "Targeted Outreach",          descriptions: [
            "Connecting with young, driven volunteers."],
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businesswomen-with-face-masks-elbow-bumping-cafe_637285-8144.jpg"},
        {
          id: "b2",          title: "Efficient Logistics",          descriptions: [
            "Well-organized supply delivery and tracking."],
          imageSrc: "http://img.b2bpic.net/free-photo/young-old-couple-besties_23-2150168952.jpg"},
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
