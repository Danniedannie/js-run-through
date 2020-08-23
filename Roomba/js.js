for (i = 0; i < 10; i++) {
  let row = document.createElement("thead");
  document.querySelector("table").appendChild(row);

  for (let x = 0; x < 10; x++) {
    let cell = document.createElement("td");
    document.querySelector("table").appendChild(cell);
  }
}

let test = document.querySelectorAll("td");

for (i = 0; i < test.length; i++) {
  test[i].setAttribute("id", i);
}
test[0] = test[0].className = "active";
let button1 = document.getElementById("right");

for (let i = 0; i < test.length; i++) {
  test[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].textContent = "";
    current[0].className = "";
    console.log();
    this.className += " active";
    this.body.appendChild(emoji);
  });
  button1.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    let test = parseInt(current[0].id);
    test = test + 1;
    console.log(test);
    current[0].id = test;
    console.log(current[0].id);
    current[0].textContent = "Roomba";
  });
}

let leftButton = document.getElementById("left");
let emoji = document.createElement("p");
emoji.innerHTML = "&#9757";
document.body.appendChild(emoji);
console.log(emoji.getBoundingClientRect());

leftButton.addEventListener("click", function () {
  let step = "30px";
  emoji.style.paddingLeft = step;
});
