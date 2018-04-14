var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liAll = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.innerText = "delete";
  button.className = "del-button";
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
  button.addEventListener("click", function() {
    li.className = "fadeOutLeft";
    ul.removeChild(li);

  
    
  });
  li.addEventListener("click", function() {
    this.classList.toggle("done");
  });
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
function strikeThrough() {
  this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
liAll.forEach(function(element) {
  element.addEventListener("click", strikeThrough);
});
