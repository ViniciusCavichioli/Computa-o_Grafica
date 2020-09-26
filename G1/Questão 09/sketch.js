class GerarLetraC{
  constructor(){
    push()
    translate(20,20)  // Posição inicial do ponto
    andar(150)
    girar(90)
    andar(50)
    girar(90)
    andar(100)
    girar(-90)
    andar(150)
    girar(-90)
    andar(100)
    girar(90)
    andar(50)
    girar(90)
    andar(150)
    girar(90)
    andar(250)
    pop()
  }
} // Classe para gerar a letra C

class GerarLetraG{
  constructor(){
    push()
    translate(200, 20)  // Posição inicial do ponto da letra G
    andar(150)
    girar(90) 
    andar(50) 
    girar(90)   
    andar(100) 
    girar(-90)   
    andar(75) 
    girar(-90)   
    andar(100) 
    girar(90) 
    andar(125) 
    girar(90) 
    andar(150) 
    girar(90) 
    andar(250) 
    pop()
  }
} // Classe para gerar a letra G

class GerarMeioG{
  constructor(){
    push() 
	translate(250, 187,5)  // Posição inicial do ponto do meio G
    andar(70)
    girar(90) 
    andar(40) 
    girar(90)   
    andar(70) 
    girar(90)   
    andar(40) 
	pop() 
  }
} // Classe para gerar a bola do meio G

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  new GerarLetraC()  // Cria classe de desenho da letra C
  new GerarLetraG()  // Cria classe de desenho da letra G
  new GerarMeioG()   // Cria classe de desenho do meio G
}

//Função andar passando por parametro o comprimento que será desenhado
function andar(n){	
	this.n = n;
    line(n, 0, 0, 0);	// desenha a linha
	translate(n, 0);  // movimenta a posição do ponto para proxima linha
}  // Função para andar

//Função girar passando por parametro o grau que irá girar o desenho da proxima linha.
function girar(a){	// FUNÇÃO GIRAR
	this.a = a;
	rotate(radians(a));	// realiza a rotação da imagem
}  // Função para Girar