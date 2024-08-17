/*var playerTurn, moves, isGameOver, span, restartButton;
playerTurn="x";
moves=0;
isGameOver=false;
span= document,getElementsByTagname("span");
restartButton= '<button onclick="playAgain()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button>';

function play(y){
    if(y.dataset.player == "none" && window.isGamerOver == false){
        y.innerHTML =playerTurn;
        y.dataset.player = playerTurn;
        moves++;
        if(playerTurn =="x"){
            playerTurn="o";
        }else if (playerTurn == "o"){
            playerTurn="x"
        }
    } 
}

/* Tipos Vencedores*/

/*checkWinner(1,2,3);
checkWinner(4,5,6);
checkWinner(7,8,9);
checkWinner(1,4,7);
checkWinner(2,5,8);
checkWinner(3,6,9);
checkWinner(1,5,9);
checkWinner(3,5,7);

/* Tipo de Perdedores*/

/*if(moves== 9 && isGameOver == false){draw();}

function checkWinner(a,b,c){
    a--;
    b--;
    c--;
    if((span[a].dataset.player === span[b].dataset.player) && (span[b].dataset.player ===
        span[c].dataset.player) && (span[a].dataset.player === span [c].dataset.player) && 
        (span[a].dataset.player==="x" || span[a].dataset.player==="o")&& isGameOver == false) {
            span[a].parentNode.className+="activeBox";
            span[b].parentNode.className+="activeBox";
            span[c].parentNode.className+="activeBox";
            gameOver(a);
        }
}

function playAgain(){
    document.getElementsByClassName("alert")[0].parentNode.removeChild(document.getElementsByClassName)
    ("alert")[0];
    resetGame();
    window.isGameOver=false;
    for (var k = 0; k <span.leght; k++){
        span[k].parentNode.className = span[k].parentNode.className.replace("activeBox","")
    }
}


function gameOver(a){
    var gameOverAlertElement = "<b> Fim de Jogo</b><br><br><br>Player" + 
    span[a].dataset.player.toUpperCase() + 'Vencedor!!! <br><br>' + restartButton;
    var div =document.createElement("div");
    div.className = "alert";
    div.innerHTML = gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.isGameOver=true
    moves=0;
}

function draw(){
    var drawAlertElement= '<b>Derrotado!!!</b><br><br>' + restartButton;
    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = drawAlertElement("div");
    document.getElementsByTagName("body")[0].appendChild(div);
    window.isGameOver=true;
    moves=0;
}
*/

//Esse de cima é o meu codigo que apresenta erro!

//Versão corrigida com ChatGpt e com comentarios

// Declaração de variáveis globais
var playerTurn, moves, isGameOver, span, restartButton;

// Definindo a variável de turno do jogador como "x"
playerTurn = "x";

// Inicializando o número de jogadas e status do jogo
moves = 0;
isGameOver = false;

// CORREÇÃO: Havia um erro de sintaxe aqui. O correto é "getElementsByTagName", e não "getElementsByTagname".
span = document.getElementsByTagName("span");

// Definindo o botão de reiniciar jogo com um ícone SVG
restartButton = '<button onclick="playAgain()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button>';

function play(y) {
    // Verifica se o campo não foi jogado e se o jogo ainda não acabou
    if (y.dataset.player == "none" && window.isGameOver == false) {
        // Define o símbolo do jogador atual (x ou o) no campo
        y.innerHTML = playerTurn;
        y.dataset.player = playerTurn;
        moves++;

        // Alterna o turno entre os jogadores x e o
        if (playerTurn == "x") {
            playerTurn = "o";
        } else if (playerTurn == "o") {
            playerTurn = "x";
        }
    }

    // CORREÇÃO: A lógica de verificação de vitória estava fora da função "play". Agora ela está dentro, sendo chamada após cada jogada.
    /* Tipos de Vitórias */
    checkWinner(1, 2, 3);
    checkWinner(4, 5, 6);
    checkWinner(7, 8, 9);
    checkWinner(1, 4, 7);
    checkWinner(2, 5, 8);
    checkWinner(3, 6, 9);
    checkWinner(1, 5, 9);
    checkWinner(3, 5, 7);

    // Verifica se todas as casas foram jogadas e se não há vencedor (empate)
    if (moves == 9 && isGameOver == false) { draw(); }
}

function checkWinner(a, b, c) {
    // Reduz os índices para trabalhar com o array de span
    a--;
    b--;
    c--;

    // Verifica se todos os três campos têm o mesmo jogador e se o jogo ainda não acabou
    if ((span[a].dataset.player === span[b].dataset.player) && 
        (span[b].dataset.player === span[c].dataset.player) && 
        (span[a].dataset.player === span[c].dataset.player) && 
        (span[a].dataset.player === "x" || span[a].dataset.player === "o") && 
        isGameOver == false) {

        // Adiciona uma classe para destacar os campos que formaram a linha de vitória
        span[a].parentNode.className += " activeBox";
        span[b].parentNode.className += " activeBox";
        span[c].parentNode.className += " activeBox";
        
        // Finaliza o jogo declarando o vencedor
        gameOver(a);
    }
}

function playAgain() {
    // CORREÇÃO: Havia um erro aqui na remoção do alerta de fim de jogo. Agora o código remove corretamente o elemento.
    document.getElementsByClassName("alert")[0].parentNode.removeChild(document.getElementsByClassName("alert")[0]);

    // Reinicia o jogo
    resetGame();
    window.isGameOver = false;

    // Remove a classe de destaque dos campos que formaram a linha de vitória
    for (var k = 0; k < span.length; k++) {
        span[k].parentNode.className = span[k].parentNode.className.replace("activeBox", "");
    }
}

// Função para reiniciar o estado do jogo
function resetGame() {
    for (i = 0; i < span.length; i++) {
        span[i].dataset.player = "none";
        span[i].innerHTML = "&nbsp;";
    }
    playerTurn = "x";
}

function gameOver(a) {
    // Exibe uma mensagem de fim de jogo com o vencedor
    var gameOverAlertElement = "<b> Fim de Jogo</b><br><br> Player " + span[a].dataset.player.toUpperCase() + ' Venceu!!! <br><br>' + restartButton;
    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);

    // Define o jogo como encerrado
    window.isGameOver = true;
    moves = 0;
}

function draw() {
    // CORREÇÃO: Havia um erro ao chamar a função drawAlertElement("div"). A chamada foi removida, pois era incorreta.
    var drawAlertElement = '<b>Empate!!!</b><br><br>' + restartButton;
    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = drawAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    
    // Define o jogo como encerrado
    window.isGameOver = true;
    moves = 0;
}
