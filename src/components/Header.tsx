import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Investment', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-neutral-900 text-neutral-200 py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold" />
                <span>(703) 957-0643</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold" />
                <span>marquel@marquelyvette.com</span>
              </div>
            </div>
            <div className="text-gold text-xs font-medium">
              Serving Northern Virginia • Washington DC • Maryland
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={clsx(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200'
            : 'bg-white'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="block">
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Marquel Yvette Photography Logo"
                    width={isScrolled ? 160 : 200}
                    height={isScrolled ? 72 : 90}
                    className="transition-all duration-300 hover:scale-105"
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="absolute inset-0 blur-xl opacity-10 animate-pulse bg-gradient-to-r from-gold-light to-gold-dark"></div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-neutral-700 hover:text-gold px-4 py-2 text-sm font-medium transition-all duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="btn-gold px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase shadow-gold hover:shadow-gold-lg transition-all duration-300"
                >
                  Book Session
                </Link>
              </motion.div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-700 hover:text-gold p-2 rounded-md transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-neutral-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-neutral-700 hover:text-gold px-4 py-3 text-base font-medium transition-colors duration-200 border-l-4 border-transparent hover:border-gold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="btn-gold block text-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase shadow-gold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Session
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}