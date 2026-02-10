import { motion } from 'framer-motion';
import { ArrowUpRight, Quote, Download } from 'lucide-react';
import { getAboutContent } from '@/lib/about';
import { useSEO, generateTitle } from '@/hooks/useSEO';

// Full recommendations data
const recommendations = [
  {
    id: 1,
    name: "Halil İbrahim Çakıroğlu",
    title: "Lead UI/UX Designer",
    image: "/recommendations/Halil.jpeg",
    quote: "It is rare to find a designer as skilled and dedicated as Tayfun. I can confidently say he is one of the most talented UI designers—and above all, one of the most fun people—I've had the opportunity to collaborate with. Tayfun has an exceptional eye for visual design, and despite his young age, his technical proficiency is remarkable. He excels at building and managing complex design systems, ensuring scalability and consistency across every project. His UI craft is consistently polished, but he also brings a strong foundation in user research to the table, making his design decisions both aesthetic and functional. What truly sets Tayfun apart is his personality and professional approach. He is an incredibly cheerful colleague who makes collaboration effortless. His communication with both the team and stakeholders is top-notch, and he has a natural ability to integrate AI-driven tools into his workflow to enhance efficiency without sacrificing quality. Beyond his technical skills, Tayfun brings genuine vision and positive energy to the team. He doesn't just execute; he contributes ideas that elevate the product and the culture around him. Any organization would benefit greatly from Tayfun's expertise and his infectious positive impact.",
  },
  {
    id: 2,
    name: "Beyza Atasayar Kozpınar",
    title: "Senior Product Designer",
    image: "/recommendations/Beyza.jpeg",
    quote: "Tayfun is the kind of designer who brings both top-tier design skills and a remarkably positive energy to the team every single day. His UI work is consistently high-quality, but what really makes him a great designer is his relentless drive to keep learning and evolving. Tayfun is an extremely proactive person who genuinely enjoys being involved in different projects. He's always looking for ways to make the team's life easier, putting in the extra effort to streamline workflows or solve problems before they even arise. What I appreciated most about working with him was his mindset. He isn't just focused on his own tasks; he's always eager to push the team forward and share new ideas. Collaborating with him was a genuine blast, he's the kind of person who not only delivers great design but also makes the whole process more enjoyable for everyone involved.",
  },
  {
    id: 3,
    name: "Dilan Mirioğlu",
    title: "UX Designer",
    image: "/recommendations/Dilan.jpeg",
    quote: "Tayfun is a highly capable UX/UI Designer with a genuine passion for his work, and it shows in everything he delivers. He is talented, positive, and consistently puts effort into creating the best possible version of each design. Tayfun approaches problems with curiosity — asking the right questions, taking time to understand user needs and product goals, and providing thoughtful, insightful feedback that improves the overall experience. He is also a great teammate and a pleasure to collaborate with. Tayfun brings an encouraging and supportive energy to the team, and he genuinely cares about the people he works with. He motivates others to keep learning and improving, while also actively investing in his own growth. With his open communication style and eagerness to develop, he consistently produces senior-level outcomes and contributes meaningfully to both the product and the team culture.",
  },
  {
    id: 4,
    name: "Uğur Anlak",
    title: "Lead UI/UX Designer",
    image: "/recommendations/Ugur.jpeg",
    quote: "Tayfun, ekibe katıldığı ilk günden itibaren öğrenmeye olan isteği, sorumluluk bilinci ve ürettiği işlerin kalitesiyle fark yarattı. Roofstacks'te birçok projede hem destek hem de kritik roller üstlenerek ekibin güvenilir bir parçası haline geldi. Bugün geldiği noktada, title'ının ötesinde işler ortaya koyarak projelerin başarısına önemli katkılar sağlıyor. Onun gelişimini görmek ve birlikte çalışmak benim için büyük bir gurur.",
  },
  {
    id: 5,
    name: "Berkay Boz",
    title: "Senior UI/UX Designer",
    image: "/recommendations/Berkay.jpeg",
    quote: "Tayfun ile yaklaşık 3 yıl boyunca birçok farklı projede birlikte çalışma fırsatım oldu. Kendisi yaratıcı bakış açısına sahip, kullanıcı odaklı düşünebilen ve tasarım sistemleri konusunda oldukça deneyimli bir tasarımcı. Aynı zamanda ekip içi iletişimi kuvvetli, geri bildirimlere açık ve çözüm odaklı bir ekip arkadaşı. Tayfun'un hem tasarım kalitesi hem de çalışma disipliniyle yer aldığı ekiplere ciddi katkı sağladığını rahatlıkla söyleyebilirim. UI/UX alanında güvenle tavsiye ederim.",
  },
  {
    id: 6,
    name: "Emre Can Tekgül",
    title: "Senior UI/UX Designer",
    image: "/recommendations/Emre.jpeg",
    quote: "Tayfun birlikte çalıştığımız süre boyunca hem yeteneği, hem de iletişim becerileriyle birlikte çalışmayı çok keyifli hale getiren bir tasarımcı. Onunla aynı takımda çalışmak son derece keyifli bir deneyimdi. Yaratıcı bakış açısı ile projelere ve ekibe değer kattı. Özellikle karmaşık akışları basitleştirme ve ürettiği çözümler son derece değerliydi. Beraber çalıştığımız projelerde, zorlu zamanlarda bile kaliteli iş çıkarma konusunda her zaman güvenebileceğimiz biriydi. Herkesin fikrini dinleyen ve ortak bir çözüm bulmayı hedefleyen yapısıyla projemizi ileriye taşıdı. Beraber çalıştığımız tüm projelerde olduğu gibi, gelecekteki projelerinde de harika işler başaracağına inanıyorum! Teşekkürler Tayfun, birlikte çalışmak büyük bir zevkti!",
  },
];

