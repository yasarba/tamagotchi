let honger = 60;
let slaap = 40;
let plezier = 35;
let message = "";

const hongerElement = document.getElementById("honger");
const slaapElement = document.getElementById("slaap");
const plezierElement = document.getElementById("plezier");
const obitoImage = document.getElementById("obito-image");

function eten() {
    if (honger < 100) {
        honger += 10;
        if (honger > 100) honger = 100; 
        hongerElement.innerText = `${honger}%`;
    }
}

function slapen() {
    if (slaap < 100) {
        slaap += 10;
        if (slaap > 100) slaap = 100; 
        slaapElement.innerText = `${slaap}%`; 
    }
}

function verhoog_plezier() {
    if (plezier < 100) {
        plezier += 10; 
        if (plezier > 100) plezier = 100; 
        plezierElement.innerText = `${plezier}%`;
    }
}

let isDead = false;  

setInterval(function() {
   
    if (isDead) {
        return;
    }

    if (honger > 0) {
        honger -= 1;
        hongerElement.innerText = `${honger}%`;
    }

    if (slaap > 0) {
        slaap -= 1;
        slaapElement.innerText = `${slaap}%`;
    }

    if (plezier > 0) {
        plezier -= 1;
        plezierElement.innerText = `${plezier}%`;
    }

    if (honger < 50 && slaap > 20 && plezier > 20) {
        message = "ik heb honger";
        obitoImage.src = "hungry_panda.png"; 
    }
    
    if (slaap < 20) {
        message = "ik heb slaap";
        obitoImage.src = "sleepy_panda.png";
    }
    if (plezier < 10) {
        message = "ik wil spelen";
        obitoImage.src = "happy_panda.png"; 
    } 
    
  
    if (honger === 0 && slaap === 0 && plezier === 0) {
        message = "De panda is dood...";
        obitoImage.src = "dead_panda.png";  
        isDead = true;  
    }

    document.getElementById("message").innerText = message;

}, 1000);

