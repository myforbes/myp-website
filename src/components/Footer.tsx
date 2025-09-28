import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Award, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const services = [
    'Executive Headshots',
    'Business Portraits', 
    'Professional Branding',
    'Corporate Team Photos',
    'LinkedIn Profile Photos',
    'Medical Professional Portraits'
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="mb-6">
              <div className="relative inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Marquel Yvette Photography Logo"
                  width={180}
                  height={81}
                  className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{ objectFit: 'contain' }}
                />
                <div className="absolute inset-0 blur-xl opacity-20 bg-gradient-to-r from-gold-light to-gold-dark"></div>
              </div>
              <p className="text-gold font-medium mt-3">Executive Headshot Specialist</p>
            </div>
            
            <p className="text-neutral-300 text-lg leading-relaxed mb-6 max-w-md">
              Creating magazine-quality executive headshots for professionals who demand excellence. 
              Serving discerning clients throughout Northern Virginia, Washington DC, and Maryland.
            </p>

            {/* Awards/Credentials */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 text-sm text-neutral-400">
                <Award className="h-4 w-4 text-gold" />
                <span>Headshot Crew Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-400">
                <Clock className="h-4 w-4 text-gold" />
                <span>12+ Years Experience</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group p-3 bg-neutral-800 rounded-full hover:bg-gold transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-gold">Specializations</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  className="text-neutral-300 hover:text-gold transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-gold">Get In Touch</h3>
            <div className="space-y-4">
              <motion.a 
                href="tel:7039570643"
                className="flex items-center space-x-3 text-neutral-300 hover:text-gold transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-gold transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>(703) 957-0643</span>
              </motion.a>
              
              <motion.a 
                href="mailto:marquel@marquelyvette.com"
                className="flex items-center space-x-3 text-neutral-300 hover:text-gold transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-gold transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>marquel@marquelyvette.com</span>
              </motion.a>
              
              <motion.div 
                className="flex items-center space-x-3 text-neutral-300"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p>Chantilly, Virginia</p>
                  <p className="text-sm text-neutral-400">Serving DMV Area</p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="btn-gold inline-block px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase shadow-gold hover:shadow-gold-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Marquel Yvette Photography LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <span className="text-neutral-600">|</span>
              <span className="text-gold">Loudoun County, VA Studio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}