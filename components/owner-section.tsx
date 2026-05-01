"use client"

import { Phone, Mail, UserCircle } from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export default function OwnerSection() {
  const { ref, inView } = useInView()

  return (
    <section id="owner" className="relative overflow-hidden bg-primary py-20" ref={ref}>
      {/* Subtle Background Logo */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7637_Original-FTjSzg9DvSig2LbLkRgBLjF7CoEniC.jpeg"
        alt=""
        fill
        className="object-contain opacity-[0.04]"
        aria-hidden="true"
      />

      <div
        className={`relative z-10 mx-auto max-w-3xl px-4 text-center transition-all duration-700 md:px-8 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-8 inline-block">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-AOoMMZAyViNex8Scev0j1QX08g8we3.jpeg"
            alt="India Trading Logo"
            width={200}
            height={100}
            className="h-16 w-auto"
          />
        </div>

        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent/20 ring-4 ring-accent/10">
          <UserCircle className="h-12 w-12 text-accent" />
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          Distributor Owner
        </p>
        <h3 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
          Abbass Chawda
        </h3>
        <p className="mb-8 text-lg text-primary-foreground/80">
          Authorized Distributor &ndash; Hajoori{"'"}s Frootreet Ice Cream
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+919978825222"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-accent-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            <Phone className="h-5 w-5" />
            99788 25222
          </a>
          <a
            href="mailto:indiatrading2753@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-6 py-3 font-medium text-primary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Mail className="h-5 w-5" />
            indiatrading2753@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
