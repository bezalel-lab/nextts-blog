// ⭕️CSSの反映によるスクロールの戻りを防ぐための一時的なコード。
// let id = "#contact"; //⭕️移動先のセクションIDをここに入力する。
// let position = 0;
// let header = jQuery(".header").innerHeight();// - 700
// function scroll() {
//   console.log("Interval code ran.");
//   if ( window.scrollY > position - header + 1 | window.scrollY < position - header - 1 ) {
//     console.log("Scroll code ran.");
//     position = jQuery(id).offset().top;
//     jQuery("html, body").animate({
//       scrollTop: position - header + 50 //この最後の値を設定して、手動で位置を調整可能
//     }, 200)
//     }
//   };

//   nIntervId = setInterval(scroll, 1000); //⭕️最後の値が、何秒に一度スクロールするか。




//✍️デバッグは、DevToolsの「ソース」の右側の「ローカル」で変数の値を見ることができる。    [その時は、ブレークポイントを変数定義のすぐ後の行に指定していた。]


const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 40,
  width: 400,
  // centerMode: true,
  // centerPadding: '10%',
  
  breakpoints: {
    1: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // 768px以上の場合 ←⭕️これ、768px*以下*の間違いではない？（♻️少なくともversionが4の場合）✍️Swiperのversion4のCDNと、メディアクエリの使い方については、スニペットに登録しておきたい。
    768: {
      width: 274,
      spaceBetween: 24,
      // width: auto;

      // slidesPerView: 3,
      // spaceBetween: 40,
    }
  },
  loop: true,
  loopFillGroupWithBlank: true,
  
  // slidesPerView: 3,
  // spaceBetween: 40,
  // Optional parameters
  // direction: "vertical",
  

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




// const mediaQuery = window.matchMedia('(max-width: 767px)')

// function handleTabletChange(e) {
//   // メディアクエリがtrueかどうかを確認
//   if (e.matches) {
//     // 次に、メッセージをアラート
//     swiper.width = 274;
//   }
// }

// // イベントリスナーを登録
// mediaQuery.addEventListener("change", handleTabletChange);

// // 初期チェック
// handleTabletChange(mediaQuery);






new WOW().init();

// ヘッダーのドロワーメニュー
jQuery(".header__drawer-icon").on('click', function() {
  jQuery(this).toggleClass("is-open");
  jQuery(".header__drawer-items-wrapper").toggleClass("is-open");
  jQuery(".header__drawer__background").toggleClass("is-open");
})
// ドロワーの背景をクリック時にもドロワーを閉じる
jQuery(".header__drawer__background").on('click', function() {
  jQuery(".header__drawer-icon").toggleClass("is-open");
  jQuery(".header__drawer-items-wrapper").toggleClass("is-open");
  jQuery(".header__drawer__background").toggleClass("is-open");
})

// スムーススクロール
jQuery("a[href^='#']").on("click", function() {
  let id = jQuery(this).attr("href");
  let position = 0;
  if ( id != "#") {
    position = jQuery(id).offset().top;
  }
  let header = jQuery(".header").innerHeight();
  console.log(id);
  console.log(position);

  // ドロワーが開かれていても、閉じてからスクロールするために
  jQuery(".header__drawer-icon").removeClass("is-open");
  jQuery(".header__drawer-items-wrapper").removeClass("is-open");
  jQuery(".header__drawer__background").removeClass("is-open");

  jQuery("html, body").animate({
    scrollTop: position - header
  }, 500)
});

// totop icon
jQuery(window).on("scroll", function() {
  if ( 250 < jQuery(this).scrollTop()) {
    jQuery('.totop').addClass("is-show");
  } else {
    jQuery('.totop').removeClass("is-show");
  }
})

// アコーディオン 💎💎スニペットに登録する可能性あり
jQuery(".qanda__question__wrapper").on("click", function() {
  jQuery(this).children(".qanda__icon").toggleClass("is-open");
  jQuery(this).next().slideToggle();
})

//Accessのボタン表示切り替え
const mediaQuery = window.matchMedia('(max-width: 972px)')

// function handleTabletChange(e) {
  // メディアクエリがtrueかどうかを確認
  // if (e.matches) {
  //   jQuery(".btn__access__left").toggleClass("is-hidden");
  //   jQuery(".btn__access__bottom").addClass("is-hidden");
    // jQuery(".header__drawer__background").toggleClass("is-open");


    // alert();
  // } else {
    // jQuery(".btn-dark btn__access__bottom").toggleClass("is-show");
    // jQuery(".header__drawer__background").toggleClass("is-open");

//   }
// }

// イベントリスナーを登録
// mediaQuery.addEventListener("change", handleTabletChange);

// // 初期チェック
// handleTabletChange(mediaQuery);


// Contact のボタンの色反転制御
const requiredInputAndTextarea = jQuery(".required-field");
const requiredCheckbox = document.getElementById("agreement__checkbox");

function handleChange() {
  activateBtn();
}

// 全てのinput要素に値が入力され、チェックボックスにチェックがついているかどうかで、色を反転させるクラスをつけ外しする。
function activateBtn() {
    // バニラJSで書いた場合。
    const btnSubmit = document.getElementsByClassName("form__submit")[0];
  if (jQuery(requiredInputAndTextarea[0]).val() && jQuery(requiredInputAndTextarea[1]).val() && jQuery(requiredInputAndTextarea[2]).val() && requiredCheckbox.checked) {
    //バニラで書いてみた場合。上の定数定義と合わせて3行。
    btnSubmit.removeAttribute("disabled");
    btnSubmit.classList.add("is-active");
    // jQueryで書いた場合。2行
    // jQuery(".form__submit").prop("disabled", false);
    // jQuery(".form__submit").addClass("is-active");
  } else {
    btnSubmit.setAttribute("disabled", true);
    btnSubmit.classList.remove("is-active");
  }
}

jQuery(requiredInputAndTextarea).on("change", function() {
  activateBtn();
})

// submit時にGoogleフォームの画面に遷移しないようにする。
$(document).ready(function () {
  $("#form").submit(function (event) {
    var formData = $("#form").serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScfnrRrFj23Q4t-z99FlRPy_n_gzz-qf9OqHNKpR6Q8YdSUWw/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".contact__form").slideUp();
          // window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        },
      },
    });
    event.preventDefault();
  });
});