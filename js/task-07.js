const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", handlerInputRange);
function handlerInputRange(event) {
  span.style.fontSize = `${event.target.value}px`;
  console.log(span.style.fontSize);
}