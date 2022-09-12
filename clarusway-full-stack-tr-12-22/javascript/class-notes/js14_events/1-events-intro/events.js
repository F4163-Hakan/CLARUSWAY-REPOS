//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header h1");
h1.onmouseover = function(){
  h1.style.color = "red";
  
};
h1.onmouseout = function(){
  h1.style.color = "black";
}





//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
