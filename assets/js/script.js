// Atividade de Recesso
let encontrarNumero = 0;
let numeroAtivo = 0;

function atualizar() {
    // gera um número aleatório
    numeroAtivo = 0;
    encontrarNumero = parseInt(Math.random() * 10)
    // Math.random é responsável por gerar um número aleatório entre 0 e 1 com várias casa decimais. E para utilizar entre 0 e 10 é só multiplicar por 10.
    // parseInt converte o Math.random para números inteiros, sem casas decimais.
    console.log(encontrarNumero)
}

function verificarNumero() {
    let advinhar = document.getElementById('advinhar').value;
   
    if (advinhar > 10 || advinhar < 1) {
        alert('Número Inválido');
        return;
    }
    
    if(advinhar > encontrarNumero) {
        numeroAtivo++;
        alert('O número para ser encontrada é menor');
    }
    else if(advinhar < encontrarNumero) {
        numeroAtivo++;
        alert('O número para ser encontrada é maior');
    }
    else {
        alert('Você acertou! Com '+ numeroAtivo +' erros');
        atualizar();
    }
};


function iniciarTempo (duracao, tela) {
    var contador = duracao, minutos, segundos
    setInterval(function(){
        minutos = parseInt(contador / 60, 10);
        segundos = parseInt(contador % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        
        tela.textContent = minutos + ":" + segundos;
        
        if(--contador < 0) {
            contador = duracao;
        }
    }, 1000);
}
// Criação de um evento chamado window.onload carregar a janela
window.onload = function(){
    var duracao = 60 * 1; // conversão para segundos
    let tela = document.querySelector('#contador'); // Elemento para exibir o contador
    
    iniciarTempo(duracao, tela); // Inicia a função
};

atualizar();