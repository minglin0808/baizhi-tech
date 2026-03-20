import HeroSection from '@/components/sections/HeroSection'
import AdvantagesSection from '@/components/sections/AdvantagesSection'
import ProductsPreview from '@/components/sections/ProductsPreview'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AdvantagesSection />
      <ProductsPreview />
      <CTASection />
    </main>
  )
}
