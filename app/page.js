import Hero from '@/components/hero/Hero';
import Welcome from '@/components/sections/Welcome';
import Services from '@/components/services/Services';
import Gallery from '@/components/gallery/Gallery';
import Testimonials from '@/components/testimonials/Testimonials';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ContactPreview from '@/components/contact/ContactPreview';
import { siteConfig } from '@/config/siteConfig';

export default function HomePage() {
  return (
    <>
      <Hero showSubheading={false} showAdditional={false} />
      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-[#5B5B5B] mb-6">
            {siteConfig.hero.subheading}
          </p>
          {siteConfig.hero.additionalContent?.map((paragraph) => (
            <p key={paragraph} className="text-[#5B5B5B] mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <Services showCTA={true} />
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="accent-line-center mb-6" />
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#111111] mb-4">
            {siteConfig.locationsSection.heading}
          </h2>
          <p className="text-[#5B5B5B] max-w-2xl mx-auto">
            {siteConfig.locationsSection.paragraph}
          </p>
        </div>
      </section>
      <Welcome />
      <WhyChooseUs />
      <Gallery limit={6} />
      <Testimonials limit={4} />
      <ContactPreview />
    </>
  );
}
