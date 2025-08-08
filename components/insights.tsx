"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

export default function Insights() {
  const insights = [
    {
      title: "Emerging Trade Opportunities in Southeast Asian Markets",
      category: "Market Report",
      date: "March 1, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Cross-Border Technology Investments Gaining Momentum",
      category: "Investment Trend",
      date: "February 15, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "New Pathways to International Higher Education",
      category: "Education Update",
      date: "January 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="bg-primary/5 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className=" font-bold tracking-tight text-primary">Latest Insights</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay informed with our latest research and industry updates
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <Card className="h-full border-none">
                <div className="overflow-hidden">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <Badge variant="outline" className="w-fit bg-primary/5">
                    {insight.category}
                  </Badge>
                  <CardTitle className="mt-2 line-clamp-2 text-xl">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{insight.date}</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="flex items-center text-sm font-medium text-primary">
                    Read more <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

