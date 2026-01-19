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
          {/* Contact Form - Full Width */}
          <div className={`w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
