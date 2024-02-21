import Component from './components/Navbar'
import NavComponent from './modules/Navbar'
import Sidenav from './modules/Sidebar'
import SignUpForm from './modules/authentication/Signup'
import LoginForm from './modules/authentication/Login'
import UpdatePwd from './modules/authentication/updatePwd'
import './App.css'



function App() {


  return (
    <div className='root'>
      {/* <NavComponent/> */}
      {/* <Navbar2 />
      <Sidenav /> */}
     {/*  <SignUpForm />*/} 
      {/*  <LoginForm />*/} 
       <UpdatePwd />
      
    </div>
  )
}

export default App;
