import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

import PROFILE_PIC from '../../assets/images/profile-img.jpg';
import { containerVariants, itemVariants } from '../../utils/helper';
import { HERO_CONTENT, SOCIAL_LINKS_CONTENT } from '../../utils/siteContent';
import AvailabilityStatus from '../AvailabilityStatus';

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  return (
    // === CAMBIO DE SEMÁNTICA AQUÍ ===
    // El elemento raíz ahora es <motion.section> en lugar de <motion.div>.
    // Se ha movido el 'id' a este elemento principal.
    <motion.section
      id={HERO_CONTENT.sectionId}
      layoutScroll
      ref={sectionRef}
      className={`relative min-h-screen transition-all duration-500 ${
        isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
      {/* El contenedor interno ahora es un <div> para mantener la estructura de la animación. */}
      <motion.div
        style={{ y: heroY }}
        className='min-h-screen flex items-center justify-center relative px-6 pt-10'>
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
            }`}
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
            }`}
          />
        </div>

        <div className='max-w-7xl mx-auto w-full z-10 mt-20'>
          {/* Availability Status */}
          <AvailabilityStatus isDarkMode={isDarkMode} />
          {/* Mobile Layout - Centered */}
          <div className='black lg:hidden'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={containerVariants}
              className='text-center'>
              {/* Profile Image - Mobile */}
              <motion.div
                variants={imageVariants}
                className='mb-8'>
                <div className='w-32 h-32 mx-auto relative'>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${
                      isDarkMode ? 'border-gray-800' : 'border-gray-300'
                    } shadow-2xl`}>
                    <img
                      src={PROFILE_PIC}
                      alt='Camilo Beltran – B2B Tech Sales Professional'
                      className='w-full h-full object-cover'
                    />
                  </motion.div>
                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className='absolute -inset-2 rounded-2xl border border-blue-500/20'
                  />
                </div>
              </motion.div>

              {/* Content - Mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-600'
                } mb-4`}>
                {HERO_CONTENT.subtitle}
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className='text-3xl md:text-5xl font-light mb-6 leading-tight'>
                <span
                  className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {HERO_CONTENT.title.line1}
                </span>
                <span className='text-blue-500 font-medium ml-2'>
                  {HERO_CONTENT.title.line2}
                </span>
                <br />
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                  {HERO_CONTENT.title.line3}
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}>
                {HERO_CONTENT.description}
              </motion.p>

              {/* CTA Buttons - Mobile */}
              <motion.div
                variants={itemVariants}
                className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                <motion.a
                  href='#work'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('work');
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300'>
                  {HERO_CONTENT.ctaButtons.primary}
                </motion.a>
                <motion.a
                  href='#contact'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`border ${
                    isDarkMode
                      ? 'border-gray-700 hover:border-gray-600 text-gray-300'
                      : 'border-gray-300 hover:border-gray-400 text-gray-700'
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}>
                  {HERO_CONTENT.ctaButtons.secondary}
                </motion.a>
              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div
                variants={itemVariants}
                className='flex justify-center space-x-6 mb-8'>
                {SOCIAL_LINKS_CONTENT.links.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}>
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Tech Stack - Mobile */}
              <motion.div
                variants={itemVariants}
                className='flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap'>
                {HERO_CONTENT.techStack.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center space-x-2'>
                    <span
                      className={
                        isDarkMode ? 'text-gray-600' : 'text-gray-500'
                      }>
                      {item}
                    </span>
                    {index < HERO_CONTENT.techStack.length - 1 && (
                      <span
                        className={
                          isDarkMode ? 'text-gray-700' : 'text-gray-400'
                        }>
                        •
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout - Split */}
          <div className='hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center'>
            {/* Left Colum - Content */}
            <motion.div
              initial='hidden'
              animate='visible'
              variants={containerVariants}
              className='text-left'>
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-600'
                } mb-6`}>
                {HERO_CONTENT.subtitle}
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className='text-5xl xl:text-7xl font-light mb-8 leading-tight'>
                <span
                  className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {HERO_CONTENT.title.line1}
                </span>
                <br />
                <span className='text-blue-500 font-medium'>
                  {HERO_CONTENT.title.line2}
                </span>
                <br />
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                  {HERO_CONTENT.title.line3}
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } mb-12 font-light leading-relaxed max-w-lg`}>
                {HERO_CONTENT.description}
              </motion.p>
              {/* CTA Buttons - Desktop */}
              <motion.div
                variants={itemVariants}
                className='flex gap-6 mb-8'>
                <motion.a
                  href='#work'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('work');
                  }}
                  whileHover={{ y: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300'>
                  {HERO_CONTENT.ctaButtons.primary}
                </motion.a>
                <motion.a
                  href='#contact'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  whileHover={{ y: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`border ${
                    isDarkMode
                      ? 'border-gray-700 hover:border-gray-600 text-gray-300'
                      : 'border-gray-300 hover:border-gray-400 text-gray-700'
                  } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}>
                  {HERO_CONTENT.ctaButtons.secondary}
                </motion.a>
              </motion.div>

              {/* Social Links - Desktop */}
              <motion.div
                variants={itemVariants}
                className='flex space-x-6 mb-12'>
                {SOCIAL_LINKS_CONTENT.links.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    title={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex flex-col items-center justify-center p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}>
                    <social.icon size={20} />
                    <span className=''>{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Colum - Content */}
            <motion.div
              initial='hidden'
              animate='visible'
              variants={imageVariants}
              className='flex justify-center lg:justify-end'>
              <div className='relative'>
                {/* Tech Stack - Desktop */}
                <motion.div
                  variants={itemVariants}
                  className='flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 -left-28 text-center'>
                  {HERO_CONTENT.techStack.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-2'>
                      <span
                        className={
                          isDarkMode ? 'text-gray-600' : 'text-gray-500'
                        }>
                        {item}
                      </span>
                      {index < HERO_CONTENT.techStack.length - 1 && (
                        <span
                          className={
                            isDarkMode ? 'text-gray-700' : 'text-gray-400'
                          }>
                          •
                        </span>
                      )}
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-80 h-96 rounded-3xl overflow-hidden border-4 ${
                    isDarkMode ? 'border-gray-800' : 'border-gray-300'
                  } shadow-2xl`}>
                  <img
                    src={PROFILE_PIC}
                    alt='Camilo Beltran – B2B Tech Sales Professional'
                    className='w-full h-full object-cover'
                  />
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className='absolute -inset-4 rounded-3xl border border-blue-500/20'
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className='absolute -inset-8 rounded-3xl border border-purple-500/10'
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
          <ArrowDown
            size={20}
            className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}
            aria-hidden='true'
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
