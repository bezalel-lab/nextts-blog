// ページを開くたびに、ローカルストレージからデータを取得して各inputに復元する。
let input = jQuery(".form__input");

input[0].value = localStorage.getItem("yearMonth")

for (let i = 1; i < 5; i++) {
input[i].value = localStorage.getItem("date" + i);

input[i + 4].value = localStorage.getItem("amount" + i);

input[i + 8].value = localStorage.getItem("remark" + i);
}

displayResults();

jQuery("input").on("change", function() {
  // inputの入力値が変化するたびに、
  // 全てのinputの配列を取得して、変数inputに代入する。
  let input = jQuery(".form__input");

  // inputの最初の値であるinput[0].valueは年と月のデータ。
  // ローカルストレージのキーとしてyearMonthを追加。その値を年と月のデータにする。
  localStorage.setItem("yearMonth", input[0].value);

  for (let i = 1; i < 5; i++) {
    // 上と同様の処理をループで実行。
    // date、amount、remarkはそれぞれ4まであるため、"date" + i などでキーを命名する。
    // 配列の該当箇所からデータを取得するために、input[i + 4] などとしている
    localStorage.setItem("date" + i, input[i].value);
    localStorage.setItem("amount" + i, input[i + 4].value);
    localStorage.setItem("remark" + i, input[i + 8].value);
  }
  displayResults();
})

function displayResults() {
  let total = parseInt(Number(localStorage.getItem("amount1")) + Number(localStorage.getItem("amount2")) + Number(localStorage.getItem("amount3")) + Number(localStorage.getItem("amount4")));
  
  jQuery(".calculate__total").text(total);

  jQuery(".calculate__text-month").text(localStorage.getItem("yearMonth"));

  for (let i = 1; i < 5; i++) {
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
  for (let i = 1; i < 5; i++) {
    if (localStorage.getItem("date" + i)) {
      jQuery(".text__content" + i).addClass("is-show");
    } else {
      jQuery(".text__content" + i).removeClass("is-show");
    }
  }
}
