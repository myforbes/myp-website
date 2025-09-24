import Layout from '@/components/Layout'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  Users, 
  MapPin,
  Clock,
  CheckCircle,
  Building,
  Camera,
  Star,
  Briefcase,
  Zap,
  ArrowRight,
  Calendar,
  Phone
} from 'lucide-react'

export default function GroupHeadshots() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      setMousePosition({
        x: clientX / innerWidth,
        y: clientY / innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      title: "Executive Team Sessions",
      description: "Complete C-suite and leadership team photography at your office location",
      duration: "2-4 hours",
      teamSize: "5-15 executives",
      icon: Briefcase,
      features: ["Professional setup in your boardroom", "Individual coaching for each executive", "Same-day preview gallery", "Rush delivery available"]
    },
    {
      title: "Department Photography",
      description: "Streamlined headshot sessions for entire departments or divisions",
      duration: "Half or full day",
      teamSize: "15-50 employees",
      icon: Building,
      features: ["Efficient workflow system", "Consistent brand styling", "Digital gallery delivery", "LinkedIn optimization"]
    },
    {
      title: "Company-Wide Events",
      description: "Large-scale headshot events for entire organizations",
      duration: "1-3 days",
      teamSize: "50+ employees",
      icon: Users,
      features: ["Multi-day scheduling", "On-site coordinator", "Real-time gallery updates", "Custom branding options"]
    }
  ]

  const benefits = [
    {
      icon: MapPin,
      title: "We Come to You",
      description: "Professional mobile studio setup at your office location"
    },
    {
      icon: Clock,
      title: "Efficient Process",
      description: "Quick 5-10 minute sessions that respect busy schedules"
    },
    {
      icon: Camera,
      title: "Consistent Quality",
      description: "Professional lighting and styling for brand consistency"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Gallery ready within 7-10 business days"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your team size, timeline, and specific needs"
    },
    {
      step: "02", 
      title: "Setup",
      description: "Professional mobile studio setup at your office location"
    },
    {
      step: "03",
      title: "Photography",
      description: "Efficient sessions with individual coaching for each team member"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Professionally retouched images delivered via secure gallery"
    }
  ]

  return (
    <div ref={containerRef}>
      <Layout 
        title="Group Headshots | On-Location Corporate Team Photography"
        description="Professional on-location group headshots for corporate teams. Efficient, high-quality executive photography at your office location in Northern Virginia."
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
              radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(244, 202, 120, 0.2) 1px, transparent 1px),
              radial-gradient(circle at ${(1 - mousePosition.x) * 100}% ${(1 - mousePosition.y) * 100}%, rgba(185, 145, 77, 0.15) 1px, transparent 1px);
            background-size: 60px 60px, 90px 90px;
            animation: neural-pulse 25s ease-in-out infinite;
          }
          
          @keyframes neural-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
          }
          
          .brand-gradient {
            background: linear-gradient(135deg, #f4ca78 0%, #b9914d 100%);
          }
          
          .brand-gradient-text {
            background: linear-gradient(135deg, #f4ca78 0%, #b9914d 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .service-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(244, 202, 120, 0.1) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(244, 202, 120, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .service-card:hover {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(244, 202, 120, 0.2) 100%);
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(244, 202, 120, 0.3);
          }
        `}</style>

        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50">
          
          {/* Animated Background */}
          <div className="absolute inset-0 neural-grid opacity-40" />
          
          <motion.div 
            className="relative z-10 min-h-screen flex items-center"
            style={{ y, opacity }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-6"
                  >
                    <div className="morphic-glass inline-flex items-center px-4 py-2 rounded-full sans-font text-sm font-medium text-gray-700">
                      <Building className="h-4 w-4 mr-2 text-orange-500" />
                      On-Location Corporate Photography
                    </div>
                  </motion.div>

                  <motion.h1 
                    className="serif-font text-5xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                  >
                    Group
                    <span className="block brand-gradient-text italic">
                      Headshots
                    </span>
                  </motion.h1>

                  <motion.p 
                    className="sans-font text-xl text-gray-600 leading-relaxed mb-10 font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                  >
                    Professional on-location headshot sessions for corporate teams. 
                    I bring the studio to you, creating consistent, high-quality portraits 
                    that enhance your company's professional brand.
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-6 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    {[
                      { icon: Users, text: "5-100+ team members" },
                      { icon: MapPin, text: "Your office location" },
                      { icon: Clock, text: "5-10 min per person" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="sans-font text-gray-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 brand-gradient text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.a>
                    
                    <motion.a
                      href="tel:703-957-0643"
                      className="inline-flex items-center px-8 py-4 morphic-glass text-gray-700 font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      (703) 957-0643
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="relative max-w-lg mx-auto">
                    <motion.div 
                      className="morphic-glass rounded-3xl p-6 relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="grid grid-cols-3 gap-3 p-8">
                          {[...Array(9)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-16 h-16 rounded-full opacity-20"
                              style={{ background: 'linear-gradient(135deg, #f4ca78 0%, #b9914d 100%)' }}
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.4, 0.2]
                              }}
                              transition={{
                                duration: 3,
                                delay: i * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Users className="h-20 w-20" style={{ color: '#b9914d' }} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="serif-font text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Team Photography <span className="brand-gradient-text italic">Services</span>
              </h2>
              <p className="sans-font text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible packages designed for teams of every size and budget
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card rounded-3xl p-8 text-center h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="serif-font text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="sans-font text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Duration:</span>
                      <span className="text-gray-600">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">Team Size:</span>
                      <span className="text-gray-600">{service.teamSize}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="serif-font text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="brand-gradient-text italic">On-Location</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 rounded-full brand-gradient flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="serif-font text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="sans-font text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="serif-font text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="brand-gradient-text italic">Process</span>
              </h2>
              <p className="sans-font text-xl text-gray-600">
                Simple, efficient, and designed for busy professionals
              </p>
            </motion.div>

            <div className="space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="grid lg:grid-cols-4 gap-8 items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Step Number */}
                  <div className="text-center lg:text-left">
                    <motion.div
                      className="w-20 h-20 rounded-full brand-gradient flex items-center justify-center mx-auto lg:mx-0 mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="serif-font text-2xl font-black text-white">{step.step}</div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-3">
                    <h3 className="serif-font text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="sans-font text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process Summary */}
            <motion.div
              className="mt-12 bg-gray-100 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-8 text-gray-900">
                <div className="text-center">
                  <div className="text-3xl font-black">Quick</div>
                  <div className="text-sm font-semibold">Consultation</div>
                </div>
                <ArrowRight className="h-6 w-6" />
                <div className="text-center">
                  <div className="text-3xl font-black">Mobile</div>
                  <div className="text-sm font-semibold">Studio Setup</div>
                </div>
                <ArrowRight className="h-6 w-6" />
                <div className="text-center">
                  <div className="text-3xl font-black">Team</div>
                  <div className="text-sm font-semibold">Photography</div>
                </div>
                <ArrowRight className="h-6 w-6" />
                <div className="text-center">
                  <div className="text-3xl font-black">Gallery</div>
                  <div className="text-sm font-semibold">Delivery</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full brand-gradient flex items-center justify-center mx-auto mb-8"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Camera className="h-10 w-10 text-white" />
              </motion.div>

              <h2 className="serif-font text-4xl lg:text-5xl font-bold text-white mb-8 italic">
                Ready to elevate your team's professional image?
              </h2>
              
              <p className="sans-font text-xl text-gray-300 mb-10 leading-relaxed">
                Let's discuss your team photography needs and create a custom package that works for your schedule and budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 brand-gradient text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Schedule Consultation
                </motion.a>
                
                <motion.a
                  href="tel:703-957-0643"
                  className="inline-flex items-center px-10 py-5 morphic-glass text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Call (703) 957-0643
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </div>
  )
}