'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#F8F6F2]">
      <div className="container-custom">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111] mb-3">
              {siteConfig.cta.heading}
            </h2>
            <p className="text-[#5B5B5B] text-lg">
              {siteConfig.cta.subheading}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Phone Button */}
            {siteConfig.contact.phone && (
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-3 border border-[#8C7A6B] text-[#8C7A6B] px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#8C7A6B] hover:text-white transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            )}

            {/* Quote Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#8C7A6B] text-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#7A695C] transition-all duration-300"
            >
              {siteConfig.cta.secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
