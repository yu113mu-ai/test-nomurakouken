

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
  top-mainvisual フェード
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

  function setupMobileFadeSlider(selector, options = {}) {
    const $slider = $(selector);
  
    if (!$slider.length) return;
  
    function toggleSlider() {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const isInitialized = $slider.hasClass("slick-initialized");
  
      if (isMobile && !isInitialized) {
        $slider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 800,
          cssEase: "ease-in-out",
  
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
  
          arrows: false,
          dots: false,
          ...options,
        });
      }
  
      if (!isMobile && isInitialized) {
        $slider.slick("unslick");
      }
    }
  
    toggleSlider();
    $(window).on("resize", toggleSlider);
  }
  
  
  /* ABOUT：施工写真 */
  setupMobileFadeSlider(".next-era-photo");
  
  /* COMPANY */
  setupMobileFadeSlider(".company-photo");
  
  /* RECRUIT */
  setupMobileFadeSlider(".recruit-image");

  // /*=================================================
  //   下層ページcompany フェード
  //  ===================================================*/
  // $(".company-photo").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: true,
  //   speed: 1000,
  //   cssEase: "ease-in-out",

  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   infinite: true,
  //   arrows: false,
  //   dots: false,
  // });

  // /*=================================================
  //  下層ページrecruit フェード
  // ===================================================*/
  // $(".recruit-image").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: true,
  //   speed: 1000,
  //   cssEase: "ease-in-out",

  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   infinite: true,
  //   arrows: false,
  //   dots: false,
  // });



  /*=================================================
   worksshingle 選択した画像を緑に
   ===================================================*/
  $('.thumbnail').click(function () {

    //クリックした画像のsrcを取得
    const image = $(this).find('img').attr('src');

    //大きい画像を変更
    $('#worksshingle-contents-photo').attr('src', image);

    //activeを全て削除
    $('.thumbnail').removeClass('active');

    //クリックしたものだけactive
    $(this).addClass('active');

  })

  /*=================================================
  worksshingle スマホサムネイル
  ===================================================*/

  $(document).on("click", ".works-thumb-prev", function () {
    const grid = $(this).siblings(".works-grid").get(0);

    grid.scrollBy({
      left: -grid.clientWidth,
      behavior: "smooth",
    });
  });

  $(document).on("click", ".works-thumb-next", function () {
    const grid = $(this).siblings(".works-grid").get(0);

    grid.scrollBy({
      left: grid.clientWidth,
      behavior: "smooth",
    });
  });

  // /*=================================================
  //  下層ページabout フェード
  //  ===================================================*/

  // const $nextEraSlider = $(".next-era-photo");

  // function toggleNextEraSlider() {
  //   const isMobile = window.innerWidth <= 768;

  //   if (isMobile && !$nextEraSlider.hasClass("slick-initialized")) {
  //     $nextEraSlider.slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //       dots: false,
  //       infinite: true,
  //       autoplay: false,
  //       swipe: true,
  //       touchMove: true,
  //       fade: true,
  //       speed: 500,
  //       cssEase: "ease-in-out",
  //     });
  //   }

  //   if (!isMobile && $nextEraSlider.hasClass("slick-initialized")) {
  //     $nextEraSlider.slick("unslick");
  //   }
  // }

  // toggleNextEraSlider();
  // $(window).on("resize", toggleNextEraSlider);


  /*=================================================
 アコーディオン
 ===================================================*/

  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.recruit-faq-list .faq-button').click(function () {
    $(this).closest('dt').next('.faq-answer').slideToggle();
  });
});













