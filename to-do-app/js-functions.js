// fetches existing todos from local storage

const getSavedToDos = function () {
  const toDoJSON = localStorage.getItem("todo");
  if (toDoJSON !== null) {
    return JSON.parse(toDoJSON);
  } else {
    return [];
  }
};

//Save toDos to localStorage

const saveToDos = function (todo) {
  localStorage.setItem("todo", JSON.stringify(toDo));
  renderToDos(toDo, filters);
  e.target.elements.text.value = "";
};

//Render application todos based on filters

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
  generateToDoDOM(filteredNotes);
  generateSummaryDom(incompleteToDos);
};

// //get the DOM elements for an individual note

const generateToDoDOM = function (filteredNotes) {
  filteredNotes.forEach(function (todo) {
    const noteEl = document.createElement("p");
    noteEl.innerHTML = todo.title;
    document.querySelector("#todos").appendChild(noteEl);
  });
};

// generateToDoDOM(incompleteToDos);

const generateSummaryDom = function (incompleteToDos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteToDos.length} left to do `;
  document.querySelector("#todos").appendChild(summary);
};
