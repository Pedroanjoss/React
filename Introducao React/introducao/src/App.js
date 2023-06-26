import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Joao' 

  return (
    <div className="App">
      <h1>Teste css </h1>
     <HelloWorld />
     <SayMyName nome='Pedro'/>
     <SayMyName nome='Henrique'/>
     <SayMyName nome={nome}/>
     <Pessoa nome='Rodrigo' idade='18' profissao='Programador' foto='https://via.placeholder.com/150'/>


    </div>
    
  );
}

export default App;
