"use client"

export function LogoCarousel() {
  const logos = [
    {
      name: "Forbes",
      url: "/images/logo-forbes.png",
      height: "h-7",
    },
    {
      name: "Entrepreneur",
      url: "/images/logo-entrepreneur.png",
      height: "h-12",
    },
    {
      name: "TechCrunch",
      url: "/images/logo-techcrunch-gray.png",
      height: "h-16",
    },
    {
      name: "Harvard Business Review",
      url: "/images/logo-harvard-business-review.png",
      height: "h-16",
    },
    {
      name: "Fast Company",
      url: "/images/logo-fast-company.png",
      height: "h-14",
    },
    {
      name: "Inc Magazine",
      url: "/images/logo-inc.png",
      height: "h-8",
    },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="bg-white py-8 overflow-hidden border-y border-gray-100">
      <div className="relative">
        <div className="flex animate-scroll items-center">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center px-12 flex-shrink-0">
              <img
                src={logo.url || "/placeholder.svg"}
                alt={logo.name}
                className={`${logo.height} w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            /* Doubled mobile carousel speed from 12s to 6s (2× faster) */
            animation: scroll 6s linear infinite;
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
