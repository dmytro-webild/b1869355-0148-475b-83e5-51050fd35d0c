"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';

export default function LandingPage() {
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
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Our Work",
          id: "/our-work",
        },
        {
          name: "Get Involved",
          id: "/get-involved",
        },
        {
          name: "Partners",
          id: "/partners",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="One Love Initiative"
    />
  </div>

  <div id="team-about" data-section="team-about">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "leadership",
          groupTitle: "Core Team",
          members: [
            {
              id: "p1",
              title: "Prithivi Vijayakumar",
              subtitle: "Founder",
              detail: "Leading our vision and community outreach efforts.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-activists-taking-action_23-2149502778.jpg?_wi=1",
            },
            {
              id: "p2",
              title: "Operations Lead",
              subtitle: "Director of Operations",
              detail: "Coordinating drive logistics and kit assembly.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-activists-taking-action_23-2149502783.jpg",
            },
            {
              id: "p3",
              title: "Marketing Lead",
              subtitle: "Marketing Director",
              detail: "Spreading awareness to schools and students.",
              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-group-multiethnic-students-studying-outdoors_171337-11764.jpg?_wi=1",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-people-working-donations-distribution-center_259150-57368.jpg?_wi=2",
          imageAlt: "Young activists taking action",
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
        {
          id: "a1",
          title: "Strategic Planning",
          descriptions: [
            "Targeting the specific needs of families in crisis.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-activists-taking-action_23-2149502778.jpg?_wi=2",
        },
        {
          id: "a2",
          title: "Collaborative Action",
          descriptions: [
            "Working as a collective to maximize the impact of every donation.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-group-multiethnic-students-studying-outdoors_171337-11764.jpg?_wi=2",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Our Work",
              href: "/our-work",
            },
            {
              label: "Partners",
              href: "/partners",
            },
          ],
        },
        {
          items: [
            {
              label: "Get Involved",
              href: "/get-involved",
            },
            {
              label: "Contact",
              href: "/contact",
            },
            {
              label: "Email: oneloveinitiative.official@gmail.com",
              href: "mailto:oneloveinitiative.official@gmail.com",
            },
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
