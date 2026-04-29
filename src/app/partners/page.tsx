"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MediaAbout from '@/components/sections/about/MediaAbout';
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
          <MediaAbout
            title="Become a Partner"
            description="We are always seeking passionate partners to join our mission of serving the Charlotte community. Whether you are a local school, business, or nonprofit organization, your support helps us expand our reach and deliver more O.L.I Kits to those in need. Contact us today to explore partnership opportunities and discuss how we can work together to create meaningful change."
            buttons={[
              { text: "Email Us", href: "mailto:oneloveinitiative.official@gmail.com" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/handshake-business-partners_23-2148777977.jpg"
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