window.history.scrollRestoration = "manual";

var anim_map = false;

function anim1() {
  setTimeout(() => {
    document.getElementById("nav2").className =
      "nav d-flex f-r jc-sb cl-bl anim-1-2 bg-gr br-20 pt-5";
    if (document.body.offsetWidth > 768) {
      document.getElementById("aboutus").className = "mt-3  anim-1-s2";
      document.getElementById("whoweare").className =
        "cl-wh ft-3 ml-5 mb-no mb-1 anim-2-s2";
    } else {
      document.getElementById("aboutus").className = "mt-mob anim-1-s2-mob ";
      document.getElementById("whoweare").className =
        "cl-wh ft-3 ml-5 mb-no mb-1 anim-2-s2-mob";
    }

    document.getElementById("cadre").className = "cadre ml-6 anim-3-s2";
    document.getElementById("image").className = "image ml-5 mt-2 anim-4-s2";
  }, 700);
}

function anim2() {
  setTimeout(() => {
    document.getElementById("nav3").className =
      "nav d-flex f-r jc-sb cl-bl anim-nav-s3  bg-gr br-20 pt-5";

    if (document.body.offsetWidth > 768) {
      document.getElementById("findus").className =
        "w-100 d-flex  jc-c ft-10 cl-wh anim-1-s3 mt-3";
      if (anim_map === false) {
        document.getElementById("map1").className = "w-7 h-60 anim-2-s3 ";
      }
    } else {
      document.getElementById("findus").className =
        "w-100 d-flex  jc-c ft-10 cl-wh anim-1-s3-mob mt-3";
      if (anim_map === false) {
        document.getElementById("map1").className = "w-7 h-60 anim-2-s3-mob ";
      }
    }
  }, 700);
}

function anim3() {
  anim_map = true;
  setTimeout(() => {
    document.getElementById("nav4").className =
      "nav d-flex f-r jc-sb cl-bl anim-nav-s4  bg-gr br-20 pt-5";
    document.getElementById("con-s4").className = "anim-1-s4 d-flex d-col ";
    document.getElementById("mid-s4").className =
      "anim-2-s4 d-flex f-r jc-ar w-100 pos-2 mob-adr ";
  }, 700);
}

function anim4() {
  setTimeout(() => {
    document.getElementById("anim-foot").className = "anim-foot";
  }, 700);
}

document.getElementById("next1").addEventListener("click", anim4);
document.getElementById("chev-down").addEventListener("click", anim1);
document.getElementById("next2").addEventListener("click", anim2);
document.getElementById("next3").addEventListener("click", anim3);
document.getElementById("next4").addEventListener("click", anim4);

document.getElementById("addr-esse").addEventListener("click", anim2);
document.getElementById("about-us").addEventListener("click", anim1);
document.getElementById("info-rmation").addEventListener("click", anim3);
document.getElementById("info-rmation").addEventListener("click", function() {
  if (document.body.offsetWidth > 768) {
    document.getElementById("map1").className = "w-7 h-60 anim-without ";
  } else {
    document.getElementById("map1").className = "w-7 h-60 anim-without-mob ";
  }
});
document.getElementById("con-nous").addEventListener("click", anim4);

document.getElementById("addr-esse-1").addEventListener("click", anim2);
document.getElementById("about-us-1").addEventListener("click", anim1);
document.getElementById("info-rmation-1").addEventListener("click", anim3);
document.getElementById("info-rmation-1").addEventListener("click", function() {
  if (document.body.offsetWidth > 768) {
    document.getElementById("map1").className = "w-7 h-60 anim-without ";
  } else {
    document.getElementById("map1").className = "w-7 h-60 anim-without-mob ";
  }
});
document.getElementById("con-nous-1").addEventListener("click", anim4);

document.getElementById("addr-esse-2").addEventListener("click", anim2);
document.getElementById("about-us-2").addEventListener("click", anim1);
document.getElementById("prev-3").addEventListener("click", anim1);
document.getElementById("info-rmation-2").addEventListener("click", anim3);
document.getElementById("con-nous-2").addEventListener("click", anim4);

document.getElementById("addr-esse-3").addEventListener("click", function() {
  setTimeout(() => {
    document.getElementById("nav3").className =
      "nav d-flex f-r jc-sb cl-bl anim-nav-s3  bg-gr br-20 pt-5";

    if (document.body.offsetWidth > 768) {
      document.getElementById("findus").className =
        "w-100 d-flex  jc-c ft-10 cl-wh anim-1-s3 mt-3";
    } else {
      document.getElementById("findus").className =
        "w-100 d-flex  jc-c ft-10 cl-wh anim-1-s3-mob mt-3";
    }
  }, 700);
});
document.getElementById("prev-4").addEventListener("click", function() {
  setTimeout(() => {
    document.getElementById("nav3").className =
      "nav d-flex f-r jc-sb cl-bl anim-nav-s3  bg-gr br-20 pt-5";

    if (document.body.offsetWidth > 768) {
      document.getElementById("findus").className =
        "w-100 d-flex  jc-c ft-10 cl-wh anim-1-s3 mt-3";
    } else {
      document.getElementById("findus").className =
        "w-100 d-flex  jc-c ft-10 cl-wh anim-1-s3-mob mt-3";
    }
  }, 700);
});
document.getElementById("about-us-3").addEventListener("click", anim1);
document.getElementById("prev-3").addEventListener("click", anim1);
document.getElementById("info-rmation-3").addEventListener("click", anim3);
document.getElementById("con-nous-3").addEventListener("click", anim4);

document.getElementById("addr-esse-4").addEventListener("click", anim2);
document.getElementById("about-us-4").addEventListener("click", anim1);
document.getElementById("info-rmation-4").addEventListener("click", anim3);
document.getElementById("info-rmation-4").addEventListener("click", function() {
  if (document.body.offsetWidth > 768) {
    document.getElementById("map1").className = "w-7 h-60 anim-without ";
  } else {
    document.getElementById("map1").className = "w-7 h-60 anim-without-mob ";
  }
});
// document.getElementById("con-nous-4").addEventListener("click", anim3);
// document.getElementById("con-nous-4").addEventListener("click", function() {
//   if (document.body.offsetWidth > 768) {
//     document.getElementById("map1").className = "w-7 h-60 anim-without ";
//   } else {
//     document.getElementById("map1").className = "w-7 h-60 anim-without-mob ";
//   }
// });
