import { clienteService } from '../service/cliente-server.js'

const criaLinha = (nome, email, id) => {
    const novaLinha = document.createElement('tr');

    const conteudo = ` <td class="td" data-td>${nome}</td>
                        <td>${email}</td>
                        <td>
                            <ul class="tabela__botoes-controle">
                                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                            </ul>
                        </td> 
    `
    novaLinha.innerHTML = conteudo;
    novaLinha.dataset.id=id;

    return novaLinha;
}

tabela.addEventListener('click', async (evento)=>{
    
    if(evento.target.className === 'botao-simples botao-simples--excluir'){

        const linhaCliente = evento.target.closest('[data-id]');
        
        let id = linhaCliente.dataset.id;
        try{
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

const render = async()=>{
    
    try{
        const listaCliente = await clienteService.listaClientes()
        listaCliente.forEach(elemento => {
            tabela.appendChild(criaLinha(elemento.nome, elemento.email, elemento.id));
        });
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}
render();

//clienteService.listaClientes()
//    .then(data=>{
//        console.log(data);
//        data.forEach(elemento => {
//            tabela.appendChild(criaLinha(elemento.nome, elemento.email, elemento.id));
//        });
//    })