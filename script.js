const dino = document.querySelector( '.dino' );
const bg = document.querySelector( '.bg' );
let isJumping = false;
let isGameOver = false;
let position = 0;

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
        document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';

      }else{

        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';

      }
    }, 25);
  
    setTimeout(criarCacto, randomTime);
}
  
criarCacto();

document.addEventListener('keyup', handleKeyUp);
