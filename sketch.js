var capture;
var quantQuadros = 0;
var numero = 0;
var colorQuadroR = [];
var colorQuadroG = [];
var colorQuadroB = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  capture = createCapture(VIDEO);
  capture.hide();
  
   for(x = 0; x < width; x+=150){
      for(y = 0; y < height; y+=150){        
        colorQuadroR.push(random(255));
        colorQuadroG.push(random(255));
        colorQuadroB.push(random(255));
        quantQuadros++;
      }
   }
}

function draw() {
  
  for(x = 0; x < width; x+=150){
      for(y = 0; y < height; y+=150){
       
        if(numero < quantQuadros){
         tint(colorQuadroR[numero], colorQuadroG[numero], colorQuadroB[numero]);
         numero++;
        }else{
         numero = 0; 
        }
        image(capture, x, y, 150, 150);
      }
   }
}

function mousePressed(){
  saveCanvas('minhaFoto', 'jpg'); 
}
