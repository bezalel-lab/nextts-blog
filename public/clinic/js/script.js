const theWrapper = document.getElementById('swiperWrapper');



window.onload = () => {
  let url = location.href;
  if ( url.match(/front-page.html/) ) {
    const swiper = new Swiper(".swiper", {
                // Optional parameters
            // direction: "vertical",
            loop: true,
            spaceBetween: 65,
            effect: "fade",
          
            // If we need pagination
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          
            // Navigation arrows
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        } else if ( typeof Swiper !== "undefined" ) {
    const swiper = new Swiper(".swiper", {

        slidesPerView: 4,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        speed: 15000,
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            speed: 15000,
          }
        },
        autoplay: {
          delay: 0,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
          slideChangeTransitionStart: function(){
            theWrapper.style.transitionTimingFunction = 'linear';
          }
        },
        });
        }
}




new WOW().init();

// ヘッダーのドロワーメニュー
jQuery(".header__drawer__icon").on('click', function() {
  jQuery(this).toggleClass("is-open");
  jQuery(".header__drawer__items__wrapper").toggleClass("is-open");
  jQuery(".header__drawer__background").toggleClass("is-open");
  //スクロールを無効にする。
  jQuery("body").toggleClass("is-open");
})
// ドロワーの背景をクリック時にもドロワーを閉じる
// jQuery(".header__drawer__background").on('click', function() {
//   jQuery(".header__drawer-icon").toggleClass("is-open");
//   jQuery(".header__drawer__items__wrapper").toggleClass("is-open");
//   jQuery(".header__drawer__background").toggleClass("is-open");
// })

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
          $(".contact-end").addClass("is-visible")
          //↓パンくずリストの現在のページ以外をグレーにする。
          $(".mainvisual__breadcrumb__text:not(.mainvisual__breadcrumb__text__current)").addClass("mainvisual__breadcrumb__gray")
          $(".contact__form").slideUp();
          $(".will-disappear").slideUp();
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

//⭕️⭕️⭕️コンタクトページの時だけ動かせば良いと思うが、上の条件分岐を持ってきて少し触る？    ⭕️⭕️だとしたら、それはまだスニペットに登録できていないので、良いものができたらフォームのスニペットに付け足しても良いだろう。

function handleChange() {
  activateBtn();
}

// 全てのinput要素に値が入力され、チェックボックスにチェックがついているかどうかで、disabled属性をつけ外しする。
function activateBtn() {
    const btnSubmit = document.getElementsByClassName("form__submit")[0];

    const requiredFields = document.getElementsByClassName("required-field");
    console.log(requiredFields);

    let requiredFieldsAsArray = [];
    let valueOfrequiredFieldsAsArray = [];

    //取得したオブジェクトを配列に変換する（Elementオブジェクトで構成された配列が出来上がる）。
    for ( let i in requiredFields) {
      requiredFieldsAsArray.push(requiredFields[i]);
    }

    //各Elementオブジェクトのvalueを取り出して、別の配列にする。
    requiredFieldsAsArray.forEach((currentValue) => {
      valueOfrequiredFieldsAsArray.push(currentValue.value)
    }
    );

    //配列の各要素をまとめて検証して条件分岐するための関数。
    const isEntered = (currentValue) => currentValue !== "";
    
//用意した配列（フォームの各必須項目のvalueが格納されている）が全てNullではないか確認する。
//submitボタンのdisabled属性を付け外しする。
    if (valueOfrequiredFieldsAsArray.every(isEntered)) {
      btnSubmit.removeAttribute("disabled");
    } else {
      btnSubmit.setAttribute("disabled", "");
    }
  }



//元ちゃんからの課題なので、解けたらここからは取り除く。

// const spam = ['apples', 'bananas', 'tofu', 'cats']
// const spam2 = ['oranges', 'strawberries', 'dogs', 'books'];
// let sentence;

//   function mergeStrings( argument ) {
//     argument.forEach ( ( element, index ) => {
//       if ( index === 0 ) {
//         sentence = element + ", "; //最初から加算代入演算子使うと"undefined"が入ってしまう、ここでは = を使用。
//       } else if ( index === spam.length - 1 ) {
//         sentence += "and " + element;
//       } else {
//         sentence += element + ", ";
//       }
//       return sentence
//     });
//   }
  
//   mergeStrings( spam );
//   alert( sentence );