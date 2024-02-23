
import Navbar from './../../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between'>
        <div className='text-center  w-2/5 pt-40 font-serif  '>
          
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
        <div className='w-3/5 bg-green-200 pl-80 pt-30 pb-28  '>
            <img src='https://i.pinimg.com/564x/8a/19/a2/8a19a276c090470c94dcbee2eead5134.jpg' alt="calender" />
          
        </div>
      </div>
      
    </div>
  )
}
