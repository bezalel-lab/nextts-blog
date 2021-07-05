import CordTone from '../../components/cordTone';
import FingerBoard from '../../components/fingerBoard';
import String from '../../components/string';
import Fret from '../../components/fret';
import analyzerStyles from '../../styles/analyzer.module.css';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../components/layout.module.css';
import utilStyles from "../../styles/utils.module.css";
import { nanoid } from "nanoid";

// cordTonesをCordAnalyzer コンポーネントでも使用できるようにするため、ここでグローバル変数として初期化している。
// 最初にこれらの値を入れておくことで、一番初めに読み込んだ時に、初期値のコードCに対応する構成音が表示される。
export let cordTones = '構成音：C, E, G';

let firstStringDegrees = [];
let secondStringDegrees = [];
let thirdStringDegrees = [];
let fourthStringDegrees = [];
let fifthStringDegrees = [];
let sixthStringDegrees = [];
// ↓指板のスタイル用に追加した配列 -> フレット番号表示にも用いた。
// 1、6弦の下にも指板が少し続く見た目を表現するためにまず使用。
// 2、指板の下にフレット番号を表示するためにも使用。
let fretNumbers = [
  '0',
  '1f',
  '2f',
  '⚫︎3f',
  '4f',
  '⚫︎5f',
  '6f',
  '⚫︎7f',
  '8f',
  '⚫︎9f',
  '10f',
  '11f',
  '◉12f',
  '13f',
  '14f',
  '15f',
]; //⚫︎はポジションマーク。12fは⚫︎を二つ入れるスペースがなかったため、◉を使用。
let stringsDegrees = [
  firstStringDegrees,
  secondStringDegrees,
  thirdStringDegrees,
  fourthStringDegrees,
  fifthStringDegrees,
  sixthStringDegrees,
  fretNumbers,
];

// この配列は、この中にあるコード名を手掛かりに、添字を対応させて度数をdegrees配列から取得したり、入力されたコードの構成音を割り出したりするのに使用する。
const cordNames = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];
let cord;
let cordDegree = 0;
let subscript;

export const handleChange = (cordName: string): string => {
  cord = cordName;
  // ↓のちに使用するため、ユーザが<select>で入力したコード名に対応する、配列の添字を取得する。コード名を<select>で入力するたびに、それに応じた度数が表示されるようになる。
  // 取得した添字の数値は別の箇所で、開放弦の度数を表示する際、degrees配列から対応する度数を取り出すために使用する。
  cordNames.forEach((value, index) => {
    // cordNames 配列のその時処理中の値が、cordName と同じであれば、その時のindex（添字）がcordDegree に代入される。同じでない場合はそのままになる。
    cordDegree = value === cordName ? index : cordDegree;
  });

  // 続く処理でコードの構成音をこの配列に入れる。
  // しかし実際に構成音として表示するときに用いるのは、 "構成音：" や ", " を足した後の、cordTones。
  let cordToneArray: string[] = [];
  let subscript: number;

  cordNames.forEach((value, index, array) => {
    // 添字のindexの数値 は、後で + したり - したり、添字調整用の判定に用いたりしたいので、まずそのような計算用のsubscript変数に代入する。コードの構成音の取得などにはsubscriptを用いていく。
    subscript = index;
    // コードの構成音1：ルート。
    if (cordName === array[index]) {
      cordToneArray.push(array[subscript]);
    }
    // コードの構成音2：M3。
    subscript += 4;
    // 添字（subscript）は計算して取得できるが、その数値が11を超えると、音名の配列（cordNames）には12音しかないので、cordNames[12]は undefined となってしまう。
    // そのため subscript % 12 をsubscript の新しい値とし、12になるたびに0 へとリセットされるようにする↓
    subscript = subscript % 12;
    if (cordName === array[index]) {
      cordToneArray.push(', ' + array[subscript]);
    }
    // コードの構成音3：P5。
    subscript += 3;
    subscript = subscript % 12;
    if (cordName === array[index]) {
      cordToneArray.push(', ' + array[subscript]);
    }
  });

  // ここだけ役割が異なるが、これは度数の値を弦ごと、またフレットごとに入力する関数。
  // ここで呼び出すことによって、ユーザがコード名を<select>で変更するたびに（onChange）、入力されたコード名に応じた度数が表示されるようになる。
  inputDegrees();

  // このcordTones 変数を、実際の構成音の表示に使用する。
  // CordAnalyzer コンポーネント内で、props としてCordTone コンポーネントに渡している。
  cordTones =
    '構成音：' + cordToneArray[0] + cordToneArray[1] + cordToneArray[2];
  return cordTones;
};

// この配列はcordNames 配列と対応させて、コード名・音名に応じて度数を割り出せるようにしてある。
// また、実際に度数を表示する際にも使用し、リテラルで記述することによる無駄な繰り返しを避けた。
const degrees = [
  'R',
  'm2',
  'M2',
  'm3',
  'M3',
  'P4',
  '+4',
  'P5',
  'm6',
  'M6',
  'm7',
  'M7',
];

