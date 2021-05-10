---
title: 'オリジナルWebアプリCordAnalyzerの開発時に実践したこと'
date: '2021-05-10'
---

## 1.DRY原則を適用するため、map()メソッドのループと多次元配列を使用

最初は弦（<String>）とフレット（<Fret>）を次のように記述していました。

        <String>
            <Fret>
             // ✍️↓多次元配列。左の添字で1弦に、右の添字で
             //  0フレット（開放弦）にアクセスしている（「M3」が初期値）
                <div>{stringsDegrees[0][0]}</div>
            </Fret>
            <Fret>
                <div>{stringsDegrees[0][1]}</div> // ✍️同じ弦の1フレット。
            </Fret>
			・ 			・ 			・
            <Fret>
                <div>{stringsDegrees[0][15]}</div>
            </Fret>
             // ✍️15フレットまで繰り返したが、下記の通りそれを後5セット繰り返さなければならない。
        </String>
        <String>
            <Fret>
                <div>{stringsDegrees[1][0]}</div>
            </Fret>
			・
			・
			・
            <Fret>
                <div>{stringsDegrees[1][15]}</div>
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
                <div>{stringsDegrees[5][0]}</div>
            </Fret>
			・
			・
			・
            <Fret>
                <div>{stringsDegrees[5][15]}</div>
            </Fret>
             // ✍️ようやく6弦の15フレットまで終わった。
        </String>
<br>
<br>
これでも間はかなり省略していますが、16 * 6 = 96回 も＜Fret＞を記述しています。全体で300行でした。
それで、mapメソッドによる繰り返しを用いて、以下のようにリファクタリングしました。
<br>
<br>
<br>
const stringsSubscripts = [0, 1, 2, 3, 4, 5]; // ✍️各弦の繰り返し処理に使用。
const degreesSubscripts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; ✍️各フレットの繰り返し処理に使用。

……

        {stringsSubscripts.map((string) => {
            return <String>{degreesSubscripts.map((degree) => {
                return <Fret>{stringsDegrees[string][degree]}</Fret>
            })}</String>
        })}


わずか7行になりました。300行から293行の削減隣、随分すっきりとしました。

<br>
（ちなみにオブジェクトを使用せず配列を用いたのは、プロパティ名に”C”と”C#”をそれぞれ入力すると、”#”の記号があっても区別がつかないのか、エラーが表示されてしまったためです）

<br>
<br>

## 2.モバイル対応とUX
ギターの指板は横長の表示になっています。

モバイル端末での表示を考えて幅の値を決めました。  
iPadの幅である768pxまでは、横スクロールなしで指板全体を見ることができます。


また、スマートフォンで横スクロールする際は、全体ではなく、指板だけがスクロールされるようにしました。

そうすると、スクロールに伴って、コードを入力するためのセレクトボックスや構成音の表示まで画面外に出てしまうことはないため、UXが向上すると思ったからです。

<br>

## 3.その他

- Webフォントの使用

- テストの試み

    - JestとReact-Testing-Libraryの基本は学んでいたので試みましたが、Next.jsだからかTypeScriptだからか、なかなか思うようにいかず......時間も限られていたためひとまず手を引きました。

- ソースコードにコメントをつける（​​​​​​​​​​​​​​​[GitHubでソースコードを見る](https://github.com/BBC-Radiance/nextts-blog/blob/main/pages/posts/codeChecker.tsx)）