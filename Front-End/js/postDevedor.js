/**
 * Método POST que recebe um devedor com os campos id e dias null para fazer uma requisição de POST para o backend
 * 
 * @param {object} devedor 
 */
function postDevedor(devedor){
    let xhr = new XMLHttpRequest();


    xhr.open("POST","http://localhost:8080/devedores");

    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(devedor));
}