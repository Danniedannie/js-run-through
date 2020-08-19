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

test[0].innerHTML = "Roomba";

test[0].className = "active";

for (let i = 0; i < test.length; i++) {
  test[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].textContent = "";
    current[0].className = "";
    this.className += " active";
    this.textContent = "roomba";
  });
}
