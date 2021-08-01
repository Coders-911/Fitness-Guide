
"use strict";
// global array for cart
//

// yoga constructor

// render method for yoga
// {
// push the item 
// }
let hikingElement1 = document.getElementById('hiking1');
let hikingElement2 = document.getElementById('hiking2');
let hikingElement3 = document.getElementById('hiking3');

let ulTent1 = document.getElementById('ulTent1')
let ulTent2 = document.getElementById('ulTent2')
let ulTent3 = document.getElementById('ulTent3')



Hiking.allItems = [];


let selectedProducts = [];

function Hiking(name, src) {

    this.name = name;
    this.src = src;
    Hiking.allItems.push(this)



}



new Hiking  ('tent1', 'https://www.rei.com/dam/01-big-agnes-copper-spur-hv-ul4_badge3.jpg');
new Hiking  ('tent2', 'https://www.rei.com/dam/02-nemo-dagger-2.jpg');
new Hiking  ('tent3', 'https://www.rei.com/dam/06-msr-hubba-tour-2-1.jpg');







function renderHiking() {

   

    hikingElement1.src = Hiking.allItems[0].src
    hikingElement2.src = Hiking.allItems[1].src
    hikingElement3.src = Hiking.allItems[2].src

    
    

let lies1=['Versions:  Two-person, Three-person.','Design type:Freestanding','Number of doors:2','Price: $649.95'];

let lies2=['Packaged weight: 3 lbs. 14 oz.','Design type:Freestanding','Floor area:31.3 sq. ft.','Number of doors:2','Price: $449.95']
let lies3=['Packaged weight: 5 lbs','Design type:Semifreestanding','Floor area: 32 sq. ft.','Number of doors:2'];

    

for (let i = 0; i < lies1.length; i++) {



    let li = document.createElement('li')
    ulTent1.appendChild(li)

    li.textContent=lies1[i]
    
    
}


for (let i = 0; i < lies2.length; i++) {

    let li = document.createElement('li')
    ulTent2.appendChild(li)

    li.textContent=lies2[i]
    
    
}


for (let i = 0; i < lies3.length; i++) {

    let li = document.createElement('li')
    ulTent3.appendChild(li)

    li.textContent=lies3[i]
    
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






