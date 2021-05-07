import CodeTone from "../../components/codeTone";
import FingerBoard from "../../components/fingerBoard";
import String from "../../components/string";
import Fret from "../../components/fret";
import analyzerStyles from "../../styles/analyzer.module.css";
import { useState } from "react";

type Props = {
    tmpCodeName: string
    className?: string
}

// codeTonesをCodeAnalyzer コンポーネントでも使用できるようにするため、ここでグローバル変数として初期化している。
// 最初からこれらの値を入れておくことで、一番初めに読み込んだ時に、初期値のコードCに対応する構成音が表示される。
let codeTones = "構成音：C, E, G";

let firstStringDegrees = [];
let secondStringDegrees = [];
let thirdStringDegrees = [];
let fourthStringDegrees = [];
let fifthStringDegrees = [];
let sixthStringDegrees = [];
// ↓指板のスタイル用に追加した配列 → フレット番号表示に用いた。
    // 1、6弦の下にも指板が少し続く見た目を表現するためにまず使用。
    // 2、指板の下にフレット番号を表示するためにも使用。
let fretNumbers = ["0", "1f", "2f", "⚫︎3f", "4f", "⚫︎5f", "6f", "⚫︎7f", "8f", "⚫︎9f", "10f", "11f", "◉12f", "13f", "14f", "15f"]; //⚫︎はポジションマーク。12fは⚫︎を二つ入れるスペースがなかったため、◉を使用。
let stringsDegrees = [
    firstStringDegrees,
    secondStringDegrees,
    thirdStringDegrees,
    fourthStringDegrees,
    fifthStringDegrees,
    sixthStringDegrees,
    fretNumbers
];

// この配列は、この中にあるコード名を手掛かりに、添字を対応させて度数をdegrees配列から取得したり、入力されたコードの構成音を割り出したりするのに使用する。
const codeNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let code;
let codeDegree = 0;
let subscript;

const handleChange = (codeName: string): string => {
    code = codeName;
    // ↓のちに使用するため、ユーザが<select>で入力したコード名に対応する、配列の添字を取得する。コード名を<select>で入力するたびに、それに応じた度数が表示されるようになる。
    // 取得した添字の数値は別の箇所で、開放弦の度数を表示する際、degrees配列から対応する度数を取り出すために使用する。
    codeNames.forEach((value, index) => {
        // codeNames 配列のその時処理中の値が、codeName と同じであれば、その時のindex（添字）がcodeDegree に代入される。同じでない場合はそのままになる。
        codeDegree = value === codeName ? index : codeDegree;
    })
    
    // 続く処理でコードの構成音をこの配列に入れる。
    // しかし実際に構成音として表示するときに用いるのは、"構成音："や", " を足した後の、codeTones。
    let codeToneArray: string[] = [];
    let subscript: number;

    codeNames.forEach(( value, index, array ) => {
        // 添字のindexの数値 は、後で + したり - したり、添字調整用の判定に用いたりしたいので、まずそのような計算用のsubscript 変数に代入する。コードの構成音の取得などにはsubscript を用いていく。
        subscript = index;
        // コードの構成音1：ルート。
        if (codeName === array[index]) {
            codeToneArray.push(array[subscript]);
        }
        // コードの構成音2：M3。
        subscript += 4;
        // 添字（subscript）は計算して取得できるが、その数値が11を超えると、音名の配列（codeNames）には12音しかないので、codeNames[12]は undefined となってしまう。
        // そのため subscript % 12 をsubscript の新しい値とし、12になるたびに0 へとリセットされるようにする↓
        subscript = subscript % 12;
        if (codeName === array[index]) {
            codeToneArray.push(", " + array[subscript]);
        }
        // コードの構成音3：P5。
        subscript += 3;
        subscript = subscript % 12;
        if (codeName === array[index]) {
            codeToneArray.push(", " + array[subscript]);
        }    
    });

    // ここだけ役割が異なるが、これは度数の値を弦ごと、またフレットごとに入力する関数。
    // ここで呼び出すことによって、ユーザがコード名を<select>で変更するたびに（onChange）、入力されたコード名に応じた度数が表示されるようになる。
    inputDegrees();

    // このcodeTones 変数を、実際の構成音の表示に使用する。
    // CodeAnalyzer コンポーネント内で、props としてCodeTone コンポーネントに渡している。
    codeTones = "構成音：" + codeToneArray[0] + codeToneArray[1] + codeToneArray[2];
    return codeTones
}




