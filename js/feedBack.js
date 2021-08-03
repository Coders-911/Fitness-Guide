"use strict";
let feedback = [];
function FeedBack(name, age, gender, review, rate) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.review = review;
  this.rate = rate;
  feedback.push(this);
//   updatefeedback();

}
let parentElement = document.getElementById("fitness");
FeedBack.prototype.render = function () {
  let article = document.createElement("div");
  parentElement.appendChild(article);
  let h4 = document.createElement("h4");
  h4.textContent = `Name :${this.name}`;
  article.appendChild(h4);
  let p = document.createElement("p");
  p.textContent = ` Review : ${this.review}`;
  article.appendChild(p);
  let h3 = document.createElement("h3");
  h3.textContent = `Rate :${this.rate} stars`;
  article.appendChild(h3);
  
};
let form = document.getElementById("feedBack");
form.addEventListener("submit", submitter);
function submitter(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let age = e.target.age.value;
  let gender = e.target.gender.value;
  let review = e.target.review.value;
  let rate = e.target.rate.value;
  let addFeedBack = new FeedBack(name, age, gender, review, rate);
  console.log(addFeedBack);

  // console.log(e.target.name.value);
  // console.log(e.target.age.value);
  // console.log(e.target.gender.value);
  // console.log(e.target.review.value);
  // console.log(e.target.rate.value);
  addFeedBack.render();

//   localStorage.setItem("feedback", JSON.stringify(feedback));
//   localStorage.getItem("feedback");
  

// console.log(feedback); 


}

  


// make render function+forloop
// function updatefeedback(params) { 
    
//     localStorage.setItem("feedback", JSON.stringify(feedback));
//     localStorage.setItem('feedback',stringArr);
// }

// function feedbackLocal() {
//     let data=localStorage.getItem('feedback');
//     console.log(data);
//     let localFeedBack = JSON.parse(localStorage.getItem(feedback));
//     console.log(parsedArr);
//     for (let i = 0; i < parsedArr.length; i++) {
//         console.log(parsedArr[i]);
//         new feedback(parsedArr[i].name,parsedArr[i].review,parsedArr[i],rate)
        
//     }
//     console.log(feedback);

// }
 
// addFeedBack.render();