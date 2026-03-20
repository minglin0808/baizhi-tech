import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero noise-overlay">
      {/* Background image with blend */}
      <img
        src="/images/hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
      />

      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Floating orbs */}
      <div className="absolute top-[15%] right-[20%] w-80 h-80 rounded-full bg-primary/8 blur-[120px] animate-float" />
      <div
        className="absolute bottom-[20%] left-[10%] w-[28rem] h-[28rem] rounded-full bg-accent-purple/6 blur-[140px] animate-float"
        style={{ animationDelay: '3s' }}
      />
      <div className="absolute top-[40%] left-[40%] w-64 h-64 rounded-full bg-primary-glow/5 blur-[100px] animate-pulse-glow" />

      {/* Geometric decorations */}
      <div className="absolute top-[20%] left-[8%] w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-[30%] right-[12%] w-px h-48 bg-gradient-to-b from-transparent via-accent-purple/15 to-transparent" />
      <div
        className="absolute bottom-[35%] right-[25%] w-20 h-20 border border-primary/10 rounded-2xl rotate-12 animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-[25%] left-[30%] w-12 h-12 border border-accent-purple/10 rounded-xl -rotate-12 animate-float"
        style={{ animationDelay: '5s' }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-hero-foreground/10 bg-hero-foreground/5 backdrop-blur-md mb-10 animate-fade-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-glow opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-glow" />
          </span>
          <span className="text-sm font-medium tracking-wide text-hero-foreground/80 font-display">
            专业 ERP 软件服务商
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-hero-foreground leading-[1.05] mb-8 animate-fade-up font-display" style={{ animationDelay: '100ms' }}>
          以科技赋能企业
          <br />
          <span className="text-gradient-primary">让管理更智慧</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-up leading-relaxed font-light"
          style={{ animationDelay: '200ms', color: 'hsl(var(--hero-muted))' }}
        >
          柏枝科技深耕 ERP 领域，为企业提供金蝶云全系列产品及数字化转型解决方案，助力企业降本增效
        </p>

        <div
          className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up"
          style={{ animationDelay: '350ms' }}
        >
          <Link to="/contact">
            <Button variant="premium" size="xl">免费试用</Button>
          </Link>
          <Link to="/contact">
            <Button variant="hero" size="xl">立即咨询</Button>
          </Link>
        </div>

        {/* Stats bar - glass card */}
        <div
          className="mt-24 mx-auto max-w-3xl rounded-2xl p-8 animate-fade-up"
          style={{ animationDelay: '500ms', background: 'hsl(0 0% 100% / 0.04)', backdropFilter: 'blur(24px)', border: '1px solid hsl(0 0% 100% / 0.08)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: '服务企业' },
              { value: '10+', label: '年行业经验' },
              { value: '99%', label: '客户满意度' },
              { value: '24h', label: '响应速度' },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center ${i < 3 ? 'md:border-r md:border-hero-foreground/10' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary font-display">{stat.value}</div>
                <div className="text-sm mt-1.5 font-medium" style={{ color: 'hsl(var(--hero-muted))' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
