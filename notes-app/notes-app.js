const notes = [
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
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#hello2").addEventListener("click", function (e) {
  e.target.textContent = "Delete all notes";
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#for-fun").addEventListener("change", function (e) {
  console.log(e.target.checked);
  notes.forEach(function (test) {
    if (e.target.checked) {
      test.completed = true;
    }
    console.log(notes);
  });
});
