'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import ContactForm from './ContactForm';

export default function ContactPreview() {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111] mb-4">
              {siteConfig.contact.heading}
            </h2>
            <p className="text-[#5B5B5B] mb-8">
              {siteConfig.contact.subheading}
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {siteConfig.contact.phone && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Phone</h4>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="text-[#111111] hover:underline text-lg font-medium"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {siteConfig.contact.email && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Email</h4>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#111111] hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5F3EF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#111111] mb-1">Service Area</h4>
                  <p className="text-[#5B5B5B]">{siteConfig.contact.serviceArea}</p>
                </div>
              </div>
            </div>

            {/* View Full Contact Page Link */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 text-[#111111] font-medium hover:gap-3 transition-all duration-300"
            >
              View full contact details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
