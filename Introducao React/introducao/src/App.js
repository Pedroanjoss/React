import{useState} from 'react'

import './App.css';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';



function App() {

  const [nome, setNome] = useState()
  return (
    <div className="App">
      <h1>Renderizacao de Listas </h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>

    </div>
    
  );
}

export default App;
