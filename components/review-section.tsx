"use client"

import { useState } from "react"
import { MessageSquare, CheckCircle, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function ReviewSection() {
  const [name, setName] = useState("")
  const [feedback, setFeedback] = useState("")
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setName("")
    setFeedback("")
    setRating(0)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="review" className="bg-background py-20" ref={ref}>
      <div
        className={`mx-auto max-w-2xl px-4 transition-all duration-700 md:px-8 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Your Opinion Matters
          </h2>
          <h3 className="text-3xl font-bold text-primary md:text-4xl">
            Review / Feedback
          </h3>
        </div>

        {submitted ? (
          <div className="animate-fade-in-up flex flex-col items-center gap-4 rounded-2xl border border-accent bg-accent/5 p-10 text-center">
            <CheckCircle className="h-16 w-16 text-accent" />
            <p className="text-xl font-semibold text-foreground">
              Thank you for your feedback!
            </p>
            <p className="text-muted-foreground">We appreciate your thoughts.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="review-name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Name
                </label>
                <input
                  id="review-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Star Rating */}
              <div>
                <label className="mb-2 block text-sm font-medium text-card-foreground">
                  Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        className={`h-7 w-7 transition-colors ${
                          star <= (hoverRating || rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="review-feedback" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Feedback
                </label>
                <textarea
                  id="review-feedback"
                  rows={5}
                  required
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                  placeholder="Share your experience..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <MessageSquare className="h-5 w-5" />
                Submit Feedback
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
