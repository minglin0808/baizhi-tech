import { Link } from 'react-router-dom'
import { Cloud, Database, Layers, BarChart3, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/common/ScrollReveal'

const products = [
  {
    icon: Cloud,
    name: '金蝶云星辰',
    description: '面向小微企业的业财税一体化管理平台，涵盖财务云、税务云、进销存云等SaaS应用。',
    gradient: 'from-primary to-primary-glow',
  },
  {
    icon: Database,
    name: '金蝶云星空',
    description: '面向中型企业的智能管理平台，覆盖财务、供应链、智能制造等领域。',
    gradient: 'from-accent-purple to-primary',
  },
  {
    icon: Layers,
    name: '金蝶云苍穹',
    description: '企业级数字化PaaS平台，内置AI与云原生技术，支持低代码快速开发。',
    gradient: 'from-primary-glow to-accent-cyan',
  },
  {
    icon: BarChart3,
    name: '金钥财报',
    description: '融合AI技术的财报智能体，30秒快速解读企业经营全貌。',
    gradient: 'from-accent to-primary-glow',
  },
]

export default function ProductsPreview() {
  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 font-display">Products</p>
            <h2 className="section-title text-foreground mb-5">
              产品与<span className="text-gradient-primary">服务</span>
            </h2>
            <p className="section-subtitle mx-auto">
              提供金蝶云全系列产品，覆盖小微到大型企业的全方位管理需求
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 80}>
              <div className="group relative p-8 rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                <div className="relative z-10 flex items-start gap-5">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                    <product.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-display">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-14">
            <Link to="/products">
              <Button variant="outline" size="lg" className="group font-display">
                查看全部产品
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
