$(document).foundation()

$(document).ready(function () {

    // Player Stats: banter/
    var players = [
        statsTorres = [40, 65, 80, 40, 35, 70, 'Fernando Torres', "resources/images/torres.jpg"],
        statsGerrard = [25, 90, 90, 70, 95, 55, 'Steven Gerrard', "resources/images/gerrrard.jpg"],
        statsLampard = [55, 87, 90, 75, 90, 50, 'Frank Lampard', "resources/images/lampard.jpg"],
        statsBullard = [90, 40, 60, 60, 50, 75, 'Jimmy Bullard', "resources/images/jimmy.jpg"],
        statsToure = [65, 70, 80, 72, 60, 30, 'Yaya Toure', "resources/images/yaya.jpg"],
        statsLuiz = [80, 40, 50, 80, 40, 25, 'David Luiz', "resources/images/luiz.jpg"],
        statsHenry = [65, 70, 95, 82, 80, 85, 'Thiery Henry', "resources/images/henry.jpg"],
        statsOwen = [20, 45, 85, 65, 50, 75, 'Michael Owen', "resources/images/owen.jpg"],
        statsMilner = [85, 78, 75, 78, 87, 20, 'James Milner', "resources/images/milner.jpg"]
    ];


// function that picks a new card

var newCardRight = function() {
    var no = Math.floor(Math.random() * 10);

    if (no === 1) {
        player = statsTorres
    } else if (no === 2) {
        player = statsGerrard
    } else if (no === 3) {
        player = statsLampard
    } else if (no === 4) {
        player = statsBullard
    } else if (no === 5) {
        player = statsToure
    } else if (no === 6) {
        player = statsLuiz
    } else if (no === 7) {
        player = statsHenry
    } else if (no === 8) {
        player = statsOwen
    } else {
        player = statsMilner
    };

    console.log(player);

    //display a player's stats on the card

    document.querySelector('.trump-card-right .cp-stat').textContent = player[0];
    document.querySelector('.trump-card-right .l-stat').textContent = player[1];
    document.querySelector('.trump-card-right .bgi-stat').textContent = player[2];
    document.querySelector('.trump-card-right .wfa-stat').textContent = player[3];
    document.querySelector('.trump-card-right .cl-stat').textContent = player[4];
    document.querySelector('.trump-card-right .sa-stat').textContent = player[5];
    document.querySelector('.trump-card-right .player-name').textContent = player[6];

    ilonaKepRight();

}
var newCardLeft = function() {
    var no = Math.floor(Math.random() * 10);

    if (no === 1) {
        player = statsTorres
    } else if (no === 2) {
        player = statsGerrard
    } else if (no === 3) {
        player = statsLampard
    } else if (no === 4) {
        player = statsBullard
    } else if (no === 5) {
        player = statsToure
    } else if (no === 6) {
        player = statsLuiz
    } else if (no === 7) {
        player = statsHenry
    } else if (no === 8) {
        player = statsOwen
    } else {
        player = statsMilner
    };

    console.log(player);

    //display a player's stats on the card

    document.querySelector('.trump-card-left .cp-stat').textContent = player[0];
    document.querySelector('.trump-card-left .l-stat').textContent = player[1];
    document.querySelector('.trump-card-left .bgi-stat').textContent = player[2];
    document.querySelector('.trump-card-left .wfa-stat').textContent = player[3];
    document.querySelector('.trump-card-left .cl-stat').textContent = player[4];
    document.querySelector('.trump-card-left .sa-stat').textContent = player[5];
    document.querySelector('.trump-card-left .player-name').textContent = player[6];

    ilonaKepLeft();

}

document.querySelector('.new-card').addEventListener('click', newCardLeft);
document.querySelector('.new-card').addEventListener('click', newCardRight);

function ilonaKepRight() {
    // var frame = document.querySelector('.frame');
    // var ilona = document.createElement("IMG");
    // ilona.src = player[7];
    // frame.appendChild(ilona);
    document.getElementById("trump-image-right").src = player[7];
  }

  



function ilonaKepLeft() {
    // var frame = document.querySelector('.frame');
    // var ilona = document.createElement("IMG");
    // ilona.src = player[7];
    // frame.appendChild(ilona);
    document.getElementById("trump-image-left").src = player[7];
  }

  

});

