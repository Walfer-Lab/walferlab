'use client';

import ProjectCard from "@/components/WorkPage/ProjectCard";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export const ProjectsData = [
  {
    ProjectIMG: "/Images/Projects/Ecommerce-Website.webp", 
    ProjectTitle: "Premium E-Commerce Web Application"
  },
  {
    ProjectIMG: "/Images/Projects/Dashboard.webp", 
    ProjectTitle: "AI-Powered Customer Analytics Dashboard"
  },
  {
    ProjectIMG: "/Images/Projects/Real-Estate.webp", 
    ProjectTitle: "Cross-Platform Real Estate Mobile App"
  },
  {
    ProjectIMG: "/Images/Projects/Saas-Portal.webp", 
    ProjectTitle: "Minimalist SaaS Client Portal"
  },
  {
    ProjectIMG: "/Images/Projects/Logistic-Tracking.webp", 
    ProjectTitle: "High-Performance Logistics Tracking Platform"
  },
  {
    ProjectIMG: "/Images/Projects/Workflow.webp", 
    ProjectTitle: "Automated Workflow Management System"
  },
  {
    ProjectIMG: "/Images/Projects/Wealth-Management.webp", 
    ProjectTitle: "Fintech Wealth Management Mobile App"
  },
  {
    ProjectIMG: "/Images/Projects/Healthcare-Management.webp", 
    ProjectTitle: "Custom Healthcare Scheduling Software"
  }
];

// Animation setup for a staggered grid effect
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Page() {
    return(
        <main className="mx-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-30 mb-12"
            >
                <p className="text-4xl font-general font-medium text-black/95 text-center">Our Work</p>
                <p className="text-lg font-general font-medium text-black/70 text-center">Discover high-performance apps we've shipped</p>
            </motion.div>

            {/* Added gap-6 for spacing between cards and Framer Motion wrapper */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-20"
            >
                {ProjectsData.map((project, index) => (
                    <motion.div key={index} variants={fadeUpItem}>
                        <ProjectCard 
                            title={project.ProjectTitle} 
                            imgsrc={project.ProjectIMG} 
                        />
                    </motion.div>
                ))}
            </motion.div>

      {/* Footer */}
      <section>
        <div className="flex flex-col gap-6 sm:flex-row justify-between w-full bg-black/90 sm:rounded-2xl sm:mx-2 sm:my-4 p-6 items-center">
          <div className="flex flex-col">
            <p className="text-3xl font-clash font-medium text-white text-center">Walfer Lab</p>
            <p className="text-sm text-white/60 font-general">&copy; All Rights Reserved. Walfer Lab 2026</p>
          </div>

          <div className="sm:w-sm grid grid-cols-4 sm:grid-cols-2 gap-3 text-sm font-general font-medium tracking-wide text-white/80">
            <Link href='/work'>Our work</Link>
            <Link href='/career'>Career</Link>
            <Link href='/#services'>Services</Link>
            <Link href='/#contact'>Contact</Link>
          </div>
        </div>
      </section>
        </main>
    )
}