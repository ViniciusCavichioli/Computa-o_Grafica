class bola{
    constructor() {
    this.tamanho = 12
    this.speed = 3
    this.locationG = createVector(225, 150)
    this.locationC = createVector(25, 40)
    this.velocityG = createVector(this.speed, this.speed)
    this.velocityC = createVector(this.speed, this.speed)
    this.tamanhomeio = this.tamanho/2
  }
  
    update(){
    this.locationG.add(this.velocityG)
    this.locationC.add(this.velocityC)
    }
  
    draw() {
    stroke(0);
    fill(random(0,64),random(128,255),random(128,255));
    ellipse(this.locationG.x, this.locationG.y, this.tamanho);
    fill(random(124,127),random(252,255),random(0,255));
    ellipse(this.locationC.x, this.locationC.y, this.tamanho);
    }  
  
  paredeC(){
if ( this.locationC.y < 70){
    if ( this.locationC.y > 20){
    if ( this.locationC.x + this.tamanhomeio > 170){
    if ( this.locationC.x + this.tamanhomeio < 190){
      this.velocityC.x *= -1;
    }}
  } }
  
   if ( this.locationC.y < 220){
   if ( this.locationC.y > 70 ){
   if ( this.locationC.x + this.tamanhomeio > 70){
   if ( this.locationC.x + this.tamanhomeio < 90){
      this.velocityC.x *= -1;
    }}
  } }
   if ( this.locationC.y < 270){
   if ( this.locationC.y > 220 ){
   if ( this.locationC.x + this.tamanhomeio > 170){
   if ( this.locationC.x + this.tamanhomeio < 190){
      this.velocityC.x *= -1;
    }}
  } }
   if ( this.locationC.y < 270){
   if ( this.locationC.y > 20 ){
   if ( this.locationC.x - this.tamanhomeio > 0){
   if ( this.locationC.x - this.tamanhomeio < 20){
      this.velocityC.x *= -1;
    }}
  } }
    
       
    if ( this.locationC.x < 170){
    if ( this.locationC.x > 20){
    if ( this.locationC.y - this.tamanhomeio < 20){
    if ( this.locationC.y - this.tamanhomeio > 0){
      this.velocityC.y *= -1;
    }}
   if ( this.locationC.y + this.tamanhomeio < 290){
   if ( this.locationC.y + this.tamanhomeio > 270){
      this.velocityC.y *= -1;
    }}
  }}
  
   if ( this.locationC.x < 170){
   if ( this.locationC.x > 70 ){
   if ( this.locationC.y + this.tamanhomeio < 90){
   if ( this.locationC.y + this.tamanhomeio > 70){
      this.velocityC.y *= -1;
    }}
   if ( this.locationC.y - this.tamanhomeio < 220){
   if ( this.locationC.y - this.tamanhomeio > 200){
      this.velocityC.y *= -1;
    }}
   }
  }

  
    
    
    
    // colisão letra G
    if ( this.locationG.y < 70){
    if ( this.locationG.y > 20){
    if ( this.locationG.x + this.tamanhomeio > 350){
    if ( this.locationG.x + this.tamanhomeio < 370){
      this.velocityG.x *= -1;
    }}
  } }
  
   if ( this.locationG.y < 145){
   if ( this.locationG.y > 70 ){
   if ( this.locationG.x + this.tamanhomeio > 250){
   if ( this.locationG.x + this.tamanhomeio < 270){
      this.velocityG.x *= -1;
    }}
  } }
   if ( this.locationG.y < 270){
   if ( this.locationG.y > 145 ){
   if ( this.locationG.x + this.tamanhomeio > 350){
   if ( this.locationG.x + this.tamanhomeio < 370){
      this.velocityG.x *= -1;
    }}
  } }
   if ( this.locationG.y < 270){
   if ( this.locationG.y > 20 ){
   if ( this.locationG.x - this.tamanhomeio > 180){
   if ( this.locationG.x - this.tamanhomeio < 200){
      this.velocityG.x *= -1;
    }}
  } }
    
       
    if ( this.locationG.x < 350){
    if ( this.locationG.x > 200){
    if ( this.locationG.y - this.tamanhomeio < 20){
    if ( this.locationG.y - this.tamanhomeio > 0){
      this.velocityG.y *= -1;
    }}
         if ( this.locationG.y + this.tamanhomeio < 290){
   if ( this.locationG.y + this.tamanhomeio > 270){
      this.velocityG.y *= -1;
    }}
      
  }}
  
   if ( this.locationG.x < 350){
   if ( this.locationG.x > 250 ){
   if ( this.locationG.y + this.tamanhomeio < 90){
   if ( this.locationG.y + this.tamanhomeio > 70){
      this.velocityG.y *= -1;
    }}
   if ( this.locationG.y - this.tamanhomeio < 145){
   if ( this.locationG.y - this.tamanhomeio > 125){
      this.velocityG.y *= -1;
    }}
   }
  }

  
        // colisão letra G centro
    if ( this.locationG.y < 227.5){
    if ( this.locationG.y > 187.5){
    if ( this.locationG.x + this.tamanhomeio > 250){
    if ( this.locationG.x + this.tamanhomeio < 270){
      this.velocityG.x *= -1;
    }}
   if ( this.locationG.x - this.tamanhomeio > 300){
   if ( this.locationG.x - this.tamanhomeio < 320){
      this.velocityG.x *= -1;
    }}
  } }
      
    if ( this.locationG.x < 320){
    if ( this.locationG.x > 250){
    if ( this.locationG.y + this.tamanhomeio < 197.5){
    if ( this.locationG.y + this.tamanhomeio > 187.5){
      this.velocityG.y *= -1;
    }}
   if ( this.locationG.y - this.tamanhomeio < 227.5){
   if ( this.locationG.y - this.tamanhomeio > 217.5){
      this.velocityG.y *= -1;
    }}
  }}
    
    
    
  }  // fim da função parede
}    // fim da classe bola

class GerarLetraC{
  constructor(){
    push()
    translate(20,20)
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
} 

class GerarLetraG{
  constructor(){
    push()
    translate(200, 20)
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
} 

class GerarMeioG{
  constructor(){
    push() 
	translate(250, 187,5)
    andar(70)
    girar(90) 
    andar(40) 
    girar(90)   
    andar(70) 
    girar(90)   
    andar(40) 
	pop() 
  }
}

var bolas = [];
var quantBolas = 1;

function setup() {
  createCanvas(400, 400)
    for(var i=0; i<quantBolas; i++) {
    bolas.push(new bola());
  }
}

function draw() {
  background(220)
  new GerarLetraC()
  new GerarLetraG() 
  new GerarMeioG()
  for(const bola of bolas){
    bola.update();
    bola.paredeC();
    bola.draw();    
  }

}


function andar(n){	
	this.n = n
    line(n, 0, 0, 0)
	translate(n, 0)
}

function girar(a){
	this.a = a
	rotate(radians(a))
}