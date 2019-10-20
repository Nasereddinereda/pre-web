$(".smt").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

// scroll
// $(document).ready(function() {
//   $(this).scrollTop(0);
// });
// document.documentElement.scrollTop = 0;

// var interval = setInterval(function() {
//   if (window.location.hash) window.location = window.location.hash;
// }, 100);
// setTimeout(function() {
//   clearInterval(interval);
// }, 1000);
