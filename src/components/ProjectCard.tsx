import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'default' | 'featured';
}

export function ProjectCard({ project, index, variant = 'default' }: ProjectCardProps) {
  const isFeatured = variant === 'featured';
  const cardVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0 },
    },
  };

  const imageVariants = {
    hidden: { clipPath: 'inset(0 0 100% 0)' },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 1.0, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link
        to={`/works/${project.slug}`}
        className={`group block ${isFeatured ? '' : ''}`}
      >
        {/* Image Container - reveals top to bottom */}
        <motion.div
          className="relative overflow-hidden bg-border rounded-lg aspect-square"
          variants={imageVariants}
        >
          {project.coverImage && (
            <img
              src={project.coverImage}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/5 transition-colors duration-300" />

          {/* Tags badges */}
          {project.tags.length > 0 && (
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-black/60 backdrop-blur-sm text-white/80 border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Arrow indicator */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight size={18} className="text-text-primary" />
          </div>
        </motion.div>

        {/* Content - slides up after image fully reveals */}
        <motion.div
          className="mt-5"
          variants={contentVariants}
        >
          <p className="text-xs font-sans text-text-tertiary mb-2 uppercase">
            {project.company}, {project.year}
          </p>

          <h3 className={`font-serif font-semibold text-text-primary group-hover:text-text-secondary transition-colors ${
            isFeatured ? 'text-xl md:text-2xl' : 'text-xl md:text-2xl'
          }`}>
            {project.title}
          </h3>

          <p className="mt-2 text-text-secondary/70 leading-snug line-clamp-2">
            {project.description}
          </p>
        </motion.div>
      </Link>
    </motion.article>
  );
}
