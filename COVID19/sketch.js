var Populacao = 200;
var TaxaIsolamento = 0;
var w = 1300; // tamanho da tela na horizontal
var h = 600; // tamanho da tela na vertical

//CLASSE QUE DEFINE OS STATUS DOS CIDADOES
class SIR {
  static get S() {	//Status suscetiveis
    return 0;
  }
  static get I() {	//Status infectado
    return 1;
  }
  static get R() {	//status recuperado
    return 2;
  }
}

function setup() {
  createCanvas(w, h); // Criar o canvas da tela com as coordenadas
  cidade = new Cidade();
} 

function draw() { 
 
  background('#0e0e0e');

  let y_start = 200;	//Coordenada vertical inicial

	// CRIAÇÃO DOS TEXTOS PARA INFORMAÇÃO
  textSize(32);
  fill('White');
  noStroke();
  text('COVID-19 Simulador', 0,y_start+30);
  textSize(28);
  fill('yellow');
  text('População: ' + cidade.populacao, 0, y_start+80);
  text('% em casa: ' + cidade.taxaDeIsolamento + '%', 0, y_start+120);
  textSize(28);
  
  fill('Blue');
  text('Suscetíveis: ' + cidade.status[SIR.S], 0, y_start+180);
  fill('Orange');
  text('Infectados: ' + cidade.status[SIR.I], 0, y_start+220);
  fill('Fuchsia');
  text('Recuperados: ' + cidade.status[SIR.R], 0, y_start+260);
  
  cidade.update();
  cidade.draw();
}

class Cidade {
    constructor() {
      this.populacao = Populacao;			// numero de população
      this.taxaDeIsolamento = TaxaIsolamento;	// taxa de população dentro de casa
      this.cidadaos = [];			//Array para guardar os cidadaos

      this.status = {};
      this.status[SIR.S] = 0;	//suscetiveis
      this.status[SIR.I] = 0;	// infecatado
      this.status[SIR.R] = 0;	// recuperado

      this.isCorongaGone = false; // Variavel para parar quando os cidadoes estiverem recuperados

			//For que cria as pessoas para dentro do array incrimentavelmente
      for (let i = 0; i < this.populacao; i++) {
          this.cidadaos.push(new Cidadao(i, this.taxaDeIsolamento));
      }

      // Uma pessoa infectada aleatoriamente
      random(this.cidadaos).status = SIR.I;
    }

    update() {
			// VERIFICA SE TODA A POLUAÇÃO FOI RECUPERADA E PARA A EXECUÇÃO
        if (this.status[SIR.S] + this.status[SIR.R] === this.populacao) {
            this.isCorongaGone = true;
            return;
        }


        let s = 0, i = 0, r = 0;
			//REALIZA A MOVIMENTAÇÃO DO UPDATE DO CIDADAO
        for (let k = 0; k < this.populacao; k++) {
            let cidadao = this.cidadaos[k];
            cidadao.update();
            s += cidadao.status === SIR.S ? 1 : 0;
            i += cidadao.status === SIR.I ? 1 : 0;
            r += cidadao.status === SIR.R ? 1 : 0;
            cidadao.verificaInteracoes(this.cidadaos);
        }

        this.status[SIR.S] = s;
        this.status[SIR.I] = i;
        this.status[SIR.R] = r;
    }

    draw() {
			// desenha os cidadaos
        for (let i = 0; i < this.populacao; i++) {
            this.cidadaos[i].draw();
        }
    }
}
class Cidadao {
  
    constructor(id, taxaIsolamento) {
      this.id = id;
      this.speed = 2;	//velocidade que o cidadao vai andar
      this.size = 14;	//tamanho da ellipse do cidadao
      this.status = SIR.S;	// status inicial do cidadao é como suscetivel
      this.dataInfeccao = 0;	//Tempo que ele foi infectado
      this.tempoRecuperacao = random(4, 15);	// Tempo de recuperação entre 4 a 15 segundos
      this.estaEmCasa = random(0, 100) < taxaIsolamento;	// valor aleatorio que verifica se cidadao esta em casa
  
      this.localizacao = createVector(random(width/3, width), random(0, height)); // tamanho da tela que o cidadao ira se mover
      this.velocity = createVector(this.speed, this.speed);	// Vetor de velocidade que o cidao ira se movimentar move 2 pra direita e 2 pra baixo
	}
			// verifica colisao com outras pessoas
    verificaInteracoes(outrasPessoas) {
        for (let i = 0; i < outrasPessoas.length; i++) {
            if (this.id === i) // comparando se o id é igual
                continue;
            
            let dx = outrasPessoas[i].localizacao.x - this.localizacao.x; //Diferença do x com a população
            let dy = outrasPessoas[i].localizacao.y - this.localizacao.y;	// deferneça do y com a populacao
            let distance = sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));	//distancia de dois pontos
            let minDist = this.size + outrasPessoas[i].size; // tamanho meu mais da outra pessoa

            if (distance <= minDist) {	// se a distancia de dois pontos for menor o igual que a distancia minima
                if (outrasPessoas[i].status === SIR.I && this.status === SIR.S) { //se uma ta infectada e outra n
                    this.status = SIR.I; // PEGOU CORONGA
                    this.dataInfeccao = floor(millis()/1000);
                }
            }
        }
    }
    
    update() {	//Função que ficará atualizando toda hora.
        
		//VERIFICA SE O CIDADAO SE RECUPEROU
		if (this.status === SIR.I) {
            let hoje = floor(millis()/1000);	//verifica os segundos de execução do programa
            if (hoje - this.dataInfeccao >= this.tempoRecuperacao) { // se a hora de agora menos a hora de infecção for maior que o tempo de recuperação ele fica recuperado
                this.status = SIR.R;	// o status muda para recuperado
            }
        }
			// Verifica se o cidadao está em casa. e fica parado no canvas
        if (this.estaEmCasa) {
            return;
        }
        
        this.localizacao.add(this.velocity);	// Adiciona a velocidade para o cidadao se movimentar.
        this.velocity.rotate(radians(random(-30, 30)));	// Adiciona rotação ao movimento da bolinha.
			// verifica a localização da bolinha, o x e y e verifica se ele passou a largura e altura e inverte a posição
        if (this.localizacao.x <= width/3 || this.localizacao.x > width || this.localizacao.y < 0 || this.localizacao.y >= height) {
            this.velocity.y = this.velocity.y * -1;
            this.velocity.x = this.velocity.x * -1;
        }
    }
    
    draw() {
      
      strokeWeight(1);	//tamanho da borda a ellipse
      if (this.status === SIR.S) {	// se o cidadao for suscetivel fica com cor azul
        stroke(0);
        fill(0,0,255);
      }
      else if (this.status === SIR.I) {	// se o cidadao for infectado fica com cor laranja
        stroke(255,0,0);
        fill(255,165,0);
      }
      else if (this.status === SIR.R) {	// se o cidadao for recuperado fica com cor rosa
        stroke(255,0,255);
        fill(199,21,133);
      }
     
     ellipse(this.localizacao.x, this.localizacao.y, this.size); // cria os cidadoes(ellipses) de forma aleatoria dentro do quadrado definido na localização
    }
}

  
  

