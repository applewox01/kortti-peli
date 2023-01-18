let yritykset = 4;
let korttitaulukko = ["Y","X","M","X","O","X","&hearts;"];

let yritykset_text = document.getElementById("yritykset");
let viesti = document.getElementById("viesti");
let peli = document.getElementById("peli");
let uudelleen = document.getElementById("restart");

uudelleen.hidden = true;
peli.hidden = true;


//aloita peli
function aloita(hankaluus) {
    korttitaulukko.sort(function(a, b){return 0.5 - Math.random()});
    yritykset = hankaluus;
    peli.hidden = false;
    document.getElementById("hankaluus").hidden = true;
    yritykset_text.innerHTML = `Yrityksiä jäljellä: ${yritykset}`;

    //kloonaa kaikki kortit gridiin 'templaten' perusteella
    for(let i = 2; i <= korttitaulukko.length; i++) {
        let temp = document.getElementById("kortti1");
        let clone = temp.cloneNode(true);
        clone.id = `kortti${i}`;
        clone.class = "kortti";
        clone.setAttribute("data-id", i); 
        document.getElementById("kortit").appendChild(clone);
    };

    //lisää ne eventti hommelit kortteihin
document.querySelectorAll(".kortti").forEach(function(kortti) {
 kortti.addEventListener("click", kaanna);
});
};

function kaanna(klikkaus) {
 let kortti = klikkaus.target;
 let index = kortti.getAttribute("data-id") - 1;
 kortti.innerHTML = korttitaulukko[index];
 kortti.style.backgroundImage = "url(texture2.PNG)";
 kortti.removeEventListener("click", kaanna);

 if (korttitaulukko[index] == "&hearts;" ) {
    viesti.innerHTML = "Voitto!";
    uudelleen.hidden = false;
    document.querySelectorAll(".kortti").forEach(function(kortti) {
        kortti.removeEventListener("click", kaanna);
       });
 }
 else {
    yritykset -= 1;
    yritykset_text.innerHTML = `Yrityksiä jäljellä: ${yritykset}`;
    if (yritykset == 0) {
        viesti.innerHTML = "Hävisit!";
        uudelleen.hidden = false;
        document.querySelectorAll(".kortti").forEach(function(kortti) {
            kortti.removeEventListener("click", kaanna);
           });
    }
 }
};

function restart() {

}


