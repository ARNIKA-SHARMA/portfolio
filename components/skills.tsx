"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Skill {
  name: string
  level: number
  color: string
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const programmingSkills: Skill[] = [
    { name: "Java", level: 85, color: "from-red-500 to-orange-500" },
    { name: "C++", level: 80, color: "from-blue-500 to-cyan-500" },
    { name: "Python", level: 90, color: "from-yellow-500 to-green-500" },
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
  ]

  const webSkills: Skill[] = [
    { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
    { name: "React", level: 80, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 75, color: "from-green-500 to-emerald-600" },
    { name: "PHP", level: 70, color: "from-gray-600 to-gray-800" },
  ]

  const otherSkills: Skill[] = [
    { name: "PowerBI", level: 85, color: "from-orange-600 to-red-600" },
    { name: "MongoDB", level: 75, color: "from-blue-600 to-indigo-600" },
    { name: "MySQL", level: 70, color: "from-pink-500 to-purple-500" },
  ]

  const skillCategories = [
    { title: "Programming Languages", skills: programmingSkills },
    { title: "Web Technologies", skills: webSkills },
    { title: "Tools", skills: otherSkills },
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
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-slate-900 p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-400">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.4 + skillIndex * 0.1 + categoryIndex * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            "Java",
            "C++",
            "Python",
            "JavaScript",
            "React",
            "Node.js",
            "PHP",
            "PowerBI",
            "MongoDB",
            "MySQL",
            "HTML",
            "CSS",
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 p-4 rounded-lg shadow-md hover:shadow-purple-500/20 transition-all"
              whileHover={{ y: -5, scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
            >
              <div className="text-gray-300 font-medium">{tech}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
