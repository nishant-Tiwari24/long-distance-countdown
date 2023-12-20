import './App.css'
import Navbar from './components/Navbar'
import Timer from './components/Timer'

function App() {

  return (
    <div className='main w-full h-screen fixed bg-zinc-800'>
      <Navbar/>
      <Timer/>
    </div>
  )
}

export default App
