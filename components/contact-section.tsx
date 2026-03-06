"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function ContactSection() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="bg-background py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Get in Touch
          </h2>
          <h3 className="text-3xl font-bold text-primary md:text-4xl">
            Contact Us
          </h3>
        </div>

        <div
          className={`grid gap-8 lg:grid-cols-2 transition-all duration-700 delay-200 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-card-foreground">Phone</h4>
                  <a
                    href="tel:+919978825222"
                    className="block text-muted-foreground transition-colors hover:text-accent"
                  >
                    99788 25222
                  </a>
                  <a
                    href="tel:+917984434292"
                    className="block text-muted-foreground transition-colors hover:text-accent"
                  >
                    79844 34292
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-card-foreground">Email</h4>
                  <a
                    href="mailto:indiatrading2753@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    indiatrading2753@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-card-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.55924707787!2d72.65330289453124!3d21.159066699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="India Trading location in Surat"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
