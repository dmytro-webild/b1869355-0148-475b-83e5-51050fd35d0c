"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TimelineHorizontalCardStack from '@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function AboutPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
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
            imageSrc="http://img.b2bpic.net/free-photo/colleagues-studying-together-college-exam_23-2149038441.jpg"
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardTen
            title="Our Leadership"
            tag="The Team"
            memberVariant="card"
            useInvertedBackground={true}
            membersAnimation="reveal-blur"
            members={[
              { id: "1", name: "Founder", imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-with-glasses_23-2148810842.jpg" },
              { id: "2", name: "Lead Organizer", imageSrc: "http://img.b2bpic.net/cheerful-woman-posing_23-2148810852.jpg" },
            ]}
          />
        </div>

        <div id="our-story" data-section="our-story">
            <TimelineHorizontalCardStack
                title="Our Story"
                description="Founded in the heart of Charlotte, O.L.I began with a simple belief: students have the power to create lasting change. We are dedicated to our ambitious goal of assembling 20,000 kits to support neighbors facing hardship."
                textboxLayout="split"
                useInvertedBackground={false}
            >
                <div className="p-8">
                    <p>O.L.I was established to bridge the gap between student service and real-world community impact. By organizing donation drives and focusing on efficient, high-volume assembly, we ensure that every contribution directly addresses local needs. Our current mission is to reach our goal of 20,000 essential kits distributed, one student-led initiative at a time.</p>
                </div>
            </TimelineHorizontalCardStack>
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