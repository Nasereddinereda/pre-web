document.getElementById("next1").addEventListener("click", function() {
  setTimeout(() => {
    document.getElementById("nav2").className =
      "nav d-flex f-r jc-sb cl-bl anim-1-2 bg-gr br-20 pt-5";
    document.getElementById("aboutus").className = "mt-3  anim-1-s2";
    document.getElementById("whoweare").className =
      "cl-wh ft-3 ml-5 mb-no mb-1 anim-2-s2";
    document.getElementById("cadre").className = "cadre ml-6 anim-3-s2";
    document.getElementById("image").className = "image ml-5 mt-2 anim-4-s2";
  }, 700);
});

document.getElementById("next2").addEventListener("click", function() {
  setTimeout(() => {
    document.getElementById("nav3").className =
      "nav d-flex f-r jc-sb cl-bl anim-nav-s3  bg-gr br-20 pt-5";
    document.getElementById("findus").className =
      "w-100 d-flex  jc-c ft-10 cl-wh anim-1-s3 mt-3";
    document.getElementById("map1").className = "w-7 h-60 anim-2-s3 ";
  }, 700);
});

document.getElementById("next3").addEventListener("click", function() {
  setTimeout(() => {
    document.getElementById("nav4").className =
      "nav d-flex f-r jc-sb cl-bl anim-nav-s4  bg-gr br-20 pt-5";
    document.getElementById("con-s4").className = "anim-1-s4";
    document.getElementById("mid-s4").className =
      "anim-2-s4 d-flex f-r jc-ar w-100 pos-2 ";
  }, 700);
});
