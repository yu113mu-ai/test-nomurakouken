

$(function () {

  /*=================================================
  ハンバーガ―メニュー home reason contact
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $(".nav a").on("click", function () {
    $("header").toggleClass("open");
  });



   /*=================================================
  top-mainvisual スライダー
  ===================================================*/
  
  $(".bg-slider").slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true, // 無限スライド
    arrows: false, // 矢印
    dots: false,
    fade: true,
  speed: 1000,
  cssEase: "ease-in-out",
    // インジケーター
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
 /*=================================================
  worksshingle 選択した画像を緑に
  ===================================================*/
  $('.thumbnail').click(function(){

    //クリックした画像のsrcを取得
    const image = $(this).find('img').attr('src');

    //大きい画像を変更
    $('#worksshingle-contents-photo').attr('src', image);

    //activeを全て削除
    $('.thumbnail').removeClass('active');

    //クリックしたものだけactive
    $(this).addClass('active');

});

   /*=================================================
  アコーディオン
  ===================================================*/

    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.recruit-faq-list .faq-button').click(function () {
      $(this).closest('dt').next('.faq-answer').slideToggle();
  });
  });













