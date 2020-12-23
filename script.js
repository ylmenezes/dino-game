const dino  = document.querySelector( '.dino' );
const bg    = document.querySelector( '.bg' );

let isJumping   = false;
let isGameOver  = false;
let position    = 0;
let score       = 0;

function handleKeyUp(event)
{
    if( event.keyCode === 32){
        if( !isJumping ){
            pular();
        }
    }
}

function pular()
{
    isJumping = true;

    let upInterval = setInterval(() => {
        if( position >= 150 ){
            setScore();

            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if( position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position+'px';                
                }
            }, 20);

        }else{
            position += 20;
            dino.style.bottom = position+'px';
        }
    }, 20);
}

function criarCacto() 
{
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
  
    if (isGameOver) return;
  
    cactus.classList.add('cacto');
    bg.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';
  
    let leftTimer = setInterval(() => {
      if (cactusPosition < -60){

        clearInterval(leftTimer);
        background.removeChild(cactus);

      }else
      if(cactusPosition > 0 && cactusPosition < 60 && position < 60){

        clearInterval(leftTimer);
        isGameOver = true;
        document.body.innerHTML = '<h1 class="game-over">Fim de jogo <br> Você fez '+score+' pontos</h1> <a onclick="restart()" class="button"> Reiniciar o Jogo</a>';

      }else{

        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';

      }
    }, 30);
  
    setTimeout(criarCacto, randomTime);
}

function setScore()
{
    score += 1;
    document.querySelector( '.pontuacao' ).innerHTML = score;
}

function restart()
{
    window.location.reload();
}
  
criarCacto();

document.addEventListener('keyup', handleKeyUp);
