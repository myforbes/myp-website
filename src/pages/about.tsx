import Layout from '@/components/Layout'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import { 
  Camera, 
  Heart,
  MapPin,
  Coffee,
  Sparkles,
  Music,
  BookOpen,
  Aperture,
  Eye,
  Zap
} from 'lucide-react'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mouseXSpring = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const mouseYSpring = useSpring(mouseY, { damping: 30, stiffness: 200 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const sections = [
    {
      id: 'intro',
      title: 'Hello',
      subtitle: "I'm Marquel Forbes",
      content: "Executive headshot photographer specializing in creating powerful, professional portraits for women leaders, corporate executives, and business owners who demand excellence.",
      icon: Heart,
      color: 'from-[#f4ca78] to-[#b9914d]'
    },
    {
      id: 'journey',
      title: 'My Background',
      subtitle: "12+ Years Professional Photography",
      content: "My experience working with executives and business professionals gives me unique insight into what makes people comfortable and confident. I've specialized in headshots that command respect and build trust.",
      icon: Camera,
      color: 'from-[#f4ca78] to-[#b9914d]'
    },
    {
      id: 'expertise',
      title: 'My Specialty',
      subtitle: "Executive & Corporate Headshots",
      content: "I focus exclusively on professional headshots for executives, business owners, and corporate teams. Headshot Crew certified and trusted by Northern Virginia's top professionals.",
      icon: Zap,
      color: 'from-[#f4ca78] to-[#b9914d]'
    },
    {
      id: 'approach',
      title: 'My Process',
      subtitle: "Professional yet comfortable",
      content: "I create a relaxed studio environment where busy executives feel at ease. Most clients are surprised how quickly we capture the perfect shot—professional results without the stress.",
      icon: Music,
      color: 'from-[#f4ca78] to-[#b9914d]'
    },
    {
      id: 'philosophy',
      title: 'My Promise',
      subtitle: "Confidence in every frame",
      content: "Every executive needs headshots that reflect their authority and approachability. I ensure you walk away with portraits that enhance your professional brand and personal confidence.",
      icon: Eye,
      color: 'from-[#f4ca78] to-[#b9914d]'
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      setMousePosition({
        x: clientX / innerWidth,
        y: clientY / innerHeight
      })
      
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Scroll-triggered section changes
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const sectionIndex = Math.floor(progress * sections.length)
      setActiveSection(Math.min(sectionIndex, sections.length - 1))
    })

    return unsubscribe
  }, [scrollYProgress, sections.length])

  return (
    <div ref={containerRef} className="relative">
      <Layout 
        title="About Marquel Forbes | Beyond the Lens"
        description="Step into my world—where psychology meets photography and every portrait tells a deeper story."
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
          
          .neural-grid {
            background-image: 
              radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(244, 202, 120, 0.3) 1px, transparent 1px),
              radial-gradient(circle at ${(1 - mousePosition.x) * 100}% ${(1 - mousePosition.y) * 100}%, rgba(185, 145, 77, 0.2) 1px, transparent 1px);
            background-size: 40px 40px, 60px 60px;
            animation: neural-pulse 20s ease-in-out infinite;
          }
          
          @keyframes neural-pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          
          .liquid-morph {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            animation: morph 15s ease-in-out infinite;
          }
          
          @keyframes morph {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            50% { border-radius: 40% 30% 60% 70% / 40% 70% 60% 30%; }
            75% { border-radius: 70% 30% 40% 60% / 30% 40% 70% 60%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
          
          
          .photo-reveal {
            clip-path: circle(0% at 50% 50%);
            transition: clip-path 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .photo-reveal.active {
            clip-path: circle(70% at 50% 50%);
          }
          
          .section-indicator {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}</style>

        {/* Revolutionary Spiral Layout */}
        <div className="bg-gradient-to-br from-neutral-50 via-neutral-100 to-gray-50 relative overflow-hidden">
          
          {/* Dynamic Background */}
          <div className="fixed inset-0 neural-grid opacity-30 pointer-events-none" />
          
          {/* Interactive Orb following mouse */}
          <motion.div
            className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle, rgba(244, 202, 120, 0.15) 0%, transparent 70%)`,
              x: mouseXSpring,
              y: mouseYSpring,
              translateX: '-50%',
              translateY: '-50%'
            }}
          />

          {/* Floating Navigation Indicator */}
          <motion.div 
            className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className={`w-3 h-3 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                  index === activeSection 
                    ? 'bg-gradient-to-r from-[#f4ca78] to-[#b9914d] border-[#b9914d] scale-150' 
                    : 'bg-white/30 border-white/50 hover:border-[#f4ca78]'
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  const element = document.getElementById(section.id)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            ))}
          </motion.div>

          {/* Hero Section (keep existing) */}
          <div className="relative">
            <motion.section
              id="intro"
              className="py-16 lg:py-24 flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: '-200px' }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Content Container - Hero Section */}
              <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4">
                {/* Text Content */}
                <motion.div 
                  className="space-y-8"
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {/* Section Number */}
                  <motion.div
                    className="serif-font text-8xl font-black text-white/10 leading-none"
                    whileHover={{ scale: 1.1, color: 'rgba(244, 202, 120, 0.3)' }}
                  >
                    01
                  </motion.div>

                  {/* Title */}
                  <motion.h2 
                    className="serif-font text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                    whileHover={{ scale: 1.02 }}
                  >
                    {sections[0].title}
                    <motion.span 
                      className={`block text-3xl lg:text-4xl bg-gradient-to-r ${sections[0].color} bg-clip-text text-transparent italic mt-2`}
                      whileHover={{ letterSpacing: '0.05em' }}
                      transition={{ duration: 0.3 }}
                    >
                      {sections[0].subtitle}
                    </motion.span>
                  </motion.h2>

                  {/* Content */}
                  <motion.p 
                    className="sans-font text-xl text-gray-600 leading-relaxed font-light"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {sections[0].content}
                  </motion.p>

                  {/* Decorative Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${sections[0].color} shadow-xl`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: '0 20px 40px rgba(244, 202, 120, 0.4)'
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="h-8 w-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Hero Photo */}
                <motion.div 
                  className="relative lg:col-start-2"
                  whileInView={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  <motion.div className="relative max-w-lg mx-auto">
                    <motion.div 
                      className="liquid-morph aspect-[4/5] morphic-glass p-4 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative h-full rounded-3xl overflow-hidden">
                        <Image
                          src="/images/marquel-may-2025.jpg"
                          alt="Marquel Forbes"
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      {/* Clean Name Label */}
                      <motion.div
                        className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/20"
                        whileHover={{ y: -5, scale: 1.05 }}
                      >
                        <div className="text-center">
                          <div className="serif-font text-2xl font-bold bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent">
                            Marquel Forbes
                          </div>
                          <div className="sans-font text-sm text-gray-600 font-medium">
                            Executive Headshot Photographer
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* Photography-Inspired Lens Reveal Sections */}
            <div className="relative py-24">
              {sections.slice(1).map((section, index) => {
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={section.id}
                    className={`relative mb-32 ${isEven ? 'text-left' : 'text-right'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-200px' }}
                  >
                    {/* Background Camera Lens Circle */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.2 }}
                    >
                      <div className="w-96 h-96 rounded-full border-8 border-[#f4ca78]/20 relative">
                        {/* Camera Lens Aperture Blades */}
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-24 h-1 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] origin-left"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 45}deg) translateX(-12px)`,
                            }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 + i * 0.1 }}
                          />
                        ))}
                        
                        {/* Inner Lens Rings */}
                        <div className="absolute inset-8 rounded-full border-4 border-[#b9914d]/30"></div>
                        <div className="absolute inset-16 rounded-full border-2 border-[#f4ca78]/40"></div>
                        <div className="absolute inset-24 rounded-full border border-[#b9914d]/20"></div>
                      </div>
                    </motion.div>

                    {/* Content Container */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4">
                      <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                        
                        {/* Text Content */}
                        <motion.div
                          className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}
                          initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                          {/* Step Number with Camera Frame */}
                          <motion.div 
                            className="relative inline-block"
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="w-20 h-20 border-4 border-[#f4ca78] relative">
                              {/* Camera Frame Corners */}
                              <div className="absolute -inset-2">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#b9914d]"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#b9914d]"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#b9914d]"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#b9914d]"></div>
                              </div>
                              <div className="w-full h-full bg-gradient-to-br from-[#f4ca78] to-[#b9914d] flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">0{index + 2}</span>
                              </div>
                            </div>
                          </motion.div>

                          {/* Title with Typewriter Effect */}
                          <div className="space-y-4">
                            <motion.h3 
                              className="text-4xl lg:text-5xl font-bold text-gray-900"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                            >
                              {section.title.split('').map((char, charIndex) => (
                                <motion.span
                                  key={charIndex}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ 
                                    duration: 0.05, 
                                    delay: index * 0.1 + 0.5 + charIndex * 0.05 
                                  }}
                                >
                                  {char}
                                </motion.span>
                              ))}
                            </motion.h3>
                            
                            <motion.h4 
                              className="text-2xl bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent font-medium"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: index * 0.1 + 0.8 }}
                            >
                              {section.subtitle}
                            </motion.h4>
                          </div>

                          {/* Content with Focus Pull Effect */}
                          <motion.div
                            className="relative"
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1, delay: index * 0.1 + 1 }}
                          >
                            <p className="text-xl text-gray-600 leading-relaxed">
                              {section.content}
                            </p>
                            
                            {/* Depth of Field Indicator Lines */}
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#f4ca78] to-transparent opacity-30"></div>
                          </motion.div>

                          {/* Interactive Icon with Shutter Animation */}
                          <motion.div
                            className="relative w-24 h-24"
                            whileHover="hover"
                            initial="initial"
                          >
                            {/* Shutter Blades */}
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute inset-0 bg-gradient-to-r from-[#f4ca78] to-[#b9914d]"
                                style={{
                                  clipPath: `polygon(50% 50%, ${50 + 40 * Math.cos((i * 60) * Math.PI / 180)}% ${50 + 40 * Math.sin((i * 60) * Math.PI / 180)}%, ${50 + 40 * Math.cos(((i + 1) * 60) * Math.PI / 180)}% ${50 + 40 * Math.sin(((i + 1) * 60) * Math.PI / 180)}%)`
                                }}
                                variants={{
                                  initial: { scale: 1, opacity: 0.8 },
                                  hover: { scale: 0.3, opacity: 1 }
                                }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                              />
                            ))}
                            
                            {/* Center Icon */}
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center bg-white rounded-full border-4 border-[#f4ca78]"
                              variants={{
                                initial: { scale: 0.6 },
                                hover: { scale: 1 }
                              }}
                            >
                              <section.icon className="h-8 w-8 text-[#b9914d]" />
                            </motion.div>
                          </motion.div>
                        </motion.div>

                        {/* Visual Element - Camera Viewfinder */}
                        <motion.div
                          className={`relative ${!isEven ? 'lg:col-start-1' : ''}`}
                          initial={{ scale: 0.8, opacity: 0, rotateY: isEven ? -30 : 30 }}
                          whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        >
                          <div className="relative aspect-square max-w-md mx-auto">
                            {/* Viewfinder Frame */}
                            <motion.div 
                              className="absolute inset-0 border-4 border-[#f4ca78] bg-black/90 rounded-3xl overflow-hidden"
                              whileHover={{ scale: 1.05, rotateZ: 2 }}
                              transition={{ duration: 0.6 }}
                            >
                              {/* Viewfinder Grid */}
                              <div className="absolute inset-4">
                                <div className="w-full h-full border border-[#f4ca78]/30 relative">
                                  <div className="absolute top-1/3 left-0 right-0 border-t border-[#f4ca78]/20"></div>
                                  <div className="absolute top-2/3 left-0 right-0 border-t border-[#f4ca78]/20"></div>
                                  <div className="absolute left-1/3 top-0 bottom-0 border-l border-[#f4ca78]/20"></div>
                                  <div className="absolute left-2/3 top-0 bottom-0 border-l border-[#f4ca78]/20"></div>
                                </div>
                              </div>

                              {/* Photo Background */}
                              <motion.div 
                                className="absolute inset-8 rounded-2xl overflow-hidden"
                                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                                whileInView={{ clipPath: 'circle(100% at 50% 50%)' }}
                                transition={{ duration: 1.5, delay: index * 0.1 + 1 }}
                              >
                                {/* Professional Photos for each section */}
                                <div className="relative w-full h-full">
                                  {index === 0 && (
                                    // My Background - Professional female executive
                                    <Image
                                      src="/images/Beverly_Senita_287-MarquelYvette0039-instagram.jpg"
                                      alt="Professional female executive headshot"
                                      fill
                                      className="object-cover"
                                      sizes="400px"
                                    />
                                  )}
                                  {index === 1 && (
                                    // My Specialty - Corporate executive headshot
                                    <Image
                                      src="/images/James_Ryan_538-MarquelYvette0302-retouched.jpg"
                                      alt="Corporate executive professional headshot"
                                      fill
                                      className="object-cover"
                                      sizes="400px"
                                    />
                                  )}
                                  {index === 2 && (
                                    // My Process - Professional business portrait
                                    <Image
                                      src="/images/Smith_Leah_388-MarquelYvette0056-retouched.jpg"
                                      alt="Professional business portrait photography"
                                      fill
                                      className="object-cover"
                                      sizes="400px"
                                    />
                                  )}
                                  {index === 3 && (
                                    // My Promise - Confident professional portrait
                                    <Image
                                      src="/images/Kouo_Charlotte_780-MarquelYvette0327-ig.jpg"
                                      alt="Confident professional portrait result"
                                      fill
                                      className="object-cover"
                                      sizes="400px"
                                    />
                                  )}
                                  
                                  {/* Photo Overlay with Icon and Info */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                                    <motion.div
                                      className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 shadow-xl"
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    >
                                      <section.icon className="h-8 w-8 text-[#b9914d]" />
                                    </motion.div>
                                    <h5 className="text-lg font-bold text-white mb-1">{section.title}</h5>
                                    <p className="text-sm text-white/90">{section.subtitle}</p>
                                  </div>
                                </div>
                              </motion.div>

                              {/* Viewfinder Info Display */}
                              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs text-[#f4ca78] font-mono">
                                <span>f/2.8</span>
                                <span>1/125</span>
                                <span>ISO 200</span>
                              </div>

                              {/* Focus Point */}
                              <motion.div
                                className="absolute w-8 h-8 border-2 border-[#f4ca78] rounded-full"
                                style={{ top: '40%', left: '60%' }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>

                            {/* Camera Body Shadow */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-black/20 to-transparent rounded-3xl blur-xl"></div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Revolutionary Footer Quote */}
          <motion.section 
            className="py-16 lg:py-24 flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto px-4">
              <motion.div
                className="morphic-glass rounded-3xl p-16 liquid-morph"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-gradient-to-r from-[#f4ca78] to-[#b9914d] flex items-center justify-center mx-auto mb-12"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  <Aperture className="h-12 w-12 text-white" />
                </motion.div>

                <motion.h2 
                  className="serif-font text-4xl lg:text-6xl font-bold text-gray-900 mb-8 italic leading-tight"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                >
                  "Professional headshots that elevate your executive presence."
                </motion.h2>
                
                <motion.p 
                  className="sans-font text-xl text-gray-600 mb-8 leading-relaxed font-light"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                >
                  Ready to enhance your professional brand? Let's create headshots that command respect and build trust.
                </motion.p>

                <motion.div
                  className="gold-flow bg-clip-text text-transparent sans-font text-lg font-semibold"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  — Marquel Forbes, Northern Virginia
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </Layout>
    </div>
  )
}