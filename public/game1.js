
			
			
			
			
			
			
			
			
			
			
let score = 0;




//Sorry, the demo game is not playable on the mobile version. The device needs at least 960px. Please use a different device or change the screen size.</p>

const divmain = document.createElement("div");
const img = document.createElement("img");
img.src = "warnig.png";
img.width = "350";
img.height = "350";
img.alt = "Image with text";
img.style.position = "relative";


divmain.style.position = "relative";

divmain.className = "textsmall"



// Create p element and set its innerHTML to the desired text
const divo = document.createElement("div");
divo.id = "text-padding"
const text = document.createElement("p");
text.innerHTML = "Unfortunately, the minimum screen width required to play the game is 1100px. Your current screen width does not meet this requirement, so you will not be able to play the game at this time. We apologize for any inconvenience this may cause and recommend trying again on a device with a larger screen.";

text.style.color = "white";

divo.style.position = "relative";
divo.className = "ToSmall";
// Append the p element to the img element

divo.appendChild(text);
let gameElements = document.querySelectorAll('.add');
divmain.appendChild(img);
divmain.appendChild(divo);
// Append the img element to the body element
gameElements.appendChild(divmain);











const newlabel = document.createElement("Label");
newlabel.setAttribute("for", "label0");
newlabel.innerHTML = "";
const containerR = document.querySelector(".container");

const Kill = document.createElement("Label");
Kill.setAttribute("for", "label1");
Kill.innerHTML = "Target: ";
const containerP = document.querySelector(".container");

const End = document.createElement("Label");
End.setAttribute("for", "label2");

End.style.color = "rgb(246,200,0)";
End.style.fontSize = "21pt";
End.style.fontFamily = "Cambria";

End.style.right = 38 + "px";
End.innerHTML = "";

//<pre>" + "Score:  " + score + "\n" + "\n"  + "Highscore: " + score +"</pre>

const containerD = document.querySelector(".container");



const terrorist = document.createElement("img");
const containerQ = document.querySelector(".container");

const bull2 = document.createElement("img");
const containerY = document.querySelector(".container");

const bull3 = document.createElement("img");
const containerX = document.querySelector(".container");

const bull4 = document.createElement("img");
const containerZ = document.querySelector(".container");

const bull5 = document.createElement("img");
const containerW = document.querySelector(".container");

const bull6 = document.createElement("img");
const containerV = document.querySelector(".container");

const bull7 = document.createElement("img");
const containerA = document.querySelector(".container");

const bull8 = document.createElement("img");
const containerB = document.querySelector(".container");

const bull9 = document.createElement("img");
const containerC = document.querySelector(".container");





const aim = document.createElement("img");
const containerS = document.querySelector(".container");

terrorist.setAttribute("src", "./m/0-.png");
terrorist.setAttribute("class", "terrorist");

bull3.setAttribute("src", "./m/0-.png");
bull3.setAttribute("class", "bull3");

bull2.setAttribute("src", "./m/0-.png");
bull2.setAttribute("class", "bull2");

bull4.setAttribute("src", "./m/0-.png");
bull4.setAttribute("class", "bull4");

bull5.setAttribute("src", "./m/0-.png");
bull5.setAttribute("class", "bull5");

bull6.setAttribute("src", "./m/0-.png");
bull6.setAttribute("class", "bull6");

bull7.setAttribute("src", "./m/0-.png");
bull7.setAttribute("class", "bull7");

bull8.setAttribute("src", "./m/0-.png");
bull8.setAttribute("class", "bull8");

bull9.setAttribute("src", "./m/0-.png");
bull9.setAttribute("class", "bull9");




aim.setAttribute("src", "./x/0.png");
aim.setAttribute("class", "aim")


const startBtn = document.querySelector(".startBtn");
terrorist.style.position = "absolute";



//For JavaSctipt Terrorist




//OpenImage




//Spawning
const contHeight = containerQ.offsetHeight;
const contWidth = containerQ.offsetWidth;
//Spawning
let check = 0;
let hey = 0;
    const randTop = 246;
    const randRight = 267;
    
    const randTop2 = 200;
    const randRight2 = 200;

    const randTop3 = 300;
    const randRight3 = 300;
    hey++
   
    terrorist.style.right = 89 + "px";
    terrorist.style.top =  400+ "px";
    
    bull2.style.right = 162 + "px";
    bull2.style.top = 252.7 + "px";

    bull3.style.left = 289 + "px";
    bull3.style.top = 400.1 + "px";

    

    bull4.style.right = 123.9 + "px";
    bull4.style.top = 253.9 + "px"


    bull5.style.left = -10.5 + "px";
    bull5.style.top = 256.1 + "px"
    
    bull6.style.left = 332 + "px";
    bull6.style.top = 253.9 + "px"

    bull7.style.right = 47 + "px";
    bull7.style.top = 256.1 + "px"

    bull8.style.right =  -66.3 + "px";
    bull8.style.top = 252.4 + "px"

    bull9.style.right = 13 + "px";
    bull9.style.top = 411 + "px"
    
   
    
    aim.style.left = -10+ "px";
    aim.style.top = 34 + "px"

    //Labels
    
    newlabel.style.right = 160+ "px";
    
    newlabel.style.bottom = 52 + "px"


    Kill.style.left = 10+ "px";
    Kill.style.bottom =  49 + "px"

   
    End.style.top = 140 + "px"
    End.innerHTML = "";





    
    terrorist.style.position = "relative";
    bull2.style.position = "relative";
    bull3.style.position = "relative";
    bull4.style.position = "relative";
    bull5.style.position = "relative";
    bull6.style.position = "relative";
    bull7.style.position = "relative";
    bull8.style.position = "relative";
    bull9.style.position = "relative";
    
    aim.style.position = "relative";
    newlabel.style.position = "relative";
    Kill.style.position = "relative";
    End.style.position = "relative";
    

   

