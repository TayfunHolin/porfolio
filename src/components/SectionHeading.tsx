import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ label, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      {label && (
        <span
          className="inline-block text-xs font-sans uppercase mb-3 bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 25%, #93c5fd 55%, #818cf8 80%, #c084fc 100%)' }}
        >
          {label}
        </span>
      )}
      <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-text-primary">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-text-secondary text-lg leading-relaxed ${
          align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
