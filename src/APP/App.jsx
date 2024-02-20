import Component from './components/Navbar'
import NavComponent from './modules/Navbar'
import Sidenav from './modules/Sidebar'
import SignUpForm from './modules/authentication/Signup'

import './App.css'



function App() {


  return (
    <div className='root'>
      {/* <NavComponent/> */}
      {/* <Navbar2 />
      <Sidenav /> */}
      <SignUpForm />
      
    </div>
  )
}

export default App;
