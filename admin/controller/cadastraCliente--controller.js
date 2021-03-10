import { clienteService } from "../service/cliente-server.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (evento)=>{
    evento.preventDefault();
    
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;
    try{
        await clienteService.criaCLiente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
    
})

//formulario.addEventListener('submit', (evento)=>{
//    evento.preventDefault();
//    
//    const nome = evento.target.querySelector('[data-nome]').value;
//    const email = evento.target.querySelector('[data-email]').value;
//    
//    clienteService.criaCLiente(nome, email)
//    .then(()=>{
//        window.location.href = '../telas/cadastro_concluido.html'
//    })
//})