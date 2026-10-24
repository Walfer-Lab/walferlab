import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-white py-24 px-6 md:px-12 text-center border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0F52BA] font-semibold text-sm rounded-full tracking-wide">
            Founder-Led Venture Studio & Full-Stack Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            We Help Startups & Businesses <br className="hidden md:block" />
            <span className="text-[#0F52BA]">Set Up, Build, and Grow</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            WalferLab is your dedicated software and venture studio partner. Founded by Ramesh Beniwal, we turn ambitious ideas into market-defining digital products with end-to-end strategy, engineering, and growth.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#quote"
              className="px-8 py-3.5 bg-[#0F52BA] text-white font-medium rounded-lg hover:bg-[#0C4194] transition shadow-md w-full sm:w-auto"
            >
              Request a Quote
            </Link>
            <Link
              href="/venture-studio"
              className="px-8 py-3.5 bg-slate-100 text-slate-800 font-medium rounded-lg hover:bg-slate-200 transition w-full sm:w-auto border border-slate-200"
            >
              Explore Our Model
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Services Overview</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Full-stack engineering, product design, and strategic execution tailored for scaling enterprises and startups.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0F52BA] transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0F52BA] flex items-center justify-center font-bold text-xl mb-6">01</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Web & WebApps</h3>
            <p className="text-slate-600 leading-relaxed mb-4">High-performance Next.js and React applications built for speed, conversion, and accessibility.</p>
            <Link href="/services/web-development" className="text-[#0F52BA] font-semibold hover:underline">Learn more &rarr;</Link>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0F52BA] transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0F52BA] flex items-center justify-center font-bold text-xl mb-6">02</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Mobile Engineering</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Cross-platform iOS & Android mobile solutions delivering native performance and intuitive UX.</p>
            <Link href="/services/mobile-development" className="text-[#0F52BA] font-semibold hover:underline">Learn more &rarr;</Link>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0F52BA] transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0F52BA] flex items-center justify-center font-bold text-xl mb-6">03</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">AI & Automation</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Smart AI integration, custom LLM workflows, and automated pipeline optimizations.</p>
            <Link href="/services/ai-automation" className="text-[#0F52BA] font-semibold hover:underline">Learn more &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 3-Phase Venture Studio Model */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#0F52BA] font-bold uppercase tracking-wider text-sm">Our Methodology</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The 3-Phase Venture Studio Model</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">From strategic inception to sustained ecosystem scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="text-5xl font-extrabold text-blue-100 absolute top-6 right-6">01</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Set Up</h3>
              <p className="text-slate-600 leading-relaxed">Discovery, domain architecture, product design, technology stack selection, and go-to-market roadmap definition.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="text-5xl font-extrabold text-blue-100 absolute top-6 right-6">02</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Build</h3>
              <p className="text-slate-600 leading-relaxed">Agile full-stack software development, rigorous QA testing, secure cloud infrastructure setup, and rapid MVP deployment.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="text-5xl font-extrabold text-blue-100 absolute top-6 right-6">03</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Grow</h3>
              <p className="text-slate-600 leading-relaxed">Data-driven performance optimization, feature scaling, SEO, user acquisition acceleration, and continuous engineering support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Case Studies */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected Case Studies</h2>
            <p className="text-slate-600 mt-2">Real products built and scaled with WalferLab venture architecture.</p>
          </div>
          <Link href="/work" className="text-[#0F52BA] font-semibold mt-4 md:mt-0 hover:underline">
            View All Work &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-[#0F52BA] rounded-full">SaaS & FinTech</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2">Automated Venture Financial Platform</h3>
            <p className="text-slate-600 mb-6">Designed and deployed an automated accounting and financial intelligence suite for high-growth startups.</p>
            <Link href="/work/fintech-suite" className="text-[#0F52BA] font-semibold hover:underline">Read Case Study &rarr;</Link>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-[#0F52BA] rounded-full">AI Platform</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2">Enterprise AI Workflow Engine</h3>
            <p className="text-slate-600 mb-6">Built an intelligent document parser and enterprise agent orchestrator reducing manual processing by 85%.</p>
            <Link href="/work/ai-workflow-engine" className="text-[#0F52BA] font-semibold hover:underline">Read Case Study &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 px-6 md:px-12 bg-blue-50/60 border-y border-blue-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 italic leading-snug">
            &ldquo;At WalferLab, we don&apos;t just build code—we take complete founder-level ownership of products, aligning engineering precision with real business growth.&rdquo;
          </blockquote>
          <div>
            <div className="font-bold text-slate-900 text-lg">Ramesh Beniwal</div>
            <div className="text-[#0F52BA] font-medium text-sm">Founder & Lead Architect, WalferLab</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-600 mt-2">Everything you need to know about partnering with WalferLab.</p>
        </div>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">How does the Venture Studio model differ from a traditional agency?</h3>
            <p className="text-slate-600">We work as your long-term full-stack software partner, taking strategic responsibility for product success, architecture, and growth rather than just delivering isolated tasks.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">What tech stacks do you specialize in?</h3>
            <p className="text-slate-600">We specialize in Next.js, React, React Native, TypeScript, Tailwind CSS v4, Node.js, Python AI services, and modern cloud platforms.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">How fast can we launch our product?</h3>
            <p className="text-slate-600">Our streamlined Set Up & Build methodology allows us to take initial product concepts to market MVPs in 4 to 8 weeks.</p>
          </div>
        </div>
      </section>

      {/* Request a Quote CTA */}
      <section id="quote" className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#0F52BA] to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold">Ready to Build Your Venture?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get in touch with Ramesh Beniwal and the WalferLab team to get a detailed quote and product architecture breakdown.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#0F52BA] font-bold text-lg rounded-xl hover:bg-blue-50 transition shadow-lg"
            >
              Request a Quote Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
