

//start timer on load
document.addEventListener("DOMContentLoaded", () => {
    setInterval(startTimer, 1000);
})


const pause =document.getElementById("pause");
const minus =document.getElementById("minus");
const plus =document.getElementById("plus");
const heart =document.getElementById("heart");
const submit =document.getElementById("submit");
const commentInput =document.getElementById("comment-input");
let counter =document.getElementById("counter");
let likes =document.querySelector(".likes");
const commentContainer = document.querySelector("#list");
const form = document.querySelector("form");


// Set the timer interval
let startTime = 0;


// Function to set the timer interval
const startTimer = () => {
    startTime += 1
    counter.innerHTML = startTime;   
}
//pause button function
pause.addEventListener("click", function(){
    currentvalue =document.getElementById("pause").innerText;
    (currentvalue === "pause")?(
        this.innerText = "resume",
        minus.disabled = true,
        plus.disabled = true,
        heart.disabled = true,
        submit.disabled = true,
        clearInterval(startTimer)
):(
        this.innerText = "pause",
        minus.disabled = false,
        plus.disabled = false,
        heart.disabled = false,
        submit.disabled = false
)
})
//plus button function
plus.addEventListener("click", function(){
 
    counter.innerText =  startTime += 1; 

});
//minus button function
minus.addEventListener("click", function(){
    
    (startTime >0)?(counter.innerText =  startTime -= 1):( startTime = 0);

});
//heart button function
heart.addEventListener("click", () => {
    let likesList = document.createElement("li");
    let ul = document.createElement("ul");
    let likecontainer = document.querySelector(".likes");
    likesList.textContent = `${counter.innerHTML} has been liked `;
    ul.appendChild(likesList);
    likecontainer.appendChild(ul);
    ul.style.listStyleType = "none";
})
//submit button function

const onSubmit = (event) => {
    event.preventDefault();
    let comment = document.createElement("li");
    let ul= document.createElement("ul");
    let commentContainer = document.getElementById("list");
    
    const inputValue = document.getElementById("comment-input").value;   

    comment.textContent = inputValue;
    ul.appendChild(comment);
    commentContainer.appendChild(ul);
}

form.addEventListener("submit", onSubmit);