const ver = document.getElementById('ver');
const solutia = document.getElementById('solutie');
const crct = document.getElementById('crct')
const vd = document.getElementById('vd')


function checkSolutie() {
    if (!solutia.value) return;
    if (solutia.value.toLowerCase() === "cacat futuva-n gura de hoti" || solutia.value.toLowerCase() ===  "cacat") {
        crct.innerHTML = "Corect! Esti destept!"
        crct.style.color = "rgba(0,255,0,75)"
        
        let sol =  document.createElement('source');
        sol.src = "sol.mp4"
        sol.type = "video/mp4"
        sol.id = "solutie1";
        vd.loop = true;
        vd.appendChild(sol);
        console.log(sol)
    } else {
        crct.innerHTML = "Gresit, mai incearca!"
        crct.style.color = "rgba(255,0,0,75)"
    }
}

solutia.addEventListener('input', () => {
    checkSolutie()
})
async function rChild(element, child) {
    await element.removeChild(child)
}
