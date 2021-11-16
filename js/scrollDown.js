var $menu2 = document.querySelector("#menu2");
var $section2 = document.querySelector("#section2");

// 브랜드기획 메뉴로 슈웅 이동
$menu2.addEventListener("click", onClickGoToSlider)
function onClickGoToSlider(e){
    e.preventDefault();
    var posY = $section2.offsetTop;
    TweenMax.to(window, 0.4, {scrollTo:{y: posY}});
}