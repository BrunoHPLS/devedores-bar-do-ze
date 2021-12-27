/**
 * Adiciona listeners para a tabela que vai servir para detectar os botões de ação da tabela
 * Se o botão de edit for selecionado, os botões de confirm e cancel irão aparecer 
 * e o conteúdo da table row se torna editável.
 * Se o botão de cancel for selecionado, os botões de edit e delete retornarão
 * Os botões de confirm e delete respectivamente disparam os métodos http PUT e DELETE.
 */
let table = document.querySelector('.tabela-devedores');

table.addEventListener('click',function(event){
    let tr = event.target.parentNode.parentNode;
    let btEdit = tr.children[5].children[0];
    let btDelete = tr.children[5].children[1];
    let btConfirm = tr.children[5].children[2];
    let btCancel = tr.children[5].children[3];
    console.log(trValues);

    if(event.target == btEdit){
        isEditable(true,btEdit,btDelete,btConfirm,btCancel);
        tr.contentEditable=true;
    }

    if(event.target == btConfirm){
        let alterDevedor = mapTrToDevedor(tr);
        putDevedor(alterDevedor);
        reloadPagina();
    }

    if(event.target == btCancel){
        setTrToDefault(tr);
        isEditable(false,btEdit,btDelete,btConfirm,btCancel);
        tr.contentEditable=false;
    }
    if(event.target == btDelete){
        let removeDevedor = mapTrToDevedor(tr);
        deleteDevedor(removeDevedor);
        reloadPagina();
    }
});

function isEditable(resp,btEdit,btDelete,btConfirm,btCancel){
    btEdit.hidden=  (resp) ? true:false;
    btDelete.hidden=(resp) ? true:false;;
    btConfirm.hidden=(resp) ? false:true;;
    btCancel.hidden=(resp) ? false:true;;
}

function mapTrToDevedor(tr){
    let devedor = {
        id: tr.children[0].textContent,
        nome: tr.children[1].textContent,
        dataDivida: tr.children[2].textContent,
        dias: tr.children[3].textContent,
        valor: tr.children[4].textContent
    }
    return devedor;
}

function setTrToDefault(tr){
    trValues.forEach(element => {
        if(element.id == tr.children[0].textContent){
            console.log('entrou aqui')
            tr.children[0].textContent= element.id;
            tr.children[1].textContent= element.nome;
            tr.children[2].textContent= element.dataDivida;
            tr.children[3].textContent= element.dias;
            tr.children[4].textContent= element.valor;
        }
    });
    
}