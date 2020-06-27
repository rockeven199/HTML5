(function(){
    var $ = (window.$ = {});
    $.web = "hello world";
    var url = "baidu.com";
    $.getUrl = function(){
    return url;
    };
}.bind(window)());