$(document).foundation()

$(document).ready(function () {


$('.trump-card-right').addClass("hide-button"); 
$('.trump-card-left').addClass("hide-button"); 
$('.side-a').addClass("hide-button"); 

    const coinFlip = () => {
        const flipResult = Math.random();
        $('.trump-card-right').removeClass("hide-button");
        $('.trump-card-left').removeClass("hide-button");
        $('.side-a').removeClass("hide-button");
        $('.new-card').addClass("hide-button");
        let activePlayer;
        document.querySelector('.trump-card-right .card-count-right').textContent= 'Cards Remaining: ' + rightDeck.length;
        document.querySelector('.trump-card-left .card-count-left').textContent= 'Cards Remaining: ' + leftDeck.length ;
        $('#coin').removeClass();
        $('.trump-card-left').removeClass('active-player','inactive-player');
        $('.trump-card-right').removeClass('active-player','inactive-player');
        setTimeout(function(){
          if(flipResult <= 0.5){
            $('#coin').addClass('heads');
            activePlayer = leftDeck;
            console.log('left player active', activePlayer);
            $('.trump-card-left').addClass('active-player');
            $('.trump-card-right').addClass('inactive-player');
          }
          else{
            $('#coin').addClass('tails');
            activePlayer = rightDeck;
            console.log('right player active', activePlayer);
            $('.trump-card-right').addClass('active-player');
            $('.trump-card-left').addClass('inactive-player');
          }
        }, 100);



    };


        
    const playersObject = {
        torres: {
            displayName: 'Torres',
            name: 'torres',
            image: 'resources/images/torres.jpg',
            comedicPresence: 40,
            leadership: 65,
            bigGameImpact: 80,
            weakFootAbility: 40,
            clubLoyalty: 35,
            sexAppeal: 70,
            cool: true
        },
        luiz: {
            displayName: 'Luiz',
            name: 'luiz',
            image: 'resources/images/luiz.jpg',
            comedicPresence: 80,
            leadership: 40,
            bigGameImpact: 50,
            weakFootAbility: 80,
            clubLoyalty: 40,
            sexAppeal: 25
        },
        henry: {
            displayName: 'Henry',
            name: 'henry',
            image: 'resources/images/henry.jpg',
            comedicPresence: 65,
            leadership: 70,
            bigGameImpact: 95,
            weakFootAbility: 82,
            clubLoyalty: 80,
            sexAppeal: 85
        },
        gerrard: {
            displayName: 'Gerrard',
            name: 'gerrard',
            image: 'resources/images/gerrrard.jpg',
            comedicPresence: 25,
            leadership: 90,
            bigGameImpact: 90,
            weakFootAbility: 70,
            clubLoyalty: 95,
            sexAppeal: 55
        },
        lampard: {
            displayName: 'Lampard',
            name: 'lampard',
            image: 'resources/images/lampard.jpg',
            comedicPresence: 55,
            leadership: 87,
            bigGameImpact: 90,
            weakFootAbility: 75,
            clubLoyalty: 90,
            sexAppeal: 50
        },   
        bullard: {
            displayName: 'Bullard',
            name: 'bullard',
            image: 'resources/images/jimmy.jpg',
            comedicPresence: 90,
            leadership: 40,
            bigGameImpact: 60,
            weakFootAbility: 60,
            clubLoyalty: 50,
            sexAppeal: 60
        },   
        toure: {
            name: 'toure',
            displayName: 'Toure',
            image: 'resources/images/yaya.jpg',
            comedicPresence: 65,
            leadership: 70,
            bigGameImpact: 80,
            weakFootAbility: 72,
            clubLoyalty: 60,
            sexAppeal: 30
        },  
        owen: {
            name: 'owen',
            displayName: 'Owen',
            image: 'resources/images/owen.jpg',
            comedicPresence: 20,
            leadership: 45,
            bigGameImpact: 85,
            weakFootAbility: 65,
            clubLoyalty: 50,
            sexAppeal: 75
        },  
        milner: {
            name: 'milner',
            displayName: 'Milner',
            image: 'resources/images/milner.jpg',
            comedicPresence: 85,
            leadership: 78,
            bigGameImpact: 75,
            weakFootAbility: 78,
            clubLoyalty: 87,
            sexAppeal: 20
        },
        salah: {
            displayName: 'Salah',
            name: 'salah',
            image: 'resources/images/salah.jpg',
            comedicPresence: 70,
            leadership: 65,
            bigGameImpact: 90,
            weakFootAbility: 40,
            clubLoyalty: 80,
            sexAppeal: 67
        },
        beckham: {
            displayName: 'Beckham',
            name: 'beckham',
            image: 'resources/images/beckham.jpg',
            comedicPresence: 18,
            leadership: 75,
            bigGameImpact: 92,
            weakFootAbility: 37,
            clubLoyalty: 40,
            sexAppeal: 90

        },
        neymar: {
            displayName: 'Neymar',
            name: 'neymar',
            image: 'resources/images/neymar.jpg',
            comedicPresence: 30,
            leadership: 18,
            bigGameImpact: 77,
            weakFootAbility: 70,
            clubLoyalty: 18,
            sexAppeal: 82

        },



    };


    // define shuffle function
    const shuffle = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // get all the unique players
    const playerKeys = Object.keys(playersObject); //['torres', 'luiz', 'henry', 'gerrard' etc]

    //shuffle array
    const shuffledArray = shuffle(playerKeys); // [-, -, -, -]

    // split into 2 equal arrays
    const shuffledArrayLength = shuffledArray.length; // 4
    const midpoint = shuffledArrayLength / 2; // 2

    let leftDeck = shuffledArray.splice(0, midpoint); // [2, 3]

    let rightDeck = shuffledArray; // [0, 1]


    // shuffledArray.splice((shuffledArray.length)/2, )

    // const playersObjectLength = playersObject.length;

    console.log(leftDeck, rightDeck);

// So now we have our two decks, we want to display the top card of each deck only.

const newCardRight = () => {
    let topCardRight =  playersObject[rightDeck[0]];
    document.querySelector('.trump-card-right .cp-stat').textContent = topCardRight.comedicPresence;
    document.querySelector('.trump-card-right .l-stat').textContent = topCardRight.leadership;
    document.querySelector('.trump-card-right .bgi-stat').textContent = topCardRight.bigGameImpact;
    document.querySelector('.trump-card-right .wfa-stat').textContent = topCardRight.weakFootAbility;
    document.querySelector('.trump-card-right .cl-stat').textContent = topCardRight.clubLoyalty;
    document.querySelector('.trump-card-right .sa-stat').textContent = topCardRight.sexAppeal;
    document.querySelector('.trump-card-right .player-name').textContent = topCardRight.displayName;
    document.getElementById("trump-image-right").src = topCardRight.image;
};

const newCardLeft = () => {
let topCardLeft = playersObject[leftDeck[0]];
    document.querySelector('.trump-card-left .cp-stat').textContent = topCardLeft.comedicPresence;
    document.querySelector('.trump-card-left .l-stat').textContent = topCardLeft.leadership;
    document.querySelector('.trump-card-left .bgi-stat').textContent = topCardLeft.bigGameImpact;
    document.querySelector('.trump-card-left .wfa-stat').textContent = topCardLeft.weakFootAbility;
    document.querySelector('.trump-card-left .cl-stat').textContent = topCardLeft.clubLoyalty;
    document.querySelector('.trump-card-left .sa-stat').textContent = topCardLeft.sexAppeal;
    document.querySelector('.trump-card-left .player-name').textContent = topCardLeft.displayName;
    document.getElementById("trump-image-left").src = topCardLeft.image;
};





// new game function 

const newGame = () => {

newCardLeft();
newCardRight();
coinFlip();


};



document.querySelector('.new-card').addEventListener('click', newGame);






//the curser hover effect.
$('.stat-div').hover(function(){
    $(this).css("color", "white");
    }, function(){
    $(this).css("color", "");
  });






$('.stat-div').click(function(){


    
var statClass = $(this).find('h6').attr('class');


const statContainerRight = document.querySelector('.trump-card-right .' + statClass);
const statContainerLeft = document.querySelector('.trump-card-left .' + statClass);


    const statLeft =statContainerLeft.textContent;
    const statRight =statContainerRight.textContent;
    console.log(statLeft, statRight);



    if (statLeft > statRight) {
        alert(leftDeck[0] + ' wins!');
        // remove the losing card (top card) from the right deck and add it to the left deck 
        leftDeck.splice(leftDeck.length, 0, rightDeck[0]);
        rightDeck = rightDeck.slice(1);
        leftDeck.push(leftDeck.shift());
        console.log(leftDeck, rightDeck);
        activePlayer = leftDeck; // this just shows which arrays turn it is
        document.querySelector('.trump-card-right .card-count-right').textContent= 'Cards Remaining: ' + rightDeck.length;
        document.querySelector('.trump-card-left .card-count-left').textContent= 'Cards Remaining: ' + leftDeck.length ; 
        $('.trump-card-left').addClass('active-player');
        $('.trump-card-left').removeClass('inactive-player');
        $('.trump-card-right').addClass('inactive-player');
        $('.trump-card-right').removeClass('active-player');
        $('#coin').addClass('side-a');
        $('#coin').removeClass('side-b');


    } else if (statRight > statLeft) {
        alert (rightDeck[0] + ' wins!');
        rightDeck.splice(rightDeck.length, 0, leftDeck[0]);
        leftDeck = leftDeck.slice(1);
        rightDeck.push(rightDeck.shift());
        console.log(leftDeck, rightDeck);
        activePlayer = rightDeck;
        document.querySelector('.trump-card-right .card-count-right').textContent= 'Cards Remaining: ' + rightDeck.length;
        document.querySelector('.trump-card-left .card-count-left').textContent= 'Cards Remaining: ' + leftDeck.length ;
        $('.trump-card-right').addClass('active-player');
        $('.trump-card-right').removeClass('inactive-player');
        $('.trump-card-left').addClass('inactive-player');
        $('.trump-card-left').removeClass('active-player');
        $('#coin').addClass('side-b');
        $('#coin').removeClass('side-a');

    } else {
        alert('Oooo draw');
        rightDeck.push(rightDeck[0]);
        rightDeck.shift(); 
        leftDeck.push(leftDeck[0]);
        leftDeck.shift();
        console.log(leftDeck, rightDeck);
    };


const endGame = (player) => {
    alert(`${player} wins the game!`);
    $('.trump-card-right').addClass("hide-button"); 
    $('.trump-card-left').addClass("hide-button"); 
    $('.side-a').addClass("hide-button"); 
    $('.new-card').addClass("hide-button");


}    

if (rightDeck.length === 0) {
        endGame('Player 1')
    } else if (leftDeck.length === 0) {
        endGame('Player 2')
    } else {
        newCardRight();
        newCardLeft();
    };   





});









});

