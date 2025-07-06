import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { containerVariants, itemVariants } from '../../utils/helper';
import {
  CONTACT_SECTION_CONTENT,
  SOCIAL_LINKS_CONTENT,
} from '../../utils/siteContent';
import AvailabilityStatus from '../AvailabilityStatus';

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id={CONTACT_SECTION_CONTENT.sectionId}
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } relative overflow-hidden`}>
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className='absolute inset-0 -z-10 overflow-hidden'>
        <div
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`}
        />
      </motion.div>

      <div className='max-w-2xl mx-auto relative z-10'>
        {/* Section Header */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='text-center mb-20'>
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? 'text-gray-500' : 'text-gray-600'
            } mb-4`}>
            {CONTACT_SECTION_CONTENT.title}
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-5xl font-light mb-6'>
            {CONTACT_SECTION_CONTENT.subtitle.line1}
            <span className='text-blue-500 font-medium'>
              {CONTACT_SECTION_CONTENT.subtitle.line2}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            {CONTACT_SECTION_CONTENT.description}
          </motion.p>
        </motion.div>

        {/* Contact Info, Social Links, Availability */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='space-y-12'>
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-medium mb-6'>
              {CONTACT_SECTION_CONTENT.contactInfoTitle}
            </h3>
            <div className='space-y-4'>
              {CONTACT_SECTION_CONTENT.contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl ${
                    isDarkMode
                      ? 'bg-gray-800/30 hover:bg-gray-800/50'
                      : 'bg-gray-50/50 hover:bg-gray-100/50'
                  } transition-all duration-300`}>
                  <div
                    className={`p-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-white'
                    }`}>
                    <info.icon
                      size={20}
                      className='text-blue-500'
                    />
                  </div>
                  <div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                      {info.label}
                    </div>
                    <div className='font-medium'>{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className='text-xl font-medium mb-6'>
              {CONTACT_SECTION_CONTENT.contactMeTitle}
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              {SOCIAL_LINKS_CONTENT.links.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                      : 'bg-white/80 border-gray-200 hover:border-gray-300'
                  } ${social.bgColor} ${social.color}`}>
                  <social.icon size={20} />
                  <span className='font-medium'>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability Status */}
          <AvailabilityStatus isDarkMode={isDarkMode} />
        </motion.div>

        {/* CTA Bottom */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='text-center mt-20'>
          <motion.div
            variants={itemVariants}
            className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
              isDarkMode
                ? 'bg-gray-800/30 border-gray-700'
                : 'bg-gray-50/50 border-gray-200'
            } mb-6`}>
            <h3 className='text-xl font-medium mb-4'>
              {CONTACT_SECTION_CONTENT.finalBox.title}
            </h3>
            <p
              className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              } mb-6`}>
              {CONTACT_SECTION_CONTENT.finalBox.description}
            </p>
            {/* === MEJORA DE SEMÁNTICA Y ACCESIBILIDAD AQUÍ === */}
            <motion.a
              href={CONTACT_SECTION_CONTENT.finalBox.href}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label='Schedule a call via Google Calendar'
              className={`inline-block px-6 py-3 rounded-full border font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'border-gray-600 hover:border-blue-500 hover:text-blue-400'
                  : 'border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}>
              {CONTACT_SECTION_CONTENT.finalBox.textCTA}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
