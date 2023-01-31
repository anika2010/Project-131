img="";
status="";
objects=[];
function preload(){
img=loadImage("desk.jpg");
}

function setup(){
canvas=createCanvas(500,400);
canvas.center();
canvas.position(430,150);
object_detector=ml5.objectDetector('cocossd',modalLoaded);
document.getElementById('status').innerHTML="Status:Detecting";
}
function modalLoaded(){
    console.log('Modal is loaded');
    status=true;
    object_detector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}
    

function draw(){ 
    image(img,0,0,500,400);
if(status!=''){
    for(i=0;i<objects.length;i++){
        document.getElementById('status').innerHTML="Status:Object Detected";
        fill('#9a50b9');
        noFill()
        stroke('#9a50b9');
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y+20);
        
    }
  
}
  

}