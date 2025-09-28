import Layout from '@/components/Layout'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'

// Gallery Section Component
function GallerySection({ sectionImages, sectionIndex, startIndex }: {
  sectionImages: any[],
  sectionIndex: number,
  startIndex: number
}) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const sectionY = useTransform(sectionScrollProgress, [0, 1], [50, -50])
  const sectionScale = useTransform(sectionScrollProgress, [0, 0.5, 1], [0.98, 1, 1.02])

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
      style={{
        background: sectionIndex % 2 === 0 ? '#f8f9fa' : '#1a1a1a',
        y: sectionY,
        scale: sectionScale,
        zIndex: 10 + sectionIndex
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className={`text-3xl md:text-5xl font-light mb-4 tracking-tight ${
              sectionIndex % 2 === 0 ? 'text-gray-900' : 'text-white'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {"Executive Excellence".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.03 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </motion.div>

        {/* Left Side Graphics - Multiple Elements */}
        {/* Large Left Circle */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            left: '-200px',
            top: `${20 + (sectionIndex * 15) % 35}%`,
            transform: 'translateY(-50%)'
          }}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: sectionIndex * 0.2 }}
        >
          <div className="w-[450px] h-[450px] rounded-full border-4 border-[#f4ca78]/15 relative">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-24 h-1 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] origin-left opacity-30"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 60}deg) translateX(-12px)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.2 + i * 0.1 }}
              />
            ))}
            <motion.div
              className="absolute inset-10 rounded-full border-2 border-[#b9914d]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Small Left Circle */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            left: '-80px',
            top: `${70 + (sectionIndex * 8) % 20}%`,
            transform: 'translateY(-50%)'
          }}
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: sectionIndex * 0.4 }}
        >
          <div className="w-[200px] h-[200px] rounded-full border-2 border-[#b9914d]/20 relative">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-0.5 bg-gradient-to-r from-[#b9914d] to-[#f4ca78] origin-left opacity-40"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 90}deg) translateX(-6px)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.4 + i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side Graphics - Multiple Elements */}
        {/* Large Right Circle */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            right: '-180px',
            top: `${40 - (sectionIndex * 12) % 25}%`,
            transform: 'translateY(-50%)'
          }}
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: sectionIndex * 0.3 }}
        >
          <div className="w-[380px] h-[380px] rounded-full border-3 border-[#f4ca78]/18 relative">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-18 h-0.5 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] origin-left opacity-35"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateX(-9px)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.3 + i * 0.08 }}
              />
            ))}
            <motion.div
              className="absolute inset-8 rounded-full border border-[#b9914d]/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Medium Right Circle */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            right: '-60px',
            top: `${15 + (sectionIndex * 18) % 30}%`,
            transform: 'translateY(-50%)'
          }}
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: sectionIndex * 0.5 }}
        >
          <div className="w-[250px] h-[250px] rounded-full border-2 border-[#f4ca78]/22 relative">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-14 h-1 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] origin-left opacity-30"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 72}deg) translateX(-7px)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: sectionIndex * 0.5 + i * 0.1 }}
              />
            ))}
            <motion.div
              className="absolute inset-6 rounded-full border border-[#b9914d]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Small Top Right Circle */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            right: '-40px',
            top: `${80 - (sectionIndex * 5) % 15}%`,
            transform: 'translateY(-50%)'
          }}
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: sectionIndex * 0.6 }}
        >
          <div className="w-[150px] h-[150px] rounded-full border border-[#b9914d]/25 relative">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-10 h-0.5 bg-gradient-to-r from-[#b9914d] to-[#f4ca78] origin-left opacity-45"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 120}deg) translateX(-5px)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: sectionIndex * 0.6 + i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Photo Grid */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12">
          {sectionImages.map((image, imageIndex) => (
            <motion.div
              key={image.src}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: imageIndex * 0.2 }}
            >
              {/* Photo Container with Lens Reveal */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-black">
                {/* Camera Lens Frame */}
                <div className="absolute inset-0 border-4 border-[#f4ca78] rounded-2xl">
                  {/* Viewfinder Grid */}
                  <div className="absolute inset-4">
                    <div className="w-full h-full border border-[#f4ca78]/30 relative">
                      <div className="absolute top-1/3 left-0 right-0 border-t border-[#f4ca78]/20"></div>
                      <div className="absolute top-2/3 left-0 right-0 border-t border-[#f4ca78]/20"></div>
                      <div className="absolute left-1/3 top-0 bottom-0 border-l border-[#f4ca78]/20"></div>
                      <div className="absolute left-2/3 top-0 bottom-0 border-l border-[#f4ca78]/20"></div>
                    </div>
                  </div>

                  {/* Photo with Lens Reveal Animation */}
                  <motion.div
                    className="absolute inset-6 rounded-xl overflow-hidden"
                    initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                    animate={isInView ? { clipPath: 'circle(100% at 50% 50%)' } : { clipPath: 'circle(0% at 50% 50%)' }}
                    transition={{ duration: 1.5, delay: Math.floor(imageIndex / 2) * 0.8 }}
                  >
                    <Image
                      src={`/images/${image.src}`}
                      alt={image.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </motion.div>


                  {/* Camera Info Display */}
                  <motion.div
                    className="absolute bottom-2 left-2 right-2 flex justify-between text-xs text-[#f4ca78] font-mono"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: Math.floor(imageIndex / 2) * 0.8 + 1.5 }}
                  >
                    <span>f/2.8</span>
                    <span>1/125</span>
                    <span>ISO 200</span>
                  </motion.div>

                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-2 ${
                  sectionIndex % 2 === 0 ? 'border-gray-200' : 'border-white/20'
                } opacity-30`}
                animate={isInView ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Section Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <blockquote className={`sans-font text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto ${
            sectionIndex % 2 === 0 ? 'text-gray-600' : 'text-white/80'
          }`}>
            "Professional portraiture that captures not just an image, but the essence of leadership—
            the quiet confidence that commands respect in every frame."
          </blockquote>
          <div className="mt-4 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent font-semibold">— Marquel Yvette</div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default function Home() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Hero parallax transforms
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, -200])

  const featuredImages = [
    {
      src: 'James_Ryan_538-MarquelYvette0302-retouched.jpg',
      name: 'James Ryan',
      position: 'Chief Executive Officer'
    },
    {
      src: 'Beverly_Senita_287-MarquelYvette0039-instagram.jpg',
      name: 'Beverly Senita',
      position: 'Managing Director'
    },
    {
      src: 'Kouo_Charlotte_780-MarquelYvette0327-ig.jpg',
      name: 'Charlotte Kouo',
      position: 'Vice President Operations'
    },
    {
      src: 'Smith_Andrew_866-MarquelYvette0016-ig.jpg',
      name: 'Andrew Smith',
      position: 'Managing Partner'
    },
    {
      src: 'Hovis_Catherine_403-MarquelYvette0013-ig.jpg',
      name: 'Catherine Hovis',
      position: 'Chief Legal Counsel'
    },
    {
      src: 'Farzam_Leila_821-MarquelYvette0007-ig.jpg',
      name: 'Dr. Leila Farzam',
      position: 'Chief Surgeon'
    },
    {
      src: 'Leonard_Taylor_331-MarquelYvette0050+500px.jpg',
      name: 'Taylor Leonard',
      position: 'Executive Director'
    },
    {
      src: 'Rogers_Erin_381-MarquelYvette0110-ig.jpg',
      name: 'Erin Rogers',
      position: 'Company President'
    },
    {
      src: 'Bulger_Marcella_617-MarquelYvette0067-ig.jpg',
      name: 'Marcella Bulger',
      position: 'Senior Partner'
    },
    {
      src: 'Caras_Sydney_698-MarquelYvette0420-ig.jpg',
      name: 'Sydney Caras',
      position: 'Chief Marketing Officer'
    },
    {
      src: 'Coster_Emily_462-MarquelYvette0556-ig.jpg',
      name: 'Emily Coster',
      position: 'Executive Vice President'
    },
    {
      src: 'Farrell_Holly_952-MarquelYvette0023-ig.jpg',
      name: 'Holly Farrell',
      position: 'Regional Director'
    },
    {
      src: 'Hodge_Danielle_130-MarquelYvette0033-ig.jpg',
      name: 'Danielle Hodge',
      position: 'Chief Operating Officer'
    },
    {
      src: 'James_Lia_397-MarquelYvette0012-ig.jpg',
      name: 'Lia James',
      position: 'Senior Executive'
    },
    {
      src: 'Jennings_Mimi_488-MarquelYvette0078-ig.jpg',
      name: 'Mimi Jennings',
      position: 'Practice Leader'
    },
    {
      src: 'Lanier_Lynsey_285-MarquelYvette0062-ig.jpg',
      name: 'Lynsey Lanier',
      position: 'Managing Director'
    },
    {
      src: 'Smith_Leah_388-MarquelYvette0056-retouched.jpg',
      name: 'Leah Smith',
      position: 'Executive Director'
    }
  ]

  const galleryData = Array.from({ length: Math.ceil((featuredImages.length - 1) / 4) }).map((_, sectionIndex) => {
    const startIndex = sectionIndex * 4 + 1
    const sectionImages = featuredImages.slice(startIndex, startIndex + 4)
    return { sectionImages, sectionIndex, startIndex }
  })

  return (
    <Layout
      title="Executive Photography | Marquel Yvette"
      description="Executive portraits where your photos command the stage. Award-winning photographer serving Northern Virginia's most discerning professionals."
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@300;400;500;600;700;800&display=swap');

        .serif-font {
          font-family: 'Playfair Display', serif;
        }

        .sans-font {
          font-family: 'Inter', sans-serif;
        }

        .morphic-glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
      `}</style>
      <div className="relative">

        {/* HERO SECTION WITH MASSIVE BACKGROUND PORTRAIT */}
        <motion.section
          ref={heroRef}
          className="relative h-screen overflow-hidden sticky top-0"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY
          }}
        >
          {/* Full-Screen Background Portrait */}
          <div className="absolute inset-0">
            <Image
              src={`/images/${featuredImages[0].src}`}
              alt={featuredImages[0].name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Professional Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                >
                  <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6"
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {"MARQUEL YVETTE".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                    <motion.span
                      className="block text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent font-normal tracking-normal mt-2"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      PHOTOGRAPHY
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className="sans-font text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Executive portraits that capture the essence of leadership,
                    commanding respect in every frame.
                  </motion.p>

                  <motion.div
                    className="flex flex-col gap-4 items-start"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    <Link
                      href="/contact"
                      className="group sans-font inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] text-white font-semibold text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      Begin Your Experience
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <Link
                      href="/portfolio"
                      className="sans-font inline-flex items-center px-8 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/80 text-white font-semibold text-lg hover:bg-white/30 hover:border-white hover:text-white transition-all duration-300 rounded-2xl"
                      style={{ color: 'white' }}
                    >
                      View Complete Gallery
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Client Info Card */}
          <motion.div
            className="absolute bottom-12 right-12 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="morphic-glass rounded-2xl p-6 shadow-2xl">
              <p className="sans-font text-sm font-semibold bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent">Featured Portrait</p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center text-white/60">
              <span className="text-xs tracking-widest mb-3">EXPLORE GALLERY</span>
              <ArrowDown className="h-5 w-5" />
            </div>
          </motion.div>
        </motion.section>

        {/* MULTI-PHOTO GALLERY SECTIONS */}
        <div className="relative z-10">
          {galleryData.map((data) => (
            <GallerySection
              key={`gallery-${data.sectionIndex}`}
              sectionImages={data.sectionImages}
              sectionIndex={data.sectionIndex}
              startIndex={data.startIndex}
            />
          ))}
        </div>

        {/* FINAL CALL TO ACTION */}
        <motion.section
          className="relative h-screen overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          {/* Background with subtle overlay */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <Image
                src={`/images/${featuredImages[0].src}`}
                alt="Background"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          {/* CTA Content */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <motion.h2
                  className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  {"Your Portrait".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  <motion.span
                    className="block text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent font-normal tracking-normal mt-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    Awaits
                  </motion.span>
                </motion.h2>

                <motion.p
                  className="sans-font text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Step into a world where photography becomes art, and every portrait
                  tells the story of excellence, authority, and timeless sophistication.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <Link
                    href="/contact"
                    className="morphic-glass group sans-font inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] text-white font-bold text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-2xl"
                  >
                    Schedule Your Experience
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>

                <motion.div
                  className="mt-12 text-white/40 text-sm sans-font"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <div className="flex items-center justify-center space-x-8">
                    <span>Consultation</span>
                    <div className="w-1 h-1 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] rounded-full"></div>
                    <span>Photography</span>
                    <div className="w-1 h-1 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] rounded-full"></div>
                    <span>Artistry</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

      </div>
    </Layout>
  )
}