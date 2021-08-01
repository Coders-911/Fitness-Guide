"use strict";
// global array for cart
//
let selectedProducts = [];

// yoga constructor

// render method for yoga
// {
// push the item
// }
let hikingElement1 = document.getElementById("hiking1");
let hikingElement2 = document.getElementById("hiking2");
let hikingElement3 = document.getElementById("hiking3");

let ulTent1 = document.getElementById("ulTent1");
let ulTent2 = document.getElementById("ulTent2");
let ulTent3 = document.getElementById("ulTent3");

let boot1 = document.getElementById("boot1");
let boot2 = document.getElementById("boot2");
let boot3 = document.getElementById("boot3");

let ulboot1 = document.getElementById("ulboot1");
let ulboot2 = document.getElementById("ulboot2");
let ulboot3 = document.getElementById("ulboot3");

Hiking.allItems = [];
// Boot.all=[];

function Hiking(name, src) {
    this.name = name;
    this.src = src;
    Hiking.allItems.push(this);
}

new Hiking(
    "tent1",
    "https://www.rei.com/dam/01-big-agnes-copper-spur-hv-ul4_badge3.jpg"
);
new Hiking("tent2", "https://www.rei.com/dam/02-nemo-dagger-2.jpg");
new Hiking("tent3", "https://www.rei.com/dam/06-msr-hubba-tour-2-1.jpg");
new Hiking(
    "boot1",
    "https://www.rei.com/dam/830165_011516_56340_backpacking_boot.jpg"
);
new Hiking(
    "boot2",
    "https://m.media-amazon.com/images/I/61HVHhtrpTL._AC_UY500_.jpg"
);
new Hiking(
    "boot3",
    "https://www.rei.com/dam/887859_032316_36740_hiking_shoe.jpg"
);

function renderHiking() {
    hikingElement1.src = Hiking.allItems[0].src;
    hikingElement2.src = Hiking.allItems[1].src;
    hikingElement3.src = Hiking.allItems[2].src;

    boot1.src = Hiking.allItems[3].src;
    boot2.src = Hiking.allItems[4].src;
    boot3.src = Hiking.allItems[5].src;

    let lies1 = [
        "Versions:  Two-person, Three-person.",
        "Design type:Freestanding",
        "Number of doors:2",
        "Price: $649.95",
    ];

    let lies2 = [
        "Packaged weight: 3 lbs. 14 oz.",
        "Design type:Freestanding",
        "Floor area:31.3 sq. ft.",
        "Number of doors:2",
        "Price: $449.95",
    ];
    let lies3 = [
        "Packaged weight: 5 lbs",
        "Design type:Semifreestanding",
        "Floor area: 32 sq. ft.",
        "Number of doors:2",
    ];

    for (let i = 0; i < lies1.length; i++) {
        let li = document.createElement("li");
        ulTent1.appendChild(li);

        li.textContent = lies1[i];
    }

    for (let i = 0; i < lies2.length; i++) {
        let li = document.createElement("li");
        ulTent2.appendChild(li);

        li.textContent = lies2[i];
    }

    for (let i = 0; i < lies3.length; i++) {
        let li = document.createElement("li");
        ulTent3.appendChild(li);

        li.textContent = lies3[i];
    }

    let liBoot1 = [
        "Backpacking boots  : These are designed to carry heavier loads on multiday trips deep into the backcountry.",
        "Design type  :  Most have a high cut that wraps above the ankles for excellent support.",
        "Price: $128.55",
    ];

    let liBoot2 = [
        "Waterproof membranes: Boots and shoes billed as “waterproof” feature uppers constructed with waterproof/breathable membranes (such as Gore-Tex® or eVent®) to keep feet dry in wet conditions.",
        "Price: $80.55",
    ];

    let liBoot3 = [
        "Hiking shoes: Low-cut models with flexible midsoles are excellent for day hiking. Some ultralight backpackers may even choose trail-running shoes for long-distance journeys.",
        "Design type :Semifreestanding",
        "Price: $99.65",
    ];

    for (let i = 0; i < liBoot1.length; i++) {
        let liElement = document.createElement("li");
        ulboot1.appendChild(liElement);
        liElement.textContent = liBoot1[i];
    }
    for (let i = 0; i < liBoot2.length; i++) {
        let liElement = document.createElement("li");
        ulboot2.appendChild(liElement);
        liElement.textContent = liBoot2[i];
    }

    for (let i = 0; i < liBoot3.length; i++) {
        let liElement = document.createElement("li");
        ulboot3.appendChild(liElement);
        liElement.textContent = liBoot3[i];
    }
    //     let li = document.createElement('li')

    //    ulTent1.appendChild(li)

    //     li.textContent='Versions:  Two-person, Three-person.'
    //     li2 = document.createElement('li')

    //     ulTent1.appendChild(li2)

    //     li2.textContent='Versions:  Two-person, Three-person.'

    //     li3.textContent='Versions:  Two-person, Three-person.'
    //     li3 = document.createElement('li')

    //    ulTent1.appendChild(li3)

    //     li3.textContent='Versions:  Two-person, Three-person.'
}
renderHiking();

