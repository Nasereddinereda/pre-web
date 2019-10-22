var text = document.getElementById("text");
var newDom = "";
var animationDelay = 6;
var cont = 0;
if (document.body.offsetWidth > 768) {
  var x = 35,
    y = 40;
} else {
  var x = 35,
    y = 40;
}

for (let i = 0; i < text.innerText.length; i++) {
  if (i >= x && text.innerText[i] == " ") {
    newDom += "<br/>";
    x += y + cont;
    cont = 0;
  } else {
    if (i >= x) {
      cont++;
    }
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
