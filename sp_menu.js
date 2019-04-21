$(function($) {
  //メニューをwindowの高さいっぱいにする

    $(document).ready(function() {
        $('.btn').click(function(){ //クリックしたら
      if($('.drawr').is(":animated")){
        return false;
      }else{
        $('.drawr').animate({height:'toggle'}); //animateで表示・非表示
        $(this).toggleClass('peke'); //toggleでクラス追加・削除
        return false;
      }
        });
    });

  //別領域をクリックでメニューを閉じる
  $(document).click(function(event) {
    if (!$(event.target).closest('.drawr').length) {
      $('.btn').removeClass('peke');
      $('.drawr').hide();
    }
  });

});
