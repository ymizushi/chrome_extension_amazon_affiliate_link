$(function() {
    $("#save_affiliate_key_list").click(function() {
        var affiliate_key_list = $('#affiliate_key_list').val();
        localStorage.setItem("affiliate_key_list", affiliate_key_list);
        alert("saved");
    });

    var affiliate_key_list = localStorage.getItem("affiliate_key_list");
    $('#affiliate_key_list').val(affiliate_key_list);
});
