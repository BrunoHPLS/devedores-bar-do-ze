/**
 * Método GET que repassa todos os devedores encontrados no backend para a tabela e gera um array com todos os
 * objetos devedor para ser utilizado pela aplicação
 */
var trValues;
function getDevedores(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () =>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let devedores = JSON.parse(xhr.responseText);
            trValues = new Array();
            devedores.forEach(devedor => {
                addToTable(devedor);
                trValues.push(devedor);
            });
            console.log(trValues);
        }
    } 

    xhr.open("GET","http://localhost:8080/devedores");

    xhr.send();
    
}

function getDevedor(num){
    let devedor;
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('load',function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            devedor = JSON.parse(xhr.responseText);
        }
    });

    xhr.open("GET",`http://localhost:8080/devedores/${num}`);

    xhr.send();
}