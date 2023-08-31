$(document).ready(function () {

    //menu
    $(".navi>li").mouseover(function(){
        $(".submenu").stop().slideDown(500);
    });
    $(".navi>li").mouseout(function(){
        $(".submenu").stop().slideUp(500);
    });

    // imgslide
    var imgs = 2; //imgs에 0,1,2 변수 저장.
    var now = 0;

    start();

    function start(){
        $(".imgslide > a").eq(0).siblings().css({"margin-left":"-1200px"});
        setInterval(function() {slide();}, 3000);
    }

    function slide(){
        now = now == imgs ? 0 : now += 1;

        $(".imgslide>a").eq(now-1).css({"margin-left":"-1200px"});
        $(".imgslide>a").eq(now).css({"margin-left":"0px"});
    }

    // tabmenu(공지사항/갤러리)
    $(".tabmenu>li>a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
});