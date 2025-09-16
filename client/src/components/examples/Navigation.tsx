import Navigation from '../Navigation'

export default function NavigationExample() {
  const handleScrollTo = (section: string) => {
    console.log(`Scrolling to section: ${section}`)
  }
  
  return <Navigation onScrollTo={handleScrollTo} />
}