
function A(){
    return Math.floor(Math.random()*6)+1
    
}


document.getElementById("PART1").addEventListener("click",(e)=>{
        
    CHECKHIT(e.target.id)}
    )
document.getElementById("PART2").addEventListener("click",(e)=>{CHECKHIT(e.target.id)})
document.getElementById("PART3").addEventListener("click",(e)=>{CHECKHIT(e.target.id)})
document.getElementById("PART4").addEventListener("click",(e)=>{CHECKHIT(e.target.id)})
document.getElementById("PART5").addEventListener("click",(e)=>{CHECKHIT(e.target.id)})
document.getElementById("PART6").addEventListener("click",(e)=>{CHECKHIT(e.target.id)})






var MOLE = 0;  





setInterval(() => {
    REMOVEALL();  
    document.getElementById("PART"+A()).className = "MOLE";  
}, 1000);



function CHECKHIT(NAME){
    
if(document.getElementById(NAME).className == "MOLE"){
MOLE++;  
REMOVEALL();  
}else if(MOLE != 0){
MOLE--;  
}
document.getElementById("SCORE").innerHTML = "SCORE: "+MOLE;  
}

function REMOVEALL(){
    
    for(let i =1;i<7;i++){
        document.getElementById("PART"+i).className = "NOMOLE"  
    }
}






