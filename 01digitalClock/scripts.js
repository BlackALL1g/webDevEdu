const hsE1 = document.getElementById("hours");
const msE1 = document.getElementById("minutes");
const ssE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateCLock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h> 12){
        h = h - 12 ;
        ampm ="PM"; 
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hsE1.innerText = h;
    msE1.innerText = m;
    ssE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(()=>{
        updateCLock()
    }, 1000) 
}

updateCLock()
