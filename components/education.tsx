"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, GraduationCap, Award, BookOpen } from "lucide-react"
import type { JSX } from "react"

interface EducationItem {
  period: string
  degree: string
  institution: string
  description: string
  icon: JSX.Element
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const educationItems: EducationItem[] = [
    {
      period: "2022 - Present",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University",
      description:
        "Studying core computer science subjects including data structures, algorithms, database management, and software engineering.                                                  CGPA - 7.26",
      icon: <GraduationCap className="h-10 w-10 text-purple-500" />,
    },
    {
      period: "2019 - 2021",
      degree: "Higher Secondary Education",
      institution: "Chinmaya Vidyalaya",
      description:
        "Completed higher secondary education with a focus on Mathematics, Physics, Chemistry and Computer Science. PERCENTAGE - 82.6%",
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
    },
    {
      period: "2018 - 2019",
      degree: "Secondary Education",
      institution: "Chinmaya Vidyalaya",
      description:
        "Completed secondary education with distinction. PERCENTAGE - 94.8%",
      icon: <Award className="h-10 w-10 text-amber-500" />,
    },
  ]

  return (
    <section className="py-20 bg-slate-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-purple-600 z-10 hidden md:block"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                  <div className="bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-purple-500/10 transition-all">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-2 bg-slate-800 rounded-lg">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                        <p className="text-purple-400">{item.institution}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{item.description}</p>

                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
