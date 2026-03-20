import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

const navItems = [
  { label: '首页', path: '/' },
  { label: '关于我们', path: '/about' },
  { label: '产品服务', path: '/products' },
  { label: '联系我们', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-elegant border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="柏枝科技" className="h-8 w-8 rounded-md" />
          <span className="text-lg font-bold text-gradient-primary font-display">柏枝科技</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                location.pathname === item.path
                  ? 'text-primary bg-primary/5'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className="hidden md:block">
            <span className="inline-flex items-center justify-center h-10 px-5 rounded-lg text-sm font-medium bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
              免费咨询
            </span>
          </Link>
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-smooth"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="菜单"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="section-container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <span className="flex items-center justify-center h-10 rounded-lg text-sm font-medium bg-gradient-primary text-primary-foreground">
                免费咨询
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
