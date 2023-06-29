import Button from "./Evento/Button"

function Evento(){

   function meuEvento (){
    console.log('Ativando primeiro evento')
   }

   function segundoEvento() {
    console.log('Ativando segundo evento')
   }

    return(
        <div>
            <p>Clique aqui para ativar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
           
        </div>
    )
}

export default Evento