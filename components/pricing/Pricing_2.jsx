export default function PricingIntermediate() {
  const plans = [
    {
      name: 'Mini Session',
      price: 'From £275',
      description: 'Ideal for portraits, couples, or short brand shoots.',
      features: [
        '45 minutes of coverage',
        'One UK location',
        '20 edited images',
        'Preview gallery within 48 hours',
      ],
      highlight: false,
    },
    {
      name: 'Signature Session',
      price: 'From £520',
      description: 'The most popular option for couples, families, and brands.',
      features: [
        'Up to 2 hours of coverage',
        'Two UK locations',
        '60+ edited images',
        'Style and location guidance',
      ],
      highlight: true,
    },
    {
      name: 'Full Day',
      price: 'From £2,400',
      description: 'Complete wedding or event coverage with storytelling focus.',
      features: [
        'Up to 10 hours of coverage',
        'Second photographer available',
        'Preview gallery in 72 hours',
        'Full gallery delivered within 6 weeks',
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#F5F3EF] py-24 px-6 md:px-12 border-t border-[#E6E2DC]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 tracking-tight text-[#111111]">
          Pricing & Packages
        </h2>
        <p className="text-lg md:text-xl text-[#5B5B5B] mb-12">
          Simple, transparent packages with room to tailor for your day.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {plans.map(({ name, price, description, features, highlight }, i) => (
            <div
              key={i}
              className={`p-8 border rounded-lg transition ${
                highlight
                  ? 'bg-white border-[#111111]'
                  : 'bg-white border-[#E6E2DC]'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#111111]">{name}</h3>
              <p className="text-4xl font-bold text-[#111111] mb-4">{price}</p>
              <p className="text-[#5B5B5B] mb-6">{description}</p>

              <ul className="space-y-2 text-sm text-[#5B5B5B] mb-6">
                {features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`block text-center rounded-md px-6 py-2 font-medium transition ${
                  highlight
                    ? 'bg-[#111111] text-white hover:bg-[#000000]'
                    : 'border border-[#E6E2DC] text-[#111111] hover:bg-[#F5F3EF]'
                }`}
              >
                Enquire
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#5B5B5B] mt-8">
          Want full coverage details? <a href="/contact" className="underline">Request the pricing guide</a>.
        </p>
      </div>
    </section>
  );
}
