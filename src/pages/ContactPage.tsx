import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, CheckCircle2, X } from 'lucide-react'
import ScrollReveal from '@/components/common/ScrollReveal'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '' })
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = '请输入您的姓名'
    if (!formData.phone.trim()) newErrors.phone = '请输入您的电话'
    else if (!/^1[3-9]\d{9}$/.test(formData.phone.trim())) newErrors.phone = '请输入正确的手机号'
    if (!formData.company.trim()) newErrors.company = '请输入公司名称'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setShowSuccess(true)
    setFormData({ name: '', phone: '', company: '' })
    setErrors({})
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-gradient-hero noise-overlay">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-accent-purple/6 rounded-full blur-[100px]" />
        <div className="relative z-10 section-container text-center">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-[0.2em] mb-4 font-display animate-fade-up">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-hero-foreground mb-5 font-display animate-fade-up" style={{ animationDelay: '100ms' }}>联系我们</h1>
          <p className="text-lg max-w-xl mx-auto animate-fade-up font-light" style={{ animationDelay: '200ms', color: 'hsl(var(--hero-muted))' }}>
            期待与您的合作，开启数字化转型之旅
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background mesh-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 font-display">Get In Touch</p>
                <h2 className="section-title text-foreground mb-7">
                  让我们<span className="text-gradient-primary">连接</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  无论您是需要产品咨询、技术支持还是合作洽谈，我们的团队随时准备为您提供帮助。
                  填写右侧表单或通过以下方式联系我们。
                </p>

                <div className="space-y-5">
                  {[
                    { icon: Phone, label: '电话咨询', value: '400-888-6666' },
                    { icon: Mail, label: '邮箱', value: 'caifu@baizhi-tech.com' },
                    { icon: MapPin, label: '地址', value: '中国广东省深圳市南山区金蝶软件园' },
                  ].map((item, index) => (
                    <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl glass-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-500" style={{ transitionDelay: `${index * 50}ms` }}>
                      <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1 font-display">{item.label}</h4>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={150}>
              <div className="p-8 md:p-10 rounded-2xl glass-card">
                <h3 className="text-xl font-semibold text-foreground mb-2 font-display">留下您的信息</h3>
                <p className="text-sm text-muted-foreground mb-8">我们将在2个工作日内与您联系</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { id: 'name', label: '姓名', type: 'text', placeholder: '请输入您的姓名' },
                    { id: 'phone', label: '电话', type: 'tel', placeholder: '请输入您的手机号' },
                    { id: 'company', label: '公司名称', type: 'text', placeholder: '请输入公司名称' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2 font-display">
                        {field.label} <span className="text-destructive">*</span>
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className={`w-full h-12 px-4 rounded-xl border text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:ring-2 focus:ring-ring focus:border-primary ${
                          errors[field.id] ? 'border-destructive' : 'border-input'
                        }`}
                      />
                      {errors[field.id] && <p className="text-xs text-destructive mt-1.5">{errors[field.id]}</p>}
                    </div>
                  ))}

                  <Button type="submit" variant="premium" size="lg" className="w-full font-display">
                    提交咨询
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-md" onClick={() => setShowSuccess(false)} />
          <div className="relative glass-card rounded-2xl p-10 max-w-md w-full text-center animate-fade-up">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
              aria-label="关闭"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-18 h-18 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-7" style={{ width: '4.5rem', height: '4.5rem' }}>
              <CheckCircle2 className="w-9 h-9 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3 font-display">提交成功</h3>
            <p className="text-muted-foreground leading-relaxed">
              您的信息我们已经获取，我们将在2个工作日内与您联系，感谢您的咨询！
            </p>
            <Button variant="premium" className="mt-8 font-display" onClick={() => setShowSuccess(false)}>
              我知道了
            </Button>
          </div>
        </div>
      )}
    </main>
  )
}