// "C"をルートとした場合の、各弦の開放弦の度数を初期値としている。
// この数値を元に、計算してその時のコードに対する全ての度数を割り出す。
const firstStringSubscripts = [4];
const secondStringSubscripts = [11];
const thirdStringSubscripts = [7];
const fourthStringSubscripts = [2];
const fifthStringSubscripts = [9];
const sixthStringSubscripts = [4];
let strings = [
  firstStringSubscripts,
  secondStringSubscripts,
  thirdStringSubscripts,
  fourthStringSubscripts,
  fifthStringSubscripts,
  sixthStringSubscripts,
];

const inputDegrees = () => {
  for (let i = 0; i < 6; i++) {
    stringsDegrees[i] = []; // 関数を実行するごとに配列が長くならないよう、最初に空にする。
    const populateDegrees = () => {
      for (let j = 0; j < 16; j++) {
        subscript = subscript % 12;
        stringsDegrees[i].push(degrees[subscript]);
        subscript += 1;
      }
    };

    // （その時入力されているコード名に対応する度数 === その時処理している弦の開放弦の度数） であれば、populateDegrees() で順に度数を埋めていく。
    // この第一のブロックは、その時のコード名（ルートの音）が開放弦の音と同じ場合の処理。
    if (cordDegree === stringsDegrees[i][0]) {
      populateDegrees();
      // この第二のブロックは、その時のコード名（ルートの音）が開放弦の音よりも低い場合の処理。
    } else if (cordDegree < stringsDegrees[i][0]) {
      // この計算式によって、すでに分かっている値から、開始地点（開放弦の音）に対応する度数を割り出すことができる。
      // それをsubscript に入れた状態でpopulateDegrees() を実行するので、stringsDegrees[i]配列に順番に正しい度数の値が埋められていくことになる。
      // 下のCordAnalyzer コンポーネントの中では、そうして正しい値で埋まった配列に対応する添字を当てることで、DRY原則に沿う仕方で全ての度数を表示している。
      subscript = strings[i][0] - cordDegree;
      populateDegrees();
      // この第三のブロックは、その時のコード名（ルートの音）が開放弦の音よりも高い場合の処理。
    } else {
      subscript = strings[i][0] + 12 - cordDegree;
      populateDegrees();
    }
  }
};

inputDegrees(); // アプリを開いた時に度数の初期値を表示するために、ここで実行している。

// <String>や<Fret>の表示を、map() の繰り返しを使用して、DRY原則に沿って行うための配列。
const stringsSubscripts = [0, 1, 2, 3, 4, 5, 6];
const degreesSubscripts = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
];
const openTones = ['E', 'B', 'G', 'D', 'A', 'E'];

