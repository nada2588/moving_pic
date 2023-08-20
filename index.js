
var dir1 = 'right' ;
var dir2 = 'left' ;
var dir='down';





function reset1(){
clearTimeout(my_time);
}

function disp(){
var step=1; 
var y=document.getElementById('i2').offsetTop;
var x=document.getElementById('i2').offsetLeft;
if(y >= 500 ){
dir = 'up';
}
if(y <= 100 ){
dir = 'down';
}

if(dir=='down'){y= y +step;}
else{y=y - step;}
document.getElementById('i2').style.top= y + "px";

/////////////////////////////////////////////////////

var y1=document.getElementById('i1').offsetTop;
var x1=document.getElementById('i1').offsetLeft;
if(x1 >= 1000 ){
dir1 = 'left';
}
if(x1 <= 100 ){
dir1 = 'right';
}

if(dir1=='right'){x1= x1 +step;}
else{x1=x1 - step;}
document.getElementById('i1').style.left= x1 + "px";

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
var y2=document.getElementById('i3').offsetTop;
var x2=document.getElementById('i3').offsetLeft;
if(x2 >= 1000 ){
dir2 = 'left';
}
if(x2 <= 100 ){
dir2 = 'right';
}

if(dir2=='right'){x2= x2 +step;}
else{x2=x2 - step;}
document.getElementById('i3').style.left= x2 + "px";

//////////////////////
}

function timer(){
  
disp();

var y=document.getElementById('i2').offsetTop;
var x=document.getElementById('i2').offsetLeft;

var y1=document.getElementById('i1').offsetTop;
var x1=document.getElementById('i1').offsetLeft;

var y2=document.getElementById('i3').offsetTop;
var x2=document.getElementById('i3').offsetLeft;
document.getElementById("msg").innerHTML="Left : " +   x2  +   "  Right : "  + y 
my_time=setTimeout('timer()',10);
change() ;


}

//////////////////////////////////////////////////////////////////////



function change() 
{
    var elem = document.getElementById("btn");


    if (elem.value==="Go") {
       
            elem.value = "Stop";   
            elem.onclick=function (){
              reset1();
              elem.value='Go';
              ////////////////////////
              elem.onclick=function(){
                timer();
                elem.value='Stop';
              }
            }       
    }
    }
    ////////////////////////////////////////

   
    
function STP(){
    
    
        document.getElementById('i1').style.left= "500px";
        document.getElementById('i1').style.top= "100px";
        document.getElementById("msg").innerHTML="";
        document.getElementById('i2').style.left= "500px";
        document.getElementById('i2').style.top= "100px";
        document.getElementById('i3').style.left= "500px";
        document.getElementById('i3').style.top= "100px";
        
    }


    

  
    

    

