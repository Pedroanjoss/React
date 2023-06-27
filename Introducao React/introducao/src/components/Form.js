function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('cadastrou o usuario')
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite oi seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
    
}

export default Form