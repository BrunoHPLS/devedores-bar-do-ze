/**
 * Método DELETE que recebe um devedor com o id já definido e realiza uma requisição DELETE para o backend
 * 
 * @param {object} devedor 
 */
function deleteDevedor(devedor){
    let xhr = new XMLHttpRequest();
    
    xhr.open("DELETE",`http://localhost:8080/devedores/${devedor.id}`);

    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhr.send();
}