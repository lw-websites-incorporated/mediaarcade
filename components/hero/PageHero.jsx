import Image from 'next/image';

export default function PageHero({
  title,
  subtitle,
  image = '/img/Nature/nature5.jpg',
  imageAlt = 'Page header background',
  imagePosition = 'center',
  imageScale = 1,
  minHeightClass = 'min-h-[40vh] md:min-h-[50vh]'
}) {
  return (
    <section className={`relative ${minHeightClass} flex items-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition, transform: `scale(${imageScale})` }}
          priority
          quality={85}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-[#8C7A6B] hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container-custom py-28 text-center flex flex-col items-center justify-center">
        {/* Accent line */}
        <div className="w-16 h-[2px] bg-white/80 mb-6" />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
