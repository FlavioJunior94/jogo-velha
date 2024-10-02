function tabuleiro(field_id){
    const tab = new Tabuleiro(`#${field_id}`)
}



class Tabuleiro{
    constructor(field_id){
        this.field = document.querySelector(field_id);
        this.player = document.querySelector('.player');
        this.rodada();
        
    }

    rodada(){
        this.imprime()
        this.trocaPlayer()
        
    }

    imprime(){
        const text = this.field.textContent.trim();

        if(this.player.classList.contains('one')){
            if(text==='') this.field.innerHTML='X';

        } else{

            if(text==='') this.field.innerHTML='O';

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
}