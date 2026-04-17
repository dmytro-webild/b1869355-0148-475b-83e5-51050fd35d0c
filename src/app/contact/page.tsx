"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import ContactSplit from '@/components/sections/contact/ContactSplit';
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

  <div id="contact-form" data-section="contact-form">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Contact Us"
      description="Email us at oneloveinitiative.official@gmail.com or send us a message directly."
      buttons={[
        {
          text: "Send Email",
          href: "mailto:oneloveinitiative.official@gmail.com",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Need Help?"
      title="Direct Assistance"
      description="If you represent an organization or need specific support, contact us directly."
      imageSrc="http://img.b2bpic.net/free-photo/disabled-man-wheelchair-working-his-office-job_23-2149571089.jpg"
      mediaAnimation="slide-up"
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
