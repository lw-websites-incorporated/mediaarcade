'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#F5F3EF]">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Accent line */}
          <div className="accent-line-center mb-6" />

          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#111111] mb-8">
            {siteConfig.welcome.heading}
          </h2>
          {siteConfig.welcome.content && (
            <p className="text-[#5B5B5B] mb-8">
              {siteConfig.welcome.content}
            </p>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#8C7A6B] text-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#7A695C] transition-all duration-300"
          >
            Enquire now
          </Link>
        </div>
      </div>
    </section>
  );
}
