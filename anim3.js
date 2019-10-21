var text = document.getElementById("text");
var newDom = "";
var animationDelay = 6;

var isMobile = false; //initiate as false
// device detection
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  isMobile = true;
}

if (isMobile === "true") {
  var x = 20,
    y = 20;
} else {
  var x = 50,
    y = 50;
}

console.log(x, y);

for (let i = 0; i < text.innerText.length; i++) {
  if (i >= x && text.innerText[i] == " ") {
    newDom += "<br/>";
    x += y;
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
