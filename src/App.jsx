import { BrowserRouter , Routes ,Route } from 'react-router-dom'

import './App.css' 
import { Home } from './components/home'
import { CreateItems } from './components/create'
import { Update } from './components/update'
import { ReadData } from './components/read'
function App() {
  
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/create'element={<CreateItems/>}/>
            <Route path='/update/id'element={<Update/>}></Route>
            <Route path='/read/:id'element={<ReadData/>}></Route>

        </Routes>
   </BrowserRouter>

  )
}

export default App
