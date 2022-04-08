import api from "../api";

export async function pegarRepositorioPeloId(id){
    try{
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data;
    }catch(error){
        console.log(error);
        return [];
    }
}

export async function salvarRepositorio(postId, name, data, id){
    try{
        await api.put(`/repos/${id}`, {
            name: name,
            data: data,
            postId: postId, 
            id: id
        });
        return 'success'
    }catch(error){
        console.log(error);
        return 'error';
    }
}

export async function PegarRepositoriosDoUsuarioPeloNome(id, nome){
    const resultado = await api.get(`/posts/${id}/repos?name=${nome}`).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    })
    return resultado;
}

export async function criarRepositorioDoUsuario(postId, name, data){
    try{
        await api.post(`/repos`, {
            name: name,
            data: data,
            postId: postId
        });
        return 'success'
    }catch(error){
        console.log(error);
        return 'error';
    }
}

export async function deletarRepositorioDoUsuario(id){
    try{
        await api.delete(`/repos/${id}`);
        return 'success'
    }catch(error){
        console.log(error);
        return 'error';
    }
}