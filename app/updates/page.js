'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { Instagram, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

// Placeholder Instagram-style images
const placeholderImages = [
  '/img/Wedding/wedding1.jpg',
  '/img/Wedding/wedding2.jpg',
  '/img/Wedding/wedding3.jpg',
  '/img/Wedding/wedding4.jpg',
  '/img/Wedding/wedding%205.jpg',
  '/img/Nature/nature1.jpg',
  '/img/Nature/nature2.jpg',
  '/img/Nature/nature3.jpg',
  '/img/House/house1.jpg',
];

export default function UpdatesPage() {
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
        title={siteConfig.updates.heading}
        subtitle={siteConfig.updates.intro}
        image="/img/Nature/nature5.jpg"
        imageAlt="Photography updates"
      />

      {/* Instagram Feed Section */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-[#111111]" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111]">
                Follow Us on Instagram
              </h2>
            </div>
            <p className="text-[#5B5B5B] max-w-2xl mx-auto">
              Stay up to date with recent shoots, edits, and behind-the-scenes moments.
            </p>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {placeholderImages.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/80 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {siteConfig.updates.instagramUrl && siteConfig.updates.instagramHandle && (
            <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href={siteConfig.updates.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#8C7A6B] text-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#7A695C] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                Follow {siteConfig.updates.instagramHandle}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
