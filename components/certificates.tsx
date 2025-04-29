"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"

interface Certificate {
  title: string
  issuer: string
  date: string
  image: string
  caption: string
}

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const certificates: Certificate[] = [
    {
      title: "Server Side JavaScript with Node.js",
      issuer: "NIIT & Coursera",
      date: "May 13, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28639%29-pPqN0TB7V15oEcg5ihVFYn4rejdAnI.png",
      caption:
        "Mastered server-side JavaScript programming with Node.js, including Express frameworks and API development.",
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University & Coursera",
      date: "March 2, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28640%29-ciLXZ690MN8MX36DicHiY6GOXlEXdp.png",
      caption: "Learned advanced techniques for crafting effective prompts for AI language models like ChatGPT.",
    },
    {
      title: "Building Web Applications in PHP",
      issuer: "University of Michigan & Coursera",
      date: "December 2, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28641%29-33CL1byM1atf19SHTlanXV5XDyP9Te.png",
      caption:
        "Developed skills in creating dynamic web applications using PHP, MySQL, and modern web development practices.",
    },
    {
      title: "Become a Data Scientist",
      issuer: "LinkedIn Learning",
      date: "February 19, 2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28642%29-IYTA27C6FZir8aEbHsN9l74k1WHrOI.png",
      caption:
        "Comprehensive training in data science fundamentals including Big Data, Data Analysis, Data Visualization, and Statistics.",
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
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full w-full">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="object-contain w-full h-full"
                    width={800}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-purple-500 mr-2" />
                  <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
                </div>
                <p className="text-purple-400 mb-2">{certificate.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">{certificate.date}</p>
                <p className="text-gray-300 text-sm italic">{certificate.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
