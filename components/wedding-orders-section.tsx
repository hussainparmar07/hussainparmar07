"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const weddingOrdersData = [
  {
    en: {
      title: "Wedding Orders",
      description: "Celebrate your special day with Hajoori's premium ice cream. We provide customized ice cream solutions for weddings with bulk ordering options and special pricing.",
      highlights: ["Custom Flavors Available", "Bulk Orders Welcome", "Special Pricing", "On-Time Delivery"],
    },
    gu: {
      title: "લગ્ન ઑર્ડર્સ",
      description: "હજુરીની પ્રીમિયમ આઈસ્ક્રીમ સાથે તમારા વિશેષ દિવસ ઉજવો. આমે લગ્નમાં કસ્ટમાઈজ્ડ આઈસ્ક્રીમ સલ્યુશન બલ્ક ઑર્ડર વિકલ્પો અને વિશેષ ભાવ સાથે પ્રદાન કરીએ છીએ.",
      highlights: ["કસ્ટમ ફ્લેવર્સ ઉપલબ્ધ", "બલ્ક ઑર્ડર્સ સ્વાગત", "વિશેષ ભાવ", "સમયસર ડિલીવરી"],
    },
    hi: {
      title: "शादी के ऑर्डर",
      description: "हजूरी की प्रीमियम आइसक्रीम के साथ अपने विशेष दिन को मनाएं। हम शादियों में बल्क ऑर्डर विकल्पों और विशेष मूल्य निर्धारण के साथ कस्टमाइज्ड आइसक्रीम समाधान प्रदान करते हैं।",
      highlights: ["कस्टम फ्लेवर उपलब्ध", "बल्क ऑर्डर स्वागत", "विशेष मूल्य निर्धारण", "समय पर डिलीवरी"],
    },
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    en: {
      title: "Party Orders",
      description: "Make your party memorable with Hajoori's ice cream. Whether it's a birthday, corporate event, or celebration, we offer flexible party packages with quick delivery and excellent service.",
      highlights: ["Birthday Packages", "Corporate Events", "Quick Service", "Variety of Flavors"],
    },
    gu: {
      title: "પાર્ટી ઑર્ડર્સ",
      description: "હજુરીની આઈસ્ક્રીમ સાથે તમારી પાર્ટીને અવિસ્મરણીય બનાવો. તે જન્મદિન, કોર્પોરેટ ઈવેન્ટ અથવા ઉત્સવ હોય તો પણ, આમે ઝડપી ડિલીવરી અને ઉત્તમ સેવા સાથે લવચક પાર્ટી પેકેજ આપીએ છીએ.",
      highlights: ["જન્મદિન પેકેજ", "કોર્પોરેટ ઈવેન્ટ્સ", "ઝડપી સેવા", "ફ્લેવર્સની વિવિધતા"],
    },
    hi: {
      title: "पार्टी ऑर्डर",
      description: "हजूरी की आइसक्रीम के साथ अपनी पार्टी को यादगार बनाएं। चाहे यह जन्मदिन, कॉर्पोरेट इवेंट या उत्सव हो, हम तेजी से डिलीवरी और उत्कृष्ट सेवा के साथ लचीले पार्टी पैकेज प्रदान करते हैं।",
      highlights: ["जन्मदिन पैकेज", "कॉर्पोरेट इवेंट्स", "तीव्र सेवा", "स्वाद की विविधता"],
    },
    bgColor: "from-blue-50 to-cyan-50",
  },
]

export default function WeddingOrdersSection() {
  const language: "en" | "gu" | "hi" = "en"
  const [activeSlide, setActiveSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView()

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index % weddingOrdersData.length)
  }, [])

  const nextSlide = useCallback(() => {
    goToSlide(activeSlide + 1)
  }, [activeSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(activeSlide - 1 + weddingOrdersData.length)
  }, [activeSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section id="wedding-orders" className="bg-gradient-to-b from-background to-card py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Special Services
          </h2>
          <h3 className="text-3xl font-bold text-primary md:text-4xl text-balance">
            Wedding & Party Orders
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Make your celebrations special with Hajoori's ice cream
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="relative overflow-hidden rounded-3xl"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {weddingOrdersData.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full"
                >
                  <div
                    className={`bg-gradient-to-br ${slide.bgColor} px-6 py-12 text-center sm:px-8 sm:py-16 md:px-12 md:py-20`}
                  >
                    <h3 className="mb-4 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                      {slide[language].title}
                    </h3>
                    <p className="mx-auto mb-8 max-w-2xl text-base text-foreground/80 sm:text-lg md:text-xl">
                      {slide[language].description}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                      {slide[language].highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="rounded-xl bg-white/50 backdrop-blur-sm px-4 py-3 font-semibold text-primary"
                        >
                          ✓ {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-accent md:left-6"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-accent md:right-6"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {weddingOrdersData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  activeSlide === index
                    ? "h-3 w-8 bg-accent"
                    : "h-3 w-3 bg-border hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/919978122753?text=I%20am%20interested%20in%20wedding%20and%20party%20orders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-semibold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
