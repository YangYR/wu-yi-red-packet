/**
 * Created by gyy on 2017-06-07.
 */
$(function(){
    $('.rules').click(function(){
        $('.modal').show();
    });
    $('.close').click(function(){
        $('.modal').hide();
        $('.registerModal').hide();
        $('.openBag').hide();
        $('.bagNone').hide();
    });
    $('.money').click(function(){
        $('.registerModal').show();
    });
    $('.btn1').click(function(){
        $('.openBag').show();
        $('.bagNone').show();
    });
});
