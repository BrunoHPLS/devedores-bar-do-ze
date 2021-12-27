/**
 * Método PUT que recebe um devedor com todos os campos definidos para ser atualizado no backend
 * 
 * @param {object} devedor 
 */
function putDevedor(devedor){
    let xhr = new XMLHttpRequest();


    xhr.open("PUT",`http://localhost:8080/devedores/${devedor.id}`);

    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(devedor));
}