"use strict";

document.getElementById('calorie-form').addEventListener('submit', calclateCalores);

function calclateCalores(event) {

    event.preventDefault();

    console.log(event);
    console.log(event.target.female.checked);

    let age = event.path[0].age.value;
    let height = event.path[0].height.value;
    let weight = event.path[0].weight.value;;
    let activity = event.path[0].activity.value;
    console.log(age, height, weight, activity);
    let isMlae = event.target.male.checked;
    let isFemale = event.target.female.checked;
    let totalCalories = document.getElementById('total-calories');
    let ps=document.getElementById('link-Sport');
    let result = 0;
    let goodSport;
    let pageLink ="";

    console.log("yousef");
    if (age === '' || weight === '' || height === '' || 80 < age || age < 15) {
        alert('Please make sure the values you entered are correct');
        //break;
    } else if (isMlae === true && activity === "1") {

        result = 1.2 * (66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age)));
        console.log(result);
    } else if (isMlae === true && activity === "2") {
        result = 1.375 * (66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age)));
    } else if (isMlae === true && activity === "3") {
        result = 1.55 * (66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age)));

    } else if (isMlae === true && activity === "4") {
        result = 1.725 * (66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age)));
    } else if (isMlae === true && activity === "5") {
        result = 1.9 * (66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age)))
            ;
    } else if (isFemale === true && activity === "1") {
        result = 1.2 * (655 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age)));
    } else if (isFemale === true && activity === "2") {
        result = 1.375 * (655 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age)));
    } else if (isFemale === true && activity === "3") {
        result = 1.55 * (655 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age)));
    } else if (isFemale === true && activity === "4") {
        result = 1.725 * (655 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age)));
    } else {
        result == 1.9 * (655 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age)));
    }
if(result >1600 &&result<2000 && activity ==="1" ||activity ==="2"){

pageLink="/html/Resistance-exercises.html",
goodSport="Resistance-exercises"
}else if(result >1600 ||result<2000 && activity ==="1" ||activity ==="2"){
    
    pageLink="/html/yoga.html",
    goodSport=" Yoga "
}else if(result >2000 &&result<2200 && activity ==="3" ||activity ==="4"){
    pageLink="/html/Hiking.html",
    goodSport=" Hiking "
}else if(result >2400 &&result<2800 && activity ==="3" ||activity ==="5"){
    pageLink="/html/Resistance-exercises.html",
goodSport="Resistance-exercises"
}else if(result<3000 && activity ==="5" ||activity ==="4"){
    ppageLink="/html/Golf.html",
    goodSport=" Golf "
}

   

    totalCalories.textContent = `Total calories ${parseInt(result)}per day I think the right sport for you is  ${goodSport}${CreateLink(pageLink)} `;

}

function CreateLink(pageLink) {
    
    let a = document.createElement('a');
   let linkText = document.createTextNode("Click here for more information about the right sport for you");
    a.appendChild(linkText);
    a.title = "page";
    a.href = pageLink;
    a.style.textDecoration = "none";
    a.style.color="white"
    document.getElementById('link-Sport').appendChild(a);
    
}