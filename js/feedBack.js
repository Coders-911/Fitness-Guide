'use strict';
let form=document.getElementById('feedBack');
form.addEventListener('submit',submitter);
function submitter(e) {
e.preventDefault();

console.log(e);
}