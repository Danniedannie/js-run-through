let toDo = getSavedToDos();

const filters = {
  searchTerms: "",
  hideCompleted: false,
};

const incompleteToDos = toDo.filter(function (todo) {
  return !todo.completed;
});

document.querySelector("#todos").innerHTML = "";

renderToDos(toDo, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchTerms = e.target.value;
  console.log(filters.searchTerms);
  renderToDos(toDo, filters);
});

document.querySelector("#new-todo").addEventListener("submit", function (e) {
  e.preventDefault;
  if (e.target.elements.text.value !== "") {
    toDo.push({
      title: e.target.elements.text.value,
      completed: false,
    });
  } else {
    alert("please enter text");
  }
  saveToDos();
});
