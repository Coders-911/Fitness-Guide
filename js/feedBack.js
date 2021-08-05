
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
let article = document.createElement("div");

let parentElement = document.getElementById("fitness");
FeedBack.prototype.render = function (i) {

  let reviewBox=document.createElement("div");
  reviewBox.className=`allReview2`;
  

  article.appendChild(reviewBox);

  let h4 = document.createElement("h4");
  h4.className=`h4-review`
  h4.textContent = `${this.name}`;
  reviewBox.appendChild(h4);
  let p = document.createElement("p");
  p.className=`p-review`
  p.textContent = ` " ${this.review}"`;
  reviewBox.appendChild(p);
  let h3 = document.createElement("h3");
  h3.className=`h3-review`
  h3.textContent = `${this.rate}  `;
  reviewBox.appendChild(h3);

parentElement.appendChild(article);
article.className="allReview";
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
  form.reset();
  // swal('hello');
 
  // alert('hello')
  // console.log(test);
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  });
  

}



function updatefeedback() {
  let stringArr = JSON.stringify(feedback);

  localStorage.setItem("feedback", stringArr);
}

function getfeedback() {
  let data = localStorage.getItem("feedback");
  console.log(data);

  let parsedArr = JSON.parse(data);

  if (parsedArr !== null) {
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
    feedback[i].render(i);
  }
}

getfeedback();
renderAllReviews();

