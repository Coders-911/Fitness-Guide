'use strict';
let sport = [];
function FeedBack(name, age, gender, review, rate) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.review = review;
    this.rate = rate;
    sport.push(this);
}
let parentElement = document.getElementById('fitness');
FeedBack.prototype.render = function () {
    let article = document.createElement('div');
    parentElement.appendChild(article);
    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
    let p = document.createElement('p');
    p.textContent = ` Review : ${this.review}`;
    article.appendChild(p);
    let h3 = document.createElement('h3');
    h2.textContent = this.rate;
    article.appendChild(h3);
}
let form = document.getElementById('feedBack');
form.addEventListener('submit', submitter);
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
}