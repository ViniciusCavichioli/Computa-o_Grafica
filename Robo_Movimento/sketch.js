let armAngle = 0;
let angleChange = 0.7
let ANGLE_LIMIT = 50

let armAngle2 = 1
let angleChange2= 0.1
let ANGLE_LIMIT2 = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  robo = new Robo();
  push()
  robo.Construir()

  armAngle += angleChange;
  armAngle2 += angleChange2;
  rotatebraco()
  rotatecabeca()
  pop()
}

function rotatebraco(){
if (armAngle > ANGLE_LIMIT || armAngle <0)
  {
    angleChange = -angleChange;
    armAngle += angleChange;
  }
}
function rotatecabeca(){
if (armAngle2 > ANGLE_LIMIT2 || armAngle2 <1)
  {
    angleChange2 = -angleChange2;
    armAngle2 += angleChange2;
  }
}
class Robo{
  Construir(){
    push()
    rotate(radians(-armAngle2));
    this.Antena()
    this.OrelhaEsquerda()
    this.OrelhaDireita()
    this.Cabeca()
    this.OlhoEsquerdo()
    this.OlhoDireito()
    this.Boca()
    this.Pescoco()
    pop()
    this.BracoEsquerdo()
    this.Braco2Esquerdo()
    this.BracoDireito()
    this.Braco2Direito()
    this.CotoveloDireito()
    this.CotoveloEsquerdo()
    this.Corpo()
    this.Bolinhas()
    this.Retangulo()
    this.Quadradros()
    this.Pernas()
    this.Pe()
  }
  Antena(){/bolinha de cima da cabeça/
    push()
    translate(200,110)
    fill(255,127,80)
    ellipse(0,0,20,27);
    fill(255,127,80)
    pop()
  }
  OrelhaEsquerda(){/bolinha da esquerda da cabeça/
    push()
    translate(140,150)
    fill(255,127,80)
    ellipse(0,0,27,20);
    fill(255)
    pop()
  }
  OrelhaDireita(){/bolinha da direita da cabeça/
    push()
    translate(260,150)
    //rotate(radians(-armAngle2));
    fill(255,127,80)
    ellipse(0,0,27,20);
    fill(255)
    pop()
  }
  Cabeca(){
    push()
    rectMode(CENTER)
    fill(176,224,230)
    translate(200,150)
    //rotate(radians(-armAngle2));
    rect(0,0,120,80);/cabeça/
    fill(255)
    pop()
  }
  OlhoEsquerdo(){
    push()
    translate(170,140)
    ellipse(0,0,30,30)
    fill(51)
    ellipse(0,0,20,23)
    fill(255)
    pop()
  }
  OlhoDireito(){
    push()
    translate(230,140)
    ellipse(0,0,30,30)
    fill(51)
    ellipse(0,0,20,23)
    fill(255)
    pop()
  }
  Pescoco(){
    push()
    fill(176,224,230)
    translate(185,190)
    rect(0,0,30,10);
    fill(255)
    pop()
  }
  Corpo(){
    fill(176,224,230)
    rect(140,200,120,130)
    fill(255)
  }
  Bolinhas(){
    fill(139,0,139)
    ellipse(160,210,10,10);
    fill(255,0,255)
    ellipse(160,225,10,10);
    fill(238,130,238)
    ellipse(160,240,10,10);
    fill(218,112,214)
    ellipse(160,255,10,10);
    fill(221,160,221)
    ellipse(160,270,10,10);
    fill(199,21,133)
    ellipse(160,285,10,10);
    fill(205,92,92)
    ellipse(160,300,10,10);
    fill(218,165,32)
    ellipse(160,315,10,10);
    fill(255)
  }
  Retangulo(){
    fill(0,250,154)
    rect(190,210,40,3);
    rect(190,215,40,3);
    rect(190,220,40,3);
    fill(255)
  }
  Quadradros(){
    rect(190,240,60,70); /retangulo medio dentro do corpo/
  
    fill(47,79,79)
    rect(195,250,10,10);
    rect(215,250,10,10);
    rect(235,250,10,10);
    fill(255)
    fill(0,255,255)
    rect(195,270,10,10);
    rect(215,270,10,10);
    rect(235,270,10,10);
    fill(255)
    fill(0,139,139)
    rect(195,290,10,10);
    rect(215,290,10,10);
    rect(235,290,10,10);  
    fill(255)
  }
  Pernas(){
    fill(176,224,230)
    rect(160,330,30,50);/perna/
    rect(210,330,30,50);/perna/
    fill(255)
  }
  Pe(){
    fill(255,127,80)
    arc(175, 380, 40, 40, PI, 0, CHORD);
    arc(225, 380, 40, 40, PI, 0, CHORD);
    fill(255)
  }
  Boca(){
    bezier(150,155,170,190,230,190,250,155);
    fill(176,224,230)
    bezier(150,155,170,170,230,170,250,155);
    fill(255)
    line(170,164,170,174.3);
    line(190,166,190,180); 
    line(210,166,210,180); 
    line(230,164,230,174.3);
  }
  CotoveloEsquerdo(){
    push()
    fill(255,127,80)
    translate(94,248)
    ellipse(0,0,30,30)
    fill(255)
    pop()
  }
  CotoveloDireito(){
    push()
    fill(255,127,80)
    translate(305,246)
    ellipse(0,0,30,30)
    fill(255)
    pop()
  }
  Braco2Esquerdo(){
    push()
    translate(87,240)
    rotate(radians(armAngle))
    rect(0,0,20,70)
    pop()
  }
  BracoEsquerdo(){
    push()
    translate(140,210)
    rotate(45)
    rect(0,0,20,65)
    pop()
  }
  BracoDireito(){
    push()
    translate(250,225)
    rotate(-45)
    rect(0,0,20,65)
    pop()
  }
  Braco2Direito(){
    push()
    translate(290,250)
    rotate(radians(-armAngle))
    rect(0,0,20,70)
    pop()
  }
}