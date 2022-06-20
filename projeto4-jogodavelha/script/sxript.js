const jogo = document.querySelector('.jogo')
const gifes = [
   'bobrossparrot.gif',
   'explodyparrot.gif',
   'fiestaparrot.gif',
   'metalparrot.gif',
   'revertitparrot.gif',
   'tripletsparrot.gif',
   'unicornparrot.gif' 
];

let card = '';
/*const quantidade = prompt('Com quantadas cartas você quer jogar?(max 14)');

function comecar(){
    if ((Number(quantidade)/2 - Math.floor(Number(quantidade)/2)) != 0 or quantidade > 14){
    alert ('Impossivel começar o jogo!')
    comecar();
    }
}
comecar()*/


gifes.forEach(gif => { 
    card +=`
    <div class="card" onclick="rodarcarta(this)" data-card="${gif}">
    <div class="frente"  >
        <img src="./media/${gif}" >
    </div>
    <div class="costa" >
        <img  src="./media/front.png">
   </div>
   </div>`
});

jogo.innerHTML = card + card;

let primeira;
let segunda;

function rodarcarta(elemento) {
    elemento.classList.add('rodar');
    if(!primeira){
    primeira = elemento;
    return false
    }
 segunda = elemento;
 checar();
}
function checar(){
 let igual = primeira.dataset.card === segunda.dataset.card
}