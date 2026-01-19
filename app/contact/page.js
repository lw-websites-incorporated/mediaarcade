'use client';

import { useEffect, useRef, useState } from 'react';
import PageHero from '@/components/hero/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function ContactPage() {
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
        title={siteConfig.contact.heading}
        subtitle={siteConfig.contact.subheading}
        image="/img/Nature/nature4.jpg"
        imageAlt="Photography enquiry"
      />

      {/* Contact Content */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Main Contact */}
              <div className="mb-8">
                <div className="accent-line mb-6" />
                <h2 className="text-2xl font-playfair font-bold text-[#111111] mb-6">
                  Enquiry Details
                </h2>

                <div className="space-y-6">
                  {siteConfig.contact.phone && (
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-[#111111] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#000000] transition-colors">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#5B5B5B] mb-1">Phone</p>
                        <p className="text-lg font-semibold text-[#111111] group-hover:text-[#111111] transition-colors">
                          {siteConfig.contact.phone}
                        </p>
                      </div>
                    </a>
                  )}

                  {siteConfig.contact.email && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-[#111111] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#000000] transition-colors">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#5B5B5B] mb-1">Email</p>
                        <p className="font-semibold text-[#111111] group-hover:text-[#111111] transition-colors">
                          {siteConfig.contact.email}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Locations */}
              {siteConfig.contact.locations?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-playfair font-bold text-[#111111] mb-4">
                    Locations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {siteConfig.contact.locations.map((location) => (
                      <div key={location.name} className="bg-[#E6E2DC] rounded-lg p-5">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#111111] flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-[#111111] mb-1">{location.name}</h4>
                            <p className="text-sm text-[#5B5B5B]">{location.address}</p>
                            <p className="text-sm text-[#5B5B5B]">{location.city}</p>
                            {location.phone && (
                              <a
                                href={`tel:${location.phone.replace(/\s/g, '')}`}
                                className="text-sm font-medium text-[#111111] hover:text-[#111111] transition-colors mt-2 inline-block"
                              >
                                {location.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Opening Hours */}
              {siteConfig.contact.hours?.length > 0 && (
                <div className="bg-[#F5F3EF] rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[#111111]" />
                    <h3 className="text-xl font-playfair font-bold text-[#111111]">
                      Studio Hours
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {siteConfig.contact.hours.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span className="text-[#5B5B5B]">{item.day}</span>
                        <span className="font-medium text-[#111111]">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
