"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';

export default function AboutPage() {
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

  <div id="mission-about" data-section="mission-about">
    <MetricSplitMediaAbout
      title="About Us"
      description="Growing our impact through dedicated student leadership and community engagement."
      metrics={[
        { value: "Kits", title: "5 kits made so far" },
        { value: "Goal", title: "20k kits made before August" },
        { value: "50+", title: "Projects Completed" }
      ]}
      useInvertedBackground={false}
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="team-about" data-section="team-about">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "leadership",          groupTitle: "Core Team",          members: [
            {
              id: "p1",              title: "Prithivi Vijayakumar",              subtitle: "Founder",              detail: "Leading our vision and community outreach efforts.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CVGRsuLN3NPMvFNLJFfLVtvasC/uploaded-1777337470803-6imjhqw9.jpg"},
            {
              id: "p2",              title: "Saket Talap",              subtitle: "Director of Operations",              detail: "Coordinating drive logistics and kit assembly.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CVGRsuLN3NPMvFNLJFfLVtvasC/uploaded-1777337502647-omsuf8ab.jpg"},
            {
              id: "p3",              title: "Rishi Ramesh",              subtitle: "Marketing Director",              detail: "Spreading awareness to schools and students.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CVGRsuLN3NPMvFNLJFfLVtvasC/uploaded-1777337524276-hnftjd3k.jpg"},
          ],
        },
      ]}
      title="Our Team"
      description="Student leaders dedicated to community impact."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Approach"
      description="We prioritize efficiency and empathy in all our efforts."
      features={[
        { id: "a1", title: "Strategic Planning", descriptions: ["We prioritize data-driven analysis to pinpoint and meet the direct needs of families in crisis."], imageSrc: "http://img.b2bpic.net/free-photo/young-activists-taking-action_23-2149502778.jpg?_wi=2" },
        { id: "a2", title: "Collaborative Action", descriptions: ["We mobilize students in a collective effort to streamline distribution and maximize immediate assistance."], imageSrc: "http://img.b2bpic.net/free-photo/cheerful-group-multiethnic-students-studying-outdoors_171337-11764.jpg?_wi=2" },
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