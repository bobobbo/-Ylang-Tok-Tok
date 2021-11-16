
var $btnTop = document.querySelector("#btn-top");
var $nav = document.querySelector('#global-nav');


//스무스 스크롤
class SupahScroll {
    constructor(options) {
      this.opt = options || {};
      this.el = this.opt.el ? this.opt.el : '.supah-scroll';
      this.speed = this.opt.speed ? this.opt.speed : 0.1;
      this.init();
    }
  
    init() {
      this.scrollY = 0;
      this.supahScroll = document.querySelectorAll(this.el)[0];
      this.supahScroll.classList.add('supah-scroll');
      this.events();
      this.update();
      this.Animate();
    }
  
    update() {
      if (this.supahScroll === null) return;
      document.body.style.height = `${this.supahScroll.getBoundingClientRect().height}px`;
    }

  
    Animate() {
      this.scrollY += (window.scrollY - this.scrollY) * this.speed;
      this.supahScroll.style.transform = `translate3d(0,${-this.scrollY}px,0)`;
      this.raf = requestAnimationFrame(this.Animate.bind(this));
    }
  
    events() {
      window.addEventListener('load', this.update.bind(this));
      window.addEventListener('resize', this.update.bind(this));
    }}

const supahscroll = new SupahScroll({
    el: 'main',
    speed: 0.1 });


//top button
$btnTop.addEventListener("click", onClickBtnTop);
function onClickBtnTop(e){
    e.preventDefault();
    TweenMax.to(window, 0.45, {scrollTo: {y: 0}, ease: Quad.easeInOut});
}

$(document).on('ready', function() {
  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });
});

// tab캐릭터소개
function openCity(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();