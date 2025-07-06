import { React, useState, useRef } from 'react';
// CORRECCIÓN: Se añade 'useMotionValueEvent' para reaccionar a los cambios de scroll
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

import signature from '../assets/images/signature.png';
import { NAVBAR_CONTENT } from '../utils/siteContent';

const NAV_ITEMS = NAVBAR_CONTENT.navItems;

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 10);
  });

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children, isMobile = false }) => (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault(); // Previene el salto de página brusco del ancla.
        handleScroll(href.substring(1)); // Llama a la función de scroll suave.
      }}
      whileHover={!isMobile ? { y: -2 } : { x: 5 }}
      className={`
        text-sm uppercase tracking-wider transition-colors 
        ${
          isDarkMode
            ? 'text-gray-400 hover:text-white'
            : 'text-gray-600 hover:text-gray-900'
        }
        ${isMobile ? 'block w-full text-left py-2' : ''}
      `}>
      {children}
    </motion.a>
  );

  const ThemeToggleButton = ({ isMobile = false }) => (
    <motion.button
      aria-label='Toggle dark mode'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => toggleDarkMode(isDarkMode ? 'light' : 'dark')}
      className={`p-2 rounded-full transition-colors ${
        isDarkMode
          ? 'text-gray-400 hover:text-white hover:bg-gray-800'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
      } ${isMobile ? 'flex items-center justify-between w-full' : ''}`}>
      {isMobile && <span>Cambiar Tema</span>}
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );

  // Lógica para cambiar el estilo del header al hacer scroll
  const headerStyles = isScrolled
    ? isDarkMode
      ? 'bg-gray-950 border-gray-800'
      : 'bg-gray-50 border-gray-200'
    : isDarkMode
    ? 'bg-gray-950/80 border-transparent'
    : 'bg-gray-50/80 border-transparent';

  return (
    <motion.header
      // El 'ref' ya no es necesario aquí para 'useScroll'
      aria-label='Main navigation'
      // El estilo ahora cambia dinámicamente con el scroll
      className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b transition-all duration-300 ${headerStyles}`}>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* UX: El logo es un enlace que lleva al inicio */}
        <a
          href='#top'
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className='flex items-center space-x-2 cursor-pointer'>
          <img
            src={signature}
            alt='Logo de Camilo Beltrán'
            className='h-6' // Ajustado para mantener la proporción
          />
          <span
            className={`text-lg ml-1 font-semibold transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            {NAVBAR_CONTENT.logoText}
          </span>
        </a>

        {/* SEMÁNTICA: La navegación principal está envuelta en <nav> */}
        <nav className='hidden md:flex items-center space-x-8'>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item}
              href={`#${item.toLowerCase()}`}>
              {item}
            </NavLink>
          ))}
          <ThemeToggleButton />
        </nav>

        {/* Controles para móvil */}
        <div className='md:hidden flex items-center'>
          <motion.button
            aria-label='Toggle menu'
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full z-10 transition-colors ${
              isDarkMode
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Menú desplegable para móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden overflow-hidden'>
            {/* SEMÁNTICA: El menú móvil también es una navegación */}
            <nav
              className={`mt-4 p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              } border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className='flex flex-col space-y-2'>
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    isMobile>
                    {item}
                  </NavLink>
                ))}
                <div className='pt-2 mt-2 border-t border-gray-700/50'>
                  <ThemeToggleButton isMobile />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
