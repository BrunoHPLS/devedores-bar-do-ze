/**
 * O processo de adicionar mais um devedor à tabela passa por:
 *  -pegar os dados do devedor e montar uma table data a partir de cada atributo(o id fica invisível)
 *  -criar uma tr e adicionar estes dados em td à essa tr
 *  -montar mais uma table data só que de botões para edit e delete. Adicionar essa td à tr principal
 *  -adicionar a tr principal à tabela principal
 */
function addToTable(devedor){
    let devedorTdArray = montaTd(devedor);

    let devedorTr = document.createElement('tr');
    devedorTr.classList.add('devedor');

    devedorTdArray.forEach(td => {
        devedorTr.appendChild(td);
    });

    let actionTd = montaButtonTd();

    devedorTr.appendChild(actionTd);

    let table = document.querySelector('.tabela-devedores');
    table.appendChild(devedorTr);
}

function montaTd(devedor){
    let atributos = ['id','nome','dataDivida','dias','valor'];
    let devedorTdArray = new Array(5);
    for (let i = 0; i < devedorTdArray.length; i++) {
        devedorTdArray[i] = document.createElement('td');
        devedorTdArray[i].classList.add(`devedor-${atributos[i]}`)
        devedorTdArray[i].textContent = devedor[`${atributos[i]}`];
        if(i==0){
            devedorTdArray[i].hidden=true;
        }
    }
    return devedorTdArray;
}

function montaButtonTd(){
    let buttonTd = document.createElement('td');
    buttonTd.classList.add('devedor-action');

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('devedor-edit');
    buttonEdit.textContent = 'Editar';
    buttonEdit.href='index.html';

    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('devedor-delete');
    buttonDelete.textContent = 'Deletar';
    buttonDelete.href='index.html';

    let buttonConfirm = document.createElement('button');
    buttonConfirm.classList.add('devedor-confirm');
    buttonConfirm.textContent = 'Confirmar';
    buttonConfirm.hidden=true;
    buttonConfirm.href='index.html';

    let buttonCancel = document.createElement('button');
    buttonCancel.classList.add('devedor-cancel');
    buttonCancel.textContent = 'Cancelar';
    buttonCancel.hidden=true;
    buttonCancel.href='index.html';

    buttonTd.appendChild(buttonEdit);
    buttonTd.appendChild(buttonDelete);
    buttonTd.appendChild(buttonConfirm);
    buttonTd.appendChild(buttonCancel);

    return buttonTd;
}

