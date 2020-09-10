let toDo = getSavedToDos();

const filters = {
  searchTerms: "",
  hideCompleted: false,
};

renderToDos(toDo, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchTerms = e.target.value;
  console.log(filters.searchTerms);
  renderToDos(toDo, filters);
});

document.querySelector("#new-todo").addEventListener("submit", function (e) {
  e.preventDefault;
  toDo.push({
    title: e.target.elements.text.value,
    completed: false,
  });
  localStorage.setItem("todo", JSON.stringify(toDo));
  renderToDos(toDo, filters);
  e.target.elements.text.value = "";
});
console.log(toDo);
