"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  githubLink?: string
  demoLink?: string
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product catalog, and payment integration.",
      image: "/images/ecommerce-project.png",
      techStack: ["React", "HTML/CSS", "JavaScript"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Restaurant Website",
      description:
        "A modern, responsive website for restaurants that showcases the menu, location, and enables customers to book tables online.",
      image: "/images/restaurant-project.png",
      techStack: ["React", "HTML/CSS", "JavaScript"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Chat Application",
      description:
        "A real-time messaging platform built using Node.js and WebSocket, allowing users to send and receive instant messages.",
      image: "/images/chat-project.png",
      techStack: ["Node.js", "HTML/CSS", "JavaScript"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Pollution Monitoring Dashboard",
      description:
        "A data visualization dashboard for pollution monitoring with various charts showing pollutant levels across different regions.",
      image: "/images/pollution-dashboard.png",
      techStack: ["Power BI"],
      githubLink: "#",
      demoLink: "#",
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
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="bg-slate-800 border-slate-700 overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="overflow-hidden h-56 relative">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      width={600}
                      height={300}
                    />
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-slate-700 hover:bg-slate-600">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
