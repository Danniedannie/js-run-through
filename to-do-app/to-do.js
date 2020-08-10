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

const findNote = function (toDo, noteTitle) {
  const index = toDo.findIndex(function (todo) {
    return todo.title.toLowerCase() === noteTitle.toLowerCase();
  });
  if ((index) => 0) {
    toDo.splice(index, 1);
  }
};

const findtoDos = function (toDo, query) {
  return toDo.filter(function (todo) {
    return !todo.completed;
  });
};

const sortToDos = function (todo) {
  todo.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortToDos(toDo);
console.log(toDo);
