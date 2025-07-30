import React from "react";
import Logo from "./Logo";
import { siteData } from "../content/siteData";
// import MenuSection from "./MenuSection";

// const footerLinks = {
//   services: [
//     { label: "Content Creation", color: "pink-600" },
//     { label: "Social Media Management", color: "cyan-600" },
//     { label: "Facebook Ads", color: "yellow-600" },
//     { label: "CRM Management", color: "purple-600" },
//   ],
//   company: [
//     { label: "About Us", color: "pink-600" },
//     { label: "Our Process", color: "cyan-600" },
//     { label: "Case Studies", color: "yellow-600" },
//     { label: "Contact", color: "purple-600" },
//   ],
//   social: [
//     { label: "LinkedIn", color: "pink-600" },
//     { label: "Facebook", color: "cyan-600" },
//     { label: "Instagram", color: "yellow-600" },
//     { label: "Twitter", color: "purple-600" },
//   ],
// };

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-12 shadow-lg">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* <div className="grid md:grid-cols-4 gap-8"> */}
        <div className="space-y-4 mx-auto flex flex-col items-center text-center">
          <Logo className="w-30 h-30" />
          <p className="text-gray-600">{siteData.description}</p>
        </div>

        {/* <MenuSection label="Services" items={footerLinks.services} />
        <MenuSection label="Company"  items={footerLinks.company} />
        <MenuSection label="Connect"  items={footerLinks.social} /> */}
      {/* </div> */}

      <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} {siteData.fullName}. All rights reserved. Built by <a href="https://griffinswebservices.com" className="text-blue-600 hover:underline">Griffin's Web Services</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
