function setup() {
  createCanvas(400, 400);
  robo = new Robo();
}

function draw() {
  background(255);
  robo.Construir()
}

class Robo{
  Construir(){
    this.Cabeca()
    this.Olhos()
    this.Boca()
    this.Pescoco()
    this.Corpo()
    this.BracoDireito()
    this.BracoEsquerdo()
    this.Bolinhas()
    this.Retangulo()
    this.Quadradros()
    this.Pernas()
    this.Pe()
  }
  Cabeca(){
    fill(255,127,80)
    ellipse(140,160,27,20);/bolinha da cabeça/
    ellipse(260,160,27,20);/bolinha da cabeça/
    ellipse(200,120,20,27);/bolinha da cabeça/
    fill(255)
    fill(176,224,230)
    rect(140,120,120,70);/cabeça/
    fill(255)
  }
  Olhos(){
  ellipse(170,140,30,30); /Olho Esquerdo/
  fill(51);
  ellipse(170,140,20,23); /Pupila Esquerda/
  fill(255);
  ellipse(230,140,30,30); /Olho Direito/
  fill(51);
  ellipse(230,140,20,23); /Pupila Direita/
  fill(255);
  }
  Pescoco(){
    fill(176,224,230)
    rect(185,190,30,10);
    fill(255)
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
  BracoDireito(){
    line(328,240,260,210)
    line(325,260,260,230)
    fill(255,127,80)
    ellipse(318,247,30,30)
    fill(255)
    line(290,310,305,255)
    line(310,318,330,255)
    arc(290, 340, 60, 60, PI + QUARTER_PI, TWO_PI);
  }
  BracoEsquerdo(){
    line(80,240,140,210) 
    line(82,260,140,230) 
    fill(255,127,80)
    ellipse(90,247,30,30)
    fill(255)
    line(75.3,245,45,180)
    line(92,232.5,69,170)
    arc(50, 150, 60, 60, 0, PI + QUARTER_PI);
  }
}