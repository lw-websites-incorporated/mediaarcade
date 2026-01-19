'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-[#F8F6F2]/95 backdrop-blur border-b border-[#E6E2DC]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={120}
                height={120}
                className="h-12 sm:h-14 w-12 sm:w-14 rounded-full object-cover"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em]">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled
                      ? 'text-[#5B5B5B] hover:text-[#8C7A6B]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`px-5 py-2.5 font-medium uppercase tracking-[0.2em] text-[10px] transition-all duration-300 ${
                  scrolled
                    ? 'border border-[#8C7A6B] text-[#8C7A6B] hover:bg-[#8C7A6B] hover:text-white'
                    : 'border border-white/80 text-white hover:bg-white hover:text-[#111111]'
                }`}
              >
                Check Availability
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 ${scrolled ? 'text-[#111111]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
              className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-[500px] mt-4 pt-4 border-t border-[#E6E2DC]' : 'max-h-0'
            }`}
          >
            <div className="space-y-2">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded font-medium uppercase tracking-[0.15em] text-xs transition-colors duration-300 ${
                    pathname === link.href
                      ? 'bg-[#F8F6F2] text-[#111111]'
                      : 'text-[#5B5B5B] hover:bg-[#F8F6F2] hover:text-[#8C7A6B]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center border border-[#8C7A6B] text-[#8C7A6B] py-3 px-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#8C7A6B] hover:text-white transition-colors duration-300 mt-2"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
