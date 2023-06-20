import Bangles from '../components/Bangles'
import Gift from '../components/Gift'
import Homepage from '../components/Homepage'
import Intro from '../components/Intro'
import Jwellary from '../components/Jwellary'
import Stationary from '../components/Stationary'
import Worship from '../components/Worship'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Intro/>}/>
      <Route exact path='/offer' element={<Homepage/>}/>
      <Route exact path="/jwellary" element={<Jwellary/>}/>
      <Route exact path='/bangle' element={<Bangles/>}/>
      <Route exact path='/worship' element={<Worship/>}/>
      <Route exact path='/stationary' element={<Stationary/>}/>
      <Route exact path='/gift' element={<Gift/>}/>
    </Routes>
    </BrowserRouter>  

    </>
  )
}

export default App
