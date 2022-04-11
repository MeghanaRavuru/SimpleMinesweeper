var p1 = 0;
var p2 = 0;
var pl1 = prompt("Enter player 1 Name:");
var pl2 = prompt("Enter player 2 Name:");

document.getElementById("pl1").innerText=pl1;
document.getElementById("pl2").innerText=pl2;

var m = [[],[],[],[],[]];
for(var i=0;i<5;i++){
    for(var j = 0;j<5;j++){
        m[i][j] = Math.floor(Math.random()*2);
    }
}
m[Math.floor(Math.random()*5)][Math.floor(Math.random()*5)] = -1;

var c=0;

function endgame(p1,p2){
    if(p1===p2){
       document.getElementById("win").innerText = "ITS A TIE!!!";
       document.getElementById("win").style.color= "#fdfdfd";
    }
    if(p1>p2){
        document.getElementById("win").innerText = pl1+" IS THE WINNER";
       document.getElementById("win").style.color= "#fdfdfd";
    }
    if(p1<p2){
        document.getElementById("win").innerText = pl2+" IS THE WINNER";
       document.getElementById("win").style.color= "#fdfdfd";
    }
}

function fun(k,l,n){
    if(m[k][l]===-1){
        endgame(p1,p2);
        document.getElementById("p"+n).src="images/avatar/b.png";
        return;
    }
    if(m[k][l]!==-1){
        document.getElementById("p"+n).src="images/avatar/"+m[k][l]+".png";
        if(c%2===0){
            p1 += m[k][l];
            console.log(p1+"p1");
            document.getElementById("sc1").innerText =p1;
            c++;
        }
        else{
            p2 += m[k][l];
            console.log(p2+"p2");
            document.getElementById("sc2").innerText =p2;
            c++;
        }
    }
    
}

function ins() {
    if(document.getElementById("ins").style.display==="none"){
        document.getElementById("ins").style.display="block";
    }
    else{
        document.getElementById("ins").style.display="none";
    }
  }

console.log(m);
