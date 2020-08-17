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

const incompleteToDos = toDo.filter(function (todo) {
  return !todo.completed;
});

const renderNotes = function (toDo, filters) {
  const filteredNotes = toDo.filter(function (todo) {
    return todo.title.toLowerCase().includes(filters.searchTerms.toLowerCase());
  });

  document.querySelector("#todos").innerHTML = "";

  filteredNotes.forEach(function (todo) {
    const noteEl = document.createElement("p");
    noteEl.textContent = todo.title;
    document.querySelector("#todos").appendChild(noteEl);
  });
};
renderNotes(toDo, filters);

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteToDos.length} left to do `;
document.querySelector("body").appendChild(summary);

document.querySelector("#addButton").addEventListener("click", function (e) {
  e.target.textContent = "I was clicked";
});

// document.querySelector("#inputText").addEventListener("input", function (e) {
//   filters.searchText = e.target.value;
//   renderNotes(toDo, filters);
//   console.log("this");
// });

// document.querySelector("#inputText").addEventListener("input", function (e) {
//   const text = e.target.value;
//   toDo.push({ title: text, completed: false });
//   console.log(toDo);
//   console.log("this2");
// });

// toDo.forEach(function (test) {
//   const newNewPragraph = document.createElement("p");
//   newNewPragraph.textContent = test.title;
//   document.querySelector("body").appendChild(newNewPragraph);
// });

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchTerms = e.target.value;
  console.log(filters.searchTerms);
  renderNotes(toDo, filters);
});
