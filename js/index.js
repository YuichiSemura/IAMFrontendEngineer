init()

function init() {
  console.log("init()")

  var animation = 'rubberBand'

  $('a').hover(function(event) {
      event.target.classList.add('animated');
      event.target.classList.add(animation);
    },
    function(event) {
      event.target.classList.remove('animated');
      event.target.classList.remove(animation);
    }
  );
}
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0 // アニメーションをスタートさせる距離
});

wow.init();