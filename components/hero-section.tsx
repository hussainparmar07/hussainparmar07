"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49658564-44e1-4587-a0de-3aaed952e2c5-exM8B7fmdgPYSsSwphEzeMoEUq3b4h.jpeg"
        alt="Premium Ice Cream background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Hajoori Logo Watermark */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-wFj5895uLz3y7ggTMAfvO3lwPO8Ku8.jpeg"
        alt=""
        fill
        className="object-contain opacity-10"
        aria-hidden="true"
      />
      
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-4xl px-4 py-24 text-center transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7637_Original-FTjSzg9DvSig2LbLkRgBLjF7CoEniC.jpeg"
          alt="India Trading Logo"
          width={280}
          height={96}
          className="mx-auto mb-8 h-20 w-auto rounded-xl bg-card/90 p-3 shadow-xl md:h-24"
        />
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-card md:text-6xl lg:text-7xl">
          <span className="text-balance">India Trading</span>
        </h1>
        <p className="mx-auto mb-3 max-w-xl text-lg font-medium text-accent">
          Authorized Wholesale Distributor
        </p>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-card/80 md:text-lg">
          Hajoori{"'"}s Frootreet Ice Cream in Surat.
          Delivering excellence in cold-chain distribution and retail partnerships since day one.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#products"
            className="inline-flex items-center rounded-xl bg-accent px-8 py-3.5 font-semibold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            View Products
          </a>
          <a
            href="#inquiry"
            className="inline-flex items-center rounded-xl border-2 border-card/60 px-8 py-3.5 font-semibold text-card transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            Wholesale Inquiry
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-card/40 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-card/60" />
        </div>
      </div>
    </section>
  )
}
