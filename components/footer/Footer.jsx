import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F6F2] text-[#111111]">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[#5B5B5B] text-sm leading-relaxed mb-3">
              {siteConfig.footer.description}
            </p>
            <p className="text-[#5B5B5B] text-sm leading-relaxed mb-6">
              {siteConfig.footer.locationLine}
            </p>
            <div className="accent-line" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#5B5B5B] mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.footer.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#5B5B5B] hover:text-[#8C7A6B] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          {siteConfig.footer.locations?.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Locations</h4>
              <div className="space-y-6">
                {siteConfig.footer.locations.map((location) => (
                  <div key={location.name} className="text-sm">
                    <h5 className="font-semibold text-[#111111] mb-1">{location.name}</h5>
                    <p className="text-white/70">{location.address}</p>
                    <p className="text-white/70">{location.city}</p>
                    {location.phone && (
                      <a
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="text-white/70 hover:text-[#111111] transition-colors duration-300"
                      >
                        {location.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#5B5B5B] mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              {siteConfig.contact.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-[#5B5B5B] hover:text-[#8C7A6B] transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 text-[#8C7A6B]" />
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-[#5B5B5B]">
                <MapPin className="w-4 h-4 text-[#8C7A6B] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E6E2DC]">
        <div className="container-custom py-6">
          <p className="text-[#5B5B5B] text-xs text-center">
            &copy; {currentYear} {siteConfig.footer.copyright}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