export const CordAnalyzer = () => {
  const [cordTone, setCordTone] = useState('C');
  return (
    <div className={analyzerStyles.background}>
      <div
        className={`${analyzerStyles.analyzer} ${analyzerStyles.cordSelector}`}
      >
        <div className={`${analyzerStyles.wrapper}`}>
          <span className={analyzerStyles.heading}>Cord Analyzer</span>
          <br />
          <div className={analyzerStyles.cordSelector}>
            コード：
            {/* コードを変更するごとにonChangeでコードトーン3つの取得、および度数表示切り替えを行う */}
            <select
              id="cordSelector"
              name="cordSelector"
              title="コードを選択"
              className={`${analyzerStyles.cordSelector} ${analyzerStyles.select}`}
              onChange={(e) => setCordTone(handleChange(e.target.value))}
            >
              <option>C</option>
              <option>C#</option>
              <option>D</option>
              <option>D#</option>
              <option>E</option>
              <option>F</option>
              <option>F#</option>
              <option>G</option>
              <option>G#</option>
              <option>A</option>
              <option>A#</option>
              <option>B</option>
            </select>
            <CordTone cordTones={cordTones} />
          </div>
          {/* 以下は、指板とフレット番号 */}
          <div className={`${analyzerStyles.scroll}`}>
            <FingerBoard>
              {/* <String>をmap() による繰り返しで6つ生成する。 */}
              {stringsSubscripts.map((string, index) => {
                const eachClassName = 'string' + (index + 1);
                return (
                  <String key={nanoid()} className={` ${'string'}`}>
                    {degreesSubscripts.map((degree) => {
                      // map() による繰り返しで6つ生成した<String>の中に、同じくmap() による繰り返しで16の<Fret>を表示していく処理の開始地点。
                      if (degree === 0) {
                        // このブロックはdegree === 0 だが、この場合、一番左の表示に関わる処理なので、そこに1Eや4Dなどと表示されるようにする。
                        // 各弦の番号と開放弦の音名を結合したものを生成する。
                        return (
                          <Fret key={nanoid()}
                            className={`${analyzerStyles.fret} ${analyzerStyles.outside}`}
                          >
                            <div className={analyzerStyles.degree}>
                              {index + 1 + openTones[index] + ':'}
                            </div>
                          </Fret>
                        );
                      } else if (degree === 1) {
                        {
                          // degree === 1 の場合は開放弦部分の表示となるので、ここも他とは別にスタイリングができるよう、処理を分けてある
                          //* スタイリングの違いをつけるために少しだけ違う仕方で処理しているので、下にある「開放弦ではない」部分を表示するためのコードと幾らか重複が生じている。コンポーネントに抽出すると良いかもしれない。propsを与えてclassNameだけが異なるものとなるようにするだろうか。名前はDisplayDegreeコンポーネントか何かかも。
                        }
                        if (stringsDegrees[string][degree - 1] === 'R') {
                          {
                            // 以下は、「開放弦」かつ「ルート」のものを表示するコード。
                            // 開放弦部分のスタイル適用のため、analyzerStyles.open も記述している
                            // 表示するものが"R"すなわちルートであれば、赤で色付けするための処理を行い、設定するクラスにanalyzerStyles.root を含める。
                          }
                          return (
                            <Fret key={nanoid()}
                              className={`${analyzerStyles.fret} ${analyzerStyles.root} ${analyzerStyles.open}`}
                            >
                              <div className={analyzerStyles.degree
                              
                              
                              }>
                                {stringsDegrees[string][degree - 1]}
                              </div>
                            </Fret>
                          );
                        } else if (
                          stringsDegrees[string][degree - 1] === 'M3' ||
                          stringsDegrees[string][degree - 1] === 'P5'
                        ) {
                          {
                            // 以下は、「開放弦」かつ「ルート以外の構成音」のものを表示するコード。
                            // "M3"や"P5"は「ルート以外の構成音」なので、青で色付けするために処理を分け、analyzerStyles.cordTone を適用している。
                          }
                          return (
                            <Fret key={nanoid()}
                              className={`${analyzerStyles.fret} ${analyzerStyles.cordTone} ${analyzerStyles.open}`}
                            >
                              <div className={analyzerStyles.degree}>
                                {stringsDegrees[string][degree - 1]}
                              </div>
                            </Fret>
                          );
                        }
                        {
                          /* 以下は、「開放弦」かつ「構成音ではない」ものを表示するコード。 */
                        }
                        return (
                          <Fret key={nanoid()}
                            className={`${analyzerStyles.fret} ${analyzerStyles.open}`}
                          >
                            <div className={analyzerStyles.degree}>
                              {stringsDegrees[string][degree - 1]}
                            </div>
                          </Fret>
                        );

                        {
                          /* 以下は、ほぼ上にあるコードと同じだが、「開放弦ではない」部分を表示するためのもの。DRY原則適用の余地があるかもしれない。 */
                        }
                      } else if (stringsDegrees[string][degree - 1] === 'R') {
                        return (
                          <Fret key={nanoid()}
                            className={`${analyzerStyles.fret} ${analyzerStyles.root}`}
                          >
                            <div className={analyzerStyles.degree}>
                              {stringsDegrees[string][degree - 1]}
                            </div>
                          </Fret>
                        );
                      } else if (
                        stringsDegrees[string][degree - 1] === 'M3' ||
                        stringsDegrees[string][degree - 1] === 'P5'
                      ) {
                        return (
                          <Fret key={nanoid()}
                            className={`${analyzerStyles.fret} ${analyzerStyles.cordTone}`}
                          >
                            <div className={analyzerStyles.degree}>
                              {stringsDegrees[string][degree - 1]}
                            </div>
                          </Fret>
                        );
                      }
                      return (
                        <Fret key={nanoid()} className={`${analyzerStyles.fret}`}>
                          <div className={analyzerStyles.degree}>
                            {stringsDegrees[string][degree - 1]}
                          </div>
                        </Fret>
                      );
                    })}
                  </String>
                );
              })}
            </FingerBoard>
            {
              // 以下はフレット番号を表示するためのコード。
              // </FingerBoard>の下、しかしそれを包む<div className={`${analyzerStyles.scroll}`}> の中に入れることで、指板のスタイルを保ちつつ、横スクロール時にフレット番号も共に動くようにしている。
            }
            <div className={`${analyzerStyles.fretNumbersWrapper}`}>
              {fretNumbers.map((value, fret) => {
                return (
                  <Fret key={nanoid()}
                    className={`${analyzerStyles.fret} ${analyzerStyles.borderless}`}
                  >
                    <div className={`${analyzerStyles.fretNumber}`}>
                      {fretNumbers[fret]}
                    </div>
                  </Fret>
                );
              })}
            </div>
          </div>
          <br />
          <section className={`${analyzerStyles.description}`}>
            <h3>説明：</h3>
            <p>
              左上のセレクトボックスから（音楽の）コードを選ぶと、上の構成音および指板上の各フレットの度数が、自動でコードに応じたものに変更される、シンプルなアプリです。
            </p>
            <p>
              配列や条件分岐によってそれぞれを表示し、ハードコーディングを避けるようにしました。
            </p>
            <Link href="../../posts/analyzerDescription">
              <p className={`${utilStyles.linkCursor}`}>
                <a className={`${analyzerStyles.lightLink}`}>
                  CordAnalyzerの開発時に実践したこと
                </a>
              </p>
            </Link>
            <Link href="/">
              <p className={`${styles.backToHome} ${styles.inlineBlock}`}>
                <a className={styles.lightBackToHome}>← Back to home</a>
              </p>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CordAnalyzer;
