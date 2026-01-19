'use client';

import { useEffect, useRef, useState } from 'react';
import PageHero from '@/components/hero/PageHero';
import Link from 'next/link';
import { Quote, Star, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function TestimonialsPage() {
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
        title={siteConfig.testimonials.heading}
        subtitle={siteConfig.testimonials.subheading}
        image="/img/Wedding/wedding3.jpg"
        imageAlt="Portrait session testimonial"
      />

      {/* Testimonials Section */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#5B5B5B] max-w-2xl mx-auto">
              References are available on request.
            </p>
          </div>

          {siteConfig.testimonials.entries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {siteConfig.testimonials.entries.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-[#E6E2DC] rounded-lg p-8 relative transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4 mt-2">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>

                  <blockquote className="text-[#111111] leading-relaxed mb-6 text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div>
                    <p className="font-semibold text-[#111111]">{testimonial.name}</p>
                    <p className="text-sm text-[#111111]">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-[#5B5B5B]">
                Testimonials are available on request. If you would like references, please get in touch.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 bg-[#8C7A6B] text-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#7A695C] transition-all duration-300"
            >
              View the Portfolio
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