let yogaImg1 = document.getElementById("yogaImg1");
let yogaImg2 = document.getElementById("yogaImg2");
let yogaImg3 = document.getElementById("yogaImg3");

let ulYoga1 = document.getElementById("ulYoga1");
let ulYoga2 = document.getElementById("ulYoga2");
let ulYoga3 = document.getElementById("ulYoga3");

Yoga.allItems = [];
// Boot.all=[];

function Yoga(name, src) {
    this.name = name;
    this.src = src;
    Yoga.allItems.push(this);
}

new Yoga(
    "yoga1",
    "https://sps24.eu/eng_pm_Yunmai-YMYG-T603-yoga-mat-pink-49493_1.jpg"
);
new Yoga("yoga2", "https://sps24.eu/eng_pl_Yunmai-yoga-cube-blue-49491_2.jpg");
new Yoga("yoga3", "https://cdn.shopify.com/s/files/1/1728/2157/products/05-63388_ACUPRESSURE-MAT-PILLOW_B_large.jpg?v=1621641485"
);

function renderYoga() {
    yogaImg1.src = Yoga.allItems[0].src;
    yogaImg2.src = Yoga.allItems[1].src;
    yogaImg3.src = Yoga.allItems[2].src;

    let lies1 = ['Free and fast delivery    :  14 days for easy returns','Safe shopping   :   This product is not available in a stationary store','Price: $43.55'];

    let lies2 = ['Yunmai yoga cube blue Non-slip surface to ensure stability, with beveled edges for easy gripping. Whether under your hands, feet, or even your seat.','Ensure proper alignment during poses','Price: $42.55'];

    let lies3 = ['Self-guided 65 cm stability ball Do moves like sit-up twists, kick-back lunges and back extensions to enhance your core.','Easy-to-follow visuals for best resultsDiscover how much fun workouts can be with our Self-Guided Stability Ball.','Price: $14.65'];

    for (let i = 0; i < lies1.length; i++) {
        let li = document.createElement("li");
        ulYoga1.appendChild(li);

        li.textContent = lies1[i];
    }

    for (let i = 0; i < lies2.length; i++) {
        let li = document.createElement("li");
        ulYoga2.appendChild(li);

        li.textContent = lies2[i];
    }

    for (let i = 0; i < lies3.length; i++) {
        let li = document.createElement("li");
        ulYoga3.appendChild(li);

        li.textContent = lies3[i];
    }

}
renderYoga();



let GymImg1 = document.getElementById("GymImg1");
let GymImg2 = document.getElementById("GymImg2");
let GymImg3 = document.getElementById("GymImg3");

let ulGym1 = document.getElementById("ulGym1");
let ulGym2 = document.getElementById("ulGym2");
let ulGym3 = document.getElementById("ulGym3");

Gym.allItems = [];
// Boot.all=[];

function Gym(name, src) {
    this.name = name;
    this.src = src;
    Gym.allItems.push(this);
}

new Gym(
    "yoga1",
    "https://sps24.eu/eng_pm_Yunmai-YMYG-T603-yoga-mat-pink-49493_1.jpg"
);
new Gym("yoga2", "https://sps24.eu/eng_pl_Yunmai-yoga-cube-blue-49491_2.jpg");
new Gym("yoga3", "https://cdn.shopify.com/s/files/1/1728/2157/products/05-63388_ACUPRESSURE-MAT-PILLOW_B_large.jpg?v=1621641485"
);

function renderYoga() {
    GymImg1.src = Gym.allItems[0].src;
    GymImg2.src = Gym.allItems[1].src;
    GymImg3.src = Gym.allItems[2].src;

    let lies1 = ['Free and fast delivery    :  14 days for easy returns','Safe shopping   :   This product is not available in a stationary store','Price: $43.55'];

    let lies2 = ['Yunmai yoga cube blue Non-slip surface to ensure stability, with beveled edges for easy gripping. Whether under your hands, feet, or even your seat.','Ensure proper alignment during poses','Price: $42.55'];

    let lies3 = ['Self-guided 65 cm stability ball Do moves like sit-up twists, kick-back lunges and back extensions to enhance your core.','Easy-to-follow visuals for best resultsDiscover how much fun workouts can be with our Self-Guided Stability Ball.','Price: $14.65'];

    for (let i = 0; i < lies1.length; i++) {
        let li = document.createElement("li");
        ulGym1.appendChild(li);

        li.textContent = lies1[i];
    }

    for (let i = 0; i < lies2.length; i++) {
        let li = document.createElement("li");
        ulGym2.appendChild(li);

        li.textContent = lies2[i];
    }

    for (let i = 0; i < lies3.length; i++) {
        let li = document.createElement("li");
        ulGym3.appendChild(li);

        li.textContent = lies3[i];
    }

}
renderYoga();