// この配列はcodeNames 配列と対応させて、コード名・音名に応じて度数を割り出せるようにしてある。
// また、実際に度数を表示する際にも使用し、リテラルの記述を無駄に繰り返さないようにした。
const degrees = ["R", "m2", "M2", "m3", "M3", "P4", "+4", "P5", "m6", "M6", "m7", "M7"]

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
    sixthStringSubscripts
];

const inputDegrees = () => {
    for ( let i = 0; i < 6; i++) {
    stringsDegrees[i] = []; // 関数を実行するごとに配列が長くならないよう、最初に空にする。
    const populateDegrees = () => {
        for ( let j = 0; j < 16; j++ ) {
                subscript = subscript % 12;
                stringsDegrees[i].push(degrees[subscript]);
                subscript += 1;
            }
        }
        
    // （その時入力されているコード名に対応する度数 === その時処理している弦の開放弦の度数） であれば、populateDegrees() で順に度数を埋めていく。
    // この第一のブロックは、その時のコード名（ルートの音）が開放弦の音と同じ場合の処理。
        if ( codeDegree === stringsDegrees[i][0] ) {
            populateDegrees();
    // この第二のブロックは、その時のコード名（ルートの音）が開放弦の音よりも低い場合の処理。
    } else if ( codeDegree < stringsDegrees[i][0] ) {
        // この計算式によって、すでに分かっている値から、開始地点（開放弦の音）に対応する度数を割り出すことができる。
        // それをsubscript に入れた状態でpopulateDegrees() を実行するので、stringsDegrees[i] 配列に順番に正しい度数の値が埋められていくことになる。
        // 下のCodeAnalyzer コンポーネントの中では、そうして正しい値で埋まった配列に対応する添字を当てることで、DRY原則に沿う仕方で全ての度数を表示している。
        subscript = strings[i][0] - codeDegree;
        populateDegrees();
    // この第三のブロックは、その時のコード名（ルートの音）が開放弦の音よりも高い場合の処理。
        } else {
            subscript = strings[i][0] + 12 - codeDegree;
            populateDegrees();
        }
    }
}

inputDegrees(); // アプリを開いた時の度数の初期値を表示するために、ここで実行している。

// <String>や<Fret>の表示を、map() の繰り返しを使用して、DRY原則に沿って行うための配列。
const stringsSubscripts = [0, 1, 2, 3, 4, 5, 6];
const degreesSubscripts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const openTones = ["E", "B", "G", "D", "A", "E"];

