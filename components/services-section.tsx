"use client"

import { Truck, Snowflake, Store, Clock } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Truck,
    title: "Bulk Wholesale Supply",
    description:
      "Large-scale ice cream supply for retailers, supermarkets, and event organizers across Surat.",
  },
  {
    icon: Snowflake,
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled storage and transportation ensuring product quality from warehouse to store.",
  },
  {
    icon: Store,
    title: "Retailer & Supermarket Supply",
    description:
      "Dedicated supply partnerships with local shops, supermarkets, and convenience stores.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery Network",
    description:
      "Reliable and punctual delivery schedules to keep your freezers stocked and customers happy.",
  },
]

export default function ServicesSection() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-background py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            What We Do
          </h2>
          <h3 className="text-3xl font-bold text-primary md:text-4xl">
            Distribution Services
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: inView ? `${i * 120}ms` : "0ms" }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h4 className="mb-2 text-lg font-semibold text-card-foreground">
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
