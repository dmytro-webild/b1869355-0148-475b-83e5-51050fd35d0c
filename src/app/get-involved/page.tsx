"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function GetInvolvedPage() {
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

        <div id="why-it-matters" data-section="why-it-matters">
          <FeatureCardTwentySeven
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            title="Why It Matters"
            description="In Charlotte, thousands of families face daily challenges meeting basic needs. Our initiative focuses on bridging this gap by providing essential kits that offer immediate support and hope. By working together, we ensure that no one in our community has to struggle alone."
            features={[]}
            className="py-24"
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