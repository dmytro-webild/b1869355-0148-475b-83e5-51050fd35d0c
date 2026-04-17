"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
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
          name: "Home",          id: "/"},
        {
          name: "About",          id: "/about"},
        {
          name: "Our Work",          id: "/our-work"},
        {
          name: "Get Involved",          id: "/get-involved"},
        {
          name: "Partners",          id: "/partners"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="One Love Initiative"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="One Love Initiative"
      description="Help us reach 500 kits by joining our student-led movement in Charlotte—sign up today to make a difference."
      tag="Students Serving Community"
      buttons={[
        {
          text: "Sign Up to Volunteer",          href: "/get-involved"},
        {
          text: "Donate Items",          href: "/get-involved"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-people-working-donations-distribution-center_259150-57368.jpg?_wi=1"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/lots-cheerful-volunteers-preparing-boxes-with-food-donations_23-2148732713.jpg",          alt: "Volunteer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/people-doing-charity-work-together_23-2148687310.jpg",          alt: "Volunteer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-people-with-donations_23-2149142768.jpg",          alt: "Volunteer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/group-different-people-volunteering-foodbank-poor-people_23-2149012208.jpg",          alt: "Volunteer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/african-american-activist-checks-isolated-mockup-laptop_482257-91114.jpg",          alt: "Volunteer 5"},
      ]}
    />
  </div>

  <div id="mission-about" data-section="mission-about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Mission"
      description="Our mission is to mobilize students to create meaningful community impact through organized donation drives and essential kit assembly, supporting individuals and families experiencing hardship."
      metrics={[
        {
          value: "100+",          title: "Kits Distributed"},
        {
          value: "3",          title: "Student Leaders"},
        {
          value: "1",          title: "Drives Organized"},
        {
          value: "1",          title: "Partners"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/colleagues-studying-together-college-exam_23-2149038441.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features-what-we-do" data-section="features-what-we-do">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "drives",          title: "Donation Drives",          tags: [
            "Organization"],
          imageSrc: "http://img.b2bpic.net/free-photo/group-young-teens-celebrating-world-youth-day-by-doing-activities-together_23-2151478299.jpg?_wi=1"},
        {
          id: "kits",          title: "Kit Assembly",          tags: [
            "Action"],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-people-cutting-paper_23-2149394479.jpg?_wi=1"},
        {
          id: "partnerships",          title: "Community Partnerships",          tags: [
            "Collaboration"],
          imageSrc: "http://img.b2bpic.net/free-photo/young-activists-taking-action_23-2149502777.jpg"},
      ]}
      title="What We Do"
      description="We partner with established organizations to ensure that all donations reach those who need them most."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Proud Partners"
      description="We are honored to collaborate with these organizations."
      names={[
        "Crisis Assistance Ministry",        "Local Schools",        "Youth Volunteer Corps",        "Community Health Hub",        "Charlotte Outreach"]}
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
        {
          id: "v1",          title: "Empowerment",          descriptions: [
            "Cultivating leadership skills in every volunteer to spark tangible, community-wide progress."],
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-activist-checks-isolated-mockup-laptop_482257-91114.jpg"},
        {
          id: "v2",          title: "Compassion",          descriptions: [
            "Providing essential care with dignity, ensuring every recipient feels seen, valued, and supported."],
          imageSrc: "http://img.b2bpic.net/free-photo/honest-conversations-mental-health_482257-123739.jpg"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",              href: "/about"},
            {
              label: "Our Work",              href: "/our-work"},
            {
              label: "Partners",              href: "/partners"},
          ],
        },
        {
          items: [
            {
              label: "Get Involved",              href: "/get-involved"},
            {
              label: "Contact",              href: "/contact"},
            {
              label: "Email: oneloveinitiative.official@gmail.com",              href: "mailto:oneloveinitiative.official@gmail.com"},
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