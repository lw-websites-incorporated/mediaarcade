'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/hero/PageHero';
import { Users, Award, Shield } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const iconMap = {
  users: Users,
  award: Award,
  shield: Shield,
};

export default function AboutPage() {
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
        title={siteConfig.about.heading}
        image={siteConfig.about.teamPhoto}
        imageAlt="Mediaarcade team"
        imagePosition="center 0%"
        imageScale={1}
        minHeightClass="min-h-[55vh] md:min-h-[70vh]"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="accent-line-center mb-6" />
            <p className="text-[#5B5B5B] leading-relaxed">
              {siteConfig.about.content}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.about.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Users;
              return (
                <div
                  key={value.title}
                  className={`text-center p-8 bg-[#E6E2DC] rounded-lg transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#111111] rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-[#111111] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#5B5B5B] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {siteConfig.about.team?.length > 0 && (
        <section className="section-padding bg-[#F5F3EF]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="accent-line-center mb-6" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#111111]">
                Meet the Team
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {siteConfig.about.team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="relative aspect-square md:aspect-auto md:min-h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-8">
                      <div className="accent-line mb-4" />
                      <h3 className="text-xl font-playfair font-bold text-[#111111] mb-1">
                        {member.role}
                      </h3>
                      <h4 className="text-2xl font-playfair font-bold text-[#111111] mb-4">
                        {member.name}
                      </h4>
                      <div className="text-[#5B5B5B] leading-relaxed space-y-4 text-sm">
                        {member.bio.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  );
}
