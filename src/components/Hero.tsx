import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Award, 
  ArrowRight, 
  Star
} from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold tracking-wide uppercase border border-gold/20">
                <Award className="h-4 w-4 mr-2" />
                Headshot Crew Certified
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-display font-bold text-neutral-900 leading-tight mb-6"
            >
              Executive
              <span className="block text-gold-gradient">Headshots</span>
              <span className="block text-4xl lg:text-5xl font-normal">That Command Respect</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-neutral-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Magazine-quality portraits for executives, business owners, medical professionals, and lawyers who demand excellence. 
              <strong className="text-neutral-900"> Serving Northern Virginia's most discerning professionals.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="btn-gold px-8 py-4 rounded-full text-base font-semibold tracking-wide uppercase shadow-gold hover:shadow-gold-lg transition-all duration-300 inline-flex items-center group"
              >
                Book Your Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-full text-base font-semibold text-neutral-700 border-2 border-neutral-300 hover:border-gold hover:text-gold transition-all duration-300 inline-flex items-center justify-center"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* Professional Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Hero Professional Portrait */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/James_Ryan_538-MarquelYvette0302-retouched.jpg"
                  alt="Professional executive headshot by Marquel Yvette Photography"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg backdrop-blur-sm"
              >
                <Star className="h-8 w-8 text-gold" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg backdrop-blur-sm"
              >
                <Award className="h-8 w-8 text-gold" />
              </motion.div>

              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg"
              >
                <p className="text-xs font-semibold text-neutral-900">Executive Portrait</p>
                <p className="text-xs text-gold">Magazine Quality</p>
              </motion.div>
            </div>

            {/* Portfolio Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-3"
            >
              {[
                'Beverly_Senita_287-MarquelYvette0039-instagram.jpg',
                'Kouo_Charlotte_780-MarquelYvette0327-ig.jpg',
                'Smith_Andrew_866-MarquelYvette0016-ig.jpg'
              ].map((img, index) => (
                <motion.div
                  key={img}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={`/images/${img}`}
                    alt="Professional headshot portfolio sample"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}