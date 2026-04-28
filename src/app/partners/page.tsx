"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function PartnersPage() {
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

        <div id="become-a-partner" data-section="become-a-partner">
          <ContactCTA
            tag="Partnership"
            title="Become a Partner"
            description="We are always looking to collaborate with local organizations, schools, and businesses to expand our impact. By partnering with us, you can help us reach more families in need and provide essential support across Charlotte. Contact us today to discuss how we can work together."
            buttons={[{ text: "Email Us", href: "mailto:oneloveinitiative.official@gmail.com" }]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
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