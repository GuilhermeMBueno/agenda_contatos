const form = document.getElementById('formulario-telefonico')
//Variavel global para inserção de linha nova após o submit
let linhas ='';



form.addEventListener('submit', function(e){
    e.preventDefault();

    ValidaNumero();
    adicionaLinhaTabela();
});

function ValidaNumero (){
    
}

function adicionaLinhaTabela(){
    const inputNomeContato = document.getElementById('name-contato');
    const inputTelContato = document.getElementById('tel-contato');
    const inputCodArea = document.getElementById('CodArea');
    const selecionaOpcao = document.querySelector('#typeContato');
    const indice = selecionaOpcao.selectedIndex;
    const text = selecionaOpcao.options[indice].text;

    //Captura os dados da tabela
    const CorpoTabela = document.querySelector('tbody');
    
    // alert(`nome: ${inputNomeContato.value}, telefone: ${inputTelContato.value}, tipo:${text} `)

    // Cria a estrutura de linha
    let linha = `<tr>`;
    linha += `<td>${text}</td>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputCodArea.value}</td>`
    linha += `<td>${inputTelContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    //Insere a linha na tabela
    CorpoTabela.innerHTML = linhas;
}



