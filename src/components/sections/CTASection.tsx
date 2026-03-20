import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/common/ScrollReveal'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero noise-overlay py-28 md:py-36">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="absolute top-0 right-[10%] w-96 h-96 bg-primary/8 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-[15%] w-80 h-80 bg-accent-purple/6 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

      <div className="absolute top-1/4 left-[5%] w-px h-40 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-px h-32 bg-gradient-to-b from-transparent via-accent-purple/10 to-transparent" />

      <div className="relative z-10 section-container text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-7 font-display leading-tight">
            开启企业数字化<br className="hidden sm:block" />转型之旅
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light" style={{ color: 'hsl(var(--hero-muted))' }}>
            无论您是初创企业还是成熟公司，柏枝科技都能为您提供最适合的解决方案
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact">
              <Button variant="premium" size="xl" className="group font-display">
                免费试用
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="hero" size="xl" className="font-display">了解产品</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
