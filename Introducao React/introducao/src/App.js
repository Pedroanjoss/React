import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './components/Navbar';

function App() {


  return (
   <Router>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} > </Route>
      <Route path='/empresa' element={<Empresa/>}> </Route>
      <Route path='/contato' element={<Contato/>}> </Route>
     </Routes>
   </Router>
  )
}

export default App;
