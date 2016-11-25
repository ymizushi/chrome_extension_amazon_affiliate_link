$(function() {
    var affiliate_tags = ["hirokikana-22"];
    
    $("a").each(function() {
        if ($(this).attr('href').indexOf("amazon.co.jp") > -1) {
            var affiliate_key_index = Math.floor(Math.random() * affiliate_tags.length);
            var affiliate_key = "tag=" + affiliate_tags[affiliate_key_index];
            var url = decodeURIComponent($(this).attr('href'));
            var replace = "";
            if(url.indexOf("tag=") > -1) {
                replace = url.replace(/tag=[a-z-0-9]+/g, affiliate_key)
            }else if (url.indexOf("?") > -1) {
                replace = url + "&" + affiliate_key;
            }else{
                replace = url + "?" + affiliate_key;
            }
            $(this).attr('href', replace);
        }
    });
});

