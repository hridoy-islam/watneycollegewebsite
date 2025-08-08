"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "MRST Consultancy transformed our export strategy, opening three new markets in 18 months and increasing our international revenue by 35%.",
      author: "Manufacturing Client",
      title: "Trade Expansion",
      initials: "MC",
    },
    {
      quote:
        "Their investment guidance helped us identify the perfect opportunity and structure a partnership that has exceeded our ROI targets.",
      author: "Investment Group Client",
      title: "Strategic Investment",
      initials: "IG",
    },
    {
      quote:
        "Thanks to MRST's student consultancy, I secured admission to my dream university with a scholarship I didn't know existed.",
      author: "International Student",
      title: "Educational Achievement",
      initials: "IS",
    },
  ]

  return (
    <section className="bg-gradient-to-bl from-secondary to-primary/15 py-24">
      <div className="container ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className=" font-bold tracking-tight text-primary ">What People Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our clients about their experience working with MRST Consultancy
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-primary/5 shadow-sm">
                <CardContent className="pt-6">
                  <QuoteIcon className="h-8 w-8 text-primary opacity-50" />
                  <p className="mt-4 text-lg font-medium leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 border-t border-border/50 pt-6">
                  <Avatar className="h-10 w-10 border border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p >{testimonial.title}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

