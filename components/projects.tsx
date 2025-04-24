/*"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  githubLink: string
  demoLink: string
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product catalog, and payment integration.",
      image: "/placeholder.svg?height=200&width=400",
      techStack: ["React"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Restaurant Website",
      description: "A modern, responsive website for restaurants that showcases the menu, location, and enables customers to book tables online. It ensures a seamless user experience with a clean and user-friendly interface..",
      //image: "/placeholder.svg?height=200&width=400",
      techStack: ["PHP","HTML","CSS","JavaScript"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Chat Application",
      description: "A real-time messaging platform built using Node.js and WebSocket, allowing users to send and receive instant messages. The application features user authentication and private messaging, providing a secure and interactive communication space.",
      //image: "/placeholder.svg?height=200&width=400",
      techStack: ["NodeJS", "HTML/CSS", "JavaScript"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Pollution Monitoring Dashboard",
      description: "A Power BI dashboard designed to visualize air quality data, displaying real-time pollutant levels (PM10, PM2.5, Ozone, CO, NO2) across various regions. It helps track and analyze pollution trends for better environmental awareness and decision-making..",
      //image: "/placeholder.svg?height=200&width=400",
      techStack: ["PowerBI"],
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
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
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
                <CardFooter className="flex justify-between mt-auto">
                  <Button variant="outline" size="sm" className="group">
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700 group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}*/

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  description: string
  techStack: string[]
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product catalog, and payment integration.",
      techStack: ["React"],
    },
    {
      title: "Restaurant Website",
      description: "A modern, responsive website for restaurants that showcases the menu, location, and enables customers to book tables online. It ensures a seamless user experience with a clean and user-friendly interface.",
      techStack: ["PHP","HTML","CSS","JavaScript"],
    },
    {
      title: "Chat Application",
      description: "A real-time messaging platform built using Node.js and WebSocket, allowing users to send and receive instant messages. The application features user authentication and private messaging, providing a secure and interactive communication space.",
      techStack: ["NodeJS", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Pollution Monitoring Dashboard",
      description: "A Power BI dashboard designed to visualize air quality data, displaying real-time pollutant levels (PM10, PM2.5, Ozone, CO, NO2) across various regions. It helps track and analyze pollution trends for better environmental awareness and decision-making.",
      techStack: ["PowerBI"],
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
