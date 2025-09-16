import ResidencesSection from '../ResidencesSection'

export default function ResidencesSectionExample() {
  const handleScrollTo = (section: string) => {
    console.log(`Scrolling to section: ${section}`)
  }
  
  return <ResidencesSection onScrollTo={handleScrollTo} />
}