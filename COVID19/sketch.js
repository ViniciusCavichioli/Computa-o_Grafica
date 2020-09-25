var b;
var c;
var w = 1300; // tamanho da tela na horizontal
var h = 600; // tamanho da tela na vertical

class SIR {
  static get S() {
    return 0;
  }
  static get I() {
    return 1;
  }
  static get R() {
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
      this.populacao = 200;	// numero de população
      this.taxaDeIsolamento = 0;	// taxa de população dentro de casa
      this.cidadaos = [];

      this.status = {};
      this.status[SIR.S] = 0;	//suscetiveis
      this.status[SIR.I] = 0;	// infecatado
      this.status[SIR.R] = 0;	// recuperado

      this.isCorongaGone = false; // Variavel para parar quando os cidadoes estiverem recuperados

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
      this.dataInfeccao = 0;
      this.tempoRecuperacao = random(2, 14);
      this.estaEmCasa = random(0, 100) < taxaIsolamento;	// numero aleatorio de cidadoes dentro de casa
  
      this.location = createVector(random(width/3, width), random(0, height));
      this.velocity = createVector(this.speed, this.speed);
    }

    verificaInteracoes(outrasPessoas) {
        
        for (let i = 0; i < outrasPessoas.length; i++) {
            if (this.id === i)
                continue;
            
            let dx = outrasPessoas[i].location.x - this.location.x;
            let dy = outrasPessoas[i].location.y - this.location.y;
            let distance = sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            let minDist = this.size + outrasPessoas[i].size;

            if (distance <= minDist) {
                if (outrasPessoas[i].status === SIR.I && this.status === SIR.S) {
                    this.status = SIR.I; // PEGOU CORONGA
                    this.dataInfeccao = floor(millis()/1000);
                }
            }
        }
    }
    
    update() {
        if (this.status === SIR.I) {
            let hoje = floor(millis()/1000);
            if (hoje - this.dataInfeccao >= this.tempoRecuperacao) {
                this.status = SIR.R;
            }
        }

        if (this.estaEmCasa) {
            return;
        }
        
        this.location.add(this.velocity);
        this.velocity.rotate(radians(random(-30, 30)));

        if (this.location.x <= width/3 || this.location.x > width || this.location.y < 0 || this.location.y >= height) {
            this.velocity.y = this.velocity.y * -1;
            this.velocity.x = this.velocity.x * -1;
        }
    }
    
    draw() {
      
      strokeWeight(1);
      if (this.status === SIR.S) {
        stroke(0);
        fill(0,0,255);
      }
      else if (this.status === SIR.I) {
        stroke(255,0,0);
        fill(255,165,0);
      }
      else if (this.status === SIR.R) {
        stroke(255,0,255);
        fill(199,21,133);
      }
     
     ellipse(this.location.x, this.location.y, this.size);
    }
}

  
  

