let xBolanelson = 300;
let yBolanelson = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolanelson = 6;
let velocidadeYBolanelson = 6;

let xRaquetenelson = 5;
let yRaquetenelson = 150;
let raquetenelsonComprimento = 10;
let raquetenelsonAltura = 90;

let xRaqueteglobson = 585;
let yRaqueteglobson = 150;
let velocidadeYGlobson;

let colidindo = false;

let NelsonPoints = 0;
let GlobsonPoints = 0;

function setup() {
  createCanvas(600, 400);
  
}


function draw() {
  background(0);
  
  
  Bolanelson();
  movendoBolanelson();
  sentindoaBolanelsonbater();
  
  
  raqueteNelson(xRaquetenelson, yRaquetenelson);
  movendoRaquetenelson();
  sentindoRaqueteglobsonnelsonbater(xRaquetenelson, yRaquetenelson);
  sentindoRaqueteglobsonnelsonbater(xRaqueteglobson, yRaqueteglobson);
  
  raqueteNelson(xRaqueteglobson, yRaqueteglobson);
  movendoRaqueteglobson();
  //colisaoRaquetenelson();
  
  Placar();
  Pontos();
  
}

function Bolanelson() {
  circle(xBolanelson, yBolanelson, diametro);
}

function movendoBolanelson() {
  xBolanelson += velocidadeXBolanelson;
  yBolanelson += velocidadeYBolanelson;
}

function sentindoaBolanelsonbater() {
  if (xBolanelson + raio > width || xBolanelson - raio < 0) {
    velocidadeXBolanelson *= -1;
  }

  if (yBolanelson + raio > height || yBolanelson - raio < 0) {
    velocidadeYBolanelson *= -1;
  }
}

function raqueteNelson(x, y) {
  rect(x, y, raquetenelsonComprimento, raquetenelsonAltura);
}

function movendoRaquetenelson () {
  if (keyIsDown(UP_ARROW)){
    yRaquetenelson -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquetenelson += 10;
  }
}

function colisaoRaquetenelson () {
  if (xBolanelson - raio < xRaquetenelson + raquetenelsonComprimento && yBolanelson - raio < yRaquetenelson + raquetenelsonAltura && yBolanelson + raio > yRaquetenelson) { 
    
    velocidadeXBolanelson *= -1;
    
  }
}

function sentindoRaqueteglobsonnelsonbater (x,y) {
  colidindo = collideRectCircle(x, y, raquetenelsonComprimento, raquetenelsonAltura, xBolanelson, yBolanelson, raio);
  if (colidindo) {
    velocidadeXBolanelson *= -1;
  }
}

function movendoRaqueteglobson () {
  velocidadeYGlobson = yBolanelson - yRaqueteglobson - raquetenelsonComprimento / 2 - 80;
  yRaqueteglobson += velocidadeYGlobson
}

function Placar() {
  stroke("white");
  textAlign(CENTER);
  textSize(25);
  fill("cyan");
  rect(130,5,40,22);
  fill("white");
  text(NelsonPoints, 150, 26);
  fill("cyan");
  rect(430,5,40,22);
  fill("white");
  text(GlobsonPoints, 450, 26);
  
  }

function Pontos() {
  if (xBolanelson > 590) {
  NelsonPoints += 1;
    
  }
  if (xBolanelson < 10) {
  GlobsonPoints += 1;
    
  }

}
