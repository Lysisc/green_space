$(function() {

    // 首页导航hover
    var $tab = $('#index_nav').find('.tab'),
        $tabBox = $('#index_nav').find('.tab_box'),
        navOffsetLeft = $('#index_nav').offset().left,
        isHover = false;

    $tab.hover(function() {
        var index = $(this).index('.tab'),
            offsetLeft = $(this).offset().left;
        $tabBox.eq(index).show().siblings('.tab_box').hide();
        $tabBox.eq(index).css('left', offsetLeft - navOffsetLeft + 10);
        $(this).addClass('on');
    }, function() {
        $(this).removeClass('on');
        var index = $(this).index('.tab');
        setTimeout(function() {
            if (!isHover) {
                $tabBox.eq(index).hide();
            }
        }, 100);
    });

    $tabBox.hover(function() {
        var index = $(this).index('.tab_box');
        $tab.eq(index).addClass('on');
        isHover = true;
    }, function() {
        $tab.removeClass('on');
        $(this).hide();
        isHover = false;
    });

    // 首页列表hover
    var $newBox = $('.new_box');

    $newBox.hover(function() {
        $(this).addClass('cover');
    }, function() {
        $(this).removeClass('cover');
    });

});
