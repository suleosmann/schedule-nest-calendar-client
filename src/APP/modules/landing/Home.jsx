
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
<<<<<<< HEAD
      <div className='flex justify-between'>
        <div className='text-center  w-2/5 pt-40 font-serif bg-green-100  '>
          
            <div className=' font-bold text-5xl'>
              <h1 className='text-green-500'>Stay Connected, Stay Organized with Ease!</h1>
            </div>
            <div className='pt-10'>
              <h3 className='pr-10 pl-10'>Unlock Your Productive Potential wirh ScheduleNest:Seamlessly Manage Your Time,Boost Efficiency, and Conquer Your Goals!</h3>
                <div className='pt-20 flex justify-center gap-10'>
                <button className='bg-orange-400 rounded pt-2 pr-2 pl-2 pb-1'>Sign-up</button>
                <button className='bg-orange-400 rounded pt-2 pr-2 pl-2 pb-1'>Sign-in</button>
                  
                </div>
            </div>
        </div>
        <div className='w-3/5  pl-80 pt-30 pb-28  '>
            <img src='https://i.pinimg.com/736x/b1/5a/a7/b15aa7cf57b714bac8809b56646ff761.jpg' alt="calender" />
          
        </div>
      </div>
      
=======
      <HeroSection/>
      <AboutSection/>
      <FeaturesSections/>
      <CtaSection/>
      <Footer/>
>>>>>>> 34d2371f7bb49db44c970110179c780360fd76a9
    </div>
  )
}
