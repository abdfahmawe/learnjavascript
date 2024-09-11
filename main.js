document.querySelector(".increase").onclick = () => {
  document.querySelector("p").classList.add("add");
  document.querySelector("h2").classList.add("add");
};
document.querySelector(".decrement").onclick = () => {
  document.querySelector("p").classList.add("remove");
  document.querySelector("h2").classList.add("remove");
};

// document.querySelector("button").onclick(() => {
//   document.querySelector("p").classList.add("vip");
// });
