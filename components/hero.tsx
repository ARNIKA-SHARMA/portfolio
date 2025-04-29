"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.3 + Math.random() * 0.2,
              scale: 1,
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 text-center z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-4">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75"></div>
            <div className="relative px-6 py-2 bg-slate-900 rounded-lg">
              <span className="text-white">Hello, I'm</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Arnika Sharma
        </motion.h1>

        <motion.div variants={item}>
          <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
            <span className="typing-text">Aspiring Software Developer | Tech Enthusiast</span>
          </h2>
        </motion.div>

        

        <motion.div variants={item} className="flex justify-center space-x-6">
          {[{
            icon: <Github className="h-5 w-5" />,
            label: "GitHub",
            link: "https://github.com/ARNIKA-SHARMA", // Replace with your GitHub link
          },
          {
            icon: <Linkedin className="h-5 w-5" />,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/arnikasharma0209", // Replace with your LinkedIn link
          }].map((social, index) => (
            <motion.a
               key={index}
              href={social.link}
              target="_blank" // Open in new tab
              className="p-3 rounded-full bg-slate-800 hover:bg-purple-600 transition-colors"
              whileHover={{ y: -5 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
