import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
  { label: "Inquiry", href: "#inquiry" },
  { label: "Review", href: "#review" },
]

export default function Footer() {
  return (
    <footer className="bg-primary pt-14 pb-6">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7637_Original-FTjSzg9DvSig2LbLkRgBLjF7CoEniC.jpeg"
              alt="India Trading Logo"
              width={160}
              height={56}
              className="mb-4 h-12 w-auto rounded bg-card p-1"
            />
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Authorized Wholesale Distributor of Hajoori{"'"}s Frootreet Ice Cream. Serving retailers across Surat, Gujarat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919978122753"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0" />
                99781 22753
              </a>
              <a
                href="mailto:indiatrading2753@gmail.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0" />
                indiatrading2753@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" />
                Surat, Gujarat, India
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/50">
            &copy; 2026 India Trading | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
