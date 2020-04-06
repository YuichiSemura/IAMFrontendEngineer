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

Vue.component('lab-member', Vue.extend({
  props: ['name', 'image', 'text', 'left', 'right'],
  template: '<div class="offset-sm-2 col-sm-8 offset-md-0 col-md-6 p5">' +
    '<div class="tiles-top wow" v-bind:class="{ fadeInLeft: left, fadeInRight: right, tilesTopSem:left, tilesTopNew:right}">' + '<div class="row p5">' + '<div class="col-sm-12 col-md-5 p5 text-center">' +
    '<img v-bind:src="image" alt="img1" class="img-fluid">' +
    '</div>' +
    '<div class="col-sm-12 col-md-7 p5">' + '<div class="row profile">' +
    '<div class="col-sm-12 justify-content-center">' +
    '<h4 class="text-center text-azure">{{name}}</h4>' +
    '</div>' +
    '<div class="col-sm-12">' +
    '<p>{{text}}</p>' +
    '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>'
}))

Vue.component('foot', Vue.extend({
  template: '<div class="container justify-content-center text-center">' +
    '<p>Copyright © Yuichi Semura.</p> ' +
    '</div>'
}))

Vue.component('headbar', Vue.extend({
  template: '<div class="row">' +
    '<h4 class="col-6 text-azure text-left wow fadeInLeft" style="margin: 0; animation-delay: 3s">FOURTEENAGER LAB.</h4>' +
    '<div class="col-6 wow fadeInRight" style="text-align: right; animation-delay: 3s">' +
    '<a href="#">' +
    '<p class="text-azure text-right" style="display: inline;">Contact<i class="fas fa-paper-plane"></i></p>' +
    '</a>' +
    '</div>' +
    '</div>'
}))

Vue.component('nav-bar', Vue.extend({
  template: '<nav class="navbar navbar-expand-sm navbar-dark bg-info mb-1">' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse justify-content-center">' +
    '  <ul class="navbar-nav">' +
    '    <li class="nav-item active">' +
    '      <a class="nav-link">Home</a>' +
    '    </li>' +
    '    <li class="nav-item">' +
    '      <a class="nav-link" href="#">News</a>' +
    '    </li>' +
    '    <li class="nav-item">' +
    '      <a class="nav-link" href="#">Biography</a>' +
    '    </li>' +
    '    <li class="nav-item">' +
    '      <a class="nav-link" href="#">Priscription</a>' +
    '    </li>' +
    '    <li class="nav-item">' +
    '      <a class="nav-link" href="#">Articles & Products</a>' +
    '    </li>' +
    '    <li class="nav-item">' +
    '      <a class="nav-link" data-toggle="modal" href="#gsp-modal">getSemPoem()</a>' +
    '    </li>' +
    '  </ul>' +
    '</div>' +
    '</nav>'
}))

Vue.component('carousel', Vue.extend({
  template: '<div id="carousel-top" class="carousel slide carousel-fade mx-auto wow fadeIn p5" data-interval="4000" data-pause="false" data-ride="carousel" style="animation-delay: 3s">' +
    '<ol class="carousel-indicators">' +
    '<li data-target="#carouselTop" data-slide-to="0" class="active"></li>' +
    '<li data-target="#carouselTop" data-slide-to="1"></li>' +
    '<li data-target="#carouselTop" data-slide-to="2"></li>' +
    '<li data-target="#carouselTop" data-slide-to="3"></li>' +
    '<li data-target="#carouselTop" data-slide-to="4"></li>' +
    '</ol>' +
    '<div class="carousel-inner">' +
    '<div class="carousel-item active">' +
    '  <img src="/assets/slider-1.JPG" alt="img1" class="img-fluid">' +
    '  <div class="carousel-caption mincho d-none d-md-block">' +
    '    <h5>早く大人になりたがる人間と、</h5>' +
    '    <h5>もう大人になってしまった人間。</h5>' +
    '  </div>' +
    '</div>' +
    '<div class="carousel-item">' +
    '  <img src="/assets/slider-2.JPG" alt="img2" class="img-fluid">' +
    '  <div class="carousel-caption mincho d-none d-md-block">' +
    '    <h5>そんな彼らを見ていると、</h5>' +
    '    <h5>自分自身が怖くなるんだ。</h5>' +
    '  </div>' +
    '</div>' +
    '<div class="carousel-item">' +
    '  <img src="/assets/slider-3.JPG" alt="img3" class="img-fluid">' +
    '  <div class="carousel-caption mincho d-none d-md-block">' +
    '    <h5>一生ガキのままで居たいとか考える僕は、</h5>' +
    '  </div>' +
    '</div>' +
    '<div class="carousel-item">' +
    '  <img src="/assets/slider-4.JPG" alt="img4" class="img-fluid">' +
    '  <div class="carousel-caption mincho d-none d-md-block">' +
    '    <h5>どこかで道を踏み外してしまったのだろうか。</h5>' +
    '  </div>' +
    '</div>' +
    '<div class="carousel-item">' +
    '  <img src="/assets/slider-5.JPG" alt="img5" class="img-fluid">' +
    '  <div class="carousel-caption mincho d-none d-md-block">' +
    '    <h5>今でも、あの時のまま。僕はずっとここにいるよ。</h5>' +
    '  </div>' +
    '</div>' +
    '</div>' +
    '<a class="carousel-control-prev" href="#carousel-top" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
    '</a>' +
    '<a class="carousel-control-next" href="#carousel-top" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
    '</a></div>'
}))

Vue.component('gsp-modal', Vue.extend({
  template: '<div id = "gsp-modal"' +
    'class="modal fade"' +
    'tabindex="-1"' +
    'role="dialog"' +
    'aria-labelledby = "gsp-modal-label"' +
    'aria-hidden = "true" > ' +
    '<div class="modal-dialog" role="document">' +
    '  <div class="modal-content">' +
    '    <div class="modal-header justify-content-center">' +
    '      <h5 class="modal-title mincho text-center" id="gsp-modal-label">' +
    '      横井さんが寝ている。' +
    '    </h5>' +
    '  </div>' +
    '  <div class="modal-body mincho text-center">' +
    '    吉川「寝ている横井さんもかわいいな」' +
    '  </div>' +
    '  <div class="modal-footer justify-content-center">' +
    '    <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>' +
    '    <button type="button" class="btn btn-primary">getSemPoem()</button>' +
    '  </div>' +
    ' </div>' +
    '</div>' +
    '</div>'
}))

const person = new Vue({
  el: '#person'
})

const footer = new Vue({
  el: '#footer'
})

const header = new Vue({
  el: '#header'
})

const navbar = new Vue({
  el: '#navbar'
})

const carousel = new Vue({
  el: '#container-main'
})

const body = new Vue({
  el: '#modal'
})

function test() {
  $('#person').append('<lab-member name="新丸 九重" image="/assets/new.JPG" text="　同じく、研究員兼患者。というか同一人物。クソオタク。自己愛が強く、何事にも根拠のない自信がある。CV: 佐倉綾音と後輩キャラに弱い。口癖は「殺してくれ」。" right=true></lab-member>t');
}