import React from "react";
import "./App.css";
import Button from "./components/Button";
import { siteData } from "./content/siteData";
import ServicesSection from "./content/Services";
import ContactSection from "./content/contact";
import TestimonialsSection from "./content/Testimonials";
import GeometricShapes from "./layouts/GeometricShapes";
import StatsCard from "./components/cards/StatsCard";
import IconListItem from "./components/IconListItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Play,
  TrendingUp,
  Globe,
  ArrowRight,
  MapPin,
} from "lucide-react";

const RoonyMarketingWebsite = () => {
  // Statistics
  const stats = [
    {
      number: "100+",
      label: "Happy Clients",
      color: "pink-600",
    },
    {
      number: "250%",
      label: "Avg Growth",
      color: "cyan-600",
    },
    {
      number: "5+",
      label: "Years Experience",
      color: "yellow-600",
    },
  ];

  // Company Features
  const companyFeatures = [
    {
      icon: <MapPin className="w-5 h-5 text-orange-500" />,
      text: `Based in ${siteData.location.split(", ")[0]}`,
      color: "orange-500",
    },
    {
      icon: <Globe className="w-5 h-5 text-cyan-500" />,
      text: "Serving Clients Worldwide",
      color: "cyan-500",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-pink-500" />,
      text: "Results-Driven Approach",
      color: "pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 text-gray-900 overflow-hidden">
      {/* Navigation */}
      <Header/>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
      >
        {/* Bold Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500"></div>

        {/* Geometric Shapes */}
        <GeometricShapes />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wide leading-tight">
              <span className="text-white">{siteData.companyName}</span>
              <br />
              <span className="text-yellow-400 text-4xl md:text-6xl">
                MARKETING SERVICES
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
              {siteData.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                variant="primary"
                icon={<ArrowRight className="w-6 h-6" />}
                href={"#contact"}
              >
                Get Started Today
              </Button>
              <Button variant="secondary" href={"#about"} icon={<Play className="w-6 h-6" />}>
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 relative bg-gradient-to-r from-yellow-50 to-orange-50"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-200/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-orange-200/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase">
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  About
                </span>
                <span className="text-gray-800"> Roony</span>
              </h2>

              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Hi, I'm{" "}
                  <span className="text-yellow-600 font-semibold">
                    {siteData.ownerName}
                  </span>
                  , founder of {siteData.fullName}. Based in{" "}
                  {siteData.location.split(", ")[0]}, I'm passionate about
                  helping businesses thrive in the digital landscape.
                </p>
                <p>
                  With years of experience in digital marketing, I specialize in
                  creating data-driven strategies that connect brands with their
                  ideal audience. From compelling content creation to
                  high-converting ad campaigns, I'm here to amplify your digital
                  presence.
                </p>
                <p>
                  My mission is simple: deliver measurable results that grow
                  your business and exceed your expectations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((s, i) => (
                  <StatsCard key={i} {...s} />
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="space-y-4">
                  {companyFeatures.map((feature, index) => (
                    <IconListItem
                      key={index}
                      icon={feature.icon}
                      text={feature.text}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 rounded-2xl blur-xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RoonyMarketingWebsite;
