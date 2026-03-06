import Image from "next/image"

export default function HajooriBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0c1b2a] py-24 md:py-32">
      {/* Background Logo - Large, faded, centered */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-wFj5895uLz3y7ggTMAfvO3lwPO8Ku8.jpeg"
          alt=""
          width={900}
          height={900}
          className="h-full w-auto max-w-none scale-110 object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Repeating tiled logos for texture */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-3 gap-8 opacity-[0.03] md:grid-cols-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-wFj5895uLz3y7ggTMAfvO3lwPO8Ku8.jpeg"
              alt=""
              width={200}
              height={200}
              className="h-auto w-full object-contain"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-wFj5895uLz3y7ggTMAfvO3lwPO8Ku8.jpeg"
          alt="Hajoori's Frootreet Ice Cream"
          width={240}
          height={120}
          className="mx-auto mb-8 h-24 w-auto rounded-2xl bg-white/10 p-3 shadow-lg backdrop-blur-sm md:h-28"
        />
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
          {"Hajoori's Frootreet Ice Cream"}
        </h2>
        <p className="mb-2 text-lg font-medium text-[#2ecc71]">Since 1923</p>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Made From Milk. High In Taste. Bringing joy to millions with premium quality ice cream,
          kulfis, and frozen desserts for over 100 years.
        </p>
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="h-px w-16 bg-white/20" />
          <span className="text-sm font-medium uppercase tracking-widest text-white/40">
            Authorized Distributor
          </span>
          <div className="h-px w-16 bg-white/20" />
        </div>
      </div>
    </section>
  )
}