let t = 150;



let pos0 = 0;

let pos = [];
pos[0]= 99;
pos[1]= 23;
pos[2]= 24;
pos[3]= 25;
pos[4]= 26;
pos[5]= 27;
pos[6]= 28;
pos[7]= 29;
pos[8]= 30;
pos[9]= 31;


let to = [];
to[0]= 999;
to[1]= 220;
to[2]= 240;
to[3]= 250;
to[4]= 260;
to[5]= 270;
to[6]= 280;
to[7]= 290;
to[8]= 300;
to[9]= 310;

let s = [];
s[0]= 999;
s[1]= 220;
s[2]= 240;
s[3]= 250;
s[4]= 260;
s[5]= 270;
s[6]= 280;
s[7]= 290;
s[8]= 300;
s[9]= 310;






var f = new Boolean("true");
var y = new Boolean("true");
var y1 = new Boolean("true");
let first = 0;
let go = 0;
let gscore = 0;
let speed = 0;
let wait = 0;
let dif = 0;
let geteil = 45;
let einaml = 0;
let x = 0;
let nextposition = 0;



const imgElement = document.getElementById("start0");



imgElement.addEventListener("click", function()  {

     
    containerX.appendChild(bull3);
    containerQ.appendChild(terrorist);
    containerY.appendChild(bull2);
    containerZ.appendChild(bull4);
    containerW.appendChild(bull5);
    containerV.appendChild(bull6);
    containerA.appendChild(bull7);
    containerB.appendChild(bull8);
    containerC.appendChild(bull9);
    const imgContainer1 = document.getElementById("start0");
    imgElement.style.visibility = 'hidden';
    
    
    
    if(x != 1){x = 1;}

    if(go == 1){t = 150; score = 0; speed = 1; End.innerHTML = ""; document.getElementById('a').style.backgroundImage="url('House_PS9.png')"; go = 0; Kill.innerHTML = "Target: ";  }
    else{document.getElementById('a').style.backgroundImage="url('House_PS9.png')"; y1 = true;}
    
    
    
    
    //let myDivs = document.querySelector('div');
    //myDivs.style.backgroundImage = "url('House_PS9.png')";
    
    
    containerS.appendChild(aim);
    if(go == 0 || t < 0){
    containerR.appendChild(newlabel);
    containerP.appendChild(Kill);
    }
    containerD.appendChild(End);

});







