"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function LandingPage() {
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

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="ONE LOVE\nINITIATIVE"
      description="A student-led movement in Charlotte—sign up today to help us reach 500 kits and make a real difference."
      buttons={[
        { text: "Join Our Team", href: "/get-involved" },
        { text: "Start Donating", href: "/get-involved" },
      ]}
      className="text-white flex flex-col items-start"
      logoClassName="text-[clamp(2.5rem,7vw,7rem)] font-bold text-white uppercase text-left pt-24 pb-12 w-full leading-[0.8] whitespace-pre-line"
      contentContainerClassName="flex flex-col flex-grow items-start"
      descriptionClassName="text-white order-1 text-left max-w-2xl"
      buttonContainerClassName="order-1 flex justify-start"
    />
  </div>

  <div id="mission-about" data-section="mission-about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Mission"
      description="Our mission is to mobilize students to create meaningful community impact through organized donation drives and essential kit assembly, supporting individuals and families experiencing hardship."
      metrics={[
        { value: "100+", title: "Kits Distributed" },
        { value: "3", title: "Student Leaders" },
        { value: "1", title: "Drives Organized" },
        { value: "1", title: "Partners" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/colleagues-studying-together-college-exam_23-2149038441.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features-what-we-do" data-section="features-what-we-do">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split-actions"
      useInvertedBackground={true}
      buttons={[
        { text: "Start a Drive", href: "/get-involved" },
        { text: "Learn More", href: "/about" }
      ]}
      features={[
        { id: "drives", title: "Donation Drives", tags: ["Organization"], imageSrc: "http://img.b2bpic.net/free-photo/group-young-teens-celebrating-world-youth-day-by-doing-activities-together_23-2151478299.jpg?_wi=1" },
        { id: "kits", title: "Kit Assembly", tags: ["Action"], imageSrc: "http://img.b2bpic.net/free-photo/high-angle-people-cutting-paper_23-2149394479.jpg?_wi=1" },
        { id: "partnerships", title: "Community Partnerships", tags: ["Collaboration"], imageSrc: "http://img.b2bpic.net/free-photo/young-activists-taking-action_23-2149502777.jpg" },
      ]}
      title="How We Create Impact"
      description="We partner with established organizations to ensure that all donations reach those who need them most."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Proud Partners"
      description="We are honored to collaborate with these organizations."
      names={["Crisis Assistance Ministry", "Local Schools", "Youth Volunteer Corps", "Community Health Hub", "Charlotte Outreach"]}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Core Values"
      description="We build our mission upon these foundational beliefs."
      features={[
        { id: "v1", title: "Empowerment", descriptions: ["We actively lead and guide our peers to drive community-wide initiatives.", "Directly creating leaders to serve Charlotte."], imageSrc: "http://img.b2bpic.net/free-photo/african-american-activist-checks-isolated-mockup-laptop_482257-91114.jpg" },
        { id: "v2", title: "Compassion", descriptions: ["We prioritize empathetic action to deliver life-changing support to neighbors in need.", "Directly alleviating daily hardships in our community."], imageSrc: "http://img.b2bpic.net/free-photo/honest-conversations-mental-health_482257-123739.jpg" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            { label: "Start Your Own Drive", href: "/get-involved" },
            { label: "Volunteer with Us", href: "/get-involved" },
          ],
        },
        {
          items: [
            { label: "Partner with Us", href: "/partners" },
            { label: "Email Us", href: "mailto:oneloveinitiative.official@gmail.com" },
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