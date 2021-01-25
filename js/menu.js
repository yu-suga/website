// ハンバーガーメニューボタン処理

$(function () {
  $(".mobile-menu").hide();
  $(".menu-icon").click(function () {
    $("nav").toggle(100);
  });
});
