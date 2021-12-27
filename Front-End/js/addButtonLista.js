/**
 * A partir do event listener do botão, irá adicionar um novo devedor à tabela após uma validação. 
 * Caso a validação não permita que o devedor seja adicionado, gera um erro em cada campo inválido.
 */
let botao = document.querySelector('#adicionar-devedor');
let form = document.querySelector('#form-adiciona-devedor');

botao.addEventListener('click',function(event){
    event.preventDefault();
    let devedor = mapToDevedor(form);

    if(validaForm(devedor)){
        form.reset();
        postDevedor(devedor);
        reloadPagina();
    }
});

function mapToDevedor(form){
    let devedor = {
        "id": null,
        "nome": form.nome.value,
        "dataDivida": form.dataDivida.value,
        "dias": null,
        "valor": form.valor.value
    };
    return devedor;
}

function validaForm(devedor){
    let spanNome = document.querySelector('#nome-invalido');
    let spanData = document.querySelector('#data-invalida');
    let spanValor = document.querySelector('#valor-invalido');
    spanNome.textContent = "";
    spanData.textContent = "";
    spanValor.textContent = "";
    let valid = true;

    if(devedor.nome == ''){
        spanNome.textContent = "Nome Inválido"
        valid = false;
    }

    let dataAtual = new Date();
    let dataDivida = new Date(devedor.dataDivida+"T12:00");
    if(dataDivida > dataAtual  || devedor.dataDivida == ''){
        spanData.textContent = "Data Inválida";
        valid = false;
    }

    let dia = (dataDivida.getDate()<10) ? "0"+dataDivida.getDate(): dataDivida.getDate();
    let mes = dataDivida.getMonth()+1;
    mes = (mes<10) ? "0"+mes : mes;
    devedor.dataDivida = dia +"/"+mes+"/"+dataDivida.getFullYear();
    console.log(devedor.dataDivida)
    if(devedor.valor < 1 || devedor.valor == ''){
        spanValor.textContent = "Valor Inválido";
        valid = false;
    }
    
    return valid;
}