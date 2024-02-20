import Component from './components/Navbar'
import Navbar2 from './modules/Navbar'
import Sidenav from './modules/Sidebar'

import './App.css'



function App() {


  return (
    <div className='root'>
      <Component/>
      <Navbar2 />
      <Sidenav />
      
    </div>
  )
}

export default App;
