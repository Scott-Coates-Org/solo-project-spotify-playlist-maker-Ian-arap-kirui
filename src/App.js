
import Login from './components/login/Login'
import logo from './logo.svg'
import './App.css'
import { AuthProvider } from './components/login/Auth'

function App() {
  return (
    <AuthProvider>
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Login/>
      </header>
    </div>
    </AuthProvider>
  )
}

export default App
