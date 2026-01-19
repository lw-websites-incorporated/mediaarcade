'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import PricingPackages from '@/components/pricing/Pricing_2';
import { siteConfig } from '@/config/siteConfig';

export default function ServicesPage() {
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
        title={siteConfig.servicesPage.heading}
        subtitle={siteConfig.servicesPage.intro}
        image="/img/Wedding/wedding2.jpg"
        imageAlt="Wedding photography in golden light"
      />

      {/* Main Services Grid */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111]">
              Service overview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {siteConfig.servicesPage.mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white overflow-hidden transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-playfair font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#5B5B5B] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.useCases?.length > 0 && (
                    <ul className="text-[#5B5B5B] text-sm space-y-2 mb-5">
                      {service.useCases.map((useCase) => (
                        <li key={useCase}>{useCase}</li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-[#8C7A6B] font-medium text-xs uppercase tracking-[0.18em] hover:text-[#111111] transition-colors duration-300"
                  >
                    View work
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingPackages />

      {siteConfig.servicesPage.additionalServices?.length > 0 && (
        <section className="section-padding bg-[#E6E2DC]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="accent-line-center mb-6" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111] mb-4">
                Additional Sessions
              </h2>
              <p className="text-[#5B5B5B] max-w-2xl mx-auto">
                Tailored coverage for briefs outside the core services.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {siteConfig.servicesPage.additionalServices.map((service) => (
                <span
                  key={service}
                  className="bg-white px-5 py-3 rounded-full text-[#111111] font-medium shadow-sm hover:shadow-md hover:bg-[#111111] hover:text-white transition-all duration-300 cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  );
}
