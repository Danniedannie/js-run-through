const toDo = [
  {
    title: "c",
    completed: true,
  },
  {
    title: "b",
    completed: false,
  },
  {
    title: "a",
    completed: false,
  },
];

const filters = {
  searchTerms: "",
};

const renderToDos = function (toDo, filters) {
  const filteredNotes = toDo.filter(function (todo) {
    return todo.title.toLowerCase().includes(filters.searchTerms.toLowerCase());
  });

  document.querySelector("#todos").innerHTML = "";

  const incompleteToDos = toDo.filter(function (todo) {
    return !todo.completed;
  });

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteToDos.length} left to do `;
  document.querySelector("#todos").appendChild(summary);

  filteredNotes.forEach(function (todo) {
    const noteEl = document.createElement("p");
    noteEl.textContent = todo.title;
    document.querySelector("#todos").appendChild(noteEl);
  });
};
renderToDos(toDo, filters);

document.querySelector("#addButton").addEventListener("click", function (e) {
  e.target.textContent = "I was clicked";
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchTerms = e.target.value;
  console.log(filters.searchTerms);
  renderToDos(toDo, filters);
});
