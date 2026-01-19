'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Camera,
  Heart,
  Users,
  Briefcase,
} from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const iconMap = {
  camera: Camera,
  heart: Heart,
  users: Users,
  briefcase: Briefcase,
};

export default function Services({ limit, showViewAll = true, showCTA = true }) {
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

  const services = limit ? siteConfig.services.items.slice(0, limit) : siteConfig.services.items;

  return (
    <section ref={sectionRef} className="section-padding bg-[#F8F6F2]">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="accent-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111] mb-4">
            {siteConfig.services.heading}
          </h2>
          {siteConfig.services.subheading && (
            <p className="text-[#5B5B5B] max-w-2xl mx-auto">
              {siteConfig.services.subheading}
            </p>
          )}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border border-[#E6E2DC] p-6">
          {services.slice(0, 4).map((service, index) => {
            const Icon = iconMap[service.icon] || Camera;
            return (
              <div
                key={service.title}
                className={`aspect-square p-6 flex flex-col justify-between transition-colors duration-200 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionProperty: 'box-shadow, opacity, transform',
                  transitionDuration: isVisible ? '200ms, 700ms, 700ms' : '700ms',
                  transitionDelay: isVisible ? '0ms' : `${index * 100}ms`
                }}
              >
                <div>
                  <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#8C7A6B]" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-[#111111] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#5B5B5B] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-[#8C7A6B] font-medium text-xs uppercase tracking-[0.18em] hover:text-[#111111] transition-colors duration-300"
                >
                  View work
                </Link>
              </div>
            );
          })}
        </div>
        {services.length > 4 && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(4).map((service, index) => {
              const Icon = iconMap[service.icon] || Camera;
              return (
                <div
                  key={service.title}
                  className={`aspect-square p-6 flex flex-col justify-between border border-[#E6E2DC] transition-colors duration-200 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionProperty: 'box-shadow, opacity, transform',
                    transitionDuration: isVisible ? '200ms, 700ms, 700ms' : '700ms',
                    transitionDelay: isVisible ? '0ms' : `${(index + 4) * 100}ms`
                  }}
                >
                  <div>
                    <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#8C7A6B]" />
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-[#111111] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#5B5B5B] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-[#8C7A6B] font-medium text-xs uppercase tracking-[0.18em] hover:text-[#111111] transition-colors duration-300"
                  >
                    View work
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA Button */}
        {showCTA && (
          <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#8C7A6B] text-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#7A695C] transition-all duration-300"
            >
              Enquire
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
