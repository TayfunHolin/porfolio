import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ShaderGradientCanvas, ShaderGradient, presets } from '@shadergradient/react';
import { getHomeContent } from '@/lib/home';
import { getExperiences } from '@/lib/experience';
import { getFeaturedProjects, getProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { useSEO, generateTitle } from '@/hooks/useSEO';

function CtaCard({ linkedin }: { linkedin: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { damping: 20, stiffness: 150 });
  const springY = useSpring(btnY, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const padding = 8;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const maxX = rect.width / 2 - padding;
    const maxY = rect.height / 2 - padding;
    btnX.set(Math.max(-maxX, Math.min(maxX, x)));
    btnY.set(Math.max(-maxY, Math.min(maxY, y)));
  };

  const handleMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cta-card relative flex flex-col items-center justify-center border border-dashed border-white/[0.08] rounded-lg aspect-[3/2] px-8 text-center overflow-hidden hover:border-white/[0.16] transition-colors cursor-none"
      >
        {/* Animated gradient background on hover */}
        <div
          className="cta-card-glow absolute inset-0"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, #7c3aed, #a855f7, #6366f1, #3b82f6, #7c3aed)',
            filter: 'blur(60px)',
          }}
        />
        <div className="relative z-10">
          <h3 className="font-serif font-semibold text-xl text-text-primary">
            Got a project in mind?
          </h3>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
            I'm always open to new ideas and collaborations. Let's build something great together.
          </p>
        </div>
        {/* Magnetic button */}
        <motion.a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] border border-white/[0.1] text-sm text-text-primary rounded-full hover:bg-white/[0.12] transition-colors"
          style={{ x: springX, y: springY }}
        >
          Let's talk
          <ArrowUpRight size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
}

export function HomePage() {
  const home = getHomeContent();
  const featuredProjects = getFeaturedProjects();
  const allProjects = getProjects();
  const experiences = getExperiences();

  useSEO({
    title: generateTitle(),
    description: home.hero.subtitle,
    keywords: ['UI/UX Designer', 'Product Designer', 'Istanbul', 'Portfolio', 'Web Design', 'Mobile App Design'],
  });
  // Subtle sphere follow
  const sphereX = useMotionValue(0);
  const sphereY = useMotionValue(0);
  const sphereSpringX = useSpring(sphereX, { damping: 40, stiffness: 90 });
  const sphereSpringY = useSpring(sphereY, { damping: 40, stiffness: 90 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    sphereX.set((e.clientX - rect.left - centerX) * 0.5);
    sphereY.set((e.clientY - rect.top - centerY) * 0.5);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden -mt-24"
        onMouseMove={handleMouseMove}
      >
        {/* Glow behind sphere */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div
            className="w-[700px] h-[700px] rounded-full blur-[120px] opacity-50"
            style={{
              background: 'radial-gradient(circle, #8b5cf6 0%, #6366f1 30%, #3b82f6 60%, transparent 80%)',
            }}
          />
        </div>

        {/* Shader Gradient Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none flex items-center justify-center will-change-transform"
          style={{ x: sphereSpringX, y: sphereSpringY }}
        >
          <ShaderGradientCanvas
            style={{ position: 'absolute', inset: 0 }}
            pixelDensity={1.5}
            fov={45}
            pointerEvents="none"
          >
            <ShaderGradient {...(presets.interstella.props as any)} cDistance={2} cameraZoom={5} color1="#7c3aed" color2="#a855f7" color3="#6366f1" brightness={1.3} />
          </ShaderGradientCanvas>
        </motion.div>

        {/* Blur layer to diffuse sphere into light glow */}
        <div className="absolute inset-0 pointer-events-none backdrop-blur-2xl" />

        {/* Black blur overlay between sphere and content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 5%, rgba(0,0,0,0.5) 18%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.98) 50%)',
          }}
        />


        <div className="relative max-w-4xl mx-auto px-6 w-full text-center">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-sm text-text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available to work
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-6"
          >
            <span className="text-text-tertiary font-sans text-sm uppercase">
              {home.hero.title} — {home.hero.location}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-semibold text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-text-primary leading-[1.1]"
          >
            {home.hero.headline}{' '}
            <span className="italic text-accent">{home.hero.headlineAccent}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-text-secondary text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto"
          >
            {home.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-surface font-sans text-sm rounded-full hover:bg-text-secondary transition-colors"
            >
              View My Works
              <ArrowRight size={16} />
            </Link>
            <a
              href={home.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-sans text-sm rounded-full hover:bg-border/50 transition-colors"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Brand logos marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 pt-12 overflow-hidden"
          >
            <div className="relative">
              <div className="flex animate-marquee gap-16 items-center">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 items-center shrink-0">
                    {['Spotify', 'Slack', 'Notion', 'Figma', 'Stripe', 'Vercel'].map((brand) => (
                      <div
                        key={`${setIndex}-${brand}`}
                        className="flex items-center gap-3 text-text-tertiary/50 shrink-0"
                      >
                        <div className="w-10 h-10 rounded-md bg-white/[0.06] flex items-center justify-center text-sm font-bold text-text-tertiary">
                          {brand[0]}
                        </div>
                        <span className="text-base font-medium">{brand}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        {/* Diamond light */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 40% 60% at 50% 50%, #a855f7 0%, #7c3aed 25%, #6366f1 45%, transparent 70%)',
            clipPath: 'polygon(50% 5%, 95% 50%, 50% 95%, 5% 50%)',
            filter: 'blur(60px)',
            opacity: 0.2,
          }}
        />
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            label={home.featuredWork.label}
            title={home.featuredWork.title}
          />
          <Link
            to="/works"
            className="hidden md:inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            View all works
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {allProjects.slice(0, 7).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              variant="featured"
            />
          ))}

          {/* CTA placeholder card */}
          <CtaCard linkedin={home.social.linkedin} />
        </div>

        <div className="mt-12 md:hidden">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            View all works
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <SectionHeading
          label={home.experiencePreview.label}
          title={home.experiencePreview.title}
        />

        <div className="grid max-w-3xl">
          {experiences.slice(0, 4).map((exp, index) => {
            const content = (
              <>
                {exp.logo && (
                  <div className="w-16 h-16 bg-border overflow-hidden flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="inline-flex items-center gap-1.5 font-serif font-semibold text-xl text-text-primary group-hover:text-text-secondary transition-colors">
                    {exp.company}
                    {exp.url && <ArrowUpRight size={18} />}
                  </h3>
                  <p className="mt-1 text-text-secondary">
                    {exp.role} · Full Time · {exp.period.replace(' — ', ' · ')}
                  </p>
                  {exp.description && (
                    <p className="mt-2 text-text-secondary text-sm leading-snug">
                      {exp.description}
                    </p>
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-border"
              >
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 py-6"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="group flex items-start gap-5 py-6">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            View full experience
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-text-primary p-12 md:p-16 lg:p-20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-surface max-w-xl">
              {home.cta.title}
            </h2>
            <p className="mt-6 text-surface/70 text-lg max-w-lg">
              {home.cta.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={home.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-text-primary font-sans text-sm rounded-full hover:bg-surface/90 transition-colors"
              >
                {home.cta.buttonText}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
