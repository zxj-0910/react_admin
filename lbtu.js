$(function () {
    $.fn.extend({
        lbtu: function (con,dom,addC,leftbtn,rightbtn) {
            var num = 0;
            var timer = null;
            function play() {
                num = num % $(con).children().length;
                $(con).css('left', -800 * num);
                $(dom).eq(num).addClass(addC).siblings().removeClass(addC)
            }
            function playAuto() {
                timer = setInterval(function () {
                    num++;
                    play()

                }, 2000)
            }
            playAuto();
            $(dom).click(function () {
                clearInterval(timer);
                num++;
                var index = $(this).index();
                num = index;
                play();
                playAuto();
            })
            $(leftbtn).click(function () {
                clearInterval(timer);
                num++;
                play();
                playAuto();
            })
            $(rightbtn).click(function () {
                clearInterval(timer);
                num--;
                if (num < 0) {
                    num = $(con).children().length - 1;
                }
                play();
                playAuto();
            })
        },
    })
})