let toDo = [];

const filters = {
  searchTerms: "",
  hideCompleted: false,
};

const toDoJSON = localStorage.getItem("todo");

if (toDoJSON !== null) {
  toDo = JSON.parse(toDoJSON);
}

const renderToDos = function (toDo, filters) {
  let filteredNotes = toDo.filter(function (todo) {
    const searchTextMatch = todo.title
      .toLowerCase()
      .includes(filters.searchTerms.toLowerCase());
    const completedTextMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && completedTextMatch;
  });

  const incompleteToDos = toDo.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteToDos.length} left to do `;
  document.querySelector("#todos").appendChild(summary);

  filteredNotes.forEach(function (todo) {
    const noteEl = document.createElement("p");
    noteEl.innerHTML = todo.title;
    document.querySelector("#todos").appendChild(noteEl);
  });
};

renderToDos(toDo, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchTerms = e.target.value;
  console.log(filters.searchTerms);
  renderToDos(toDo, filters);
});

// document.querySelector("#for-fun").addEventListener("change", function (e) {
//   if (e.target.checked) {
//     const completed = toDo.filter(function (todos) {
//       return !todos.completed;
//     });
//     renderToDos(completed, filters);
//   } else {
//     renderToDos(toDo, filters);
//   }
// });

//alternative to the above checkbox logic

// document.querySelector("#for-fun").addEventListener("change", function (e) {
//   filters.hideCompleted = e.target.checked;
//   renderToDos(toDo, filters);
// });

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
