var text = document.getElementById("text");
var newDom = "";
var animationDelay = 6;
var x = 50;
for (let i = 0; i < text.innerText.length; i++) {
  if (i >= x && text.innerText[i] == " ") {
    newDom += "<br/>";
    x += 50;
  } else {
    newDom +=
      '<span class="char">' +
      (text.innerText[i] == " " ? "&nbsp;" : text.innerText[i]) +
      "</span>";
  }
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
  text.children[i].style["animation-delay"] = animationDelay * i + "ms";
}
