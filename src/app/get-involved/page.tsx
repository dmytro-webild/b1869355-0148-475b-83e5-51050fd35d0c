"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TextBox from '@/components/Textbox';
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
            <TextBox
              title="Why It Matters"
              description="Many families in Charlotte face daily challenges in securing basic necessities. Our initiative bridges this gap by directly providing essential goods to those in need. Every kit assembled represents tangible relief and a message of hope, strengthening our community one household at a time. Your involvement empowers us to extend our reach, ensuring that no one in our neighborhoods struggles alone."
              textboxLayout="split"
              center={false}
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