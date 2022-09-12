//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header h1");

//? 3 .method
h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";
};

h1.onmouseout = () => {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
};

//? 4.method (addEventListener)
h1.addEventListener("click", () => {
  alert("H1 pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  // if (!input.value) {
  //   alert("Please enter an item");
  // } else {
  //   alert(`${input.value} entered`);
  // }

  !input.value
    ? alert("Please enter an item")
    : alert(`${input.value} entered`);

  input.value = "";
});
