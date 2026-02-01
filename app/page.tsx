'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Users, Briefcase, Clock, TrendingUp, Play, Sparkles, Shield, Zap, Mail, Phone, ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isNavScrolled, setIsNavScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsNavScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Premium Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isNavScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Image
              src="/payago-logo.png"
              alt="PayaGo Recruitment"
              width={1150}
              height={412}
              className="h-10 md:h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {['How it works', 'Why PayaGo', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className="hidden md:flex btn-premium text-sm px-6 py-2 h-auto"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/20 p-6 animate-fade-down shadow-xl">
            <div className="flex flex-col gap-6">
              {['How it works', 'Why PayaGo', 'Contact'].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button
                className="btn-premium w-full mt-2"
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')
                  setIsMobileMenuOpen(false)
                }}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Animated Mesh Background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary gradient blob */}
          <div
            className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#6366F1]/20 rounded-full blur-[120px] animate-blob"
            style={{ animationDelay: '0s' }}
          />
          {/* Secondary gradient blob */}
          <div
            className="absolute -bottom-1/4 right-0 w-[600px] h-[600px] bg-[#8B5CF6]/20 rounded-full blur-[100px] animate-blob"
            style={{ animationDelay: '-5s' }}
          />
          {/* Accent blob */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[80px] animate-mesh-float"
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 text-center space-y-8 max-w-6xl mx-auto pt-24">
          {/* Tag Line */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground border border-white/10">
              <Sparkles className="w-4 h-4 text-[#6366F1]" />
              <span>Trusted by 500+ businesses nationwide</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-fade-up delay-100">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
              <span className="block text-foreground">Connect with the</span>
              <span className="block gradient-text mt-2">workforce you need</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
            PayaGo instantly matches businesses with vetted warehouse workers.
            <span className="text-foreground font-medium"> Fast. Reliable. Transparent.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up delay-300">
            <Button
              size="lg"
              className="btn-premium text-base px-8 h-14 group"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
            >
              Request Workers
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="btn-outline-premium text-base px-8 h-14"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScjk2f5D1FPD9vdq53x4zkgxzx0UzK8f9zZNcde6zIHQmF2kg/viewform?usp=publish-editor', '_blank')}
            >
              Register as Worker
            </Button>
          </div>

          {/* Stats Row */}
          <div className="pt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up delay-400">
            {[
              { value: '10K+', label: 'Workers' },
              { value: '500+', label: 'Companies' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
            <ChevronDown className="w-4 h-4 text-white/40 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 md:py-32 px-6 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              See PayaGo <span className="gradient-text">in action</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Watch how our intelligent matching system connects you with the right workers in real-time
            </p>
          </div>

          {/* Video Container */}
          <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl aspect-video group cursor-pointer">
            <Image
              src="/workflow-process.png"
              alt="PayaGo workflow process"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 bg-[#6366F1]/30 rounded-full animate-ping" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-lg shadow-[#6366F1]/40 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-[#6366F1]" />
              Simple & Fast
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              How it <span className="gradient-text">works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get started in minutes, not days
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* For Businesses */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">For Businesses</h3>
              </div>

              <div className="space-y-6">
                {[
                  { step: '01', title: 'Request Workers', desc: 'Tell us your staffing needs and timeline' },
                  { step: '02', title: 'Instant Matching', desc: 'Get matched with vetted workers instantly' },
                  { step: '03', title: 'Start Working', desc: 'Workers arrive ready to work immediately' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-sm font-bold text-[#6366F1] group-hover:bg-[#6366F1]/20 transition-all">
                        {item.step}
                      </div>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-[#6366F1] transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="btn-premium mt-4"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
              >
                Request Workers
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* For Workers */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">For Workers</h3>
              </div>

              <div className="space-y-6">
                {[
                  { step: '01', title: 'Create Profile', desc: 'Sign up and complete your worker profile' },
                  { step: '02', title: 'Get Job Offers', desc: 'Receive opportunities matching your skills' },
                  { step: '03', title: 'Earn & Build', desc: 'Work flexible shifts and grow your income' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-sm font-bold text-[#8B5CF6] group-hover:bg-[#8B5CF6]/20 transition-all">
                        {item.step}
                      </div>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-[#8B5CF6] transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="btn-outline-premium mt-4"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScjk2f5D1FPD9vdq53x4zkgxzx0UzK8f9zZNcde6zIHQmF2kg/viewform?usp=publish-editor', '_blank')}
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why PayaGo Section */}
      <section id="why-payago" className="py-24 md:py-32 px-6 relative">
        {/* Background elements */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#8B5CF6]/5 rounded-full blur-[80px]" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-[#6366F1]" />
              Trusted Platform
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Why choose <span className="gradient-text">PayaGo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Built for reliability. Designed for growth.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Vetted Workforce', desc: 'All workers verified and thoroughly screened for quality', gradient: 'from-[#6366F1] to-[#8B5CF6]' },
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock customer support always available', gradient: 'from-[#8B5CF6] to-[#A78BFA]' },
              { icon: TrendingUp, title: 'Fair Pricing', desc: 'Transparent pricing with no hidden fees', gradient: 'from-[#6366F1] to-[#818CF8]' },
              { icon: Check, title: 'Quality Assured', desc: 'Performance tracking and quality guarantees', gradient: 'from-[#7C3AED] to-[#8B5CF6]' },
              { icon: Briefcase, title: 'Easy Integration', desc: 'Seamless onboarding for businesses', gradient: 'from-[#818CF8] to-[#6366F1]' },
              { icon: Zap, title: 'Instant Matching', desc: 'Real-time worker matching technology', gradient: 'from-[#A78BFA] to-[#8B5CF6]' },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-8 card-hover group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:gradient-text transition-all">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Stats Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 group">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/growth-stats.png"
                  alt="Growth statistics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold gradient-text">80%</div>
                    <div className="text-sm text-muted-foreground">Faster Hiring</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-[#6366F1]" />
                  Proven Results
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Rapid Growth & <span className="gradient-text">Impact</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                PayaGo has connected over 10,000 workers with 500+ businesses across major warehouses.
                Our intelligent matching algorithm reduces hiring time by 80% while ensuring quality and reliability.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10,000+', label: 'vetted workers' },
                  { value: '500+', label: 'partner businesses' },
                  { value: '80%', label: 'faster hiring' },
                  { value: '99.2%', label: 'job completion' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card rounded-xl p-5 group hover:bg-[#6366F1]/10 transition-colors">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-[#6366F1]" />
                  Our Team
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Dedicated to <span className="gradient-text">your success</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experts is committed to making workforce management simple, fast, and transparent.
                We're here to support both businesses and workers every step of the way.
              </p>

              <ul className="space-y-4">
                {[
                  'Expert support team',
                  'Continuous innovation',
                  'Community-focused approach',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 order-1 lg:order-2 group">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/team-collaboration.png"
                  alt="PayaGo team collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[150px]" />

        <div className="max-w-4xl mx-auto text-center relative space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ready to transform<br />
              <span className="gradient-text">your workforce?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses and workers already using PayaGo
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="btn-premium text-base px-10 h-14 group"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
            >
              Request Workers Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="btn-outline-premium text-base px-10 h-14"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScjk2f5D1FPD9vdq53x4zkgxzx0UzK8f9zZNcde6zIHQmF2kg/viewform?usp=publish-editor', '_blank')}
            >
              Register as Worker
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border/50 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/payago-logo.png"
                  alt="PayaGo Recruitment"
                  width={160}
                  height={36}
                  className="h-9 w-auto opacity-90"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Connecting businesses with vetted warehouse workers instantly. Fast, reliable, transparent.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                UK Registered Company
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-4">
                {['For Businesses', 'For Workers', 'Pricing', 'Features'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-all">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                {['About', 'Blog', 'Careers', 'Press'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-block transition-all">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-[#6366F1]" />
                  support@payagorecruitment.uk
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-[#6366F1]" />
                  +44 7721 873786
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 PayaGo. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((item, i) => (
                <a key={i} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
