import { Link } from 'react-router-dom'

const quickLinks = [
  { label: '首页', path: '/' },
  { label: '关于我们', path: '/about' },
  { label: '产品服务', path: '/products' },
  { label: '联系我们', path: '/contact' },
]

const products = [
  { label: '金蝶云星辰', url: 'https://www.kingdee.com/product/small' },
  { label: '金蝶云星空', url: 'https://www.kingdee.com/products/galaxy.html' },
  { label: '金蝶云苍穹', url: 'https://www.kingdee.com/products/cosmic_platform.html' },
  { label: '金钥财报', url: 'https://www.kingdee.com/resources/articles/1405842662824641121' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="柏枝科技" className="h-8 w-8 rounded-md" />
              <span className="text-lg font-bold text-gradient-primary">柏枝科技</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              专注企业数字化转型，提供专业的ERP软件服务与管理解决方案。做值得托付的企业，赋能客户成长。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">快捷导航</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">产品服务</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">联系我们</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>电话：400-888-6666</li>
              <li>邮箱：caifu@baizhi-tech.com</li>
              <li>地址：中国广东省深圳市南山区金蝶软件园</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 柏枝科技. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-smooth">
              隐私政策
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-smooth">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
