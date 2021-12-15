// ページを開くたびに、ローカルストレージからデータを取得して各inputに復元する。
let input = jQuery(".form__input");

input[0].value = localStorage.getItem("yearMonth")

for (let i = 1; i < 16; i++) {
input[i].value = localStorage.getItem("date" + i);

input[i + 15].value = localStorage.getItem("amount" + i);

input[i + 30].value = localStorage.getItem("remark" + i);
}

// 給与計算結果表示
displayResults();

// inputの入力値が変化するたびに
jQuery("input").on("change", function() {
  // 全てのinputの配列を取得して、変数inputに代入する。
  let input = jQuery(".form__input");

  // inputの最初の値であるinput[0].valueは年と月のinputの値。
  // ローカルストレージのキーとしてyearMonthを追加。その値を年と月のinputの値にする。
  localStorage.setItem("yearMonth", input[0].value);

  for (let i = 1; i < 16; i++) {
    // 上と同様の処理をループで実行。
    // date、amount、remarkはそれぞれ4まであるため、"date" + i などでキーを命名する。
    // 配列の該当箇所からデータを取得するために、input[i + 4] などとしている
    localStorage.setItem("date" + i, input[i].value);
    localStorage.setItem("amount" + i, input[i + 15].value);
    localStorage.setItem("remark" + i, input[i + 30].value);
  }
  displayResults();
})

function displayResults() {
  let total = parseInt(Number(localStorage.getItem("amount1")) + Number(localStorage.getItem("amount2")) + Number(localStorage.getItem("amount3")) + Number(localStorage.getItem("amount4"))).toLocaleString();
  
  jQuery(".calculate__total").text(total);

  jQuery(".calculate__text-month").text(localStorage.getItem("yearMonth"));

  for (let i = 1; i < 16; i++) {
      jQuery(".calculate__text-date" + i).text(localStorage.getItem("date" + i));
      jQuery(".calculate__text-amount" + i).text(localStorage.getItem("amount" + i));
      console.log(localStorage.getItem("remark" + i));
      if (localStorage.getItem("remark" + i)) {
        jQuery(".calculate__text-remark" + i).text("（" + localStorage.getItem("remark" + i) + "）");
      } else {
        jQuery(".calculate__text-remark" + i).text("");
      }
      toggleShowAndHide()
    }
  }

function toggleShowAndHide() {
  for (let i = 1; i < 16; i++) {
    if (localStorage.getItem("date" + i)) {
      jQuery(".text__content" + i).addClass("is-show");
    } else {
      jQuery(".text__content" + i).removeClass("is-show");
    }
  }
}

// コピーボタンを押した時
jQuery(".btn__copy").on("click", function() {
  const btn = this;
  
  // 該当要素内のテキスト + 繋げるためのスラッシュ + 入力した日付 + 改行 + 給与額 + ......といった具合。日付の数だけ用意してある。
  let days = [];

  for (let i = 0; i < 15; i++) {
    if (jQuery(".calculate__text-date" + (i + 1)).text()) {
      days[i] = "    " + input[0].value + "/" + jQuery(".calculate__text-date" + (i + 1)).text() + "\n" + "        " + jQuery(".calculate__text-amount" + (i + 1)).text() + "円" + jQuery(".calculate__text-remark" + (i + 1)).text() + "\n";
    } else {
      days[i] = "";
    }
  }
  
  const text = jQuery(".calculate__text1").text() + "\n" + jQuery(".calculate__text2").text() + "\n\n" + jQuery(".calculate__text3").text() + "\n\n" + jQuery(".calculate__text4").text() + "\n" + days[0] + days[1] + days[2] + days[3] + days[4] + days[5] + days[6] + days[7] + days[8] + days[9] + days[10] + days[11] + days[12] + days[13] + days[14] + "\n" + jQuery(".calculate__text20").text();

  navigator.clipboard.writeText(text);
  jQuery(btn).removeClass("with-transition");
  jQuery(btn).addClass("is-show");
  window.setTimeout(function() {
    jQuery(btn).addClass("with-transition");
    jQuery(btn).removeClass("is-show");
  }, 1400)
})

