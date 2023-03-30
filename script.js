
var first = ["gay", "lady", "lord", "lil", "epic", "toxic", "hot pink", "dong", "stinky", "twinkie", "twunk", "weiner", "circumsized"];

var second = ["lord", "labia", "queef", "dick", "clit", "cunt", "smegma", "munch", "slay", "pig", "dong", "uncircumsized", "pits", "twink", "dong", "peg", "weiner"];

function gay(x) {
    "use strict";
    var isGay = x;
    if (isGay === true) {
        document.getElementById('hidden').style.cssText = "display:block;";
        document.getElementById('shown').style.cssText = "display:none;";
    } else {
        location.replace("../notgay.html");
    }
}

function gayWords() {
    "use strict";
    var firstGayWord = first[Math.floor(Math.random() * first.length)];
    var secondGay = second[Math.floor(Math.random() * second.length)];

    if (firstGayWord === secondGay) {
        secondGay = second[Math.floor(Math.random() * second.length)];
    } else if (firstGayWord === "dong" && secondGay === "uncircumsized"){
        firstGayWord = "uncircumsized";
        secondGay = "dong";
    } 

    document.getElementById('shart').innerText = "Your username is: ";
    document.getElementById('fart').innerText = "\"" + firstGayWord + " " + secondGay + "\"";
}

function clearWords() {
    "use strict";
    document.getElementById('shart').innerText = "";
    document.getElementById('fart').innerText = "";
}