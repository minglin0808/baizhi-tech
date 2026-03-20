import { Shield, Headphones, TrendingUp, Users } from 'lucide-react'
import ScrollReveal from '@/components/common/ScrollReveal'

const advantages = [
  {
    icon: Shield,
    title: '专业可靠',
    description: '深耕ERP领域多年，拥有丰富的项目实施经验和专业的技术团队，确保每个项目高质量交付。',
  },
  {
    icon: TrendingUp,
    title: '赋能增长',
    description: '帮助企业实现数字化转型，通过数据驱动决策，提升运营效率，降低管理成本。',
  },
  {
    icon: Users,
    title: '全程陪伴',
    description: '从需求咨询到系统实施，从培训到运维，提供全生命周期的服务支持体系。',
  },
  {
    icon: Headphones,
    title: '快速响应',
    description: '7x24小时技术支持，专属客户经理一对一服务，问题快速定位与解决。',
  },
]

export default function AdvantagesSection() {
  return (
    <section className="section-padding bg-background mesh-bg relative overflow-hidden">
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 font-display">Our Advantages</p>
            <h2 className="section-title text-foreground mb-5">
              为什么选择<span className="text-gradient-primary">柏枝科技</span>
            </h2>
            <p className="section-subtitle mx-auto">
              我们以专业的服务能力和持续的技术创新，帮助企业在数字化浪潮中赢得先机
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <div className="group relative p-7 rounded-2xl glass-card h-full hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-105" />

                <div className="w-[3.25rem] h-[3.25rem] rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-500">
                  <item.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2.5 font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
