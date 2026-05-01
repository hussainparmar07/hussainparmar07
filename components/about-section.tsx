"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { MapPin, Store, IceCreamCone, ShoppingBag } from "lucide-react"

const retailPartners = [
  "Prabhuprasad",
  "Icecream Hub",
  "Manmohak Icecream",
  "Dairy Don",
  "Creame Villa",
  "Bharkadevi Icecream",
  "Janta Icecream",
  "Rastogi Icecream",
  "Shreenath Icecream",
  "The Fantasia",
  "The Fantasia 2",
  "KP The Egg Point",
]

const areasCoveredGroup1 = [
  "Anand Mahal Road (Honey Park Road)",
  "Rander (Ramnagar)",
  "Jahangirpura (Olpad)",
  "Ichhapore (Mora Tekra)",
  "Pal (Gaurav Path)",
  "Palanpur Canal Road",
  "Hazira",
]

const areasCoveredGroup2 = [
  "Katargam",
  "Amroli",
  "Utran",
  "Chaprabhatha",
  "Variav",
  "Dabholi",
  "Singanpur Road",
  "Sumul Dairy Road",
  "Gajera Road (Gajera Circle)",
]

export default function AboutSection() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="bg-card py-20" ref={ref}>
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 md:px-8 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Main About */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              About Us
            </h2>
            <h3 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
              <span className="text-balance">Your Trusted Ice Cream Distribution Partner</span>
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              India Trading is the authorized wholesale distributor of Hajoori{"'"}s Frootreet Ice Cream,
              proudly serving retailers and businesses across Surat, Gujarat. With decades of experience
              in cold-chain logistics, we ensure every scoop reaches you fresh.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              From premium kulfis and popsicles to party packs and ice cream tubs, we offer the complete
              Hajoori{"'"}s product range. Our commitment to quality distribution has made us the preferred
              choice for businesses seeking reliable ice cream supply in the region.
            </p>

            {/* Updated Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-secondary p-4 text-center">
                <Store className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="text-2xl font-bold text-primary md:text-3xl">1000+</p>
                <p className="text-xs text-muted-foreground md:text-sm">Retail Partners</p>
              </div>
              <div className="rounded-xl bg-secondary p-4 text-center">
                <IceCreamCone className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="text-2xl font-bold text-primary md:text-3xl">200+</p>
                <p className="text-xs text-muted-foreground md:text-sm">Ice Cream Parlours</p>
              </div>
              <div className="rounded-xl bg-secondary p-4 text-center">
                <ShoppingBag className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="text-2xl font-bold text-primary md:text-3xl">200+</p>
                <p className="text-xs text-muted-foreground md:text-sm">Super Stores</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-accent/10" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-wFj5895uLz3y7ggTMAfvO3lwPO8Ku8.jpeg"
              alt="Hajoori's Frootreet Ice Cream branding"
              width={500}
              height={500}
              className="relative w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Our Retail Partners */}
        <div className="mt-20">
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-accent">
            Trusted By The Best
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
            Our Retail Partners
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {retailPartners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-xl border border-border bg-background px-4 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                <span className="text-sm font-medium text-primary">{partner}</span>
              </div>
            ))}
          </div>

          {/* Hajoori Logo */}
          <div className="mt-10 flex flex-col items-center">
            <p className="mb-4 text-sm text-muted-foreground">Authorized Distributor Of</p>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-wFj5895uLz3y7ggTMAfvO3lwPO8Ku8.jpeg"
              alt="Hajoori's Frootreet Ice Cream Logo"
              width={200}
              height={100}
              className="h-20 w-auto rounded-xl bg-card p-2 shadow-md"
            />
          </div>
        </div>

        {/* Our Area Covered */}
        <div className="mt-20">
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-accent">
            Delivery Network
          </h2>
          <h3 className="mb-10 text-center text-3xl font-bold text-primary md:text-4xl">
            Our Area Covered
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Group 1 */}
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-primary">Zone 1</h4>
              </div>
              <ul className="space-y-2.5">
                {areasCoveredGroup1.map((area) => (
                  <li key={area} className="flex items-start gap-2">
                    <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group 2 */}
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-primary">Zone 2</h4>
              </div>
              <ul className="space-y-2.5">
                {areasCoveredGroup2.map((area) => (
                  <li key={area} className="flex items-start gap-2">
                    <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
