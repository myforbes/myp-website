import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote, Star, Camera, Users } from 'lucide-react'
import { useState } from 'react'

interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  content: string
  image: string
  rating: number
  category: 'executive' | 'medical' | 'entrepreneur' | 'team'
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Chief Executive Officer',
    company: 'TechVision Solutions',
    content: 'Marquel captured exactly what I needed for my executive presence. The photos command respect while still showing my approachable side. The process was efficient and professional.',
    image: '/images/Beverly_Senita_287-MarquelYvette0039-instagram.jpg',
    rating: 5,
    category: 'executive'
  },
  {
    id: 2,
    name: 'Dr. James Chen',
    title: 'Cardiologist',
    company: 'Northern Virginia Heart Center',
    content: 'My ERAS residency photos were delivered in 24 hours as promised. Marquel understands exactly what medical professionals need. Highly recommend for any physician.',
    image: '/images/James_Ryan_538-MarquelYvette0302-retouched.jpg',
    rating: 5,
    category: 'medical'
  },
  {
    id: 3,
    name: 'Amanda Rodriguez',
    title: 'Founder & CEO',
    company: 'Innovation Partners',
    content: 'As a woman entrepreneur, finding a photographer who understands executive presence is crucial. Marquel delivered headshots that perfectly represent my brand and authority.',
    image: '/images/Smith_Leah_388-MarquelYvette0056-retouched.jpg',
    rating: 5,
    category: 'entrepreneur'
  },
  {
    id: 4,
    name: 'Michael Thompson',
    title: 'Managing Partner',
    company: 'Thompson & Associates',
    content: 'Our entire leadership team had headshots done. Marquel managed the logistics flawlessly and delivered consistent, high-quality results for all 15 executives.',
    image: '/images/Kouo_Charlotte_780-MarquelYvette0327-ig.jpg',
    rating: 5,
    category: 'team'
  },
  {
    id: 5,
    name: 'Lisa Park',
    title: 'Vice President of Operations',
    company: 'Global Financial Services',
    content: 'The difference in my LinkedIn engagement after updating to Marquel\'s headshots was immediate. Professional, confident, and perfectly lit. Worth every penny.',
    image: '/images/Farzam_Leila_821-MarquelYvette0007-ig.jpg',
    rating: 5,
    category: 'executive'
  },
  {
    id: 6,
    name: 'Dr. Rachel Kim',
    title: 'Pediatric Surgeon',
    company: 'Children\'s Medical Center',
    content: 'Marquel made me feel completely at ease during the session. The final photos convey both my medical expertise and compassionate approach to patient care.',
    image: '/images/Farrell_Holly_952-MarquelYvette0023-ig.jpg',
    rating: 5,
    category: 'medical'
  }
]

const categories = [
  { key: 'all', label: 'All Reviews', icon: Users },
  { key: 'executive', label: 'Executives', icon: Camera },
  { key: 'medical', label: 'Medical', icon: Camera },
  { key: 'entrepreneur', label: 'Entrepreneurs', icon: Camera },
  { key: 'team', label: 'Teams', icon: Camera }
]

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory)

  const currentTestimonial = filteredTestimonials[currentIndex]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#f4ca78] to-[#b9914d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#b9914d] to-[#f4ca78] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#f4ca78] to-[#b9914d] rounded-full mb-6 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Quote className="h-8 w-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by executives, medical professionals, and entrepreneurs throughout Northern Virginia
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => {
                setActiveCategory(category.key)
                setCurrentIndex(0)
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-[#f4ca78] to-[#b9914d] text-white shadow-lg'
                  : 'bg-white/70 text-gray-600 hover:bg-white hover:text-gray-900 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div 
          className="max-w-5xl mx-auto"
          key={`${activeCategory}-${currentIndex}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              
              {/* Photo */}
              <motion.div 
                className="lg:col-span-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square max-w-xs mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f4ca78] to-[#b9914d] rounded-2xl blur-lg opacity-20"></div>
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star className="h-6 w-6 fill-[#f4ca78] text-[#f4ca78]" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-lg bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent font-medium">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-gray-600">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          <motion.button
            onClick={prevTestimonial}
            className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg border border-gray-200 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Dots */}
          <div className="flex space-x-2">
            {filteredTestimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#f4ca78] to-[#b9914d] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg border border-gray-200 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: '500+', label: 'Executives Photographed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24hr', label: 'ERAS Delivery' },
            { number: '12+', label: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#f4ca78] to-[#b9914d] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}