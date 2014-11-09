$(function() {

    // filter 栏
    var $filterTab = $('.filter_tab').find('a'),
        $filterBox = $('.filter_cont').find('.filter_box');
    $filterTab.click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        $filterBox.eq(index).show().siblings().hide();
    });

    var $filterSet = $('.filter_list').find('a');
    $filterSet.click(function() {
        $(this).addClass('cur').siblings().removeClass('cur');
        var type = $(this).parent().attr('data-type');
        //todo ajax
    });

    var $filterRes = $('.filter_result');
    $filterRes.find('span i').click(function() {
        alert(1);
        //todo ajax
    });
    $filterRes.find('filter_save').click(function() {
        //todo ajax
    });
    $filterRes.find('filter_delete').click(function() {
        //todo ajax
    });

    //

});
