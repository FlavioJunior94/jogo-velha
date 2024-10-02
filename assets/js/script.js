function tabuleiro(field_id){
    const tab = new Tabuleiro(`#${field_id}`)
}

function restart(){
    location.reload();
}

class Tabuleiro{
    constructor(field_id){
        this.field = document.querySelector(field_id);
        this.player = document.querySelector('.player');
        this.rodada();


        
    }

    rodada(){
        this.jogada()
        this.check()
        
    }

    jogada(){
        const text = this.field.textContent.trim();

        if(this.player.classList.contains('one')){
            if(text===''){
                this.field.innerHTML='X';
                this.trocaPlayer();
            }

        } else{

            if(text===''){
              this.field.innerHTML='O';
              this.trocaPlayer();
            }    

        }
    }

    trocaPlayer(){
        if(this.player.classList.contains('one')){ 
            this.player.classList.remove('one');
            this.player.classList.add('two');
            this.player.innerText='PLAYER2'
        }else{
            this.player.classList.remove('two');
            this.player.classList.add('one');
            this.player.innerText='PLAYER1'
        }
    }

    check(){
        this.textos = {
            text1: document.querySelector('#field1').textContent.trim(),
            text2: document.querySelector('#field2').textContent.trim(),
            text3: document.querySelector('#field3').textContent.trim(),
            text4: document.querySelector('#field4').textContent.trim(),
            text5: document.querySelector('#field5').textContent.trim(),
            text6: document.querySelector('#field6').textContent.trim(),
            text7: document.querySelector('#field7').textContent.trim(),
            text8: document.querySelector('#field8').textContent.trim(),
            text9: document.querySelector('#field9').textContent.trim(),
        };

        if(
            this.textos.text1==='X' && this.textos.text2==='X' && this.textos.text3==='X' ||
            this.textos.text4==='X' && this.textos.text5==='X' && this.textos.text6==='X' ||
            this.textos.text7==='X' && this.textos.text8==='X' && this.textos.text9==='X' ||
            this.textos.text1==='X' && this.textos.text4==='X' && this.textos.text7==='X' ||
            this.textos.text2==='X' && this.textos.text5==='X' && this.textos.text8==='X' ||
            this.textos.text3==='X' && this.textos.text6==='X' && this.textos.text9==='X' ||
            this.textos.text1==='X' && this.textos.text5==='X' && this.textos.text9==='X' ||
            this.textos.text3==='X' && this.textos.text5==='X' && this.textos.text7==='X'
        ){
            this.venceu('PLAYER 1');
            
        }

        if(
            this.textos.text1==='O' && this.textos.text2==='O' && this.textos.text3==='O' ||
            this.textos.text4==='O' && this.textos.text5==='O' && this.textos.text6==='O' ||
            this.textos.text7==='O' && this.textos.text8==='O' && this.textos.text9==='O' ||
            this.textos.text1==='O' && this.textos.text4==='O' && this.textos.text7==='O' ||
            this.textos.text2==='O' && this.textos.text5==='O' && this.textos.text8==='O' ||
            this.textos.text3==='O' && this.textos.text6==='O' && this.textos.text9==='O' ||
            this.textos.text1==='O' && this.textos.text5==='O' && this.textos.text9==='O' ||
            this.textos.text3==='O' && this.textos.text5==='O' && this.textos.text7==='O'
        ){
            this.venceu('PLAYER 2');
            
        }

        if (!Object.values(this.textos).some(text => text === '')) return this.velha();
    }

    venceu(res){
        const tabuleiro = document.querySelector('.tabuleiro');

    
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        overlay.style.width = tabuleiro.offsetWidth + 'px';
        overlay.style.height = tabuleiro.offsetHeight + 'px';
        tabuleiro.style.backgroundColor='white';

        tabuleiro.appendChild(overlay);

        overlay.innerHTML=` ${res} <br>
                            VENCEU !<br>
                       🥳👏PARABÉNS🎊🎊🎉<br><br>
                       <button onclick="restart()">RESTART</button>

                                        `
    }

    velha(){
        const tabuleiro = document.querySelector('.tabuleiro');
        
        const overlayExistente = document.querySelector('.overlay');
        if (overlayExistente) {
            overlayExistente.remove();
        }

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        overlay.style.width = tabuleiro.offsetWidth + 'px';
        overlay.style.height = tabuleiro.offsetHeight + 'px';
        tabuleiro.style.backgroundColor='white';

        tabuleiro.appendChild(overlay);
        overlay.innerHTML=` DEU<br>
                            VELHA !<br>
                       🧓🏻👵🏼  👵🏻👵🏾<br><br>
                       <button onclick="restart()">RESTART</button>

                                        `
    }
}