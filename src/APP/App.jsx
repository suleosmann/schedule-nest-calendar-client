// import AllRoutes from './routes/Routes'
import ViewProfile from './modules/profile/VeiwProfile';
import Navbar from './modules/landing/Navbar'
import Sidenav from '././modules/landing/Sidebar'
function App() {


  return (
    <div className='root'>
    {/* <AllRoutes/> */}
    
    {/* <Navbar /> */}
    <div className='flex'>
    <Sidenav />
    <div>
    <ViewProfile />
    </div>
    </div>
    
    </div>
  )
}

export default App;
