"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import SplitAbout from '@/components/sections/about/SplitAbout';

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
           <SplitAbout
             title="Why It Matters"
             description="Every kit assembled and every drive hosted represents a tangible step toward community stability. By engaging students, we create a ripple effect of compassion that strengthens the foundation of our neighborhoods."
             imageSrc="http://img.b2bpic.net/free-photo/close-up-hands-putting-donations-box_23-2148784865.jpg"
             textboxLayout="split-description"
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