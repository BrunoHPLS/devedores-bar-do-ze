/**
 * Carrega todos os devedores para criar a tabela principal
 * Cria uma função para reload da página dentro de 200 ms para facilitar a comunicação com o backend
 * Define um Array de objetos da tabela principal que poderá ser utilizado por todos os outros arquivos
 */

getDevedores();

function reloadPagina(){
    setTimeout(() => {document.location.reload()},200);
}