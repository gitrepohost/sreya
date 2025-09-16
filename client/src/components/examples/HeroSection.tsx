import HeroSection from '../HeroSection'

export default function HeroSectionExample() {
  const handleScrollTo = (section: string) => {
    console.log(`Scrolling to section: ${section}`)
  }
  
  return <HeroSection onScrollTo={handleScrollTo} />
}