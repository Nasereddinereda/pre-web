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
