// config/siteConfig.js
export const siteConfig = {
  siteName: 'Mediaarcade',
  logo: {
    text: 'Mediaarcade',
    src: '/logo/logo_new.png',
    alt: 'Mediaarcade Logo',
    height: 50,
  },
  metadata: {
    base: {
      title: 'Mediaarcade | Photography in London and Buckinghamshire',
      description:
        'Mediaarcade provides professional photography across property, people and commercial work in London and Buckinghamshire.',
      icons: {
        icon: [
          { url: '/logo/icons/favicon.ico' },
          { url: '/logo/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { url: '/logo/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
          { url: '/logo/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
          { rel: 'icon', url: '/logo/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { rel: 'icon', url: '/logo/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    },
  },

  fonts: {
    base: `'Poppins', sans-serif`,
    heading: `'Playfair Display SC', serif`,
    baseClass: 'font-opensans',
    headingClass: 'font-playfair',
    google: { base: 'Poppins', heading: 'Playfair Display SC', accent: 'Poppins' },
  },

  brand: {
    primary: '#111111',
    secondary: '#2A2A2A',
    accent: '#F5F3EF',
    accentGray: '#E6E2DC',
    background: '#FFFFFF',
    dark: '#111111',
  },

  styles: {
    bgLight: 'bg-white',
    bgPrimary: 'bg-[#111111]',
    bgSecondary: 'bg-[#2A2A2A]',
    bgAccent: 'bg-[#F5F3EF]',
    bgAccentGray: 'bg-[#E6E2DC]',
    textPrimary: 'text-[#111111]',
    textMuted: 'text-[#5B5B5B]',
    textLight: 'text-white',
    borderLight: 'border-[#E6E2DC]',
    borderDark: 'border-[#111111]',
  },

  banner: {
    show: false,
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Updates', href: '/updates' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Services', href: '/services' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  footer: {
    copyright: 'Mediaarcade',
    description: 'Concise photography for property, people and business.',
    locationLine: 'London and Buckinghamshire.',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Updates', href: '/updates' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Services', href: '/services' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: '',
      facebook: '',
      whatsapp: '',
      email: '',
      phone: '',
    },
    locations: [],
  },

  hero: {
    image: '/img/Wedding/wedding1.jpg',
    imageAlt: 'Wedding couple portrait',
    heading: 'Media Arcade',
    subheading: 'Mediaarcade delivers clean, confident imagery across property, weddings, portraits and commercial work. Clear communication, reliable delivery and visuals that do the job.',
    additionalContent: [
      'Based in London and Buckinghamshire, working across the South East and beyond for the right brief.',
      'For property professionals, businesses, couples and individuals who need clear, usable images.',
    ],
    ctaText: 'Enquire now',
    ctaHref: '/contact',
    secondaryCtaText: 'View work',
    secondaryCtaHref: '/portfolio',
    availabilityNote: '',
  },

  welcome: {
    heading: 'Clear photography for every kind of brief',
    content:
      'Mediaarcade provides professional photography across property, weddings, portraits and commercial projects. We focus on clear visuals, accurate representation and a straightforward working style. From floorplans and EPC support to creative and lifestyle imagery, you get reliable coverage that fits the brief.',
    image: '/img/Nature/nature1.jpg',
    imageAlt: 'Coastal landscape in soft light',
  },

  services: {
    heading: 'Services',
    subheading: '',
    items: [
      {
        title: 'Professional Property Photography',
        description: 'Crisp, accurate imagery designed to show space, light and layout.',
        icon: 'camera',
        features: [],
      },
      {
        title: 'Floorplans',
        description: 'Clear floorplans that support listings and help buyers understand flow.',
        icon: 'briefcase',
        features: [],
      },
      {
        title: 'Property EPC photography',
        description: 'Supporting imagery for EPC completion and documentation needs.',
        icon: 'briefcase',
        features: [],
      },
      {
        title: 'Aerial and drone photography',
        description: 'Elevated views that show scale, setting and access.',
        icon: 'camera',
        features: [],
      },
      {
        title: 'Wedding Photography',
        description: 'Unobtrusive coverage with a focus on real moments and natural light.',
        icon: 'heart',
        features: [],
      },
      {
        title: 'Portrait Photography',
        description: 'Professional portraits for individuals, teams and personal branding.',
        icon: 'users',
        features: [],
      },
      {
        title: 'Wildlife Photography',
        description: 'Observational images captured with care and patience.',
        icon: 'camera',
        features: [],
      },
      {
        title: 'Travel Photography',
        description: 'Location-led imagery for editorial and commercial use.',
        icon: 'camera',
        features: [],
      },
    ],
  },

  locationsSection: {
    heading: 'Locations',
    paragraph: 'Based in London and Buckinghamshire, Mediaarcade works across the South East and beyond for the right brief.',
  },

  servicesPage: {
    heading: 'Services',
    intro: 'A clear overview of what we cover and where our work fits.',
    mainServices: [
      {
        title: 'Professional Property Photography',
        description: 'Clean, accurate property imagery that presents space, light and layout without distortion or over styling. Ideal for agents, developers and private sellers who need reliable visuals for listings, brochures and marketing. Clear, consistent delivery to fit your brief.',
        useCases: [
          'Sales and rental listings',
          'Developer marketing materials',
          'Private seller packages',
        ],
        icon: 'heart',
        image: '/img/House/house1.jpg',
      },
      {
        title: 'Floorplans',
        description: 'Clear and easy to read floorplans that support property listings and improve buyer understanding. Simple layouts that show proportions and flow without unnecessary detail. Suitable for residential and small commercial properties.',
        useCases: [
          'Estate agent listings',
          'Sales particulars',
          'Property marketing packs',
        ],
        icon: 'users',
        image: '/img/House/house2.jpg',
      },
      {
        title: 'Property EPC photography',
        description: 'Supporting imagery required for EPC completion, captured quickly and clearly. Focused on the elements needed for assessment, with minimal disruption. A practical service for assessors and property professionals.',
        useCases: [
          'EPC assessor support',
          'Compliance documentation',
          'Managed property portfolios',
        ],
        icon: 'briefcase',
        image: '/img/House/house3.jpg',
      },
      {
        title: 'Aerial and drone photography',
        description: 'Aerial imagery that shows property context, access and surrounding features. Useful for larger homes, commercial sites and rural locations. Clean, stable visuals captured with care and in line with site requirements.',
        useCases: [
          'Site context and access',
          'Rural and estate properties',
          'Commercial and development sites',
        ],
        icon: 'camera',
        image: '/img/Nature/nature2.jpg',
      },
      {
        title: 'Wedding Photography',
        description: 'Natural coverage that focuses on people and moments without heavy direction. A calm, discreet approach for couples who want real images that feel like their day.',
        useCases: [
          'Full day coverage',
          'Small weddings and elopements',
          'Engagement shoots',
        ],
        icon: 'heart',
        image: '/img/Wedding/wedding1.jpg',
      },
      {
        title: 'Portrait Photography',
        description: 'Professional portraits for individuals, teams and small businesses. Clean lighting, simple direction and a comfortable process to deliver confident, usable images.',
        useCases: [
          'Headshots and profiles',
          'Team and company portraits',
          'Personal branding sessions',
        ],
        icon: 'users',
        image: '/img/Wedding/wedding3.jpg',
      },
      {
        title: 'Wildlife Photography',
        description: 'Observational wildlife imagery captured with patience and minimal disturbance. Suitable for editorial use, conservation groups or personal collections.',
        useCases: [
          'Editorial features',
          'Conservation projects',
          'Personal commissions',
        ],
        icon: 'camera',
        image: '/img/Nature/nature4.jpg',
      },
      {
        title: 'Travel Photography',
        description: 'Location-led imagery for brands, editorial and commercial use. Clean compositions that reflect place, mood and story without overproduction.',
        useCases: [
          'Editorial travel features',
          'Destination marketing',
          'Commercial travel campaigns',
        ],
        icon: 'camera',
        image: '/img/Nature/nature5.jpg',
      },
    ],
    additionalServices: [],
  },

  portfolio: {
    heading: 'Portfolio',
    intro: 'Explore a curated mix of weddings, portraits, brands, and events.',
    categories: [
      {
        title: 'Weddings',
        image: '/img/Wedding/wedding1.jpg',
        slug: 'weddings',
      },
      {
        title: 'Portraits',
        image: '/img/Wedding/wedding3.jpg',
        slug: 'portraits',
      },
      {
        title: 'Brands',
        image: '/img/Nature/nature2.jpg',
        slug: 'brands',
      },
      {
        title: 'Events',
        image: '/img/Wedding/wedding4.jpg',
        slug: 'events',
      },
      {
        title: 'Couples',
        image: '/img/Wedding/wedding2.jpg',
        slug: 'couples',
      },
      {
        title: 'Interiors',
        image: '/img/House/house2.jpg',
        slug: 'interiors',
      },
      {
        title: 'Products',
        image: '/img/House/house3.jpg',
        slug: 'products',
      },
      {
        title: 'Editorial',
        image: '/img/Nature/nature3.jpg',
        slug: 'editorial',
      },
    ],
  },

  whyChooseUs: {
    heading: 'Why Mediaarcade',
    subheading: '',
    items: [
      {
        title: 'Reliable planning',
        description: 'Clear scheduling and straightforward delivery from start to finish.',
        icon: 'shield',
      },
      {
        title: 'Clear communication',
        description: 'Simple, direct updates so you always know what to expect.',
        icon: 'award',
      },
      {
        title: 'Clean, consistent visuals',
        description: 'Accurate images that present subjects and spaces with care.',
        icon: 'users',
      },
      {
        title: 'Versatile coverage',
        description: 'Property, people and commercial work handled under one roof.',
        icon: 'award',
      },
    ],
  },

  about: {
    heading: 'About',
    content:
      'Mediaarcade provides versatile photography for property, business and creative briefs across London and Buckinghamshire. We work with property professionals, companies, couples and individuals, delivering clean visuals with attention to detail. The approach is straightforward and efficient, with clear communication and images that match the brief. From floorplans and EPC support to portraits, weddings and travel, Mediaarcade offers consistent results across commercial and creative work.',
    image: '/img/Nature/nature4.jpg',
    imageAlt: 'Coastal landscape view',
    features: [],
    stats: [],
    values: [
      {
        title: 'Reliability',
        description: 'Consistent planning and delivery that respects your timeline.',
        icon: 'shield',
      },
      {
        title: 'Clarity',
        description: 'Clear visuals that present spaces and people accurately.',
        icon: 'award',
      },
      {
        title: 'Quality',
        description: 'Careful composition and clean editing across every brief.',
        icon: 'users',
      },
      {
        title: 'Versatility',
        description: 'Coverage across property, portraits, weddings and commercial work.',
        icon: 'shield',
      },
    ],
    team: [],
    teamPhoto: '/img/Nature/nature2.jpg',
  },

  gallery: {
    heading: 'Featured galleries',
    subheading: '',
    images: [
      {
        src: '/img/House/house2.jpg',
        alt: 'Residential interior texture',
        category: 'interiors',
      },
      {
        src: '/img/Wedding/wedding2.jpg',
        alt: 'Wedding celebration detail',
        category: 'weddings',
      },
      {
        src: '/img/Wedding/wedding3.jpg',
        alt: 'Wedding portrait moment',
        category: 'weddings',
      },
      {
        src: '/img/Nature/nature3.jpg',
        alt: 'Coastal landscape',
        category: 'editorial',
      },
      {
        src: '/img/House/house2.jpg',
        alt: 'Residential interior texture',
        category: 'interiors',
      },
      {
        src: '/img/Nature/nature1.jpg',
        alt: 'Coastal landscape',
        category: 'editorial',
      },
    ],
  },

  testimonials: {
    heading: 'Testimonials',
    subheading: '',
    intro: '',
    entries: [],
  },

  contact: {
    heading: 'Enquire',
    subheading: 'Tell us what you need and when you need it. We will reply with availability and a clear next step. No pressure, just a quick, practical conversation.',
    phone: '',
    email: '',
    serviceArea: 'London and Buckinghamshire.',
    locations: [],
    hours: [],
    form: {
      heading: 'Photography Enquiry',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        shootType: {
          label: 'Type of Shoot',
          options: [
            'Professional Property Photography',
            'Floorplans',
            'Property EPC photography',
            'Aerial / drone photography',
            'Wedding Photography',
            'Portrait Photography',
            'Wildlife Photography',
            'Travel Photography',
            'Other',
          ],
        },
        date: { label: 'Date (if applicable)', placeholder: '' },
        location: { label: 'Location', placeholder: 'City or venue' },
        message: { label: 'Message', placeholder: 'Tell us about your plans, style, and what matters most...' },
      },
      button: 'Send Enquiry',
    },
  },

  cta: {
    heading: 'Ready to get started?',
    subheading: 'Tell us what you need and when you need it. We will reply with availability and a clear next step. No pressure.',
    phone: '',
    buttonText: 'Enquire now',
    buttonHref: '/contact',
    secondaryButtonText: 'View work',
    secondaryButtonHref: '/portfolio',
    availabilityNote: '',
  },

  updates: {
    heading: 'Updates',
    intro: 'Recent work and updates from Mediaarcade.',
    instagramHandle: '',
    instagramUrl: '',
  },
};
