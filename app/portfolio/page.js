'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { siteConfig } from '@/config/siteConfig';

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        title={siteConfig.portfolio.heading}
        subtitle={siteConfig.portfolio.intro}
        image="/img/Wedding/wedding1.jpg"
        imageAlt="Wedding photography portfolio"
      />

      {/* Portfolio Categories */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111] mb-4">
              Browse by Category
            </h2>
            <p className="text-[#5B5B5B] max-w-2xl mx-auto">
              Explore galleries by type to find the mood and style that fits you.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {siteConfig.portfolio.categories.map((category, index) => (
              <div
                key={category.slug}
                className={`group relative aspect-[4/3] overflow-hidden cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-playfair font-bold text-white mb-2 group-hover:translate-y-0 transition-transform duration-300">
                    {category.title}
                  </h3>
                  <div className="text-white/80 text-xs uppercase tracking-[0.18em]">
                    View Gallery
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-[#5B5B5B] mb-6">
              Planning a shoot? Let’s create something beautiful.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#8C7A6B] text-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#7A695C] transition-all duration-300"
            >
              Enquire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
