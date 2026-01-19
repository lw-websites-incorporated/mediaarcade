'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Hero({
  image,
  imageAlt,
  heading,
  subheading,
  additionalContent,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  showScrollIndicator = true,
  overlay = true,
  minHeight = 'min-h-screen',
  showSubheading = true,
  showAdditional = true
}) {
  const heroData = {
    image: image || siteConfig.hero.image,
    imageAlt: imageAlt || siteConfig.hero.imageAlt,
    heading: heading || siteConfig.hero.heading,
    subheading: subheading || siteConfig.hero.subheading,
    additionalContent: additionalContent || siteConfig.hero.additionalContent,
    ctaText: ctaText || siteConfig.hero.ctaText,
    ctaHref: ctaHref || siteConfig.hero.ctaHref,
    secondaryCtaText: secondaryCtaText || siteConfig.hero.secondaryCtaText,
    secondaryCtaHref: secondaryCtaHref || siteConfig.hero.secondaryCtaHref,
    availabilityNote: siteConfig.hero.availabilityNote,
  };

  return (
    <section className={`relative ${minHeight} flex items-center overflow-hidden w-screen max-w-none mx-[calc(50%-50vw)]`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroData.image}
          alt={heroData.imageAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-[#8C7A6B] hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container-custom py-36">
        <div className="max-w-xl mx-auto text-center">
          {/* Accent line */}
          <div className="w-16 h-[2px] bg-white/80 mb-6 mx-auto animate-fade-in-up" />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-4 animate-fade-in-up animation-delay-100">
            {heroData.heading}
          </h1>

          {/* Subheading */}
          {showSubheading && heroData.subheading && (
            <p className="text-sm sm:text-base md:text-lg text-white/85 mb-6 animate-fade-in-up animation-delay-200">
              {heroData.subheading}
            </p>
          )}

          {/* Additional Content Paragraphs */}
          {showAdditional && heroData.additionalContent && heroData.additionalContent.length > 0 && (
            <div className="space-y-4 mb-10 animate-fade-in-up animation-delay-200">
              {heroData.additionalContent.map((paragraph, index) => (
                <p key={index} className="text-white/80 text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link
              href={heroData.ctaHref}
              className="inline-flex items-center justify-center bg-[#8C7A6B] text-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#7A695C] transition-all duration-300"
            >
              {heroData.ctaText}
            </Link>
            {heroData.secondaryCtaText && (
              <Link
                href={heroData.secondaryCtaHref}
                className="inline-flex items-center justify-center border border-white/70 text-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#111111] transition-all duration-300"
              >
                {heroData.secondaryCtaText}
              </Link>
            )}
          </div>
          {heroData.availabilityNote && (
            <p className="mt-6 text-[11px] text-white/70 tracking-[0.25em] uppercase">
              {heroData.availabilityNote}
            </p>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      )}
    </section>
  );
}
