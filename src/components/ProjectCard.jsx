import { motion } from 'framer-motion';
// MEJORA: Se mantiene el icono para el enlace externo.
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index, isDarkMode }) => {
  const cardVariants = {
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

  const buttonVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className='group relative h-full flex flex-col' // Mantenemos la consistencia de altura
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col flex-grow ${
          isDarkMode
            ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10'
            : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10'
        }`}>
        {/* Project Image */}
        <div className='relative overflow-hidden'>
          <img
            src={project.image}
            alt={`Imagen del hito de carrera: ${project.title}`}
            className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105'
          />

          {project.featured && (
            <div className='absolute top-4 left-4'>
              <span className='bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium'>
                Featured
              </span>
            </div>
          )}

          <div className='absolute top-4 right-4'>
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                isDarkMode
                  ? 'bg-gray-800/80 text-gray-300'
                  : 'bg-white/80 text-gray-700'
              } backdrop-blur-sm`}>
              {project.category}
            </span>
          </div>

          {/* Hover Overlay con un único botón condicional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center'>
            {/* MEJORA: El botón solo aparece si 'liveUrl' existe. */}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                title={`View live demo of ${project.title}`}
                initial='initial'
                animate='initial'
                whileHover='animate'
                variants={buttonVariants}
                transition={{ duration: 0.3, delay: 0.1 }}
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors'>
                <ArrowUpRight size={16} />
                <span>More Information</span>
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className='p-6 flex flex-col flex-grow'>
          <h3 className='text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors'>
            {project.title}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-4 flex-grow ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className='flex flex-wrap gap-2 mt-auto pt-4'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-3 py-1 rounded-full ${
                  isDarkMode
                    ? 'bg-gray-800 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
