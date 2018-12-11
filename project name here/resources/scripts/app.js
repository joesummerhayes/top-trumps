$(document).foundation()

$(document).ready(function () {

        
    const playersObject = {
        torres: {
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
            name: 'Luiz',
            image: 'resources/images/luiz.jpg',
            comedicPresence: 80,
            leadership: 40,
            bigGameImpact: 50,
            weakFootAbility: 80,
            clubLoyalty: 40,
            sexAppeal: 25
        },
        henry: {
            name: 'Henry',
            image: 'resources/images/henry.jpg',
            comedicPresence: 65,
            leadership: 70,
            bigGameImpact: 95,
            weakFootAbility: 82,
            clubLoyalty: 80,
            sexAppeal: 85
        },
        gerrard: {
            name: 'Gerrard',
            image: 'resources/images/gerrrard.jpg',
            comedicPresence: 25,
            leadership: 90,
            bigGameImpact: 90,
            weakFootAbility: 70,
            clubLoyalty: 95,
            sexAppeal: 55
        },
        lampard: {
            name: 'Lampard',
            image: 'resources/images/lampard.jpg',
            comedicPresence: 55,
            leadership: 87,
            bigGameImpact: 90,
            weakFootAbility: 75,
            clubLoyalty: 90,
            sexAppeal: 50
        },   
        bullard: {
            name: 'Bullard',
            image: 'resources/images/jimmy.jpg',
            comedicPresence: 90,
            leadership: 40,
            bigGameImpact: 60,
            weakFootAbility: 60,
            clubLoyalty: 50,
            sexAppeal: 60
        },   
        toure: {
            name: 'Toure',
            image: 'resources/images/yaya.jpg',
            comedicPresence: 65,
            leadership: 70,
            bigGameImpact: 80,
            weakFootAbility: 72,
            clubLoyalty: 60,
            sexAppeal: 30
        },  
        owen: {
            name: 'Owen',
            image: 'resources/images/owen.jpg',
            comedicPresence: 20,
            leadership: 45,
            bigGameImpact: 85,
            weakFootAbility: 65,
            clubLoyalty: 50,
            sexAppeal: 75
        },  
        milner: {
            name: 'Milner',
            image: 'resources/images/milner.jpg',
            comedicPresence: 85,
            leadership: 78,
            bigGameImpact: 75,
            weakFootAbility: 78,
            clubLoyalty: 87,
            sexAppeal: 20
        },
        salah: {
            name: 'Salah',
            image: 'resources/images/salah.jpg',
            comedicPresence: 70,
            leadership: 65,
            bigGameImpact: 87,
            weakFootAbility: 40,
            clubLoyalty: 80,
            sexAppeal: 67
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

    const leftDeck = shuffledArray.splice(0, midpoint); // [2, 3]

    const rightDeck = shuffledArray; // [0, 1]


    // shuffledArray.splice((shuffledArray.length)/2, )

    // const playersObjectLength = playersObject.length;

    console.log(leftDeck, rightDeck);

// So now we have our two decks, we want to display the top card of each deck only.

const topCardRight =  playersObject[rightDeck[0]];
const topCardLeft = playersObject[leftDeck[0]];


// function that picks a new card
const newNewCardRight = () => {

    document.querySelector('.trump-card-right .cp-stat').textContent = topCardRight.comedicPresence;
    document.querySelector('.trump-card-right .l-stat').textContent = topCardRight.leadership;
    document.querySelector('.trump-card-right .bgi-stat').textContent = topCardRight.bigGameImpact;
    document.querySelector('.trump-card-right .wfa-stat').textContent = topCardRight.weakFootAbility;
    document.querySelector('.trump-card-right .cl-stat').textContent = topCardRight.clubLoyalty;
    document.querySelector('.trump-card-right .sa-stat').textContent = topCardRight.sexAppeal;
    document.querySelector('.trump-card-right .player-name').textContent = topCardRight.name;
    document.getElementById("trump-image-right").src = topCardRight.image;
};

const newNewCardLeft = () => {
    document.querySelector('.trump-card-left .cp-stat').textContent = topCardLeft.comedicPresence;
    document.querySelector('.trump-card-left .l-stat').textContent = topCardLeft.leadership;
    document.querySelector('.trump-card-left .bgi-stat').textContent = topCardLeft.bigGameImpact;
    document.querySelector('.trump-card-left .wfa-stat').textContent = topCardLeft.weakFootAbility;
    document.querySelector('.trump-card-left .cl-stat').textContent = topCardLeft.clubLoyalty;
    document.querySelector('.trump-card-left .sa-stat').textContent = topCardLeft.sexAppeal;
    document.querySelector('.trump-card-left .player-name').textContent = topCardLeft.name;
    document.getElementById("trump-image-left").src = topCardLeft.image;
};



document.querySelector('.new-card').addEventListener('click', newNewCardLeft);
document.querySelector('.new-card').addEventListener('click', newNewCardRight);
  

});

