if(!document.getElementsByClassName){
    document.getElementsByClassName = function(className, element){
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i=0; i<children.length; i++){
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j=0; j<classNames.length; j++){
                if (classNames[j] == className){
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}
//学校介绍划过效果
//     $(".c-oul li div").mouseover(function () {
//        $(this).children("p").animate({"bottom":0},0);
//     });
//     $(".c-oul li div").mouseout(function () {
//         var _height=-$(this).children("p").height();
//         $(this).children("p").animate({"bottom":_height},0)
//     });

       $(".c-oul li div").hover(function () {
           var _height=$(this).children("p").height();
           $(this).children("p").stop().slideToggle({height:_height})
       },function () {
           $(this).children("p").stop().slideToggle({height:0});
       })

//获取li初始宽度
var _width=$(".h-teacher-list li").width();
var _length=$(".h-teacher-list li").length;
//师资团队列表初始化
$(".h-teacher-list li").css("position","absolute");
$(".h-teacher-list li").map(function(index,item){
    $(item).css("left",index*_width);
});
//师资团队列表点击效果
$(".h-teacher-list li span").click(function(){
    $(".h-teacher-list li").map(function(index,item){
        $(item).css("left",index*_width);
    });
    var _left=parseInt($(this).parent().css("left"));
    $(this).parent().addClass("active").css({"left":_left-10,"top":-10})
        .siblings().removeClass("active")
        .css("top",0);
});

//师资团队前后按钮点击效果
var _index=0;
$(".h-prev").mouseover(function(){
    $(".h-next").removeClass("on");
    $(this).addClass("on");
});
$(".h-next").mouseover(function(){
    $(".h-prev").removeClass("on");
    $(this).addClass("on");
});
$(".h-prev").mouseout(function(){
    $(this).removeClass("on");
});
$(".h-next").mouseout(function(){
    $(this).removeClass("on");
});
$(".h-prev").click(function(){
    clearClass();
    if(_index==0){
        return;
    }
    _index--;
    $(".h-teacher-list ul").animate({"left":-_index*_width},1000);
});
$(".h-next").click(function(){
    clearClass();
    if(_index==_length-5){
        return;
    }
    _index++;
    $(".h-teacher-list ul").animate({"left":-_index*_width},1000);
});

function clearClass(){
    $(".h-teacher-list li").map(function(index,item){
        $(item).css("left",index*_width);
        $(item).removeClass("active");
    });
}

$(".l-tit6 dd").mouseover(function(){

    $(this).addClass("on").siblings("dd").removeClass("on");
    $(this).parent().parent().siblings().children("dl").children("dd").removeClass("on");

})



    var tit6 = document.getElementsByClassName("l-tit6")[0];
    var dd = tit6.getElementsByTagName("dd");
    var conten = document.getElementsByClassName("l-conten");

    for(var i=0;i<dd.length;i++){
        dd[i].index = i;
        dd[i].onmouseover = function(){
            for(var i=0;i<dd.length;i++){
                conten[i].style.display = "none";
            }
            conten[this.index].style.display = "block";
        }
    }



$(".h-desc li").mouseenter(function(){
    $(this).children(".h-desc-content").addClass("on");
    $(this).siblings().children(".h-desc-content").removeClass("on");
});
$(".h-desc li").mouseleave(function(){
    $(this).children(".h-desc-content").removeClass("on");
});
