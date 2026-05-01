"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const productCategories = [
  {
    title: "Star Cone",
    size: "110ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6549_Original-1jxdEcLOwLzCTeUeRtCAYouvJg7SC1.jpeg",
    bgColor: "bg-yellow-50",
    accent: "border-l-amber-400",
  },
  {
    title: "Ice Cream Cups",
    size: "110ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18e1a2a9-a8aa-4aa8-9676-a1c1dee325d0-rziPwBFI6AvJIhWVX2a3R4nttdNaMk.jpeg",
    bgColor: "bg-amber-50",
    accent: "border-l-orange-400",
  },
  {
    title: "Ice Cream Bar",
    size: "70ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6549_Original-5tltjhwyFKELJcapvmvysOio5mFOce.jpeg",
    bgColor: "bg-blue-50",
    accent: "border-l-blue-400",
  },
  {
    title: "Chowpaty Kulfi",
    size: "70ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BE290A8C-2FF3-4D48-8809-F5FF536313EC_Original-zO1CxK50mUHAkbPyqp2oT1heM5JU71.png",
    bgColor: "bg-rose-50",
    accent: "border-l-rose-400",
  },
  {
    title: "Premium Kulfi",
    size: "140ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-Q9wc5ajkPkR9M6CwzIwBtPJ3FB0dkR.jpeg",
    bgColor: "bg-yellow-50",
    accent: "border-l-yellow-400",
  },
  {
    title: "Mini Kulfi",
    size: "40ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6549_Original-Zk1cLUpI374MJFpqHCj0Ws7XD2E60T.jpeg",
    bgColor: "bg-pink-50",
    accent: "border-l-pink-400",
  },
  {
    title: "Rabdi Kulfi",
    size: "65ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6549_Original-AmKJahqq2t82IYDSNdE4UDmRKlOkZ4.jpeg",
    bgColor: "bg-stone-50",
    accent: "border-l-stone-400",
  },
  {
    title: "Rocking Kulfi Roll",
    size: "150ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-ko6cH5lURl83XTi8GWXThUC1cydyaG.jpeg",
    bgColor: "bg-pink-50",
    accent: "border-l-pink-400",
  },
  {
    title: "Popsicle",
    size: "70ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6549_Original-bFMemotFvWiMf9Sl5Am09C4sCEyOF5.jpeg",
    bgColor: "bg-purple-50",
    accent: "border-l-purple-400",
  },
  {
    title: "Premium Ice Cream Tub",
    size: "400ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49658564-44e1-4587-a0de-3aaed952e2c5-exM8B7fmdgPYSsSwphEzeMoEUq3b4h.jpeg",
    bgColor: "bg-blue-50",
    accent: "border-l-sky-400",
  },
  {
    title: "Ice Cream Tub",
    size: "500ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6549_Original-C5TeoDPneyXy4kh9K7ZGcV3nvDyGwI.jpeg",
    bgColor: "bg-lime-50",
    accent: "border-l-lime-400",
  },
  {
    title: "Party Pack",
    size: "700ml + 700ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6548_Original-AOoMMZAyViNex8Scev0j1QX08g8we3.jpeg",
    bgColor: "bg-gray-50",
    accent: "border-l-gray-400",
  },
]

export default function ProductsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref: sectionRef, inView } = useInView()

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)

    const cardWidth = el.querySelector("[data-card]")?.clientWidth ?? 300
    const gap = 24
    const index = Math.round(el.scrollLeft / (cardWidth + gap))
    setActiveIndex(Math.min(index, productCategories.length - 1))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector("[data-card]")?.clientWidth ?? 300
    const gap = 24
    const scrollAmount = (cardWidth + gap) * 2
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector("[data-card]")?.clientWidth ?? 300
    const gap = 24
    el.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    })
  }

  // Close modal with Escape key
  useEffect(() => {
    if (!selectedImage) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedImage])

  return (
    <>
      <section id="products" className="bg-card py-20" ref={sectionRef}>
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div
            className={`mb-12 text-center transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Our Range
            </h2>
            <h3 className="text-3xl font-bold text-primary md:text-4xl text-balance">
              Product Categories
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore the complete Hajoori{"'"}s Frootreet Ice Cream range. Click any product to view the full menu.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative group/slider">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute -left-2 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:bg-accent hover:scale-110 md:-left-6 ${
                !canScrollLeft
                  ? "pointer-events-none scale-75 opacity-0"
                  : "opacity-0 group-hover/slider:opacity-100"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute -right-2 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:bg-accent hover:scale-110 md:-right-6 ${
                !canScrollRight
                  ? "pointer-events-none scale-75 opacity-0"
                  : "opacity-0 group-hover/slider:opacity-100"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Fade edges */}
            <div
              className={`pointer-events-none absolute left-0 top-0 z-[5] h-full w-12 bg-gradient-to-r from-card to-transparent transition-opacity ${
                canScrollLeft ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`pointer-events-none absolute right-0 top-0 z-[5] h-full w-12 bg-gradient-to-l from-card to-transparent transition-opacity ${
                canScrollRight ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Scrollable Track */}
            <div
              ref={scrollRef}
              className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 sm:gap-6"
            >
              {productCategories.map((product, i) => (
                <button
                  key={product.title}
                  data-card
                  onClick={() => {
                    setSelectedImage(product.image)
                    setSelectedTitle(product.title)
                  }}
                  className={`group flex-shrink-0 w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px] snap-start overflow-hidden rounded-2xl border border-border border-l-4 ${product.accent} ${product.bgColor} shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-left ${
                    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: inView ? `${Math.min(i * 80, 600)}ms` : "0ms" }}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted/30">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 280px, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                    <h4 className="text-sm font-semibold text-card-foreground sm:text-base">
                      {product.title}
                    </h4>
                    <span className="flex-shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent sm:px-3">
                      {product.size}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {productCategories.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "h-3 w-8 bg-accent"
                    : "h-3 w-3 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to ${productCategories[i].title}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedTitle} product details`}
        >
          <div
            className="animate-fade-in-up relative max-h-[90vh] max-w-lg overflow-hidden rounded-2xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-primary-foreground transition-colors hover:bg-accent"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={selectedImage}
              alt={selectedTitle}
              width={600}
              height={800}
              className="max-h-[85vh] w-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent px-6 pb-5 pt-10">
              <h4 className="text-xl font-bold text-card">{selectedTitle}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