export function AboutPage() {
  const about = getAboutContent();

  useSEO({
    title: generateTitle('About'),
    description: 'Learn about Jonathan Doe, a UI/UX Designer with over 10 years of experience crafting digital experiences across mobile, web, and enterprise platforms.',
    keywords: ['About', 'UI/UX Designer', 'Experience', 'Skills', 'Background'],
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-border overflow-hidden">
              {about.profile.avatar && (
                <img
                  src={about.profile.avatar}
                  alt={about.profile.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <span
              className="text-xs font-sans uppercase bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 25%, #93c5fd 55%, #818cf8 80%, #c084fc 100%)' }}
            >
              About Me
            </span>
            <h2 className="mt-4 font-serif font-semibold text-4xl md:text-5xl text-text-primary">
              {about.profile.name}
            </h2>
            <p className="mt-2 text-text-secondary text-lg">
              {about.profile.title} · {about.profile.location}
            </p>

            <div className="mt-8 space-y-6 text-text-secondary leading-relaxed">
              {about.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={about.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-primary font-sans text-sm rounded-full hover:bg-border/50 transition-colors"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
              <a
                href={about.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-primary font-sans text-sm rounded-full hover:bg-border/50 transition-colors"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>
              <a
                href="/Tayfun_Holin_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-primary font-sans text-sm rounded-full hover:bg-border/50 transition-colors"
              >
                Download CV
                <Download size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Domains */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="sr-only">Skills & Domains</h2>
        <div className="flex flex-col gap-12 text-center">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif font-semibold text-2xl text-text-primary mb-2">
              {about.skills.title}
            </h3>
            {about.skills.description && (
              <p className="text-text-tertiary mb-6">{about.skills.description}</p>
            )}
            <div className="flex flex-wrap justify-center gap-2">
              {about.skills.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-sans text-text-primary/80 border border-white/20 bg-white/5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Domains */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-serif font-semibold text-2xl text-text-primary mb-2">
              {about.domains.title}
            </h3>
            {about.domains.description && (
              <p className="text-text-tertiary mb-6">{about.domains.description}</p>
            )}
            <div className="flex flex-wrap justify-center gap-2">
              {about.domains.items.map((domain) => (
                <span
                  key={domain}
                  className="px-4 py-2 text-sm font-sans text-text-primary/80 border border-white/20 bg-white/5 rounded-full"
                >
                  {domain}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif font-semibold text-2xl text-text-primary mb-6">
            {about.beyondDesign.title}
          </h2>
          {about.beyondDesign.paragraphs.map((paragraph, index) => (
            <p key={index} className={`text-text-secondary leading-relaxed ${index > 0 ? 'mt-4' : ''}`}>
              {paragraph}
            </p>
          ))}
        </motion.div>
      </section>

      {/* Recommendations */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif font-semibold text-2xl text-text-primary">
            Recommendations
          </h2>
          <p className="mt-2 text-text-tertiary">
            What colleagues say about working with me
          </p>
        </motion.div>

        <div className="divide-y divide-white/[0.08]">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-8 first:pt-0 last:pb-0"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-text-secondary leading-relaxed mb-6">
                "{rec.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/[0.1]"
                />
                <div>
                  <h4 className="font-serif font-semibold text-text-primary">
                    {rec.name}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {rec.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
