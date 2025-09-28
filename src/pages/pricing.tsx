import Layout from '@/components/Layout'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import {
  Camera,
  Star,
  Check,
  Users,
  Clock,
  Image as ImageIcon,
  Download,
  Sparkles,
  Crown,
  Aperture,
  Zap,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activePackage, setActivePackage] = useState(1) // Default to Professional
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mouseXSpring = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const mouseYSpring = useSpring(mouseY, { damping: 30, stiffness: 200 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const packages = [
    {
      id: 'essential',
      name: 'Essential',
      subtitle: 'Perfect for professionals getting started',
      price: 495,
      duration: '1 Hour Session',
      image: '/images/Hovis_Catherine_403-MarquelYvette0013-ig.jpg',
      icon: Camera,
      color: 'from-gray-400 to-gray-600',
      features: [
        '1 hour professional headshot session',
        '2 outfit changes',
        'Professional studio lighting',
        'Same-day image preview',
        '3 high-resolution edited images',
        'Digital gallery delivery',
        'Basic retouching included'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'Most popular for executives',
      price: 795,
      duration: '90 Minute Session',
      image: '/images/James_Ryan_538-MarquelYvette0302-retouched.jpg',
      icon: Star,
      color: 'from-[#f4ca78] to-[#b9914d]',
      features: [
        '90 minute comprehensive session',
        '3-4 outfit changes',
        'Professional studio & natural lighting',
        'Styling consultation included',
        '5 high-resolution edited images',
        'Premium retouching & enhancement',
        'LinkedIn-optimized versions',
        'Print-ready file delivery',
        'Rush delivery available'
      ],
      popular: true
    },
    {
      id: 'executive',
      name: 'Executive',
      subtitle: 'Complete branding package',
      price: 1295,
      duration: '2 Hour Session',
      image: '/images/Beverly_Senita_287-MarquelYvette0039-instagram.jpg',
      icon: Crown,
      color: 'from-purple-500 to-purple-700',
      features: [
        '2 hour premium executive session',
        '5+ outfit changes',
        'Multiple lighting setups & locations',
        'Personal styling consultation',
        '10 high-resolution edited images',
        'Premium magazine-style retouching',
        'LinkedIn, website, and print versions',
        'Professional makeup artist available',
        'Rush delivery included',
        'Personal branding consultation',
        '1 year image usage license'
      ],
      popular: false
    }
  ]

  const addOns = [
    { name: 'Additional Edited Images', price: '$75 each', icon: ImageIcon },
    { name: 'Rush 24-Hour Delivery', price: '$150', icon: Zap },
    { name: 'Professional Makeup Artist', price: '$200', icon: Sparkles },
    { name: 'On-Location Session', price: '$300', icon: Camera },
    { name: 'Team Group Shots', price: '$200', icon: Users }
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

  return (
    <div ref={containerRef} className="relative">
      <Layout
        title="Executive Headshot Pricing | Marquel Yvette Photography"
        description="Professional executive headshot packages starting at $495. Studio sessions in Northern Virginia with premium retouching and same-day preview."
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
        `}</style>

        {/* Revolutionary Pricing Layout */}
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

          {/* Hero Section */}
          <motion.section
            className="py-16 lg:py-24 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="max-w-7xl mx-auto px-4 text-center">
              {/* Section Number */}
              <motion.div
                className="serif-font text-8xl font-black text-white/10 leading-none mb-8"
                whileHover={{ scale: 1.1, color: 'rgba(244, 202, 120, 0.3)' }}
              >
                01
              </motion.div>

              {/* Title */}
              <motion.h1
                className="serif-font text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Investment in
                <motion.span
                  className="block text-4xl lg:text-5xl bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent italic mt-2"
                  whileHover={{ letterSpacing: '0.05em' }}
                  transition={{ duration: 0.3 }}
                >
                  Your Executive Presence
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="sans-font text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Professional headshot packages designed for executives, business owners, and leaders who demand excellence. Studio sessions in Northern Virginia with magazine-quality results.
              </motion.p>

              {/* Decorative Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#f4ca78] to-[#b9914d] shadow-xl mt-8"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  boxShadow: '0 20px 40px rgba(244, 202, 120, 0.4)'
                }}
                transition={{ duration: 0.6 }}
              >
                <Camera className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </motion.section>

          {/* Package Cards */}
          <section className="py-16 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    className={`relative ${pkg.popular ? 'lg:scale-110 lg:z-20' : 'lg:z-10'}`}
                    initial={{ opacity: 0, y: 100, rotateY: -20 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -20, scale: pkg.popular ? 1.02 : 1.05 }}
                    onClick={() => setActivePackage(index)}
                  >
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <motion.div
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <div className="bg-gradient-to-r from-[#f4ca78] to-[#b9914d] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          Most Popular
                        </div>
                      </motion.div>
                    )}

                    {/* Card Container */}
                    <div className={`morphic-glass rounded-3xl p-8 relative overflow-hidden ${pkg.popular ? 'border-2 border-[#f4ca78]' : ''}`}>

                      {/* Background Photo */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 overflow-hidden rounded-bl-3xl">
                        <Image
                          src={pkg.image}
                          alt={`${pkg.name} package example`}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>

                      {/* Header */}
                      <div className="relative z-10 mb-8">
                        <motion.div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 shadow-xl`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <pkg.icon className="h-8 w-8 text-white" />
                        </motion.div>

                        <h3 className="serif-font text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                        <p className="sans-font text-gray-600 text-sm mb-4">{pkg.subtitle}</p>

                        <div className="mb-4">
                          <span className="serif-font text-4xl font-bold text-gray-900">${pkg.price}</span>
                          <span className="sans-font text-gray-600 ml-2">session</span>
                        </div>

                        <div className="text-sm text-gray-500 font-medium">{pkg.duration}</div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                          >
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="sans-font text-sm text-gray-700 leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link href="/contact" className="block">
                        <motion.button
                          className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                            pkg.popular
                              ? 'bg-gradient-to-r from-[#f4ca78] to-[#b9914d] text-white shadow-xl hover:shadow-2xl'
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                          }`}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Book {pkg.name} Session
                          <ArrowRight className="inline-block ml-2 h-4 w-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Add-Ons Section */}
          <section className="py-16 relative">
            <div className="max-w-5xl mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="serif-font text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Optional Add-Ons
                </h2>
                <p className="sans-font text-xl text-gray-600 leading-relaxed">
                  Enhance your session with premium services
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {addOns.map((addon, index) => (
                  <motion.div
                    key={index}
                    className="morphic-glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f4ca78] to-[#b9914d] flex items-center justify-center">
                        <addon.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="serif-font text-xl font-bold text-gray-900">{addon.price}</span>
                    </div>
                    <h3 className="sans-font font-semibold text-gray-900">{addon.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            className="py-16 lg:py-24 relative"
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
                  "Ready to elevate your professional image?"
                </motion.h2>

                <motion.p
                  className="sans-font text-xl text-gray-600 mb-8 leading-relaxed font-light"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                >
                  Book your executive headshot session today. Professional results, magazine-quality retouching, and same-day preview guaranteed.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <Link href="/contact">
                    <motion.button
                      className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] text-white font-bold text-xl rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Schedule Your Session
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </motion.button>
                  </Link>

                  <div className="text-gray-500 text-sm">
                    <Clock className="inline-block w-4 h-4 mr-2" />
                    Typically booked 2-3 weeks in advance
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </Layout>
    </div>
  )
}