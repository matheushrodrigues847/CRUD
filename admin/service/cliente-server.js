//Novo modo com fetch()
const listaClientes = () => {
    return fetch('http://localhost:3000/profile')
    .then(resposta => {
        if(resposta.ok) return resposta.json()
        erros('Não foi possivel localizar a lista')
    });
}

const erros = (erro)=>{
    throw new Error(erro);
}
const criaCLiente = (nome,email) => {
    return fetch('http://localhost:3000/profile',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok) return resposta.body
        erros('Não foi possível adicionar esse cliente')
    })
}

const detalhaCliente = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok) return resposta.json()
        erros('Não foi possivel detalhar o cliente')
    });
}

const atualizaCliente = (id, nome, email)=>{

    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then((resposta)=>{
        if(resposta.ok) return resposta.json
        erros('Não foi possivel atualizar a lista de clientes')
    })
}

const removeCliente = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    })
    .then((resposta)=>{
        if(!resposta.ok) erros('Não foi possivel fazer a remoção desse cliente')
    })
}

export const clienteService = {
    listaClientes,
    criaCLiente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}



//Modo antigo Promise + XMLHttpRequest
//const listaClientes = () => {
//    const promise = new Promise((resolve, reject) => {
//        const http = new XMLHttpRequest();
//
//        http.open('GET', 'http://localhost:3000/profile');
//
//        http.send();
//
//       http.onload = () => {
//            (http.status>=400) ? reject(JSON.parse(http.response)):resolve(JSON.parse(http.response));
//        }
//    })
//    return promise;
//}



            