setInterval(()=> {
    
    if(einaml == 0){bloodSpot.style.display = "none"; einaml = 1;}
    if(x == 1){t--;}
    if(t > 0){
        
        newlabel.innerHTML = "";
        if(t/100 < 1){if(t % 10 == 0){newlabel.innerHTML =  "Score:  "  + score + "\u00A0"  + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" +"Time: " +"\u00A0" + "\u00A0" + t/10  + ".0"; }
        else{newlabel.innerHTML =  "Score:  "  + score + "\u00A0"  + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" +"Time: " +"\u00A0" + "\u00A0"  + t/10}}
        else{
        
        if(t % 10 == 0){
        newlabel.innerHTML =  "Score:  " + "" + score + "\u00A0"  + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" +"Time: " + t/10 + ".0";}
        else{
        newlabel.innerHTML =  "Score:  " + "" + score + "\u00A0"  + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" +"Time: " + t/10 ;
        }}
        nextposition++ ;
    
    }
    else{newlabel.innerHTML = "";
        Kill.innerHTML = "";}
    if(t < 0){go = 1; newlabel.innerHTML = "";}
    
},100);
setInterval(()=> {
    if(t < 0){go = 1; newlabel.innerHTML = "";}
    if(y1){

        s[0] = Math.floor(Math.random() * 8);
        s[1] = Math.floor(Math.random() * 8);
        s[2] = Math.floor(Math.random() * 8);
        s[3] = Math.floor(Math.random() * 8);
        s[4] = Math.floor(Math.random() * 8);
        s[5] = Math.floor(Math.random() * 8);
        s[6] = Math.floor(Math.random() * 8);
        s[7] = Math.floor(Math.random() * 8);
        
       
        
     

        pos[0] = Math.floor(Math.random() * 9);
        to[0] = Math.floor(Math.random() * 59);
        
    
        if(pos[0] == 0){ terrorist.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        if(pos[0] == 1){ bull2.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        if(pos[0] == 2){ bull3.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        if(pos[0] == 3){ bull4.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        if(pos[0] == 4){ bull5.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        if(pos[0] == 5){ bull6.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        if(pos[0] == 6){ bull7.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        if(pos[0] == 7){ bull8.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        if(pos[0] == 8){ bull9.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
        
        
        for (let i = 0; i  < 1; i++) {
        to[1] = Math.floor(Math.random() * 59);
        pos[1] = Math.floor(Math.random() * 9);
        
            
            
            for (let x = 0; x < 1; x++) {
            if(pos[x] == pos[1] ){i = -1; break;}
            }
             
           
            for (let x = 0; x < 1; x++ ) {
            if(to[x] == to[1]){i = -1;}
            } 
            
           
            
        
            if(i == 0){
            
            if(s[0] < 3){to[1]= 99;}
            if(pos[1] == 0){ terrorist.setAttribute("src", "./m/" + to[1].toString() + ".png");}
            if(pos[1] == 1){ bull2.setAttribute("src", "./m/" + to[1].toString() + ".png");}
            if(pos[1] == 2){ bull3.setAttribute("src", "./m/" + to[1].toString() + ".png");}
            if(pos[1] == 3){ bull4.setAttribute("src", "./m/" + to[1].toString() + ".png");}
            if(pos[1] == 4){ bull5.setAttribute("src", "./m/" + to[1].toString() + ".png");}
            if(pos[1] == 5){ bull6.setAttribute("src", "./m/" + to[1].toString() + ".png");}
            if(pos[1] == 6){ bull7.setAttribute("src", "./m/" + to[1].toString() + ".png");}
            if(pos[1] == 7){ bull8.setAttribute("src", "./m/" + to[1].toString() + ".png");}
            if(pos[1] == 8){ bull9.setAttribute("src", "./m/" + to[1].toString() + ".png");}}
        }
        
        for (let i = 0; i  < 1; i++) {
        to[2] = Math.floor(Math.random() * 59);
        pos[2] = Math.floor(Math.random() * 9); 
        
       
            
            
            for (let x = 0; x < 2; x++) {
            if(pos[x] == pos[2] ){i = -1; break;}
            }
            
        
            for (let x = 0; x < 2; x++ ) {
            if(to[x] == to[2]){i = -1;}
            }
            
            
        
            if(i == 0){
            
            if(s[1] < 3){to[2]= 99;}
            if(pos[2] == 0){ terrorist.setAttribute("src", "./m/" + to[2].toString() + ".png");}
            if(pos[2] == 1){ bull2.setAttribute("src", "./m/" + to[2].toString() + ".png");}
            if(pos[2] == 2){ bull3.setAttribute("src", "./m/" + to[2].toString() + ".png");}
            if(pos[2] == 3){ bull4.setAttribute("src", "./m/" + to[2].toString() + ".png");}
            if(pos[2] == 4){ bull5.setAttribute("src", "./m/" + to[2].toString() + ".png");}
            if(pos[2] == 5){ bull6.setAttribute("src", "./m/" + to[2].toString() + ".png");}
            if(pos[2] == 6){ bull7.setAttribute("src", "./m/" + to[2].toString() + ".png");}
            if(pos[2] == 7){ bull8.setAttribute("src", "./m/" + to[2].toString() + ".png");}
            if(pos[2] == 8){ bull9.setAttribute("src", "./m/" + to[2].toString() + ".png");}}
        
        }
        for (let i = 0; i  < 1; i++) {
        pos[3] = Math.floor(Math.random() * 9);
        to[3] = Math.floor(Math.random() * 59);
        
            
            
            for (let x = 0; x < 3; x++) {
            if(pos[x] == pos[3] ){i = -1; break;}
            }
            
            for (let x = 0; x < 3; x++ ) {
            if(to[x] == to[3]){i = -1;}
            }
            
        
            if(i == 0){
            
            if(s[2] < 3){to[3]= 99;}
            if(pos[3] == 0){ terrorist.setAttribute("src", "./m/" + to[3].toString() + ".png");}
            if(pos[3] == 1){ bull2.setAttribute("src", "./m/" + to[3].toString() + ".png");}
            if(pos[3] == 2){ bull3.setAttribute("src", "./m/" + to[3].toString() + ".png");}
            if(pos[3] == 3){ bull4.setAttribute("src", "./m/" + to[3].toString() + ".png");}
            if(pos[3] == 4){ bull5.setAttribute("src", "./m/" + to[3].toString() + ".png");}
            if(pos[3] == 5){ bull6.setAttribute("src", "./m/" + to[3].toString() + ".png");}
            if(pos[3] == 6){ bull7.setAttribute("src", "./m/" + to[3].toString() + ".png");}
            if(pos[3] == 7){ bull8.setAttribute("src", "./m/" + to[3].toString() + ".png");}
            if(pos[3] == 8){ bull9.setAttribute("src", "./m/" + to[3].toString() + ".png");}}
        
        }
        for (let i = 0; i  < 1; i++) {
        pos[4] = Math.floor(Math.random() * 9);
        to[4] = Math.floor(Math.random() * 59);
         
            
            
            for (let x = 0; x < 4; x++) {
            if(pos[x] == pos[4] ){i = -1; break;}
            }
            
            
            for (let x = 0; x < 4; x++ ) {
            if(to[x] == to[4]){i = -1;}
            }
            
            
        
            if(i == 0){
           
            if(s[3] < 3){to[4]= 99;}
            if(pos[4] == 0){ terrorist.setAttribute("src", "./m/" + to[4].toString() + ".png");}
            if(pos[4] == 1){ bull2.setAttribute("src", "./m/" + to[4].toString() + ".png");}
            if(pos[4] == 2){ bull3.setAttribute("src", "./m/" + to[4].toString() + ".png");}
            if(pos[4] == 3){ bull4.setAttribute("src", "./m/" + to[4].toString() + ".png");}
            if(pos[4] == 4){ bull5.setAttribute("src", "./m/" + to[4].toString() + ".png");}
            if(pos[4] == 5){ bull6.setAttribute("src", "./m/" + to[4].toString() + ".png");}
            if(pos[4] == 6){ bull7.setAttribute("src", "./m/" + to[4].toString() + ".png");}
            if(pos[4] == 7){ bull8.setAttribute("src", "./m/" + to[4].toString() + ".png");}
            if(pos[4] == 8){ bull9.setAttribute("src", "./m/" + to[4].toString() + ".png");}}
        
        }
        for (let i = 0; i  < 1; i++) {
        pos[5] = Math.floor(Math.random() * 9);   
        to[5] = Math.floor(Math.random() * 59);
        
            
            for (let x = 0; x < 5; x++) {
            if(pos[x] == pos[5] ){i = -1; break;}
            }

            
            for (let x = 0; x < 5; x++) {
            if(to[x] == to[5]){i = -1;}
            }
            
            
            
        
            if(i == 0){
            
            if(s[4] < 3){to[5]= 99;}
            if(pos[5] == 0){ terrorist.setAttribute("src", "./m/" + to[5].toString() + ".png");}
            if(pos[5] == 1){ bull2.setAttribute("src", "./m/" + to[5].toString() + ".png");}
            if(pos[5] == 2){ bull3.setAttribute("src", "./m/" + to[5].toString() + ".png");}
            if(pos[5] == 3){ bull4.setAttribute("src", "./m/" + to[5].toString() + ".png");}
            if(pos[5] == 4){ bull5.setAttribute("src", "./m/" + to[5].toString() + ".png");}
            if(pos[5] == 5){ bull6.setAttribute("src", "./m/" + to[5].toString() + ".png");}
            if(pos[5] == 6){ bull7.setAttribute("src", "./m/" + to[5].toString() + ".png");}
            if(pos[5] == 7){ bull8.setAttribute("src", "./m/" + to[5].toString() + ".png");}
            if(pos[5] == 8){ bull9.setAttribute("src", "./m/" + to[5].toString() + ".png");}}
        
        }

        for (let i = 0; i  < 1; i++) {
        pos[6] = Math.floor(Math.random() * 9);
        to[6] = Math.floor(Math.random() * 59);
        
            
            
            for (let x = 0; x < 6; x++) {
            if(pos[x] == pos[6] ){i = -1; break;}
            }

            
            for (let x = 0; x < 6; x++ ) {
            if(to[x] == to[6]){i = -1;}
            }
            
            
        
            if(i == 0){
            
            if(s[5] < 3){to[6]= 99;}
            if(pos[6] == 0){ terrorist.setAttribute("src", "./m/" + to[6].toString() + ".png");}
            if(pos[6] == 1){ bull2.setAttribute("src", "./m/" + to[6].toString() + ".png");}
            if(pos[6] == 2){ bull3.setAttribute("src", "./m/" + to[6].toString() + ".png");}
            if(pos[6] == 3){ bull4.setAttribute("src", "./m/" + to[6].toString() + ".png");}
            if(pos[6] == 4){ bull5.setAttribute("src", "./m/" + to[6].toString() + ".png");}
            if(pos[6] == 5){ bull6.setAttribute("src", "./m/" + to[6].toString() + ".png");}
            if(pos[6] == 6){ bull7.setAttribute("src", "./m/" + to[6].toString() + ".png");}
            if(pos[6] == 7){ bull8.setAttribute("src", "./m/" + to[6].toString() + ".png");}
            if(pos[6] == 8){ bull9.setAttribute("src", "./m/" + to[6].toString() + ".png");}}
        
        }

        for (let i = 0; i  < 1; i++) {
        pos[7] = Math.floor(Math.random() * 9);
        to[7] = Math.floor(Math.random() * 59);
       
            
            
            for (let x = 0; x < 7; x++) {
            if(pos[x] == pos[7] ){i = -1; break;}
            }

         
            for (let x = 0; x < 7; x++ ) {
            if(to[x] == to[7]){i = -1;}
            }
            
            
        
            if(i == 0){
           
            if(s[6] < 3){to[7]= 99;}
            if(pos[7] == 0){ terrorist.setAttribute("src", "./m/" + to[7].toString() + ".png"); }
            if(pos[7] == 1){ bull2.setAttribute("src", "./m/" + to[7].toString() + ".png");}
            if(pos[7] == 2){ bull3.setAttribute("src", "./m/" + to[7].toString() + ".png");}
            if(pos[7] == 3){ bull4.setAttribute("src", "./m/" + to[7].toString() + ".png");}
            if(pos[7] == 4){ bull5.setAttribute("src", "./m/" + to[7].toString() + ".png");}
            if(pos[7] == 5){ bull6.setAttribute("src", "./m/" + to[7].toString() + ".png");}
            if(pos[7] == 6){ bull7.setAttribute("src", "./m/" + to[7].toString() + ".png");}
            if(pos[7] == 7){ bull8.setAttribute("src", "./m/" + to[7].toString() + ".png");}
            if(pos[7] == 8){ bull9.setAttribute("src", "./m/" + to[7].toString() + ".png");}}
        
        }
        for (let i = 0; i  < 1; i++) {
        pos[8] = Math.floor(Math.random() * 9);
        to[8] = Math.floor(Math.random() * 59);
        
            
            for (let x = 0; x < 8; x++) {
            if(pos[x] == pos[8] ){i = -1; break;}
            }

            
            for (let x = 0; x < 8; x++ ) {
            if(to[x] == to[8]){i = -1;}
            }
           
            
        
            if(i == 0){
           
            if(s[7] < 3){to[8]= 99;}
            if(pos[8] == 0){ terrorist.setAttribute("src", "./m/" + to[8].toString() + ".png"); }
            if(pos[8] == 1){ bull2.setAttribute("src", "./m/" + to[8].toString() + ".png");}
            if(pos[8] == 2){ bull3.setAttribute("src", "./m/" + to[8].toString() + ".png");}
            if(pos[8] == 3){ bull4.setAttribute("src", "./m/" + to[8].toString() + ".png");}
            if(pos[8] == 4){ bull5.setAttribute("src", "./m/" + to[8].toString() + ".png");}
            if(pos[8] == 5){ bull6.setAttribute("src", "./m/" + to[8].toString() + ".png");}
            if(pos[8] == 6){ bull7.setAttribute("src", "./m/" + to[8].toString() + ".png");}
            if(pos[8] == 7){ bull8.setAttribute("src", "./m/" + to[8].toString() + ".png");}
            if(pos[8] == 8){ bull9.setAttribute("src", "./m/" + to[8].toString() + ".png");}}
            
        }
        y1 = false;
        wait = 70;

        
    }
    diff = wait -1; 
    if(score > 5){geteilt = 40;}
    if(score > 10){geteilt = 35;}
    
    
    if(y1 == false && nextposition == 80 && wait - diff < 20 || speed == 1){
        nextposition =
        pos[0] = Math.floor(Math.random() * 9);
       speed = 0;
       if(pos[0] == 0){ terrorist.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       if(pos[0] == 1){ bull2.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       if(pos[0] == 2){ bull3.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       if(pos[0] == 3){ bull4.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       if(pos[0] == 4){ bull5.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       if(pos[0] == 5){ bull6.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       if(pos[0] == 6){ bull7.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       if(pos[0] == 7){ bull8.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       if(pos[0] == 8){ bull9.setAttribute("src", "./m/" + to[0].toString() + ".png"); aim.setAttribute("src", "./x/" + to[0].toString() + ".png")}
       
       
       for (let i = 0; i  < 1; i++) {
       pos[1] = Math.floor(Math.random() * 9);
       
       
           for (let x = 0; x < 1; x++) {
           if(pos[x] == pos[1] ){i = -1; break;}
           }
        
           if(i == 0){
           
           if(s[0] < 3){to[1]= 99;}
           if(pos[1] == 0){ terrorist.setAttribute("src", "./m/" + to[1].toString() + ".png");}
           if(pos[1] == 1){ bull2.setAttribute("src", "./m/" + to[1].toString() + ".png");}
           if(pos[1] == 2){ bull3.setAttribute("src", "./m/" + to[1].toString() + ".png");}
           if(pos[1] == 3){ bull4.setAttribute("src", "./m/" + to[1].toString() + ".png");}
           if(pos[1] == 4){ bull5.setAttribute("src", "./m/" + to[1].toString() + ".png");}
           if(pos[1] == 5){ bull6.setAttribute("src", "./m/" + to[1].toString() + ".png");}
           if(pos[1] == 6){ bull7.setAttribute("src", "./m/" + to[1].toString() + ".png");}
           if(pos[1] == 7){ bull8.setAttribute("src", "./m/" + to[1].toString() + ".png");}
           if(pos[1] == 8){ bull9.setAttribute("src", "./m/" + to[1].toString() + ".png");}}
       }
       
       for (let i = 0; i  < 1; i++) {
       pos[2] = Math.floor(Math.random() * 9);
       
      
           for (let x = 0; x < 2; x++) {
           if(pos[x] == pos[2] ){i = -1; break;}
           }
           
       
           if(i == 0){
           
           if(s[1] < 3){to[2]= 99;}
           if(pos[2] == 0){ terrorist.setAttribute("src", "./m/" + to[2].toString() + ".png");}
           if(pos[2] == 1){ bull2.setAttribute("src", "./m/" + to[2].toString() + ".png");}
           if(pos[2] == 2){ bull3.setAttribute("src", "./m/" + to[2].toString() + ".png");}
           if(pos[2] == 3){ bull4.setAttribute("src", "./m/" + to[2].toString() + ".png");}
           if(pos[2] == 4){ bull5.setAttribute("src", "./m/" + to[2].toString() + ".png");}
           if(pos[2] == 5){ bull6.setAttribute("src", "./m/" + to[2].toString() + ".png");}
           if(pos[2] == 6){ bull7.setAttribute("src", "./m/" + to[2].toString() + ".png");}
           if(pos[2] == 7){ bull8.setAttribute("src", "./m/" + to[2].toString() + ".png");}
           if(pos[2] == 8){ bull9.setAttribute("src", "./m/" + to[2].toString() + ".png");}}
       
       }
       for (let i = 0; i  < 1; i++) {
       pos[3] = Math.floor(Math.random() * 9);
      
       
           for (let x = 0; x < 3; x++) {
           if(pos[x] == pos[3] ){i = -1; break;}
           }
       
           if(i == 0){
           
           if(s[2] < 3){to[3]= 99;}
           if(pos[3] == 0){ terrorist.setAttribute("src", "./m/" + to[3].toString() + ".png");}
           if(pos[3] == 1){ bull2.setAttribute("src", "./m/" + to[3].toString() + ".png");}
           if(pos[3] == 2){ bull3.setAttribute("src", "./m/" + to[3].toString() + ".png");}
           if(pos[3] == 3){ bull4.setAttribute("src", "./m/" + to[3].toString() + ".png");}
           if(pos[3] == 4){ bull5.setAttribute("src", "./m/" + to[3].toString() + ".png");}
           if(pos[3] == 5){ bull6.setAttribute("src", "./m/" + to[3].toString() + ".png");}
           if(pos[3] == 6){ bull7.setAttribute("src", "./m/" + to[3].toString() + ".png");}
           if(pos[3] == 7){ bull8.setAttribute("src", "./m/" + to[3].toString() + ".png");}
           if(pos[3] == 8){ bull9.setAttribute("src", "./m/" + to[3].toString() + ".png");}}
       
       }
       for (let i = 0; i  < 1; i++) {
       pos[4] = Math.floor(Math.random() * 9);
       
           for (let x = 0; x < 4; x++) {
           if(pos[x] == pos[4] ){i = -1; break;}
           }
           
          
           if(i == 0){
          
           if(s[3] < 3){to[4]= 99;}
           if(pos[4] == 0){ terrorist.setAttribute("src", "./m/" + to[4].toString() + ".png");}
           if(pos[4] == 1){ bull2.setAttribute("src", "./m/" + to[4].toString() + ".png");}
           if(pos[4] == 2){ bull3.setAttribute("src", "./m/" + to[4].toString() + ".png");}
           if(pos[4] == 3){ bull4.setAttribute("src", "./m/" + to[4].toString() + ".png");}
           if(pos[4] == 4){ bull5.setAttribute("src", "./m/" + to[4].toString() + ".png");}
           if(pos[4] == 5){ bull6.setAttribute("src", "./m/" + to[4].toString() + ".png");}
           if(pos[4] == 6){ bull7.setAttribute("src", "./m/" + to[4].toString() + ".png");}
           if(pos[4] == 7){ bull8.setAttribute("src", "./m/" + to[4].toString() + ".png");}
           if(pos[4] == 8){ bull9.setAttribute("src", "./m/" + to[4].toString() + ".png");}}
       
       }
       for (let i = 0; i  < 1; i++) {
       pos[5] = Math.floor(Math.random() * 9);   
     
           for (let x = 0; x < 5; x++) {
           if(pos[x] == pos[5] ){i = -1; break;}
           }

           if(i == 0){
           
           if(s[4] < 3){to[5]= 99;}
           if(pos[5] == 0){ terrorist.setAttribute("src", "./m/" + to[5].toString() + ".png");}
           if(pos[5] == 1){ bull2.setAttribute("src", "./m/" + to[5].toString() + ".png");}
           if(pos[5] == 2){ bull3.setAttribute("src", "./m/" + to[5].toString() + ".png");}
           if(pos[5] == 3){ bull4.setAttribute("src", "./m/" + to[5].toString() + ".png");}
           if(pos[5] == 4){ bull5.setAttribute("src", "./m/" + to[5].toString() + ".png");}
           if(pos[5] == 5){ bull6.setAttribute("src", "./m/" + to[5].toString() + ".png");}
           if(pos[5] == 6){ bull7.setAttribute("src", "./m/" + to[5].toString() + ".png");}
           if(pos[5] == 7){ bull8.setAttribute("src", "./m/" + to[5].toString() + ".png");}
           if(pos[5] == 8){ bull9.setAttribute("src", "./m/" + to[5].toString() + ".png");}}
       
       }

       for (let i = 0; i  < 1; i++) {
       pos[6] = Math.floor(Math.random() * 9);
       
       
           for (let x = 0; x < 6; x++) {
           if(pos[x] == pos[6] ){i = -1; break;}
           }

           if(i == 0){
           
           if(s[5] < 3){to[6]= 99;}
           if(pos[6] == 0){ terrorist.setAttribute("src", "./m/" + to[6].toString() + ".png");}
           if(pos[6] == 1){ bull2.setAttribute("src", "./m/" + to[6].toString() + ".png");}
           if(pos[6] == 2){ bull3.setAttribute("src", "./m/" + to[6].toString() + ".png");}
           if(pos[6] == 3){ bull4.setAttribute("src", "./m/" + to[6].toString() + ".png");}
           if(pos[6] == 4){ bull5.setAttribute("src", "./m/" + to[6].toString() + ".png");}
           if(pos[6] == 5){ bull6.setAttribute("src", "./m/" + to[6].toString() + ".png");}
           if(pos[6] == 6){ bull7.setAttribute("src", "./m/" + to[6].toString() + ".png");}
           if(pos[6] == 7){ bull8.setAttribute("src", "./m/" + to[6].toString() + ".png");}
           if(pos[6] == 8){ bull9.setAttribute("src", "./m/" + to[6].toString() + ".png");}}
       
       }

       for (let i = 0; i  < 1; i++) {
       pos[7] = Math.floor(Math.random() * 9);
      
           for (let x = 0; x < 7; x++) {
           if(pos[x] == pos[7] ){i = -1; break;}
           }

           if(i == 0){
          
           if(s[6] < 3){to[7]= 99;}
           if(pos[7] == 0){ terrorist.setAttribute("src", "./m/" + to[7].toString() + ".png"); }
           if(pos[7] == 1){ bull2.setAttribute("src", "./m/" + to[7].toString() + ".png");}
           if(pos[7] == 2){ bull3.setAttribute("src", "./m/" + to[7].toString() + ".png");}
           if(pos[7] == 3){ bull4.setAttribute("src", "./m/" + to[7].toString() + ".png");}
           if(pos[7] == 4){ bull5.setAttribute("src", "./m/" + to[7].toString() + ".png");}
           if(pos[7] == 5){ bull6.setAttribute("src", "./m/" + to[7].toString() + ".png");}
           if(pos[7] == 6){ bull7.setAttribute("src", "./m/" + to[7].toString() + ".png");}
           if(pos[7] == 7){ bull8.setAttribute("src", "./m/" + to[7].toString() + ".png");}
           if(pos[7] == 8){ bull9.setAttribute("src", "./m/" + to[7].toString() + ".png");}}
       
       }
       for (let i = 0; i  < 1; i++) {
       pos[8] = Math.floor(Math.random() * 9);
      
       
           
           for (let x = 0; x < 8; x++) {
           if(pos[x] == pos[8] ){i = -1; break;}
           }


           if(i == 0){
          
           if(s[7] < 3){to[8]= 99;}
           if(pos[8] == 0){ terrorist.setAttribute("src", "./m/" + to[8].toString() + ".png"); }
           if(pos[8] == 1){ bull2.setAttribute("src", "./m/" + to[8].toString() + ".png");}
           if(pos[8] == 2){ bull3.setAttribute("src", "./m/" + to[8].toString() + ".png");}
           if(pos[8] == 3){ bull4.setAttribute("src", "./m/" + to[8].toString() + ".png");}
           if(pos[8] == 4){ bull5.setAttribute("src", "./m/" + to[8].toString() + ".png");}
           if(pos[8] == 5){ bull6.setAttribute("src", "./m/" + to[8].toString() + ".png");}
           if(pos[8] == 6){ bull7.setAttribute("src", "./m/" + to[8].toString() + ".png");}
           if(pos[8] == 7){ bull8.setAttribute("src", "./m/" + to[8].toString() + ".png");}
           if(pos[8] == 8){ bull9.setAttribute("src", "./m/" + to[8].toString() + ".png");}}
           
       }
       bloodSpot.style.display = 'none';
    }
    
    
    if(go == 1){ 
    bloodSpot.style.display = 'none';
    
    
    //let myDiv = document.querySelector('div');
    //myDiv.style.backgroundImage = "url('better.png')";
    document.getElementById('a').style.backgroundImage="url('better.png')";
    if (!(window.matchMedia("(max-width: 768px)").matches)) {
        const imgContainer2 = document.getElementById("start0");
    imgContainer2.style.visibility = 'visible';
     }
     else{
        const imgContainer2 = document.getElementById("start0");
    imgContainer2.style.visibility = 'hidden';
     }
    
    
    
    terrorist.setAttribute("src", "./m/0-.png");
    bull2.setAttribute("src", "./m/0-.png");
    aim.setAttribute("src", "./m/0-.png");
    bull3.setAttribute("src", "./m/0-.png");
    bull4.setAttribute("src", "./m/0-.png");
    bull5.setAttribute("src", "./m/0-.png");
    bull6.setAttribute("src", "./m/0-.png");
    bull7.setAttribute("src", "./m/0-.png");
    bull8.setAttribute("src", "./m/0-.png");
    bull9.setAttribute("src", "./m/0-.png");
    newlabel.innerHTML = "";
    Kill.innerHTML = "";
    if(score > gscore){gscore = score}
    End.innerHTML = "<pre>" + "\u00A0" + "\u00A0"+ "\u00A0" + "   Score:  " + score + "\n" + "\n"  + " " + " " + " "+ " "+ " "+ " " + " " + "Highscore: " + gscore +"</pre>";
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    











   
},100);












    
    

    /*
    if(pos == 0){ terrorist.setAttribute("src", "./m/" + gol + ".png")}
    if(pos == 0){ bull2.setAttribute("src", "./m/" + gol + ".png")}
    if(pos == 0){ bull3.setAttribute("src", "./m/" + gol + ".png")}
    if(pos == 0){ bull4.setAttribute("src", "./m/" + gol + ".png")}
    if(pos == 0){ bull5.setAttribute("src", "./m/" + gol + ".png")}
    if(pos == 0){ bull6.setAttribute("src", "./m/" + gol + ".png")}
    if(pos == 0){ bull7.setAttribute("src", "./m/" + gol + ".png")}
    if(pos == 0){ bull8.setAttribute("src", "./m/" + gol + ".png")}
    if(pos == 0){ bull9.setAttribute("src", "./m/" + gol + ".png")} */









const start = document.querySelector(".container");

start.addEventListener("click", () => {
    
    
  
    containerX.appendChild(bull3);
    containerQ.appendChild(terrorist);
    containerY.appendChild(bull2);
    containerZ.appendChild(bull4);
    containerW.appendChild(bull5);
    containerV.appendChild(bull6);
    containerA.appendChild(bull7);
    containerB.appendChild(bull8);
    containerC.appendChild(bull9);
    if(x != 1){x = 1;}
    if(go == 1){t = 150; score = 0; speed = 1; End.innerHTML = ""; document.getElementById('a').style.backgroundImage="url('House_PS9.png')"; go = 0; Kill.innerHTML = "Target: ";  }
    else{document.getElementById('a').style.backgroundImage="url('House_PS9.png')";}
    
    //let myDivs = document.querySelector('div');
    //myDivs.style.backgroundImage = "url('House_PS9.png')";
    const imgContainer3 = document.getElementById("start0");
    imgContainer3.style.visibility = 'hidden';
    
    
    containerS.appendChild(aim);
    if(go == 0 || t < 0){
    containerR.appendChild(newlabel);
    containerP.appendChild(Kill);
    
    }
    containerD.appendChild(End);
    
    //container1.appendChild(brick);

    

    
    
    
}


);

//Mouse
const cursor= document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => { 
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px"; 
    
    }); 
const bloodSpot = document.querySelector(".bloodSpot")
const box = document.querySelector(".container")




window.addEventListener("click", function(event) {
// If user clicks inside the element, do nothing
if (event.target.closest(".container")){bloodSpot.style.display = 'inline'; }
else{

bloodSpot.style.display = "none";}

})

const boxs = document.querySelector(".container")

window.addEventListener("mousemove", function(event) {
// If user clicks inside the element, do nothing
if (event.target.closest(".container")){cursor.style.display = 'inline';  }
else{

cursor.style.display = "none";}

document.body.style.cursor = "auto";





// If user clicks outside the element, hide it!

})


let nobug = 0;

window.addEventListener("click", (e) =>{
console.log(e);

bloodSpot.style.display = "none";
    
bloodSpot.style.top = e.pageY + "px";
bloodSpot.style.left = e.pageX + "px";
    
nobug ++;


if(go == 1){nobug = 0;}
if(nobug == 0){bloodSpot.style.display = 'none';}

if(t < 147){

if(t < 0){go = 1;}
if(nobug > 0){
if(t > 0){
if(t > 0){
    if(e.target === terrorist){
        
        if(pos[0] == 0){
        score++;
        y1 = true;
        if(go == 0){t = 150 - (score);}
        bloodSpot.style.display = "inline";
        }

        if(pos[1] == 0 || pos[2] == 0 || pos[3] == 0 || pos[4] == 0 || pos[5] == 0 || pos[6] == 0 || pos[7] == 0 || pos[8] == 0  ){
        go = 1;
        t = 0;
        bloodSpot.style.display = "inline";
        if(pos[1] == 0 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 0 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 0 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 0 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 0 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 0 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 0 && to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 0 && to[8] == 99)bloodSpot.style.display = 'none';
        }
        
    } 

    if(e.target === bull2){
        
        if(pos[0] == 1){
        score++;
        y1 = true;
        if(go == 0){t = 150 - (score)};
        bloodSpot.style.display = "inline";
        }

        if( pos[1] == 1 || pos[2] == 1 || pos[3] == 1 || pos[4] == 1 || pos[5] == 1 || pos[6] == 1 || pos[7] == 1 || pos[8] == 1  ){
        go = 1;
        t = 0;
        bloodSpot.style.display = "inline";
        if(pos[1] == 1 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 1 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 1 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 1 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 1 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 1 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 1 && to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 1 && to[8] == 99)bloodSpot.style.display = 'none';
        }
       

    } 

    if(e.target === bull3){
        
        if(pos[0] == 2){
        score++;
        y1 = true;
        if(go == 0){t = 150 - (score);}
        bloodSpot.style.display = "inline";
        }

        if( pos[1] == 2 || pos[2] == 2 || pos[3] == 2 || pos[4] == 2 || pos[5] == 2 || pos[6] == 2 || pos[7] == 2 || pos[8] == 2  ){
        go = 1;
        bloodSpot.style.display = "inline";
        t = 0;
        if(pos[1] == 2 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 2 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 2 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 2 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 2 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 2 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 2 && to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 2 && to[8] == 99)bloodSpot.style.display = 'none';
        }
       

    } 

    if(e.target === bull4){
       
        if(pos[0] == 3){
        score++;
        y1 = true;
        bloodSpot.style.display = "inline";
        if(go == 0){t = 150 - (score );}
        }

        if( pos[1] == 3 || pos[2] == 3 || pos[3] == 3 || pos[4] == 3 || pos[5] == 3 || pos[6] == 3 || pos[7] == 3 || pos[8] == 3  ){
        go = 1;
        t = 0;
        bloodSpot.style.display = "inline";
        if(pos[1] == 3 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 3 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 3 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 3 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 3 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 3 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 3 && to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 3 && to[8] == 99)bloodSpot.style.display = 'none';
        }
        

    }
    
    if(e.target === bull5){
       
        if(pos[0] == 4){
        score++;
        y1 = true;
        bloodSpot.style.display = "inline";
        if(go == 0){t = 150 - (score);}
        }

        if( pos[1] == 4 || pos[2] == 4 || pos[3] == 4 || pos[4] == 4 || pos[5] == 4 || pos[6] == 4 || pos[7] == 4 || pos[8] == 4  ){
        go = 1;
        t = 0;
        bloodSpot.style.display = "inline";
        if(pos[1] == 4 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 4 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 4 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 4 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 4 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 4 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 4 && to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 4 && to[8] == 99)bloodSpot.style.display = 'none';
        }
         

    }

    if(e.target === bull6){
       
        if(pos[0] == 5){
        score++;
        y1 = true;
        bloodSpot.style.display = "inline";
        if(go == 0){t = 150 - (score);}
        }

        if( pos[1] == 5 || pos[2] == 5 || pos[3] == 5 || pos[4] == 5 || pos[5] == 5 || pos[6] == 5 || pos[7] == 5 || pos[8] == 5  ){
        go = 1;
        t = 0;
        bloodSpot.style.display = "inline";
        if(pos[1] == 5 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 5 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 5 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 5 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 5 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 5 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 5 && to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 5 && to[8] == 99)bloodSpot.style.display = 'none';
        
        }
        

    }

    if(e.target === bull7){
       
        if(pos[0] == 6){
        score++;
        y1 = true;
        bloodSpot.style.display = "inline";
        if(go == 0){t = 150 - (score);}
        }
        bloodSpot.style.display = 'inline';
        if( pos[1] == 6 || pos[2] == 6 || pos[3] == 6 || pos[4] == 6 || pos[5] == 6 || pos[6] == 6 || pos[7] == 6 || pos[8] == 6  ){
        go = 1;
        t = 0;
        bloodSpot.style.display = "inline";
        if(pos[1] == 6 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 6 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 6 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 6 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 6 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 6 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 6&& to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 6 && to[8] == 99)bloodSpot.style.display = 'none';
        
        }


        

    }
    if(e.target === bull8){
        
        if(pos[0] == 7){
        score++;
        bloodSpot.style.display = "inline";
        y1 = true;
        if(go == 0){t = 150 - (score );}
        }

        if( pos[1] == 7 || pos[2] == 7 || pos[3] == 7 || pos[4] == 7 || pos[5] == 7 || pos[6] == 7 || pos[7] == 7 || pos[8] == 7  ){
        go = 1;
        t = 0;
        bloodSpot.style.display = "inline";
        if(pos[1] == 7 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 7 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 7 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 7 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 7 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 7 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 7 && to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 7 && to[8] == 99)bloodSpot.style.display = 'none';
        
        }


        

    }

    if(e.target === bull9){
       
        if(pos[0] == 8 ){
        score++;
        y1 = true;
        bloodSpot.style.display = "inline";
        if(go == 0){t = 150 - (score );}
        }

        if( pos[1] == 8 || pos[2] == 8 || pos[3] == 8 || pos[4] == 8 || pos[5] == 8 || pos[6] == 8 || pos[7] == 8 || pos[8] == 8  ){
        go = 1;
        t = 0;
        bloodSpot.style.display = "inline";
        if(pos[1] == 8 && to[1] == 99)bloodSpot.style.display = 'none';
        if(pos[2] == 8 && to[2] == 99)bloodSpot.style.display = 'none';
        if(pos[3] == 8 && to[3] == 99)bloodSpot.style.display = 'none';
        if(pos[4] == 8 && to[4] == 99)bloodSpot.style.display = 'none';
        if(pos[5] == 8 && to[5] == 99)bloodSpot.style.display = 'none';
        if(pos[6] == 8 && to[6] == 99)bloodSpot.style.display = 'none';
        if(pos[7] == 8 && to[7] == 99)bloodSpot.style.display = 'none';
        if(pos[8] == 8 && to[8] == 99)bloodSpot.style.display = 'none';
        
        
        }


        

    }
    

}
}
}
}

});
