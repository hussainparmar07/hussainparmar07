"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function InquirySection() {
  const [language, setLanguage] = useState<"en" | "gu" | "hi">("en")
  const [form, setForm] = useState({
    name: "",
    business: "",
    mobile: "",
    message: "",
  })
  const { ref, inView } = useInView()

  const labels = {
    en: {
      title: "Wholesale Inquiry",
      subtitle: "Partner With Us",
      description: "Interested in stocking Hajoori's ice cream? Fill in the form and we'll reach out via WhatsApp.",
      name: "Name",
      namePlaceholder: "Your full name",
      business: "Business Name",
      businessPlaceholder: "Your business name",
      mobile: "Mobile Number",
      mobilePlaceholder: "Your mobile number",
      message: "Message",
      messagePlaceholder: "Tell us about your requirements...",
      weddingParty: "We take wedding and party orders",
      submit: "Send via WhatsApp",
    },
    gu: {
      title: "હોલસેલ પૂછપરછ",
      subtitle: "અમારી સાથે ભાગીદાર બનો",
      description: "હજુરીની આઈસ્ક્રીમ સ્ટોક કરવામાં આગ્રહી છો? ફોર્મ ભરો અને અમે વોટ્સએપ દ્વારા સંપર્ક કરીશું.",
      name: "નામ",
      namePlaceholder: "તમારું સંપૂર્ણ નામ",
      business: "બિઝનેસ નામ",
      businessPlaceholder: "તમારા બિઝનેસનું નામ",
      mobile: "મોબાઈલ નંબર",
      mobilePlaceholder: "તમારો મોબાઈલ નંબર",
      message: "સંદેશ",
      messagePlaceholder: "તમારી જરૂરિયાત વિશે જણાવો...",
      weddingParty: "આমે લગ્ન અને પાર્ટી ઑર્ડર લઈએ છીએ",
      submit: "વોટ્સએપ દ્વારા મોકલો",
    },
    hi: {
      title: "होलसेल पूछताछ",
      subtitle: "हमारे साथ भागीदार बनें",
      description: "हजूरी की आइसक्रीम स्टॉक करने में रुचि है? फॉर्म भरें और हम व्हाट्सएप के माध्यम से संपर्क करेंगे।",
      name: "नाम",
      namePlaceholder: "आपका पूरा नाम",
      business: "व्यवसाय का नाम",
      businessPlaceholder: "आपके व्यवसाय का नाम",
      mobile: "मोबाइल नंबर",
      mobilePlaceholder: "आपका मोबाइल नंबर",
      message: "संदेश",
      messagePlaceholder: "अपनी आवश्यकताओं के बारे में बताएं...",
      weddingParty: "हम शादी और पार्टी के ऑर्डर लेते हैं",
      submit: "व्हाट्सएप के माध्यम से भेजें",
    },
  }

  const currentLabel = labels[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `*Wholesale Inquiry*%0A%0A*Name:* ${form.name}%0A*Business:* ${form.business}%0A*Mobile:* ${form.mobile}%0A*Message:* ${form.message}`
    window.open(`https://wa.me/919978122753?text=${text}`, "_blank")
  }

  return (
    <section id="inquiry" className="bg-card py-20" ref={ref}>
      <div
        className={`mx-auto max-w-2xl px-4 transition-all duration-700 md:px-8 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Language Selector */}
        <div className="mb-8 flex justify-center gap-2">
          {(["en", "gu", "hi"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                language === lang
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-foreground hover:bg-muted/70"
              }`}
            >
              {lang === "en" ? "English" : lang === "gu" ? "ગુજરાતી" : "हिंदी"}
            </button>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            {currentLabel.subtitle}
          </h2>
          <h3 className="text-3xl font-bold text-primary md:text-4xl">
            {currentLabel.title}
          </h3>
          <p className="mt-4 text-muted-foreground">
            {currentLabel.description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8"
        >
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="inq-name" className="mb-1.5 block text-sm font-medium text-foreground">
                {currentLabel.name}
              </label>
              <input
                id="inq-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder={currentLabel.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="inq-business" className="mb-1.5 block text-sm font-medium text-foreground">
                {currentLabel.business}
              </label>
              <input
                id="inq-business"
                type="text"
                required
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder={currentLabel.businessPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="inq-mobile" className="mb-1.5 block text-sm font-medium text-foreground">
                {currentLabel.mobile}
              </label>
              <input
                id="inq-mobile"
                type="tel"
                required
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder={currentLabel.mobilePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="inq-message" className="mb-1.5 block text-sm font-medium text-foreground">
                {currentLabel.message}
              </label>
              <textarea
                id="inq-message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder={currentLabel.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <Send className="h-5 w-5" />
              {currentLabel.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
