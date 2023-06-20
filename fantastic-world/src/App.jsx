import Bangles from '../components/Bangles'
import Footer from '../components/Footer'
import Homepage from '../components/Homepage'
import Jwellary from '../components/Jwellary'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/offer' element={<Homepage/>}/>
      <Route exact path="/jwellary" element={<Jwellary/>}/>
      <Route exact path='/bangle' element={<Bangles/>}/>
    </Routes>
    </BrowserRouter>  

    </>
  )
}

export default App
