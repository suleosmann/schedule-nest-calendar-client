
import Navbar from './../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import FeaturesSections from './FeaturesSections'
import CtaSection from './CtaSection'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <FeaturesSections/>
      <CtaSection/>
      <Footer/>
    </div>
  )
}
