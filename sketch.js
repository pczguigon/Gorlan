let cor;
let circuloX;
let circuloY;
let circuloD;
let posicaoVertical;
let posicaoVertical2;

function setup() {
  createCanvas(600, 600);
  background("grey");
  cor = color(random(0,255), random(0,255), random(0,255));
  circuloX = [0,0]
  circuloY = [random(height), random(height)]
  circuloD = [50,50]
}

function draw() {
  if(mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255));
  }
  for (let contador in circuloX)
    {
    fill(cor);
    circle(circuloX[contador],circuloY[contador],circuloD[contador]);
    circuloX[contador] += random(0,3)
    circuloY[contador] += random(-3,3)
    circuloD[contador] += random(-5,5)
    
 
  
 
    }
  
}