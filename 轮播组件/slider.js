/**
 * Created by Administrator on 2015/10/22.
 */
(function (){
    var data={
        container:'container',
        speed:1000,
        delay:5000,
        keys:true,
        dots:true,
        prev:'prev',
        prevHandler:function (){console.log("prev")},
        next:'next',
        nextHandler:function (){console.log("next")}
    };
    slider(data);
})();

function slider(data){
    var mySlider=$('.'+data.container).unslider({
        speed: data.speed,                //  动画切换的速度
        delay: data.delay,               //   动画切换的间隔
        keys: data.keys,                     //  是否允许键盘的左右键控制切换
        dots: data.dots                     //   是否显示点导航
    });

    var fun=mySlider.data('unslider');

    //设置控制向前切换的按钮
    if(data.prev){
        $('.'+data.prev).click(function(){
            fun['prev']();
            typeof (data.prevHandler)==='function'&&data.prevHandler();
        });
    }

    //设置控制向后切换的按钮
    if(data.next) {
        $('.' + data.next).click(function () {
            fun['next']();
            typeof (data.nextHandler)==='function'&&data.nextHandler();
        });
    }
}
