import { Link } from 'react-router-dom'
import { Target, Heart, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/common/ScrollReveal'

const values = [
  {
    icon: Target,
    title: '使命',
    description: '做值得托付的科技企业，以专业服务赋能客户成长，让每一家企业都能享受数字化带来的红利。',
  },
  {
    icon: Lightbulb,
    title: '愿景',
    description: '成为企业数字化转型领域最受信赖的服务商，持续以技术创新驱动客户价值。',
  },
  {
    icon: Heart,
    title: '价值观',
    description: '客户至上、专业务实、持续创新、诚信共赢。我们相信只有客户成功，才是真正的成功。',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-gradient-hero noise-overlay">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0">
          <img src="/images/about-illustration.png" alt="" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-accent-purple/6 rounded-full blur-[100px]" />
        <div className="relative z-10 section-container text-center">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-[0.2em] mb-4 font-display animate-fade-up">About Us</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-hero-foreground mb-5 font-display animate-fade-up" style={{ animationDelay: '100ms' }}>关于我们</h1>
          <p className="text-lg max-w-xl mx-auto animate-fade-up font-light" style={{ animationDelay: '200ms', color: 'hsl(var(--hero-muted))' }}>
            与您并肩成长的数字化转型伙伴
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Company Intro */}
      <section className="section-padding bg-background mesh-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 font-display">Our Story</p>
                <h2 className="section-title text-foreground mb-8">
                  专注企业<span className="text-gradient-primary">数字化转型</span>
                </h2>
                <div className="space-y-5 text-muted-foreground leading-[1.8]">
                  <p>
                    柏枝科技是一家专注于企业数字化转型的科技服务商。我们以"做值得托付的企业，赋能客户成长"为使命，
                    深耕ERP领域多年，致力于为企业提供专业、高效的软件服务与管理解决方案。
                  </p>
                  <p>
                    我们始终相信，优秀的技术应当服务于人。从需求咨询到系统实施，从员工培训到售后支持，
                    柏枝科技以全生命周期的服务体系，帮助每一位客户实现降本增效、数据驱动决策的目标。
                  </p>
                  <p>
                    作为金蝶生态合作伙伴，我们提供金蝶云全系列产品服务，覆盖小微企业到大型集团的管理需求，
                    帮助不同发展阶段的企业找到最适合的数字化路径。
                  </p>
                </div>
                <Link to="/contact" className="inline-block mt-10">
                  <Button variant="premium" size="lg" className="font-display">联系我们</Button>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border">
                  <img src="/images/about-illustration.png" alt="柏枝科技 - 企业数字化转型" className="w-full h-auto" loading="lazy" />
                </div>
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-2xl bg-gradient-primary opacity-15 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl bg-accent-purple/15 blur-2xl" />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 glass-card rounded-xl px-5 py-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-2xl font-bold text-gradient-primary font-display">10+</div>
                  <div className="text-xs text-muted-foreground">年行业经验</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 font-display">Our Beliefs</p>
              <h2 className="section-title text-foreground mb-4">
                我们的<span className="text-gradient-primary">信念</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 120}>
                <div className="group p-8 rounded-2xl glass-card text-center h-full hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-7 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <item.icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-display">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Numbers */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 font-display">Trust</p>
              <h2 className="section-title text-foreground mb-4">值得信赖</h2>
              <p className="section-subtitle mx-auto">我们用数据证明实力</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: '合作企业' },
              { value: '1000+', label: '成功项目' },
              { value: '50+', label: '专业团队' },
              { value: '10+', label: '年服务经验' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 80}>
                <div className="text-center p-8 rounded-2xl glass-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-3 font-display">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
