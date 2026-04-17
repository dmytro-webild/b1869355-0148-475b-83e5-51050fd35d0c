"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

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

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Join Us"
      title="Become a Volunteer"
      description="Sign up today to help with our next assembly event."
      imageSrc="http://img.b2bpic.net/free-photo/lots-cheerful-volunteers-preparing-boxes-with-food-donations_23-2148732713.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Ways to Give"
      description="Your support is the backbone of our success."
      features={[
        {
          id: "g1",
          title: "Host a Drive",
          descriptions: [
            "Become a site coordinator at your own school.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/people-doing-charity-work-together_23-2148687310.jpg",
        },
        {
          id: "g2",
          title: "Donate Supplies",
          descriptions: [
            "View our wishlist to see what we need right now.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-with-donations_23-2149142768.jpg",
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
