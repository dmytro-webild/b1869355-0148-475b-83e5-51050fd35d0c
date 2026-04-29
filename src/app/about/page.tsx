"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

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
              { name: "Donate", id: "https://donate.stripe.com/3cIcMY53Y81g7MK0hl0kE00" },
            ]}
            brandName="One Love Initiative"
          />
        </div>

        <div id="mission-about" data-section="mission-about">
          <MetricSplitMediaAbout
            useInvertedBackground={false}
            title="Our Mission"
            description="Our mission is to mobilize students to create meaningful community impact through organized donation drives and essential kit assembly, supporting individuals and families experiencing hardship."
            metrics={[
              { value: "3", title: "Active Volunteers" },
              { value: "4", title: "Team Members" },
              { value: "1", title: "Drives Organized" },
              { value: "1", title: "Partners" },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/colleagues-studying-together-college-exam_23-2149038441.jpg?_wi=1"
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
          />
        </div>

        <div id="team-section" data-section="team-section">
           {/* Placeholder for existing team component as per constraints */}
        </div>

        <div id="our-story" data-section="our-story">
            <FeatureCardTwentySeven 
                animationType="slide-up"
                textboxLayout="default"
                useInvertedBackground={true}
                title="Our Story"
                description="Founded with the simple belief that students have the power to change their community, the One Love Initiative began in Charlotte to address local hardships directly. We are driven by the ambitious goal of distributing 20,000 kits to individuals in need, building a sustainable network of student volunteers and community partners one drive at a time."
                features={[]}
            />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Start Your Own Drive", href: "/get-involved" },
                  { label: "Volunteer with Us", href: "/get-involved" },
                  { label: "Donate", href: "https://donate.stripe.com/3cIcMY53Y81g7MK0hl0kE00" },
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