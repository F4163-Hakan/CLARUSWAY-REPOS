//? onload event handler
window.addEventListener("load", () => {
  langInput.focus();
});

const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.querySelector("#lang-list");

const newUl = document.createElement("ul");
langList.appendChild(newUl);


addBtn.addEventListener("click", () => {
  if (!langInput.value) {
    alert("Please enter a language");
    else {
      newUl.innerHTML += `<li>${langInput.value}</li>`
      langInput.value = "";
    }
  }
  langInput.focus();
});


//? deleteBtn event handler
deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("There is no item to delete");
});

//? enter key and  del key event handler
langInput.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    addBtn.click();
  }

  if (event.code === "Delete") {
    deleteBtn.click();
  }


});


