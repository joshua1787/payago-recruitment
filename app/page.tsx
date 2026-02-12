'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Users, Briefcase, Clock, TrendingUp, Sparkles, Shield, Zap, Mail, Phone, Menu, X, ChevronDown, Moon, FileText, PoundSterling, Handshake, UserCheck, ChevronRight, ArrowUpRight, Star } from 'lucide-react'
import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isNavScrolled, setIsNavScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Parallax tilt on hero image — only desktop
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return
    const card = e.currentTarget.querySelector('.tilt-card') as HTMLElement
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
  }, [])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.tilt-card') as HTMLElement
    if (card) card.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }, [])

  // Auto-cycle steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 4000)
    return () => clearInterval(interval)
  }, [])



  const steps = [
    {
      step: '01',
      icon: Briefcase,
      title: 'Warehouse Shares Requirement',
      desc: 'Role (picker / packer / loader), shift (day / night), headcount, and start date.',
      color: '#00D4FF',
    },
    {
      step: '02',
      icon: Users,
      title: 'PayaGo Sources Workers',
      desc: 'Pre-registered, Right-to-Work checked, shift-ready candidates deployed fast.',
      color: '#4F7DF5',
    },
    {
      step: '03',
      icon: UserCheck,
      title: 'Workers Deployed',
      desc: 'Workers attend shifts as scheduled. On-site attendance confirmed same day.',
      color: '#8B5CF6',
    },
    {
      step: '04',
      icon: Shield,
      title: 'Payroll & Compliance',
      desc: 'Workers paid via PAYE umbrella. Holiday pay, NI, tax — fully handled.',
      color: '#10B981',
    },
    {
      step: '05',
      icon: FileText,
      title: 'Simple Invoicing',
      desc: 'Weekly invoice with one transparent, all-inclusive hourly rate. No surprises.',
      color: '#F59E0B',
    },
  ]

  const usps = [
    {
      icon: Moon,
      title: 'Night-Shift & Short-Notice Focus',
      quote: '"We specialise in night shifts and last-minute cover, where many agencies struggle."',
      tagline: 'Night shifts = our edge.',
      color: '#00D4FF',
      bgColor: 'rgba(0, 212, 255, 0.06)',
    },
    {
      icon: Shield,
      title: 'Compliance-First',
      quote: '"All workers are paid via PAYE umbrella with full Right-to-Work and HMRC compliance."',
      tagline: 'This removes legal fear.',
      color: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.06)',
    },
    {
      icon: PoundSterling,
      title: 'Simple Pricing — No Tricks',
      quote: '"One all-inclusive hourly rate. No hidden fees."',
      tagline: 'Warehouses hate surprises.',
      color: '#F59E0B',
      bgColor: 'rgba(245, 158, 11, 0.06)',
    },
    {
      icon: Handshake,
      title: 'Trial-Friendly Agency',
      quote: '"We\'re happy to start with a small trial so you can test reliability before scaling."',
      tagline: 'This is how new agencies build trust.',
      color: '#8B5CF6',
      bgColor: 'rgba(139, 92, 246, 0.06)',
    },
    {
      icon: UserCheck,
      title: 'Direct Accountability',
      quote: '"You deal with one point of contact. If there\'s a problem, we fix it immediately."',
      tagline: 'Big agencies don\'t do this well. We do.',
      color: '#F43F5E',
      bgColor: 'rgba(244, 63, 94, 0.06)',
    },
  ]

  return (
    <main className="min-h-screen bg-[#050508] text-[#EDEDED] overflow-x-hidden">
      {/* ============================================
          NAVIGATION
          ============================================ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isNavScrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e: React.MouseEvent) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Image
              src="/payago-logo.png"
              alt="PayaGo Recruitment"
              width={1150}
              height={412}
              className="h-14 md:h-18 w-auto object-contain object-left"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {[
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Why PayaGo', href: '#why-payago' },
              { label: 'Contact', href: '#contact' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-[13px] font-medium text-white/40 hover:text-white transition-all duration-300 tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              className="btn-hero text-sm !px-6 !py-2.5"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 nav-scrolled border-t border-white/5 p-6 animate-fade-down shadow-2xl">
            <div className="flex flex-col gap-5">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Why PayaGo', href: '#why-payago' },
                { label: 'Contact', href: '#contact' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-lg font-medium text-white/60 hover:text-white transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-white/5" />
              <button
                className="btn-hero w-full justify-center"
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')
                  setIsMobileMenuOpen(false)
                }}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================
          HERO — Cinematic with Aurora & 3D
          ============================================ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
        {/* Aurora mesh orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="aurora-orb-1 absolute -top-[20%] -left-[15%] w-[600px] h-[600px] bg-[#00D4FF]/[0.07] rounded-full blur-[180px]" />
          <div className="aurora-orb-2 absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#8B5CF6]/[0.06] rounded-full blur-[160px]" />
          <div className="aurora-orb-3 absolute -bottom-[20%] left-[30%] w-[450px] h-[450px] bg-[#4F7DF5]/[0.05] rounded-full blur-[140px]" />
          {/* Subtle grid */}
          <div className="absolute inset-0 grid-bg" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-[13px] text-white/50 font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                  UK Warehouse Staffing Agency
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2 animate-fade-up delay-100">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.04em] leading-[0.95]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                  <span className="block text-white animate-text-reveal delay-200">Warehouse</span>
                  <span className="block text-white animate-text-reveal delay-400">Staffing</span>
                  <span className="block gradient-text-hero animate-text-reveal delay-600">That Actually Works.</span>
                </h1>
              </div>

              {/* Subhead */}
              <div className="animate-fade-up delay-500">
                <p className="text-lg md:text-xl text-white/30 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                  Night shifts. Short notice. Full compliance. One call.<br />
                  <span className="text-white/55 font-normal">We manage everything so you don't have to.</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-600">
                <button
                  className="btn-hero"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
                >
                  Get Started — It's Free
                  <ArrowRight className="w-5 h-5" />
                </button>

              </div>

              {/* Inline trust */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 pt-2">
                {[
                  { text: 'Night Shift Specialists', color: '#00D4FF' },
                  { text: 'HMRC Compliant', color: '#10B981' },
                  { text: 'Same-Day Cover', color: '#8B5CF6' },
                ].map((item, i) => (
                  <span key={i} className={`flex items-center gap-2 text-[13px] text-white/25 animate-badge-pop`} style={{ animationDelay: `${800 + i * 150}ms` }}>
                    <Check className="w-3.5 h-3.5" style={{ color: item.color }} />
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Hero Image with 3D tilt */}
            <div
              className="relative hidden lg:block perspective-container animate-fade-up delay-300"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="tilt-card relative">
                <div className="card-gradient-border">
                  <div className="relative h-[520px] rounded-[23px] overflow-hidden">
                    <Image
                      src="/warehouse-hero.png"
                      alt="Modern warehouse operations"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/40 to-transparent" />
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -bottom-8 -left-8 glass-panel p-5 animate-float z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white tracking-tight">24/7</div>
                      <div className="text-xs text-white/30 font-medium tracking-wide uppercase">Shift Coverage</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 glass-panel px-5 py-3.5 animate-float z-20" style={{ animationDelay: '3s' }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-sm font-semibold text-white tracking-tight">PAYE Compliant</span>
                  </div>
                </div>
              </div>

              {/* Ambient glow behind card */}
              <div className="absolute -inset-10 bg-gradient-radial from-[#00D4FF]/[0.04] to-transparent rounded-full -z-10 animate-pulse-glow" />
            </div>

            {/* Mobile hero */}
            <div className="lg:hidden relative animate-fade-up delay-300">
              <div className="card-gradient-border">
                <div className="relative h-[300px] rounded-[23px] overflow-hidden">
                  <Image
                    src="/warehouse-hero.png"
                    alt="Modern warehouse operations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/15 uppercase tracking-[0.2em] font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/20 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST MARQUEE — Infinite scroll badges
          ============================================ */}
      <section className="py-6 border-y border-white/[0.03] bg-white/[0.01] overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-12">
              {[
                'Night Shift Experts',
                '✦',
                'HMRC & PAYE Compliant',
                '✦',
                'Same-Day Deployment',
                '✦',
                'No Hidden Fees',
                '✦',
                'Right-to-Work Checked',
                '✦',
                'One All-Inclusive Rate',
                '✦',
                'Direct Accountability',
                '✦',
                'Trial-Friendly',
                '✦',
              ].map((item, i) => (
                <span key={`${setIdx}-${i}`} className={`text-sm font-medium ${item === '✦' ? 'text-[#00D4FF]/30 text-lg' : 'text-white/20'}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          HOW PAYAGO WORKS — Interactive Timeline
          ============================================ */}
      <section id="how-it-works" className="py-28 md:py-36 px-6 relative section-line noise-overlay">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#00D4FF]/60 mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
              From requirement<br />
              <span className="gradient-text-hero">to invoice.</span>
            </h2>
            <p className="text-lg text-white/25 mt-6 max-w-xl mx-auto font-light">
              Five steps. Fully managed. You focus on your warehouse.
            </p>
          </div>

          {/* Step Navigator + Detail */}
          <div className="grid lg:grid-cols-5 gap-8 animate-on-scroll">
            {/* Timeline Nav — horizontal on desktop */}
            <div className="lg:col-span-2 space-y-2">
              {steps.map((item, i) => {
                const Icon = item.icon
                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`step-card w-full text-left p-5 flex items-center gap-4 ${activeStep === i ? 'active' : ''}`}
                  >
                    {/* Number */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-500"
                      style={{
                        background: activeStep === i ? `${item.color}15` : 'rgba(255,255,255,0.03)',
                        color: activeStep === i ? item.color : 'rgba(255,255,255,0.2)',
                        boxShadow: activeStep === i ? `0 0 20px ${item.color}15` : 'none',
                      }}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-[15px] transition-colors duration-500 ${activeStep === i ? 'text-white' : 'text-white/35'}`}>
                        {item.title}
                      </h4>
                      {activeStep === i && (
                        <p className="text-[13px] text-white/30 mt-1 animate-fade-in leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    {/* Progress indicator */}
                    {activeStep === i && (
                      <div className="w-1 h-8 rounded-full animate-fade-in" style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }} />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Detail Card */}
            <div className="lg:col-span-3 relative">
              <div className="card-gradient-border h-full">
                <div className="p-10 md:p-14 h-full flex flex-col justify-between relative overflow-hidden rounded-[23px]">
                  {/* Background glow */}
                  <div
                    className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px] transition-all duration-1000 opacity-20"
                    style={{ background: steps[activeStep].color }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="icon-glow mb-8 transition-all duration-500"
                      style={{
                        background: `${steps[activeStep].color}10`,
                        '--icon-color': `${steps[activeStep].color}40`,
                      } as React.CSSProperties}
                    >
                      {(() => {
                        const Icon = steps[activeStep].icon
                        return <Icon className="w-7 h-7 transition-colors duration-500" style={{ color: steps[activeStep].color }} />
                      })()}
                    </div>

                    {/* Label */}
                    <div
                      className="text-xs font-bold tracking-[0.25em] uppercase mb-4 transition-colors duration-500"
                      style={{ color: `${steps[activeStep].color}80` }}
                    >
                      Step {steps[activeStep].step} of 05
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 transition-all duration-500" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                      {steps[activeStep].title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/35 text-lg leading-relaxed max-w-md">
                      {steps[activeStep].desc}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="relative z-10 mt-10">
                    <div className="flex gap-2">
                      {steps.map((_, i) => (
                        <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-white/[0.04]">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: i <= activeStep ? '100%' : '0%',
                              background: i <= activeStep ? `linear-gradient(90deg, ${steps[i].color}60, ${steps[i].color})` : 'transparent',
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-16 animate-on-scroll">
            <div className="max-w-3xl mx-auto glass-panel p-8 md:p-10 text-center border border-[#00D4FF]/10">
              <p className="text-lg md:text-xl font-semibold text-white/80 leading-relaxed">
                👉 Warehouse does <span className="gradient-text-cyan font-bold">NOT</span> deal with workers directly.<br />
                👉 PayaGo manages <span className="gradient-text-cyan font-bold">everything</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CAPABILITIES — Premium Icon Strip
          ============================================ */}
      <section className="py-20 md:py-28 px-6 relative section-line">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 animate-on-scroll">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Same-Day Deployment', desc: 'Requirement in, workers deployed — often within hours.', color: '#00D4FF', glow: 'rgba(0,212,255,0.08)' },
              { icon: <Shield className="w-6 h-6" />, title: 'Full PAYE Compliance', desc: 'Every worker paid via PAYE umbrella. HMRC compliant, always.', color: '#10B981', glow: 'rgba(16,185,129,0.08)' },
              { icon: <Moon className="w-6 h-6" />, title: 'Night Shift Experts', desc: 'We thrive where others don\'t — nights, weekends, peak season.', color: '#8B5CF6', glow: 'rgba(139,92,246,0.08)' },
              { icon: <UserCheck className="w-6 h-6" />, title: 'Dedicated Manager', desc: 'One point of contact. Direct accountability. No runaround.', color: '#F59E0B', glow: 'rgba(245,158,11,0.08)' },
            ].map((item, i) => (
              <div key={i} className="group relative" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="card-gradient-border h-full">
                  <div className="p-7 md:p-8 rounded-[23px] h-full relative overflow-hidden">
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: `radial-gradient(circle at 30% 30%, ${item.glow}, transparent 70%)` }}
                    />
                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                        style={{ background: `${item.color}10`, color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-white text-[15px] mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-[13px] text-white/25 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHY PAYAGO — Staggered Cards with Color Coding
          ============================================ */}
      <section id="why-payago" className="py-28 md:py-36 px-6 relative section-line noise-overlay">
        {/* Ambient glows */}
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#8B5CF6]/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#00D4FF]/[0.03] rounded-full blur-[150px]" />

        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#8B5CF6]/60 mb-4">The PayaGo Edge</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
              Why choose<br />
              <span className="gradient-text-multi">PayaGo?</span>
            </h2>
            <p className="text-lg text-white/25 mt-6 max-w-xl mx-auto font-light">
              Warehouses care about reliability. Here's why we deliver.
            </p>
          </div>

          {/* USP Grid — 2 col with hero card */}
          <div className="grid md:grid-cols-2 gap-6">
            {usps.slice(0, 4).map((usp, i) => {
              const Icon = usp.icon
              return (
                <div key={i} className={`card-gradient-border animate-on-scroll ${i % 2 === 1 ? 'md:translate-y-12' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="p-8 md:p-10 rounded-[23px] h-full relative overflow-hidden group">
                    {/* Subtle bg glow */}
                    <div
                      className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                      style={{ background: usp.color }}
                    />
                    <div className="relative z-10">
                      <div
                        className="icon-glow mb-6 group-hover:scale-110 transition-transform duration-500"
                        style={{
                          background: usp.bgColor,
                          '--icon-color': `${usp.color}30`,
                        } as React.CSSProperties}
                      >
                        <Icon className="w-6 h-6" style={{ color: usp.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{usp.title}</h3>
                      <p className="text-white/30 leading-relaxed text-[15px]">{usp.quote}</p>
                      <p className="font-semibold text-sm mt-4" style={{ color: usp.color }}>{usp.tagline}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Hero USP card — full width */}
          <div className="mt-10 animate-on-scroll">
            <div className="card-gradient-border">
              <div className="grid lg:grid-cols-5 rounded-[23px] overflow-hidden">
                {/* Image */}
                <div className="relative h-[280px] lg:h-auto lg:col-span-2 overflow-hidden group">
                  <Image
                    src="/warehouse-partnership.png"
                    alt="Direct accountability"
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0F] hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent lg:hidden" />
                </div>
                {/* Content */}
                <div className="p-10 md:p-14 lg:col-span-3 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#F43F5E]/[0.04] rounded-full blur-[100px]" />
                  <div className="relative z-10">
                    <div
                      className="icon-glow mb-8"
                      style={{
                        background: usps[4].bgColor,
                        '--icon-color': `${usps[4].color}30`,
                      } as React.CSSProperties}
                    >
                      <UserCheck className="w-7 h-7 text-[#F43F5E]" />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                      Direct Accountability
                    </h3>
                    <p className="text-white/30 text-lg leading-relaxed mb-5 max-w-lg">
                      {usps[4].quote}
                    </p>
                    <p className="text-[#F43F5E] font-semibold text-base">{usps[4].tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          OPERATIONS — Split Content + Image
          ============================================ */}
      <section className="py-28 md:py-36 px-6 relative section-line noise-overlay">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8 animate-on-scroll">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#10B981]/60 mb-4">Built for Warehouses</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                  Your shifts,<br />
                  <span className="gradient-text-cyan">covered.</span>
                </h2>
              </div>

              <p className="text-lg text-white/25 leading-relaxed font-light">
                Whether it's a 20-person night shift or emergency cover for tomorrow morning, PayaGo has the pre-vetted, shift-ready workforce to keep your warehouse running.
              </p>

              <ul className="space-y-4">
                {[
                  { text: 'Pre-vetted, Right-to-Work checked workers', color: '#00D4FF' },
                  { text: 'Day shifts, night shifts, weekends', color: '#4F7DF5' },
                  { text: 'Pickers, packers, loaders, forklift operators', color: '#8B5CF6' },
                  { text: 'On-site attendance confirmed same day', color: '#10B981' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                      style={{ background: `${item.color}10` }}
                    >
                      <Check className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-[15px] text-white/45 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <button
                className="btn-hero mt-2"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
              >
                Request Workers
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="relative animate-on-scroll delay-200">
              <div className="card-gradient-border">
                <div className="relative h-[420px] lg:h-[520px] rounded-[23px] overflow-hidden group">
                  <Image
                    src="/warehouse-operations.png"
                    alt="Warehouse night shift operations"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent" />
                </div>
              </div>
              {/* Ambient glow */}
              <div className="absolute -inset-8 bg-[#4F7DF5]/[0.03] rounded-full blur-[80px] -z-10 animate-pulse-glow" />
            </div>
          </div>
        </div>
      </section>



      {/* ============================================
          CTA — Abstract gradient
          ============================================ */}
      <section className="py-28 md:py-36 px-6 relative overflow-hidden section-line noise-overlay">
        {/* Cinematic background */}
        <div className="absolute inset-0">
          <div className="aurora-orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00D4FF]/[0.06] rounded-full blur-[200px]" />
          <div className="aurora-orb-3 absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-[#8B5CF6]/[0.05] rounded-full blur-[150px]" />
          <div className="absolute inset-0 dot-bg" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.05]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
              Ready to fill your<br />
              <span className="gradient-text-hero">next shift?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/25 max-w-2xl mx-auto font-light">
              Start with a small trial. Test our reliability. Scale when you're ready.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              className="btn-hero group"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="btn-glass"
              onClick={() => {
                const el = document.getElementById('contact')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer id="contact" className="border-t border-white/[0.04] bg-[#030306]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/payago-logo.png"
                  alt="PayaGo Recruitment"
                  width={160}
                  height={36}
                  className="h-14 w-auto opacity-70"
                />
              </div>
              <p className="text-white/20 leading-relaxed text-sm">
                UK warehouse staffing agency specialising in night shifts, short-notice cover, and full PAYE compliance.
              </p>
              <p className="text-xs text-white/10 mt-4">UK Registered Company</p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-sm text-white/60 tracking-wide uppercase">Services</h4>
              <ul className="space-y-3">
                {['Warehouse Staffing', 'Night Shift Cover', 'Short-Notice Workers', 'Payroll & Compliance'].map((item, i) => (
                  <li key={i}>
                    <a href="#how-it-works" className="text-white/20 hover:text-[#00D4FF] transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>



            <div>
              <h4 className="font-semibold mb-6 text-sm text-white/60 tracking-wide uppercase">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:support@payagorecruitment.uk" className="flex items-center gap-3 text-white/20 hover:text-[#00D4FF] transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/5 flex items-center justify-center group-hover:bg-[#00D4FF]/10 transition-colors">
                      <Mail className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                    support@payagorecruitment.uk
                  </a>
                </li>
                <li>
                  <a href="tel:+447721873786" className="flex items-center gap-3 text-white/20 hover:text-[#00D4FF] transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/5 flex items-center justify-center group-hover:bg-[#00D4FF]/10 transition-colors">
                      <Phone className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                    +44 7721 873786
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/15">© 2025 PayaGo Recruitment. All rights reserved.</p>
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'Cookies'].map((item, i) => (
                <a key={i} href="#" className="text-xs text-white/15 hover:text-white/30 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
