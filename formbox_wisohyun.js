//문의신청
$(".btn").on("click", function() {
  $(".form-box").show();
  $("body").css("background", "#777");
  $(this).css("opacity", "0.4");
});

//엑스버튼
$(".fa-times").on("click", function() {
  $(this)
    .parent()
    .hide();
  $("body").css("background", "none");
  $(".btn").css("opacity", "1");
});

//전문보기
$(".inquiry span").on("click", function() {
  $(this)
    .parent()
    .next()
    .toggle();
});
