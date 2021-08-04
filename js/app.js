"use strict";
// global array for cart
//changed to cart 
let cart = loadCart();
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
function Hiking(name, src, id, price) {
  this.name = name;
  this.src = src;
  this.id = id;
  this.price = price;
  
  // catogry

  Hiking.allItems.push(this);
}
new Hiking(
  "tent1",
  "https://www.rei.com/dam/01-big-agnes-copper-spur-hv-ul4_badge3.jpg",
  ulTent1,
  649.95
);
new Hiking(
  "tent2",
  "https://www.rei.com/dam/02-nemo-dagger-2.jpg",
  ulTent2,
  449.95
);
new Hiking(
  "tent3",
  "https://www.rei.com/dam/06-msr-hubba-tour-2-1.jpg",
  ulTent3,
  556.95
);
new Hiking(
  "boot1",
  "https://www.rei.com/dam/830165_011516_56340_backpacking_boot.jpg",
  ulboot1,
  128.55
);
new Hiking(
  "boot2",
  "https://www.rei.com/media/dcbd50d0-207d-4df9-99eb-61355c02089e?size=784x588",
  ulboot2,
  80.55
);
new Hiking(
  "boot3",
  "https://www.rei.com/dam/887859_032316_36740_hiking_shoe.jpg",
  ulboot3,
  99.65
);
console.log(Hiking.allItems);
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
    `Price: $ ${Hiking.allItems[0].price}`,
  ];

  let lies2 = [
    "Packaged weight: 3 lbs. 14 oz.",
    "Design type:Freestanding",
    "Floor area:31.3 sq. ft.",
    
    `Price: $ ${Hiking.allItems[1].price}`,
  ];
  let lies3 = [
    "Packaged weight: 5 lbs",
    "Design type:Semifreestanding",
    "Floor area: 32 sq. ft.",
    `Price: $ ${Hiking.allItems[2].price}`,
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
    "Design type  :  Most have a high cut that wraps above the ankles.",
    `Price: $ ${Hiking.allItems[3].price}`,
  ];

  let liBoot2 = [
    "Waterproof membranes: Boots and shoes billed as “waterproof” feature uppers constructed with waterproof/breathable membranes (such as Gore-Tex® or eVent®) .",
    `Price: $ ${Hiking.allItems[4].price}`,
  ];

  let liBoot3 = [
    "Hiking shoes: Low-cut models with flexible midsoles are excellent for day hiking. .",
    "Design type :Semifreestanding",
    `Price: $ ${Hiking.allItems[5].price}`,
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
function Yoga(name, src, id, price) {
  this.name = name;
  this.src = src;
  this.id = id;
  this.price = price;
  Yoga.allItems.push(this);
}
new Yoga(
  "yoga1",
  "https://sps24.eu/eng_pm_Yunmai-YMYG-T603-yoga-mat-pink-49493_1.jpg",
  ulYoga1,
  43.55
);
new Yoga(
  "yoga2",
  "https://sps24.eu/eng_pl_Yunmai-yoga-cube-blue-49491_2.jpg",
  ulYoga2,
  42.55
);
new Yoga(
  "yoga3",
  "https://cdn.shopify.com/s/files/1/1728/2157/products/05-63388_ACUPRESSURE-MAT-PILLOW_B_large.jpg?v=1621641485",
  ulYoga3,
  14.65
);

function renderYoga() {
  yogaImg1.src = Yoga.allItems[0].src;
  yogaImg2.src = Yoga.allItems[1].src;
  yogaImg3.src = Yoga.allItems[2].src;

  let lies1 = [
    "Free and fast delivery    :  14 days for easy returns",
    "Safe shopping   :   This product is not available in a stationary store",
    `Price: $ ${Yoga.allItems[0].price}`,
  ];

  let lies2 = [
    "Yunmai yoga cube blue Non-slip surface to ensure stability, with beveled edges for easy gripping. .",
    "Ensure proper alignment during poses",
    `Price:$ ${Yoga.allItems[1].price}`,
  ];

  let lies3 = [
    "Self-guided 65 cm stability ball Do moves like sit-up twists, kick-back lunges and back extensions to enhance your core.",
    "Easy-to-follow visuals for best resultsDiscover .",
    `Price:$ ${Yoga.allItems[2].price}`,
  ];

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

function Gym(name, src, id, price) {
  this.name = name;
  this.src = src;
  this.id = id;
  this.price = price;
  Gym.allItems.push(this);
}

new Gym(
  "gym1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXhPiWCK6wCehDxYAzzNAkRjC0OoJtBb3zA&usqp=CAU",
  ulGym1,
  800.95
);
new Gym(
  "gym2",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MqaReTbMBcLac8cIQdPGuFpIlPIjNOr38A&usqp=CAU",
  ulGym2,
  42.55
);
new Gym(
  "gym3",
  "https://m.media-amazon.com/images/I/61ppEDBqssS._SL1500_.jpg",
  ulGym3,
  140.65
);

function renderGym() {
  GymImg1.src = Gym.allItems[0].src;
  GymImg2.src = Gym.allItems[1].src;
  GymImg3.src = Gym.allItems[2].src;

  let lies1 = [
    'About this item :Treadmill dimensions L x 24" W x 49.2" H / Folded dimensions – 25.2”L',
    "Design type:The compact treadmill for small spaces has LCD display",
    `Price:$ ${Gym.allItems[0].price}`,
  ];

  let lies2 = [
    "Realistic gym weights set - weight lifting equipment isolated on white background.",
    "Heavy black barbells, light dumbbell and cast iron kettlebell",
    `Price:$ ${Gym.allItems[1].price}`,
  ];

  let lies3 = [
    "Packaged weight: 30 lbs",
    " About this item : Push up bar /warntee 6 monthes",
    `Price:$ ${Gym.allItems[2].price}`,
  ];

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
renderGym();
let KendoImg1 = document.getElementById("KendoImg1");
let KendoImg2 = document.getElementById("KendoImg2");
let KendoImg3 = document.getElementById("KendoImg3");

let ulKendo1 = document.getElementById("ulKendo1");
let ulKendo2 = document.getElementById("ulKendo2");
let ulKendo3 = document.getElementById("ulKendo3");

Kendo.allItems = [];

function Kendo(name, src, id, price) {
  this.name = name;
  this.src = src;
  this.id = id;
  this.price = price;
  Kendo.allItems.push(this);
}

new Kendo(
  "Kendo1",
  "https://cdn.shopify.com/s/files/1/0104/6668/9105/products/WST_HL_97_CF_01_1200x.jpg?v=1584510036",
  ulKendo1,
  37.05
);
new Kendo(
  "Kendo2",
  "https://m.media-amazon.com/images/I/61Cqlj84RDL._AC_SL1000_.jpg",
  ulKendo2,
  77.95
);
new Kendo(
  "Kendo3",
  "https://www.ninecircles.co.uk/images/thumbnails/550/550/detailed/129210/KG-1-N-Kendogi-Model-Front_udh7-x1.jpg?t=1617804128",
  ulKendo3,
  44.65
);

function renderKendo() {
  KendoImg1.src = Kendo.allItems[0].src;
  KendoImg2.src = Kendo.allItems[1].src;
  KendoImg3.src = Kendo.allItems[2].src;

  let lies1 = [
    "About this item  :Cutting-edge youth safety helmet for biking, skating, and more",
    "Fits head sizes 22 to 23.5 inches :   Ergonomic interior padding is comfortable ",
    `Price:$ ${Kendo.allItems[0].price}`,
  ];

  let lies2 = [
    "About this item  : Snake Eye Tactical Ninja Sword and Kunai/Throwing Knife Set",
    "DURABLE BLACK COATED DESIGN BLADE  can be used for recreational",
    `Price:$ ${Kendo.allItems[1].price}`,
  ];

  let lies3 = [
    "Japanese set: Traditional Japanese Samurai Kimono Set Kendo + Hakama Pants + Jacket",
    " Delivery: Estimated between Aug. 19 and Sep. 2",
    `Price:$ ${Kendo.allItems[2].price}`,
  ];

  for (let i = 0; i < lies1.length; i++) {
    let li = document.createElement("li");
    ulKendo1.appendChild(li);

    li.textContent = lies1[i];
  }

  for (let i = 0; i < lies2.length; i++) {
    let li = document.createElement("li");
    ulKendo2.appendChild(li);

    li.textContent = lies2[i];
  }

  for (let i = 0; i < lies3.length; i++) {
    let li = document.createElement("li");
    ulKendo3.appendChild(li);

    li.textContent = lies3[i];
  }
}
renderKendo();
Hiking.prototype.renderButton = function () {
  // console.log(this.id);

  let button = document.createElement("button");

  this.id.appendChild(button);
  // console.log(this.id);

  console.log(button);

  button.id = `${this.name}`;

  button.textContent = "Add to Cart";

  button.addEventListener("click", handleButton);
  console.log(this);
};

function handleButton(event) {
  // if (event.target) {

  console.log(event.target);

  // }

  for (let i = 0; i < Hiking.allItems.length; i++) {
    let gg = Hiking.allItems[i].id;

    // console.log( gg.getAttribute('id'));

    let elementId = gg.getAttribute("id").toLowerCase();

    // console.log(gg);

    console.log(elementId, event.target.id);

    if (elementId === `ul${event.target.id}`) {
      cart.push(Hiking.allItems[i]);
      saveCart();
      Swal.fire({
        title: "Added to Cart", 
        html: "..",  
       
        icon: "success",
      });
      
     
      // alert("Thank you ")
      
      
      console.log(cart);
    }
  }

  // console.log(event.target.id);
}

// handleButton();

function renderClick() {
  for (let i = 0; i < Hiking.allItems.length; i++) {
    Hiking.allItems[i].renderButton();
  }
}
renderClick();
Yoga.prototype.renderButtonYoga = function () {
  let button = document.createElement("button");

  this.id.appendChild(button);

  console.log(button);

  button.id = `${this.name}`;

  button.textContent = "Add to Cart";

  button.addEventListener("click", handleButtonYoga);
};

function renderClickYoga() {
  for (let i = 0; i < Yoga.allItems.length; i++) {
    Yoga.allItems[i].renderButtonYoga();
  }
}
renderClickYoga();

function handleButtonYoga(event) {
  console.log(event.target);

  for (let i = 0; i < Yoga.allItems.length; i++) {
    let gg = Yoga.allItems[i].id;

    let elementId = gg.getAttribute("id").toLowerCase();

    console.log(elementId, event.target.id);

    if (elementId === `ul${event.target.id}`) {
      cart.push(Yoga.allItems[i]);
      saveCart();
      console.log(cart);
      Swal.fire({
        title: "Added to Cart", 
        html: "..",  
       
        icon: "success",
      });
       
    }
  }
}

Gym.prototype.renderButtonGym = function () {
  let button = document.createElement("button");

  this.id.appendChild(button);

  console.log(button);

  button.id = `${this.name}`;

  button.textContent = "Add to Cart";

  button.addEventListener("click", handleButtonGym);
};

function renderClickGym() {
  for (let i = 0; i < Gym.allItems.length; i++) {
    Gym.allItems[i].renderButtonGym();
  }
}
renderClickGym();

function handleButtonGym(event) {
  console.log(event.target);

  for (let i = 0; i < Gym.allItems.length; i++) {
    let gg = Gym.allItems[i].id;

    let elementId = gg.getAttribute("id").toLowerCase();

    console.log(elementId, event.target.id);

    if (elementId === `ul${event.target.id}`) {
      cart.push(Gym.allItems[i]);
      saveCart();
      console.log(cart);
      Swal.fire({
        title: "Added to Cart", 
        html: "..",  
       
        icon: "success",
      });
       
    }
  }
}

Kendo.prototype.renderButtonKendo = function () {
  let button = document.createElement("button");

  this.id.appendChild(button);

  console.log(button);

  button.id = `${this.name}`;
  

  button.textContent = "Add to Cart";

  button.addEventListener("click", handleButtonKendo);
};

function renderClickKendo() {
  for (let i = 0; i < Kendo.allItems.length; i++) {
    Kendo.allItems[i].renderButtonKendo();
  }
}
renderClickKendo();

function handleButtonKendo(event) {
  // console.log(event.target);

  for (let i = 0; i < Kendo.allItems.length; i++) {
    let gg = Kendo.allItems[i].id;

    let elementId = gg.getAttribute("id").toLowerCase();

    console.log(elementId, event.target.id);
    console.log(elementId, `ul${event.target.id}`);

    if (elementId === `ul${event.target.id}`.toLowerCase()) {
      cart.push(Kendo.allItems[i]);
      saveCart();
      console.log(cart);


      Swal.fire({
        title: "Added to Cart", 
        html: "..",  
       
        icon: "success",
      });
      
       
    }
  }
}









// renderYoga();




