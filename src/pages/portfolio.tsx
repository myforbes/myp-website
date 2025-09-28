import Layout from '@/components/Layout'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, Star, Award, Briefcase, User } from 'lucide-react'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  const portfolioImages = [
    {
      src: 'James_Ryan_538-MarquelYvette0302-retouched.jpg',
      alt: 'Executive portrait of James Ryan',
      category: 'executive',
      title: 'Executive Leadership'
    },
    {
      src: 'Beverly_Senita_287-MarquelYvette0039-instagram.jpg',
      alt: 'Professional headshot of Beverly Senita',
      category: 'corporate',
      title: 'Corporate Professional'
    },
    {
      src: 'Kouo_Charlotte_780-MarquelYvette0327-ig.jpg',
      alt: 'Business portrait of Charlotte Kouo',
      category: 'corporate',
      title: 'Business Leader'
    },
    {
      src: 'Smith_Andrew_866-MarquelYvette0016-ig.jpg',
      alt: 'Executive headshot of Andrew Smith',
      category: 'executive',
      title: 'Corporate Executive'
    },
    {
      src: 'Bulger_Marcella_617-MarquelYvette0067-ig.jpg',
      alt: 'Professional portrait of Marcella Bulger',
      category: 'professional',
      title: 'Healthcare Professional'
    },
    {
      src: 'Caras_Sydney_698-MarquelYvette0420-ig.jpg',
      alt: 'Business headshot of Sydney Caras',
      category: 'corporate',
      title: 'Marketing Director'
    },
    {
      src: 'Coster_Emily_462-MarquelYvette0556-ig.jpg',
      alt: 'Professional portrait of Emily Coster',
      category: 'professional',
      title: 'Legal Professional'
    },
    {
      src: 'Farzam_Leila_821-MarquelYvette0007-ig.jpg',
      alt: 'Executive headshot of Leila Farzam',
      category: 'executive',
      title: 'Technology Executive'
    },
    {
      src: 'Hodge_Danielle_130-MarquelYvette0033-ig.jpg',
      alt: 'Business portrait of Danielle Hodge',
      category: 'corporate',
      title: 'Operations Manager'
    },
    {
      src: 'James_Lia_397-MarquelYvette0012-ig.jpg',
      alt: 'Professional headshot of Lia James',
      category: 'professional',
      title: 'Medical Professional'
    },
    {
      src: 'Jennings_Mimi_488-MarquelYvette0078-ig.jpg',
      alt: 'Corporate portrait of Mimi Jennings',
      category: 'corporate',
      title: 'Finance Director'
    },
    {
      src: 'Leonard_Taylor_331-MarquelYvette0050+500px.jpg',
      alt: 'Executive portrait of Taylor Leonard',
      category: 'executive',
      title: 'Senior Executive'
    },
    {
      src: 'Rogers_Erin_381-MarquelYvette0110-ig.jpg',
      alt: 'Professional headshot of Erin Rogers',
      category: 'professional',
      title: 'Consultant'
    },
    {
      src: 'Sheffield_Joi_153-MarquelYvette0354-ig.jpg',
      alt: 'Business portrait of Joi Sheffield',
      category: 'corporate',
      title: 'Business Development'
    },
    {
      src: 'Smith_Leah_388-MarquelYvette0056-retouched.jpg',
      alt: 'Executive headshot of Leah Smith',
      category: 'executive',
      title: 'Executive Director'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Portraits', icon: Star },
    { id: 'executive', label: 'Executives', icon: Award },
    { id: 'corporate', label: 'Corporate', icon: Briefcase },
    { id: 'professional', label: 'Professionals', icon: User }
  ]

  const filteredImages = filter === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === filter)

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
    <Layout 
      title="Executive Headshot Portfolio | Marquel Yvette Photography"
      description="View our gallery of magazine-quality executive headshots and professional portraits for business leaders in Northern Virginia, DC & Maryland."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6">
              Professional <span className="text-gold-gradient">Portrait Gallery</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Discover the magazine-quality executive headshots that have elevated the professional image 
              of business leaders throughout Northern Virginia and the Washington DC area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-gold text-white shadow-gold'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filterOption.icon className="h-4 w-4" />
                <span>{filterOption.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={filter} // Re-animate when filter changes
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${filter}-${image.src}`}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer bg-neutral-100"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={`/images/${image.src}`}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">{image.title}</p>
                    <p className="text-xs opacity-90">Click to view</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors p-2"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src={`/images/${selectedImage}`}
                alt="Selected portfolio image"
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready for Your <span className="text-gold">Executive Portrait?</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Join the executives who trust Marquel Yvette Photography for their professional image.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="btn-gold px-8 py-4 rounded-full text-base font-semibold tracking-wide uppercase shadow-gold hover:shadow-gold-lg transition-all duration-300 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Your Session
              </motion.a>
              <motion.a
                href="/pricing"
                className="px-8 py-4 rounded-full text-base font-semibold text-white border-2 border-neutral-600 hover:border-gold hover:text-gold transition-all duration-300 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Investment
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}