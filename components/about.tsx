"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "Coding Enthusiast",
      description: "Passionate about writing clean, efficient code and exploring new technologies.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Problem Solver",
      description: "I enjoy tackling complex problems and finding innovative solutions.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: "Tech Explorer",
      description: "Always learning and experimenting with cutting-edge technologies.",
    },
    {
      icon: <Coffee className="h-8 w-8 text-amber-500" />,
      title: "Team Player",
      description: "I thrive in collaborative environments and enjoy working with diverse teams.",
    },
  ]

  return (
    <section className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur-lg opacity-20"></div>
            <div className="relative bg-slate-800 p-6 rounded-lg shadow-xl">
              <p className="text-gray-300 mb-4">
                Hello! I'm a Computer Science Engineering student with a passion for technology and innovation. I'm
                currently pursuing my degree and focusing on building a strong foundation in software development.
              </p>
              <p className="text-gray-300 mb-4">
                My journey in programming began when I was in high school, and since then, I've been fascinated by how
                technology can solve real-world problems. I enjoy learning new programming languages and frameworks, and
                I'm always looking for opportunities to apply my knowledge.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring tech blogs, participating in hackathons, or working on
                personal projects to enhance my skills. I'm excited about the future of technology and hope to
                contribute meaningfully to the field.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/10 transition-all hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
