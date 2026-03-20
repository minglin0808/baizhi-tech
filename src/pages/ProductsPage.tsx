import { Cloud, Database, Layers, BarChart3, ExternalLink, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/common/ScrollReveal'

const products = [
  {
    icon: Cloud,
    name: '金蝶云星辰',
    tagline: '小微企业的智能管家',
    description: '面向小微企业的业财税一体化管理平台，提供财务云、税务云、进销存云、零售云、订货云等SaaS核心应用，助力小微企业轻松实现数字化管理。',
    features: ['财务记账与报表', '进销存管理', '税务申报', '订货商城', '零售管理'],
    url: 'https://www.kingdee.com/product/small',
    gradient: 'from-primary to-primary-glow',
  },
  {
    icon: Database,
    name: '金蝶云星空',
    tagline: '中型企业的增长引擎',
    description: '面向中型企业的智能管理平台，覆盖财务、供应链、智能制造、PLM、全渠道营销等领域，支持多组织业务协同，助力企业高效增长。',
    features: ['多组织财务管理', '供应链协同', '智能制造', '全渠道营销', 'PLM产品管理'],
    url: 'https://www.kingdee.com/products/galaxy.html',
    gradient: 'from-accent-purple to-primary',
  },
  {
    icon: Layers,
    name: '金蝶云苍穹',
    tagline: '大型企业的数字底座',
    description: '企业级数字化PaaS平台，内置AI、大数据、云原生技术能力，支持低代码快速开发，为大型企业构建敏捷、弹性的数字化底座。',
    features: ['云原生架构', '低代码开发', 'AI智能分析', '大数据平台', '微服务架构'],
    url: 'https://www.kingdee.com/products/cosmic_platform.html',
    gradient: 'from-primary-glow to-accent-cyan',
  },
  {
    icon: BarChart3,
    name: '金钥财报',
    tagline: 'AI驱动的财务洞察',
    description: '融合AI技术与财务专业知识的财报智能体，支持财报分析、财报对比、指标对比，30秒快速解读企业经营全貌，让决策更有据可依。',
    features: ['智能财报解读', '经营分析', '指标对比', '风险预警', '管理建议'],
    url: 'https://www.kingdee.com/resources/articles/1405842662824641121',
    gradient: 'from-accent to-primary-glow',
  },
]

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-gradient-hero noise-overlay">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-accent-purple/6 rounded-full blur-[100px]" />
        <div className="relative z-10 section-container text-center">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-[0.2em] mb-4 font-display animate-fade-up">Products & Services</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-hero-foreground mb-5 font-display animate-fade-up" style={{ animationDelay: '100ms' }}>产品与服务</h1>
          <p className="text-lg max-w-xl mx-auto animate-fade-up font-light" style={{ animationDelay: '200ms', color: 'hsl(var(--hero-muted))' }}>
            金蝶云全系列产品，覆盖企业全生命周期管理需求
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Products */}
      <section className="section-padding bg-background mesh-bg">
        <div className="section-container">
          <div className="space-y-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 60}>
                <div className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                  <div className={`h-px bg-gradient-to-r ${product.gradient}`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />

                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-5">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-elegant group-hover:shadow-glow group-hover:scale-110 transition-all duration-500`}>
                            <product.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-foreground font-display">{product.name}</h2>
                            <p className="text-sm text-muted-foreground">{product.tagline}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-7">{product.description}</p>
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="premium" className="group/btn font-display">
                            了解更多
                            <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                          </Button>
                        </a>
                      </div>

                      <div className="lg:w-72 flex-shrink-0">
                        <h4 className="text-sm font-semibold text-foreground mb-4 font-display">核心能力</h4>
                        <ul className="space-y-3">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="section-container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="section-title text-foreground mb-5">不确定哪款产品适合您？</h2>
            <p className="section-subtitle mx-auto mb-10">
              联系我们的顾问团队，为您量身推荐最适合的解决方案
            </p>
            <a href="/contact">
              <Button variant="premium" size="xl" className="font-display">获取专属方案</Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
