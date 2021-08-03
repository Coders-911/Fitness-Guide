"use strict";
let feedback = [];
function FeedBack(name, age, gender, review, rate) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.review = review;
  this.rate = rate;
  feedback.push(this);
  console.log("feedback", feedback);
}
new FeedBack("name", 2, "gender", "review", "rate");
new FeedBack("name", 2, "gender", "review", "rate");
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
  updatefeedback();
  console.log(addFeedBack);

  addFeedBack.render();
}

function updatefeedback() {
  let stringArr = JSON.stringify(feedback);

  localStorage.setItem("feedback", stringArr);
}

function getfeedback() {
  let data = localStorage.getItem("feedback");
  console.log(data);

  let parsedArr = JSON.parse(data);
  console.log(parsedArr);

  if (parsedArr !== null) {
    console.log("parsedArr<<<", parsedArr);

    for (let i = 0; i < parsedArr.length; i++) {
      console.log(parsedArr[i].name);
      new FeedBack(
        parsedArr[i].name,
        parsedArr[i].age,
        parsedArr[i].gender,
        parsedArr[i].review,
        parsedArr[i].rate
      );
    }
  }
}
function renderAllReviews() {
  console.log("helllo", feedback);

  for (let i = 0; i < feedback.length; i++) {
    console.log("feeedback", feedback);
    feedback[i].render();
  }
}

getfeedback();
renderAllReviews();
