//100 accustions
///when an accusatino is clicked, alert will appear taht shoes the full text of accusation
//make sure to close!
//only var, not let/const


var friends = ["Dylan", "Jaala", "Ainsley", "Grape", "Alex"];
var locations = ["bedroom", "bathroom", "ballroom", "library", "kitchen", "study", "lounge", "basement", "hall", "attic"];
var weapons = ["knife", "sword", "dagger", "spear", "crossbow", "axe", "mace", "candlestick", "revolver", "lead pipe", "rope", "wrench", "poison",
    "bat", "lawn gnome", "shears", "hammer", "car", "tennis racket", "bad news"];


// function frog(iNumber) {
//     // var choiceNumber = Math.floor(Math.random() * 20);
//     return (`I accuse ${friends[iNumber % 5]} with the ${weapons[iNumber % 5]} in the ${locations[iNumber % 5]}`)
// }


for (var i = 0; i < 100; i++) {
    // var alertText = makeAlert(i);
    var h3 = document.createElement("h3");
    h3.textContent = "Accusation " + (i + 1);
    (function(i){
        h3.addEventListener("click", function() {
            alert(`I accuse ${friends[i % 5]} with the ${weapons[i % 5]} in the ${locations[i % 5]}`)
        })
    })(i)

    document.body.appendChild(h3);
}
