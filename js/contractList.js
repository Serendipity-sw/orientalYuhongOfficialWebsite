$(".percentage").each(function () {
    var score = $(this).attr("data-score");
    var radialObj = $(this).radialIndicator({
        radius: 36, //inner radius of indicator
        barColor: 'red',////filled bar color , can be a range also having different colors on different value like {0 : "#ccc", 50 : '#333', 100: '#000'}
        barWidth: 4,//bar width
        initValue: score,
        roundCorner: true,//have round corner in filled bar
        percentage: true,//显示值百分比
        format: '%',
        fontColor: "#2cc4cf", //font color
        fontFamily: null, //defines font family
        fontWeight: 'bold', //defines font weight
        fontSize: null, //define the font size of indicator number
        minValue: 0, //minimum value
        maxValue: 100, //maximum value
    });
});

/**
 * 分页控件脚本事件
 * 创建人:徐建华
 * 创建时间:2016年7月14日21:06:29
 */
$('.M-box1').pagination({
    totalData: 100,
    showData: 5,
    coping: true
});