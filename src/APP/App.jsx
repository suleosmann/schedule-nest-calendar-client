 import AllRoutes from './routes/Routes'
import { AuthProvider } from './context/AuthProvider';

function App() {


  return (
    <div className='root'>
      <AuthProvider>
        <AllRoutes/>
      </AuthProvider>
    </div>
  )
}

export default App;
