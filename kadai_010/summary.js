$(function() {
// id属性change-colorをクリックしたら、id属性targetの文字色を赤色に変える
$("#change-color").on("click", function() {
    $("#target").css("color", "red");
});
// id属性change-textをクリックしたら、id属性targetの文字を「Hello!」と変える
$("#change-text").on("click", function() {
    $("#target").text("Hello!")
});

// id属性fade-outをクリックしたら、id属性targetを2秒かけてフェードアウトする
$("#fade-out").on("click", function() {
    $("#target").fadeOut(2000);
});

// id属性fade-inをクリックしたら、id属性targetを2秒かけてフェードインする
$("#fade-in").on("click",function(){
    $("#target").fadeIn(2000);
});

});