export const CodeAnalyzer: React.FC<Props> = (props) => {
    const [codeTone, setCodeTone] = useState("C");
    return (
        <div className={analyzerStyles.background}>
            <div className={`${analyzerStyles.analyzer} ${analyzerStyles.codeSelector}`}>
                <span className={analyzerStyles.heading}>Code Analyzer</span>
                <br/>
                <div className={analyzerStyles.codeSelector}>コード：
                {/* コードを変更するごとにonChange でコードトーン取得、⭕️（こちらは違うかも。state の挙動で自動更新されるのかも）度数表示切り替えを行う */}
                    <select id="codeSelector" name="codeSelector" title="コードを選択" className={`${analyzerStyles.codeSelector} ${analyzerStyles.select}`} onChange={e =>  setCodeTone(handleChange(e.target.value))}>
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
                    <CodeTone codeTones={codeTones}/>
                </div>
                {/* 以下は、指板とフレット番号 */}
                <div className={`${analyzerStyles.scroll}`}>
                    <FingerBoard>
                        {/* <String>をmap() による繰り返しで6つ生成する。 */}
                        {stringsSubscripts.map((string, index) => {
                            const eachClassName = "string" + (index + 1);
                            return <String className={` ${"string"}`}>{degreesSubscripts.map((degree) => {
                            // map() による繰り返しで6つ生成した<String>の中に、やはりmap() による繰り返しで16の<Fret>を表示していく処理の開始地点。
                            if ( degree === 0 ) {
                                // このブロックはdegree === 0 だが、この場合、一番左の表示に関わる処理なので、そこに1Eや4Dなどと表示されるようにする。
                                // 各弦の番号と開放弦の音名をくっつけたものを生成する。
                                return <Fret className={`${analyzerStyles.fret} ${analyzerStyles.outside}`}><div className={analyzerStyles.degrees}>{index + 1 + openTones[index] + ":"}</div></Fret>
                                } else if ( degree === 1 ) {
                                    {// degree === 1 の場合、開放弦部分の表示なので、ここも他とは別にスタイリングができるよう、処理を分けてある
                                    //* 左側の開放弦から左端までの部分を、スタイリングの違いをつけるために少しだけ違う仕方で処理しているので重複が生じている。コンポーネントに抽出すると良いかもしれない。propsを与えてclassNameだけが異なるものとなるようにするだろうか。名前はDisplayDegreeコンポーネントか何か。
                                    }
                                    if ( stringsDegrees[string][degree-1] === "R" ) {
                                        {// 以下は、「開放弦」かつ「ルート」のものを表示するコード。
                                        // 開放弦部分のスタイル適用のため、analyzerStyles.open も記述している
                                        // 表示するものが"R"すなわちルートであれば、赤で色付けするための処理を行い、設定するクラスにanalyzerStyles.root を含めている。
                                        }
                                        return <Fret className={`${analyzerStyles.fret} ${analyzerStyles.root} ${analyzerStyles.open}`}><div className={analyzerStyles.degrees}>{stringsDegrees[string][degree-1]}</div></Fret>
                                    } else if ( stringsDegrees[string][degree-1] === "M3" || stringsDegrees[string][degree-1] === "P5" ) {
                                        {// 以下は、「開放弦」かつ「ルート以外の構成音」のものを表示するコード。
                                        // "M3"や"P5"は「ルート以外の構成音」なので、青で色付けするために処理を分け、analyzerStyles.codeTone を適用している。
                                        }
                                        return <Fret className={`${analyzerStyles.fret} ${analyzerStyles.codeTone} ${analyzerStyles.open}`}><div className={analyzerStyles.degrees}>{stringsDegrees[string][degree-1]}<div></div></div></Fret>
                                    }
                                    {/* 以下は、「開放弦」かつ「構成音ではない」ものを表示するコード。 */}
                                    return <Fret className={`${analyzerStyles.fret} ${analyzerStyles.open}`}><div className={analyzerStyles.degrees}>{stringsDegrees[string][degree-1]}<div></div></div></Fret>
                                    
                                    {/* 以下は、ほぼ上にあるコードと同じだが、「開放弦ではない」部分を表示するためのもの。DRY原則適用の余地があるかもしれない。 */}
                                } else if ( stringsDegrees[string][degree-1] === "R" ) {
                                    return <Fret className={`${analyzerStyles.fret} ${analyzerStyles.root}`}><div className={analyzerStyles.degrees}>{stringsDegrees[string][degree-1]}</div></Fret>
                                } else if ( stringsDegrees[string][degree-1] === "M3" || stringsDegrees[string][degree-1] === "P5" ) {
                                    return <Fret className={`${analyzerStyles.fret} ${analyzerStyles.codeTone}`}><div className={analyzerStyles.degrees}>{stringsDegrees[string][degree-1]}<div></div></div></Fret>
                                }
                                return <Fret className={`${analyzerStyles.fret}`}><div className={analyzerStyles.degrees}>{stringsDegrees[string][degree-1]}<div></div></div></Fret>
                            })}</String>
                        })}
                    </FingerBoard>

                    {// 以下はフレット番号を表示するためのコード。
                    // </FingerBoard>の下、しかしそれを包む<div className={`${analyzerStyles.scroll}`}> の中に入れることで、指板の横スクロール時にフレット番号も共に動くようにしている。
                    }
                    <div className={`${analyzerStyles.fretNumbersWrapper}`}>
                    {fretNumbers.map((value, fret) => {
                        return <Fret className={`${analyzerStyles.fret} ${analyzerStyles.borderless}`}><div className={`${analyzerStyles.fretNumber}`}>{fretNumbers[fret]}</div></Fret>
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeAnalyzer
