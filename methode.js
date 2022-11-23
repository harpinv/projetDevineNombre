let p = Math.trunc(Math.random() * 100 + 1);
console.log(p);

let entrer = document.getElementById('entrer');
let result = document.getElementById('result');
let element = document. querySelector('ul');
let t = 0;


entrer.addEventListener("click", function () {
    let num = parseInt(document.getElementById('num').value);
    console.log(num);
    if (num === p) {
        let tap = document.createElement('li');
        tap.innerText = "Vous avez gagné la partie, le résultat est " + p;
        tap.style.color = "yellow";
        element.append(tap);
        t = t + 1;
    } else {
        if (t > 8) {
            let mic = document.createElement('li');
            mic.innerText = "éssaie numéro " + (t + 1) + " : " + num;
            mic.style.color = "green"
            element.append(mic);
            let toc = document.createElement('li');
            toc.innerText = "Vous avez perdue la partie";
            toc.style.color = "red"
            element.append(toc);
        } else {
            if(num > p) {
               let loc = document.createElement('li');
               loc.innerText = "éssaie numéro " + (t + 1) + " : " + num + ", réponse moins";
               loc.style.color = "green"
               element.append(loc);
               t = t + 1;
            } else {
                let voc = document.createElement('li');
                voc.innerText = "éssaie numéro " + (t + 1) + " : " + num + ", réponse plus";
                voc.style.color = "green"
                element.append(voc);
                t = t + 1;
            }
        }
    }
    console.log(t);
})


result.addEventListener("click", function () {
    t = 0;
    let liste = document.getElementsByTagName('li');
    console.log(liste);

    for(let i = 0; i < liste.length; i++) {
        liste[i].remove();
    }
})
