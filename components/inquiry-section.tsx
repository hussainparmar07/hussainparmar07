"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function InquirySection() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    mobile: "",
    message: "",
  })
  const { ref, inView } = useInView()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `*Wholesale Inquiry*%0A%0A*Name:* ${form.name}%0A*Business:* ${form.business}%0A*Mobile:* ${form.mobile}%0A*Message:* ${form.message}`
    window.open(`https://wa.me/919978825222?text=${text}`, "_blank")
  }

  return (
    <section id="inquiry" className="bg-card py-20" ref={ref}>
      <div
        className={`mx-auto max-w-2xl px-4 transition-all duration-700 md:px-8 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Partner With Us
          </h2>
          <h3 className="text-3xl font-bold text-primary md:text-4xl">
            Wholesale Inquiry
          </h3>
          <p className="mt-4 text-muted-foreground">
            Interested in stocking Hajoori{"'"}s ice cream? Fill in the form and we{"'"}ll reach out via WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8"
        >
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="inq-name" className="mb-1.5 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="inq-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="inq-business" className="mb-1.5 block text-sm font-medium text-foreground">
                Business Name
              </label>
              <input
                id="inq-business"
                type="text"
                required
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder="Your business name"
              />
            </div>
            <div>
              <label htmlFor="inq-mobile" className="mb-1.5 block text-sm font-medium text-foreground">
                Mobile Number
              </label>
              <input
                id="inq-mobile"
                type="tel"
                required
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder="Your mobile number"
              />
            </div>
            <div>
              <label htmlFor="inq-message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="inq-message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <Send className="h-5 w-5" />
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
