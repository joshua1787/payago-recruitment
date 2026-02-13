'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Users, Briefcase, Clock, TrendingUp, Sparkles, Shield, Zap, Mail, Phone, Menu, X, ChevronDown, Moon, FileText, PoundSterling, Handshake, UserCheck, ChevronRight, ArrowUpRight, Star, Award, Target } from 'lucide-react'
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
      color: '#D4A853',
    },
    {
      step: '02',
      icon: Users,
      title: 'PayaGo Sources Workers',
      desc: 'Pre-registered, Right-to-Work checked, shift-ready candidates deployed fast.',
      color: '#4A9D6E',
    },
    {
      step: '03',
      icon: UserCheck,
      title: 'Workers Deployed',
      desc: 'Workers attend shifts as scheduled. On-site attendance confirmed same day.',
      color: '#D4915A',
    },
    {
      step: '04',
      icon: Shield,
      title: 'Payroll & Compliance',
      desc: 'Workers paid via PAYE umbrella. Holiday pay, NI, tax — fully handled.',
      color: '#4A9D6E',
    },
    {
      step: '05',
      icon: FileText,
      title: 'Simple Invoicing',
      desc: 'Weekly invoice with one transparent, all-inclusive hourly rate. No surprises.',
      color: '#D4A853',
    },
  ]

  const usps = [
    {
      icon: Moon,
      title: 'Night-Shift & Short-Notice Focus',
      quote: '"We specialise in night shifts and last-minute cover, where many agencies struggle."',
      tagline: 'Night shifts = our edge.',
      color: '#D4A853',
    },
    {
      icon: Shield,
      title: 'Compliance-First',
      quote: '"All workers are paid via PAYE umbrella with full Right-to-Work and HMRC compliance."',
      tagline: 'This removes legal fear.',
      color: '#4A9D6E',
    },
    {
      icon: PoundSterling,
      title: 'Simple Pricing — No Tricks',
      quote: '"One all-inclusive hourly rate. No hidden fees."',
      tagline: 'Warehouses hate surprises.',
      color: '#D4915A',
    },
    {
      icon: Handshake,
      title: 'Trial-Friendly Agency',
      quote: '"We\'re happy to start with a small trial so you can test reliability before scaling."',
      tagline: 'This is how new agencies build trust.',
      color: '#7B93B8',
    },
    {
      icon: UserCheck,
      title: 'Direct Accountability',
      quote: '"You deal with one point of contact. If there\'s a problem, we fix it immediately."',
      tagline: 'Big agencies don\'t do this well. We do.',
      color: '#D4A853',
    },
  ]

  return (
    <main className="min-h-screen bg-[#080D1A] text-[#F5F0E8] overflow-x-hidden">
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
                className="text-[13px] font-medium text-[#F5F0E8]/40 hover:text-[#D4A853] transition-all duration-300 tracking-wide uppercase"
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
            className="lg:hidden p-2 text-[#F5F0E8]/70 hover:text-[#F5F0E8] hover:bg-[#F5F0E8]/5 rounded-xl transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 nav-scrolled border-t border-[#D4A853]/5 p-6 animate-fade-down shadow-2xl">
            <div className="flex flex-col gap-5">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Why PayaGo', href: '#why-payago' },
                { label: 'Contact', href: '#contact' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-lg font-medium text-[#F5F0E8]/60 hover:text-[#D4A853] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-[#D4A853]/10" />
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
          HERO — Royal & Cinematic
          ============================================ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
        {/* Rich layered background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Deep navy gradient base */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #0F1A30 0%, #080D1A 70%)' }} />
          {/* Warm gold aurora */}
          <div className="aurora-orb-1 absolute -top-[10%] left-[10%] w-[800px] h-[600px] rounded-full blur-[200px]" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)' }} />
          <div className="aurora-orb-2 absolute top-[40%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[180px]" style={{ background: 'radial-gradient(circle, rgba(74,157,110,0.05) 0%, transparent 70%)' }} />
          <div className="aurora-orb-3 absolute -bottom-[15%] left-[40%] w-[500px] h-[500px] rounded-full blur-[160px]" style={{ background: 'radial-gradient(circle, rgba(212,145,90,0.04) 0%, transparent 70%)' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 grid-bg" />
          {/* Top light sweep */}
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(212,168,83,0.15) 50%, transparent 90%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge — Premium treatment */}
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0.03) 100%)',
                    border: '1px solid rgba(212,168,83,0.15)',
                    color: '#D4A853',
                    boxShadow: 'inset 0 1px 0 rgba(212,168,83,0.06), 0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" style={{ boxShadow: '0 0 8px #D4A853' }} />
                  UK Warehouse Staffing Agency
                </span>
              </div>

              {/* Headline — Bigger, bolder, more luxurious */}
              <div className="space-y-2 animate-fade-up delay-100">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.04em] leading-[0.95]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
                  <span className="block text-[#F5F0E8] animate-text-reveal delay-200">Warehouse</span>
                  <span className="block text-[#F5F0E8] animate-text-reveal delay-400">Staffing</span>
                  <span className="block gradient-text-hero animate-text-reveal delay-600" style={{ textShadow: '0 0 80px rgba(212,168,83,0.2)' }}>That Delivers.</span>
                </h1>
              </div>

              {/* Subhead — warmer, more readable */}
              <div className="animate-fade-up delay-500">
                <p className="text-lg md:text-xl text-[#F5F0E8]/35 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                  Night shifts. Short notice. Full compliance. One call.<br />
                  <span className="text-[#F5F0E8]/60 font-medium">We manage everything so you don't have to.</span>
                </p>
              </div>

              {/* CTAs — Premium gold button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-600">
                <button
                  className="btn-hero"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScXdeZC6zsf6xnbHYbx5q_98wPfJ31w43V-FZqUDoiU4nh70Q/viewform?usp=publish-editor', '_blank')}
                >
                  Get Started — It's Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  className="btn-glass"
                  onClick={() => {
                    const el = document.getElementById('how-it-works')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  See How It Works
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Inline trust — richer, with gold separator */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 pt-4">
                {[
                  { text: 'Night Shift Specialists', color: '#D4A853' },
                  { text: 'HMRC Compliant', color: '#4A9D6E' },
                  { text: 'Same-Day Cover', color: '#D4915A' },
                ].map((item, i) => (
                  <span key={i} className={`flex items-center gap-2.5 text-sm text-[#F5F0E8]/30 animate-badge-pop font-medium`} style={{ animationDelay: `${800 + i * 150}ms` }}>
                    <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${item.color}15` }}>
                      <Check className="w-3 h-3" style={{ color: item.color }} />
                    </div>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Hero Image with 3D tilt & premium border */}
            <div
              className="relative hidden lg:block perspective-container animate-fade-up delay-300"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="tilt-card relative">
                <div className="card-gradient-border">
                  <div className="relative h-[520px] rounded-[19px] overflow-hidden">
                    <Image
                      src="/warehouse-hero.png"
                      alt="Modern warehouse operations"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A]/30 to-transparent" />
                    {/* Premium corner accent */}
                    <div className="absolute top-0 left-0 w-24 h-24" style={{ background: 'linear-gradient(135deg, rgba(212,168,83,0.08) 0%, transparent 50%)' }} />
                  </div>
                </div>

                {/* Floating card — premium glass */}
                <div className="absolute -bottom-8 -left-8 z-20 animate-float">
                  <div className="p-5 rounded-2xl" style={{
                    background: 'linear-gradient(145deg, rgba(14,20,40,0.92), rgba(17,27,53,0.85))',
                    backdropFilter: 'blur(40px)',
                    border: '1px solid rgba(212,168,83,0.12)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,168,83,0.06)',
                  }}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(212,168,83,0.15), rgba(212,168,83,0.05))' }}>
                        <Zap className="w-6 h-6 text-[#D4A853]" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#F5F0E8] tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>24/7</div>
                        <div className="text-xs text-[#D4A853]/60 font-semibold tracking-wide uppercase">Shift Coverage</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 z-20 animate-float" style={{ animationDelay: '3s' }}>
                  <div className="px-5 py-3.5 rounded-2xl" style={{
                    background: 'linear-gradient(145deg, rgba(14,20,40,0.92), rgba(17,27,53,0.85))',
                    backdropFilter: 'blur(40px)',
                    border: '1px solid rgba(74,157,110,0.15)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(74,157,110,0.06)',
                  }}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4A9D6E]" style={{ boxShadow: '0 0 12px rgba(74,157,110,0.5)' }} />
                      <span className="text-sm font-bold text-[#F5F0E8] tracking-tight">PAYE Compliant</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient glow behind card */}
              <div className="absolute -inset-12 -z-10 animate-pulse-glow" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 60%)' }} />
            </div>

            {/* Mobile hero */}
            <div className="lg:hidden relative animate-fade-up delay-300">
              <div className="card-gradient-border">
                <div className="relative h-[300px] rounded-[19px] overflow-hidden">
                  <Image
                    src="/warehouse-hero.png"
                    alt="Modern warehouse operations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue — premium */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] text-[#D4A853]/25 uppercase tracking-[0.2em] font-semibold">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-[#D4A853]/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#D4A853]/40 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST MARQUEE — Premium Infinite Scroll
          ============================================ */}
      <section className="py-6 overflow-hidden relative" style={{
        borderTop: '1px solid rgba(212,168,83,0.06)',
        borderBottom: '1px solid rgba(212,168,83,0.06)',
        background: 'linear-gradient(180deg, rgba(212,168,83,0.02) 0%, transparent 100%)',
      }}>
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
                <span key={`${setIdx}-${i}`} className={`text-sm font-semibold ${item === '✦' ? 'text-[#D4A853]/40 text-lg' : 'text-[#F5F0E8]/25'}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          HOW PAYAGO WORKS — Interactive Steps
          ============================================ */}
      <section id="how-it-works" className="py-28 md:py-36 px-6 relative section-line noise-overlay">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{
              background: 'linear-gradient(135deg, rgba(212,168,83,0.06), rgba(212,168,83,0.02))',
              border: '1px solid rgba(212,168,83,0.1)',
            }}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A853]/70">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
              From requirement<br />
              <span className="gradient-text-hero">to invoice.</span>
            </h2>
            <p className="text-lg text-[#F5F0E8]/30 mt-6 max-w-xl mx-auto font-light">
              Five steps. Fully managed. You focus on your warehouse.
            </p>
          </div>

          {/* Step Navigator + Detail */}
          <div className="grid lg:grid-cols-5 gap-8 animate-on-scroll">
            {/* Timeline Nav */}
            <div className="lg:col-span-2 space-y-2">
              {steps.map((item, i) => {
                const Icon = item.icon
                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`step-card w-full text-left p-5 flex items-center gap-4 ${activeStep === i ? 'active' : ''}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-500"
                      style={{
                        background: activeStep === i ? `linear-gradient(135deg, ${item.color}20, ${item.color}08)` : 'rgba(245,240,232,0.03)',
                        color: activeStep === i ? item.color : 'rgba(245,240,232,0.2)',
                        boxShadow: activeStep === i ? `0 0 25px ${item.color}12, inset 0 1px 0 ${item.color}10` : 'none',
                        border: activeStep === i ? `1px solid ${item.color}20` : '1px solid transparent',
                      }}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-[15px] transition-colors duration-500 ${activeStep === i ? 'text-[#F5F0E8]' : 'text-[#F5F0E8]/35'}`}>
                        {item.title}
                      </h4>
                      {activeStep === i && (
                        <p className="text-[13px] text-[#F5F0E8]/30 mt-1 animate-fade-in leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    {activeStep === i && (
                      <div className="w-1 h-8 rounded-full animate-fade-in" style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }} />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Detail Card — Rich treatment */}
            <div className="lg:col-span-3 relative">
              <div className="card-gradient-border h-full">
                <div className="p-10 md:p-14 h-full flex flex-col justify-between relative overflow-hidden rounded-[19px]">
                  {/* Rich background glow */}
                  <div
                    className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full blur-[140px] transition-all duration-1000 opacity-20"
                    style={{ background: `radial-gradient(circle, ${steps[activeStep].color}, transparent)` }}
                  />
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32" style={{ background: `linear-gradient(225deg, ${steps[activeStep].color}06, transparent 60%)` }} />

                  <div className="relative z-10">
                    {/* Icon with premium treatment */}
                    <div
                      className="icon-glow mb-8 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${steps[activeStep].color}12, ${steps[activeStep].color}04)`,
                        '--icon-color': `${steps[activeStep].color}40`,
                        boxShadow: `0 0 30px ${steps[activeStep].color}08`,
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
                    <h3 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] tracking-tight mb-5 transition-all duration-500" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
                      {steps[activeStep].title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#F5F0E8]/40 text-lg leading-relaxed max-w-md">
                      {steps[activeStep].desc}
                    </p>
                  </div>

                  {/* Progress bar — premium */}
                  <div className="relative z-10 mt-10">
                    <div className="flex gap-2">
                      {steps.map((_, i) => (
                        <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-[#F5F0E8]/[0.04]">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: i <= activeStep ? '100%' : '0%',
                              background: i <= activeStep ? `linear-gradient(90deg, ${steps[i].color}60, ${steps[i].color})` : 'transparent',
                              boxShadow: i === activeStep ? `0 0 8px ${steps[i].color}40` : 'none',
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

          {/* Callout — Premium Royal */}
          <div className="mt-20 animate-on-scroll">
            <div className="max-w-3xl mx-auto relative">
              {/* Ambient glow behind */}
              <div className="absolute -inset-6 rounded-3xl" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,168,83,0.04) 0%, transparent 70%)' }} />

              <div className="relative rounded-2xl overflow-hidden" style={{
                background: 'linear-gradient(160deg, rgba(14,20,40,0.9) 0%, rgba(17,27,53,0.7) 50%, rgba(14,20,40,0.85) 100%)',
                border: '1px solid rgba(212,168,83,0.12)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(212,168,83,0.03), inset 0 1px 0 rgba(212,168,83,0.06)',
              }}>
                {/* Top gold accent line */}
                <div className="absolute top-0 left-[15%] right-[15%] h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.4), transparent)' }} />

                <div className="p-10 md:p-14 text-center relative">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20" style={{ background: 'linear-gradient(135deg, rgba(212,168,83,0.04) 0%, transparent 50%)' }} />
                  <div className="absolute bottom-0 right-0 w-20 h-20" style={{ background: 'linear-gradient(315deg, rgba(212,168,83,0.04) 0%, transparent 50%)' }} />

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(212,168,83,0.12), rgba(212,168,83,0.04))',
                      border: '1px solid rgba(212,168,83,0.15)',
                      boxShadow: '0 0 20px rgba(212,168,83,0.06)',
                    }}>
                      <Sparkles className="w-5 h-5 text-[#D4A853]" />
                    </div>
                  </div>

                  {/* Text — large, impactful */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F5F0E8]/90 leading-snug tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
                    Warehouse does <span className="gradient-text-hero">not</span> deal with workers directly.
                  </h3>
                  <div className="flex justify-center my-5">
                    <div className="w-10 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.4), transparent)' }} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F5F0E8]/90 leading-snug tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
                    PayaGo manages <span className="gradient-text-hero">everything</span>.
                  </h3>
                </div>
              </div>
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
              { icon: <Zap className="w-6 h-6" />, title: 'Same-Day Deployment', desc: 'Requirement in, workers deployed — often within hours.', color: '#D4A853' },
              { icon: <Shield className="w-6 h-6" />, title: 'Full PAYE Compliance', desc: 'Every worker paid via PAYE umbrella. HMRC compliant, always.', color: '#4A9D6E' },
              { icon: <Moon className="w-6 h-6" />, title: 'Night Shift Experts', desc: 'We thrive where others don\'t — nights, weekends, peak season.', color: '#D4915A' },
              { icon: <UserCheck className="w-6 h-6" />, title: 'Dedicated Manager', desc: 'One point of contact. Direct accountability. No runaround.', color: '#7B93B8' },
            ].map((item, i) => (
              <div key={i} className="group relative" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="card-gradient-border h-full">
                  <div className="p-7 md:p-8 rounded-[19px] h-full relative overflow-hidden">
                    {/* Hover glow — richer */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: `radial-gradient(circle at 30% 30%, ${item.color}10, transparent 70%)` }}
                    />
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: `linear-gradient(135deg, ${item.color}06, transparent 50%)` }} />
                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                          color: item.color,
                          border: `1px solid ${item.color}10`,
                          boxShadow: `0 0 15px ${item.color}05`,
                        }}
                      >
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-[#F5F0E8] text-[15px] mb-2 transition-colors">{item.title}</h4>
                      <p className="text-[13px] text-[#F5F0E8]/30 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHY PAYAGO — Premium Staggered Cards
          ============================================ */}
      <section id="why-payago" className="py-28 md:py-36 px-6 relative section-line noise-overlay">
        {/* Rich ambient glows */}
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[200px]" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.04), transparent)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[200px]" style={{ background: 'radial-gradient(circle, rgba(74,157,110,0.03), transparent)' }} />

        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{
              background: 'linear-gradient(135deg, rgba(212,168,83,0.06), rgba(212,168,83,0.02))',
              border: '1px solid rgba(212,168,83,0.1)',
            }}>
              <Award className="w-3.5 h-3.5 text-[#D4A853]/60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A853]/70">The PayaGo Edge</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
              Why choose<br />
              <span className="gradient-text-multi">PayaGo?</span>
            </h2>
            <p className="text-lg text-[#F5F0E8]/30 mt-6 max-w-xl mx-auto font-light">
              Warehouses care about reliability. Here's why we deliver.
            </p>
          </div>

          {/* USP Grid — 2 col staggered */}
          <div className="grid md:grid-cols-2 gap-6">
            {usps.slice(0, 4).map((usp, i) => {
              const Icon = usp.icon
              return (
                <div key={i} className={`card-gradient-border animate-on-scroll ${i % 2 === 1 ? 'md:translate-y-12' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="p-8 md:p-10 rounded-[19px] h-full relative overflow-hidden group">
                    {/* Rich bg glow */}
                    <div
                      className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full blur-[120px] opacity-0 group-hover:opacity-25 transition-opacity duration-700"
                      style={{ background: usp.color }}
                    />
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-20 h-20" style={{ background: `linear-gradient(135deg, ${usp.color}04, transparent 50%)` }} />
                    <div className="relative z-10">
                      <div
                        className="icon-glow mb-6 group-hover:scale-110 transition-transform duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${usp.color}12, ${usp.color}04)`,
                          '--icon-color': `${usp.color}30`,
                          border: `1px solid ${usp.color}10`,
                        } as React.CSSProperties}
                      >
                        <Icon className="w-6 h-6" style={{ color: usp.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-[#F5F0E8] mb-3 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>{usp.title}</h3>
                      <p className="text-[#F5F0E8]/35 leading-relaxed text-[15px]">{usp.quote}</p>
                      <div className="flex items-center gap-2 mt-5">
                        <div className="w-8 h-[1px]" style={{ background: `linear-gradient(90deg, ${usp.color}, transparent)` }} />
                        <p className="font-semibold text-sm" style={{ color: usp.color }}>{usp.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Hero USP card — full width, premium */}
          <div className="mt-10 animate-on-scroll">
            <div className="card-gradient-border">
              <div className="grid lg:grid-cols-5 rounded-[19px] overflow-hidden">
                {/* Image */}
                <div className="relative h-[280px] lg:h-auto lg:col-span-2 overflow-hidden group">
                  <Image
                    src="/warehouse-partnership.png"
                    alt="Direct accountability"
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E1428] hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1428] to-transparent lg:hidden" />
                </div>
                {/* Content */}
                <div className="p-10 md:p-14 lg:col-span-3 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.06), transparent)' }} />
                  <div className="relative z-10">
                    <div
                      className="icon-glow mb-8"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212,168,83,0.12), rgba(212,168,83,0.04))',
                        '--icon-color': 'rgba(212,168,83,0.3)',
                        border: '1px solid rgba(212,168,83,0.1)',
                      } as React.CSSProperties}
                    >
                      <UserCheck className="w-7 h-7 text-[#D4A853]" />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-[#F5F0E8] tracking-tight mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
                      Direct Accountability
                    </h3>
                    <p className="text-[#F5F0E8]/35 text-lg leading-relaxed mb-5 max-w-lg">
                      {usps[4].quote}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-[1px]" style={{ background: 'linear-gradient(90deg, #D4A853, transparent)' }} />
                      <p className="text-[#D4A853] font-semibold text-base">{usps[4].tagline}</p>
                    </div>
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{
                  background: 'linear-gradient(135deg, rgba(74,157,110,0.06), rgba(74,157,110,0.02))',
                  border: '1px solid rgba(74,157,110,0.1)',
                }}>
                  <Target className="w-3.5 h-3.5 text-[#4A9D6E]/60" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A9D6E]/70">Built for Warehouses</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
                  Your shifts,<br />
                  <span className="gradient-text-hero">covered.</span>
                </h2>
              </div>

              <p className="text-lg text-[#F5F0E8]/30 leading-relaxed font-light">
                Whether it's a 20-person night shift or emergency cover for tomorrow morning, PayaGo has the pre-vetted, shift-ready workforce to keep your warehouse running.
              </p>

              <ul className="space-y-4">
                {[
                  { text: 'Pre-vetted, Right-to-Work checked workers', color: '#D4A853' },
                  { text: 'Day shifts, night shifts, weekends', color: '#4A9D6E' },
                  { text: 'Pickers, packers, loaders, forklift operators', color: '#D4915A' },
                  { text: 'On-site attendance confirmed same day', color: '#7B93B8' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                        border: `1px solid ${item.color}10`,
                      }}
                    >
                      <Check className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-[15px] text-[#F5F0E8]/50 font-medium">{item.text}</span>
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
                <div className="relative h-[420px] lg:h-[520px] rounded-[19px] overflow-hidden group">
                  <Image
                    src="/warehouse-operations.png"
                    alt="Warehouse night shift operations"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/80 via-transparent to-transparent" />
                  {/* Premium corner accent */}
                  <div className="absolute bottom-0 left-0 w-full h-24" style={{ background: 'linear-gradient(to top, rgba(8,13,26,0.6), transparent)' }} />
                </div>
              </div>
              {/* Ambient glow */}
              <div className="absolute -inset-8 -z-10 animate-pulse-glow" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.03) 0%, transparent 60%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA — Royal
          ============================================ */}
      <section className="py-28 md:py-36 px-6 relative overflow-hidden section-line noise-overlay">
        {/* Rich cinematic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,168,83,0.06) 0%, transparent 60%)' }} />
          <div className="aurora-orb-1 absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full blur-[180px]" style={{ background: 'radial-gradient(circle, rgba(74,157,110,0.04), transparent)' }} />
          <div className="absolute inset-0 dot-bg" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll">
          <div className="space-y-6">
            {/* Decorative accent line */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #D4A853, transparent)' }} />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-[#F5F0E8] leading-[1.05]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>
              Ready to fill your<br />
              <span className="gradient-text-hero">next shift?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#F5F0E8]/30 max-w-2xl mx-auto font-light">
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
          FOOTER — Premium Dark
          ============================================ */}
      <footer id="contact" className="relative" style={{
        borderTop: '1px solid rgba(212,168,83,0.06)',
        background: 'linear-gradient(180deg, #060A15 0%, #080D1A 100%)',
      }}>
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
              <p className="text-[#F5F0E8]/25 leading-relaxed text-sm">
                UK warehouse staffing agency specialising in night shifts, short-notice cover, and full PAYE compliance.
              </p>
              <p className="text-xs text-[#F5F0E8]/12 mt-4">UK Registered Company</p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-sm text-[#D4A853]/50 tracking-wide uppercase" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>Services</h4>
              <ul className="space-y-3">
                {['Warehouse Staffing', 'Night Shift Cover', 'Short-Notice Workers', 'Payroll & Compliance'].map((item, i) => (
                  <li key={i}>
                    <a href="#how-it-works" className="text-[#F5F0E8]/25 hover:text-[#D4A853] transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-sm text-[#D4A853]/50 tracking-wide uppercase" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, system-ui, sans-serif' }}>Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:support@payagorecruitment.uk" className="flex items-center gap-3 text-[#F5F0E8]/25 hover:text-[#D4A853] transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300" style={{
                      background: 'linear-gradient(135deg, rgba(212,168,83,0.08), rgba(212,168,83,0.03))',
                      border: '1px solid rgba(212,168,83,0.08)',
                    }}>
                      <Mail className="w-4 h-4 text-[#D4A853]/60" />
                    </div>
                    support@payagorecruitment.uk
                  </a>
                </li>
                <li>
                  <a href="tel:+447721873786" className="flex items-center gap-3 text-[#F5F0E8]/25 hover:text-[#D4A853] transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300" style={{
                      background: 'linear-gradient(135deg, rgba(212,168,83,0.08), rgba(212,168,83,0.03))',
                      border: '1px solid rgba(212,168,83,0.08)',
                    }}>
                      <Phone className="w-4 h-4 text-[#D4A853]/60" />
                    </div>
                    +44 7721 873786
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{
            borderTop: '1px solid rgba(212,168,83,0.06)',
          }}>
            <p className="text-xs text-[#F5F0E8]/15">© 2025 PayaGo Recruitment. All rights reserved.</p>
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'Cookies'].map((item, i) => (
                <a key={i} href="#" className="text-xs text-[#F5F0E8]/15 hover:text-[#D4A853]/40 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
