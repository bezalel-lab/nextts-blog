---
title: 'オリジナルWebアプリCordAnalyzerの開発時に実践したこと'
date: '2021-05-10'
---

## 1.DRY 原則を適用するため、map()メソッドのループと多次元配列を使用

最初は弦（＜ String ＞）とフレット（＜ Fret ＞）を次のように記述していました。

```javascript
<String>
  <Fret>
```
　// ✍️↓ 多次元配列。左の添字で 1 弦を表す配列に、右の添字で1弦の配列の<br>
　//0 フレット（開放弦）にアクセスしている（初期値は長3度を意味する「M3」）
```javascript
    <div>
      {stringsDegrees[0][0]}
    </div>
  </Fret>
  <Fret>
    // ✍️同じ弦の1フレット。
    <div>
      {stringsDegrees[0][1]}
    </div>
  </Fret>
  ・
  ・
  ・
  <Fret>
    <div>
      {stringsDegrees[0][15]}
    </div>
  </Fret>
```

　// ✍️15 フレットまで繰り返したが、下記の通りそれを後 5 セット繰り返さなければならない。

```javascript
</String>
<String>
  <Fret>
    <div>
      {stringsDegrees[1][0]}
    </div>
  </Fret>
  ・
  ・
  ・
  <Fret>
    <div>
      {stringsDegrees[1][15]}
    </div>
  </Fret>
</String>
  ・
  ・
  ・
  ・
  ・
  ・
<String>
  <Fret>
    <div>
      {stringsDegrees[5][0]}
    </div>
  </Fret>
  ・
  ・
  ・
  <Fret>
    <div>
      {stringsDegrees[5][15]}
    </div>
  </Fret>
  // ✍️ようやく6弦の15フレットまで終了
</String>
```

<br>
<br>
これでも間はかなり省略していますが、16 * 6 = 96回 も＜Fret＞を記述しています。全体で300行もありました。
それで、mapメソッドによる繰り返しを用いて、以下のようにリファクタリングしました。
<br>
<br>
<br>

// ✍️ 各弦の繰り返し処理に使用。<br>
const stringsSubscripts = [0, 1, 2, 3, 4, 5];<br>
// ✍️ 各フレットの繰り返し処理に使用。<br>
const degreesSubscripts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

……

{stringsSubscripts.map((string) => {<br>
　return ＜String＞{degreesSubscripts.map((degree) => {<br>
　　return ＜Fret＞{stringsDegrees[string][degree]}＜/Fret＞<br>
　})}＜/String＞<br>
})}

<br>

<u>300 行から 293 行減って 7 行となり</u>、随分すっきりとしました。

<br>
（今回オブジェクトではなく配列を用いました。オブジェクトのプロパティ名に”C”と”C#”をそれぞれ入力すると、”#”の記号があっても区別がつかないのか、エラーが表示されてしまったためです）

<br>
<br>

## 2.モバイル対応と UX

ギターの指板の幅は、モバイル端末での表示を考えて値を決めました。  
iPad の幅である 768px までは、横スクロールなしで指板全体を見ることができます。

また、スマートフォンなどで横スクロールする際は、全体ではなく、指板だけがスクロールされるようにしました。

そうすると、スクロールに伴ってコード入力用のセレクトボックスや構成音の表示まで画面外に出てしまうことはないため、UX が向上すると思ったからです。

<br>

## 3.その他

- Web フォントの使用

- React の公式ドキュメントにある「[React の流儀](https://ja.reactjs.org/docs/thinking-in-react.html)」や、Next.js の公式ドキュメントをよく読み返し、ベストプラクティスの実践を意識すること

- テストの「試み」

  - Jest と React-Testing-Library の基本は学んでいたので試みましたが、Next.js だからか TypeScript だからか、なかなか思うようにいかず......時間も限られていたため結局ここでは手を引きました。

  - とはいえクロスブラウザのE2Eテストは、WindowsとMacとモバイル端末のChrome、FireFox、WindowsのEdge、MacとモバイルのSafari、そしてモバイルのOperaでも実施しました。

- ソースコードにコメントをつける（​​​​​​​​​​​​​​​[GitHub でソースコードを見る](https://github.com/BBC-Radiance/nextts-blog/blob/main/pages/posts/cordAnalyzer.tsx)）
