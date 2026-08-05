'use client';

import { motion, Variants } from "framer-motion";
import { Facebook02Icon, Globe02Icon, InstagramIcon, Linkedin02Icon, WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import ServiceCard from "@/components/LandingPage/ServiceCard";
import BenefitsCard from "@/components/LandingPage/BenefitsCard";
import Link from "next/link";
import Image from "next/image";
import Hero_Main from "@/public/images/hero-main.jpg";
import { useRef, useState } from 'react';
import { sendContactEmail } from '@/app/actions/SendEmail';

const ServiceData = [
  {
    INDEX: 1, 
    TITLE: "Web Services", 
    SUBTITLE: "Custom, fast, and scalable websites built to help your business grow and stand out online."
  },
  {
    INDEX: 2, 
    TITLE: "Mobile Development", 
    SUBTITLE: "Beautiful Android and iOS applications designed for performance, user experience, and business success."
  },
  {
    INDEX: 3, 
    TITLE: "AI & Automation", 
    SUBTITLE: "Smart AI-powered solutions, chatbots, and workflow automation that save time and increase productivity."
  },
  {
    INDEX: 4, 
    TITLE: "Custom Software Solutions", 
    SUBTITLE: "Tailor-made software, dashboards, APIs, and cloud systems built to solve your unique business challenges."
  }
];

const BenefitsData = [
  {
    BCIndex: "01",
    imgsrc: "/images/benefits/direct-collaboration.jpg",
    BCtitle: "Direct Founder Collaboration",
    BCsubtitle: "Work directly with the founder. No middlemen or account managers—just clear communication, agile decision-making, and dedicated focus on your project's success."
  },
  {
    BCIndex: "02",
    imgsrc: "/images/benefits/premium-design.webp", 
    BCtitle: "Premium Minimalist Design",
    BCsubtitle: "Stand out with sleek, modern, and user-centric interfaces. We craft high-quality visual experiences that build trust, engage users, and drive conversions."
  },
  {
    BCIndex: "03",
    imgsrc: "/images/benefits/high-performance.webp", 
    BCtitle: "High-Performance Engineering",
    BCsubtitle: "Built for speed and reliability using industry-leading tools like Next.js and robust cloud architectures to ensure your platform performs flawlessly under heavy traffic."
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Home() {

  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    const result = await sendContactEmail(formData);
    setIsPending(false);
    
    if (result.success) {
      alert('Message sent successfully!');
      formRef.current?.reset(); // Clears your form inputs
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <main className="sm:mx-8 scrollbar-none">
      
      {/* Hero Section */}
      <section>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="pt-20 w-full h-screen grid grid-rows-2 grid-cols-1 gap-2 rounded-2xl p-4"
        >
          <div className="relative w-full flex flex-col justify-end">
            <p className="text-xl font-semibold py-3">Trusted by founders from various industries</p>
            <p className="text-5xl sm:text-7xl font-general font-medium text-black">Bring your business online</p>
            <p className="text-5xl sm:text-7xl font-general font-medium text-black">With a professional <span className="text-sky-500">website</span> and <span className="text-sky-500">app</span></p>

            <motion.div 
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 12 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-10 z-40 right-1/2 w-fit rounded-2xl p-2 bg-linear-to-br from-blue-300 to-blue-500 text-gray-800"
            >
              <HugeiconsIcon icon={Globe02Icon} size={48} strokeWidth={2} />
            </motion.div>
          </div>

          <div className="relative flex w-full h-full rounded-b-2xl rounded-t-sm bg-gray-200 overflow-hidden">
              <Image src={Hero_Main} alt="hero image" fill loading="eager" className="object-cover object-center w-full h-full" />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full px-4 sm:px-10 sm:rounded-3xl bg-black my-20"
        >
          <p className="text-3xl text-white/90 font-general font-medium text-center pt-10">Our <span className="font-semibold">Services</span></p>
          
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {ServiceData.map(({ INDEX, TITLE, SUBTITLE }) => (
            <ServiceCard 
              key={INDEX} 
              index={INDEX} 
              title={TITLE} 
              subtitle={SUBTITLE} 
            />
          ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section id="benefits">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex flex-row justify-between items-end p-4 mt-20">
            <p className="text-3xl sm:text-4xl font-general text-black/95 font-medium">Enjoy all these benefits <br /> when you build with us.</p>
            <a href="/#contact" className="hidden sm:block text-sm font-semibold font-general underline underline-offset-8">Ready to get started? Contact us</a>
          </div>

          <div className="flex flex-col font-general font-medium my-8 border-y-2 border-gray-300 divide-gray-300 divide-y-2">
           {BenefitsData.map(({ BCIndex, imgsrc, BCtitle, BCsubtitle }) => (
            <BenefitsCard
              key={BCIndex}
              BCIndex={BCIndex}
              imgsrc={imgsrc}
              BCtitle={BCtitle}
              BCsubtitle={BCsubtitle}
            />
          ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full max-w-7xl mx-auto my-40"
        >
          {/* Left Column: Info */}
          <div className="flex-1 flex flex-col justify-between space-y-10 p-4">
            <div className="max-w-xl">
              <p className="text-3xl sm:text-4xl font-general font-medium text-black/95 leading-tight">
                Always ready to help you and answer your questions
              </p>
              <p className="text-md font-general font-medium text-black/70 pt-4 leading-relaxed">
                Have a technical challenge or a new project idea? WalferLab is ready to answer your questions and build your solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-lg font-general font-semibold text-black/90">Call us</p>
                <p className="text-md font-general font-medium text-black/70">+91 75979 70067</p>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-general font-semibold text-black/90">Our location</p>
                <p className="text-md font-general font-medium text-black/70">Nexus Tower, 3rd Floor, Jaipur, RJ 302033</p>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-general font-semibold text-black/90">Email</p>
                <p className="text-md font-general font-medium text-black/70">hello@walferlab.com</p>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-general font-semibold text-black/90">Social Network</p>
                <div className="flex flex-row items-center gap-3">
                  {/* Icons mapped statically for brevity */}
                  {[InstagramIcon, WhatsappIcon, Facebook02Icon, Linkedin02Icon].map((Icon, idx) => (
                    <Link key={idx} href='/' className="text-black/80 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <HugeiconsIcon icon={Icon} size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <form 
            ref={formRef}
            action={handleSubmit}
            className="flex-1 w-full max-w-lg bg-gray-200 sm:rounded-2xl p-8 space-y-8"
          >
            <div>
              <p className="text-3xl text-black/95 font-general font-medium pb-2">Get in touch</p>
              <p className="text-md text-black/60 font-general font-medium leading-relaxed">
                Tell me about your next big idea. Let's build something exceptional together.
              </p>
            </div>
            
            <div className="space-y-5">
              <input 
                type="text" 
                name="name"
                required
                className="w-full text-md text-black font-medium font-general py-2 bg-transparent outline-none border-b border-black/20 focus:border-black/90 transition-colors placeholder:text-black/40" 
                placeholder="Your Full Name" 
              />
              <input 
                type="text" 
                name="contactInfo"
                required
                className="w-full text-md text-black font-medium font-general py-2 bg-transparent outline-none border-b border-black/20 focus:border-black/90 transition-colors placeholder:text-black/40" 
                placeholder="Your Email/Mobile No." 
              />
              <input 
                type="text" 
                name="company"
                className="w-full text-md text-black font-medium font-general py-2 bg-transparent outline-none border-b border-black/20 focus:border-black/90 transition-colors placeholder:text-black/40" 
                placeholder="Your Company Name" 
              />
              <textarea 
                name="message"
                required
                className="w-full text-md text-black font-medium font-general py-2 bg-transparent outline-none border-b border-black/20 focus:border-black/90 resize-none h-28 scrollbar-none transition-colors placeholder:text-black/40" 
                placeholder="Your Message" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="w-full sm:w-auto text-white text-sm font-general font-medium bg-black/90 px-8 py-3.5 hover:bg-black rounded-full transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </section>

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
  );
}