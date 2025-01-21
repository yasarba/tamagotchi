let honger = 55;
let slaap = 40;
let plezier = 60;
let message;

const hongerElement = document.getElementById("honger");
const slaapElement = document.getElementById("slaap");
const plezierElement = document.getElementById("plezier");


function eten() {
    if (honger < 100) {
        honger += 10;
        if (honger > 100) honger = 100; 
        hongerElement.innerText = `${honger}%`;
    }
}


function slapen() {
    if (slaap < 100) {
        slaap += 10; //
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


setInterval(function() {
   
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
        let message ="";
        
    if (honger < 50) {
        document.getElementById("message").innerText = "lol";

    }

    }

    
   
    // document.getElementById("statistieken").innerText = 
    //     `Honger - ${honger}% | Slaap - ${slaap}% | verhoog_plezier - ${plezier}%`;

}, 1000); 

