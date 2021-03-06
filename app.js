function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText) { return }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }




  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";


      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      var button = document.querySelectorAll(".removeCheck")[0];
      removeCheck.addEventListener("click", event => {
            event.preventDefault();

      if(checkbox.checked === true){
      checkbox.parentElement.remove()
      toDos.splice(0, 1)
        }

      });

    });

  }


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });


  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
