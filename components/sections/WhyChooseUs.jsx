'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="accent-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111] mb-4">
            {siteConfig.whyChooseUs.heading}
          </h2>
          {siteConfig.whyChooseUs.subheading && (
            <p className="text-[#5B5B5B] max-w-2xl mx-auto">
              {siteConfig.whyChooseUs.subheading}
            </p>
          )}
        </div>

        {/* Features List */}
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-5 text-[#5B5B5B]">
            {siteConfig.whyChooseUs.items.map((item, index) => (
              <li
                key={item.title}
                className={`transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="text-[#111111] font-medium">{item.title}</span>
                <span className="text-[#5B5B5B]"> - {item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
