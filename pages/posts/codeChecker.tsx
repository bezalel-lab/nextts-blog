//✅✅残りの作業：・コメントを書く    （・ある程度DRYに。とりあえずもう十分か）

import CodeTone from "../../components/codeTone";
import FingerBoard from "../../components/fingerBoard";
import String from "../../components/string";
import Fret from "../../components/fret";
import checkerStyles from "../../styles/checker.module.css";
import React, { useState } from "react";
// import codeHandler from "../api/codeHandler";

type Props = {
    tmpCodeName: string
    className?: string
}

export const CodeChecker: React.FC<Props> = (props) => {
    const [codeTone, setCodeTone] = useState("C");
    return (
        <div className={checkerStyles.background}>
            <div className={`${checkerStyles.checker} ${checkerStyles.codeSelector} ${checkerStyles.tmp}`}>
                <span className={checkerStyles.heading}>Code Analyzer</span>
                <br/>
                <div className={checkerStyles.codeSelector}>コード：
                    <select id="codeSelector" name="codeSelector" title="コードを選択" className={`${checkerStyles.codeSelector} ${checkerStyles.select}`} onChange={e =>  setCodeTone(handleChange(e.target.value))}>
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
                <div className={`${checkerStyles.scroll}`}>
                    <FingerBoard>
                        {stringsSubscripts.map((string, index) => {
                            const eachClassName = "string" + (index + 1);
                            return <String className={` ${"string"}`}>{degreesSubscripts.map((degree) => {
                                if ( degree === 0 ) {
                                    return <Fret className={`${checkerStyles.fret} ${checkerStyles.outside}`}><div className={checkerStyles.degrees}>{openTones[index]? index + 1 + openTones[index] + ":": ""}</div></Fret> //⭕️ここの参考演算子はいらなくなったかも？
                                } else if ( degree === 1 ) {
                                    if ( stringsDegrees[string][degree-1] === "R" ) { //⭕️⭕️⭕️ここは、左の開放弦のあたりを表現するために重複が生じているから、コンポーネントに抽出すると良さそう。propsを与えてclassNameを別にするかも。DisplayDegreeコンポーネントか何か
                                        return <Fret className={`${checkerStyles.fret} ${checkerStyles.root} ${checkerStyles.open}`}><div className={checkerStyles.degrees}>{stringsDegrees[string][degree-1]}</div></Fret>
                                    } else if ( stringsDegrees[string][degree-1] === "M3" || stringsDegrees[string][degree-1] === "P5" ) {
                                        return <Fret className={`${checkerStyles.fret} ${checkerStyles.codeTone} ${checkerStyles.open}`}><div className={checkerStyles.degrees}>{stringsDegrees[string][degree-1]}<div></div></div></Fret>
                                    }
                                    return <Fret className={`${checkerStyles.fret} ${checkerStyles.open}`}><div className={checkerStyles.degrees}>{stringsDegrees[string][degree-1]}<div></div></div></Fret>
                                } else if ( stringsDegrees[string][degree-1] === "R" ) {
                                    return <Fret className={`${checkerStyles.fret} ${checkerStyles.root}`}><div className={checkerStyles.degrees}>{stringsDegrees[string][degree-1]}</div></Fret>
                                } else if ( stringsDegrees[string][degree-1] === "M3" || stringsDegrees[string][degree-1] === "P5" ) {
                                    return <Fret className={`${checkerStyles.fret} ${checkerStyles.codeTone}`}><div className={checkerStyles.degrees}>{stringsDegrees[string][degree-1]}<div></div></div></Fret>
                                }
                                return <Fret className={`${checkerStyles.fret}`}><div className={checkerStyles.degrees}>{stringsDegrees[string][degree-1]}<div></div></div></Fret>
                            })}</String>
                        })}
                    </FingerBoard>
                    <div className={`${checkerStyles.fretNumbersWrapper}`}>
                    {fretNumbers.map((value, degree) => {
                        //配列を再利用するが、このフレット表示の用途では要素が一つ少ない方が、表示が整う。そのためpop() を使用している。
                        return <Fret className={`${checkerStyles.fret} ${checkerStyles.borderless}`}><div className={`${checkerStyles.fretNumber}`}>{fretNumbers[degree]}</div></Fret>
                    })}
                    </div>
                </div>
            </div>
        </div>

                        


    )
}

export default CodeChecker



const stringsSubscripts = [0, 1, 2, 3, 4, 5, 6];
const degreesSubscripts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const openTones = ["E", "B", "G", "D", "A", "E"];





let codeTones = "構成音：C, E, G";

let firstStringDegrees = [];
let secondStringDegrees = [];
let thirdStringDegrees = [];
let fourthStringDegrees = [];
let fifthStringDegrees = [];
let sixthStringDegrees = [];
let fretNumbers = ["0", "1f", "2f", "⚫︎3f", "4f", "⚫︎5f", "6f", "⚫︎7f", "8f", "⚫︎9f", "10f", "11f", "◉12f", "13f", "14f", "15f"]; //⭕️指板のスタイル用に追加した箇所 → フレット表示に用いた。
let stringsDegrees = [
    firstStringDegrees,
    secondStringDegrees,
    thirdStringDegrees,
    fourthStringDegrees,
    fifthStringDegrees,
    sixthStringDegrees,
    fretNumbers, //⭕️指板のスタイル用に追加した箇所 → フレット表示に用いた。
];

console.log(stringsDegrees[0]);

const codeNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let code = "C"; //⭕️多分削除する
let codeDegree = 0;

const handleChange = (codeName: string): string => {

    code = codeName;
    console.log(codeName); //! 削除する

    // 後に使用するため、ユーザ入力のコード名に対応する添字を取得する。
    // 取得した添字の数値は別の箇所で、開放弦の度数を表示する際、degrees配列から対応する度数を取り出すために使用する。
    codeNames.forEach((value, index) => {
        codeDegree = value === codeName ? index : codeDegree;
        if ( value === codeName ) {
            console.log("Can you see me? " + index + "← index   codeDegree →" + codeDegree);
        }
    })
    
    let codeToneArray: string[] = [];
    let subscript: number;

    const subscriptAdjustment = () => {
        if ( subscript > 11 ) {
            subscript -= 12;
        }
    }

    codeNames.forEach( ( value, index, array ) => {
        subscript = index;
        if (codeName === array[index]) {
            codeToneArray.push(array[subscript]);
        }
        subscript += 4;
        subscriptAdjustment();
        if (codeName === array[index]) {
            codeToneArray.push(", " + array[subscript]);
        }
        subscript += 3;
        subscriptAdjustment();
        if ( subscript > 11 ) {
            subscript -= 12;
        }
        if (codeName === array[index]) {
            codeToneArray.push(", " + array[subscript]);
        }    
    });
    codeTones = "構成音：" + codeToneArray[0] + codeToneArray[1] + codeToneArray[2];

    inputDegrees();

    return codeTones
}





// let firstStringDegrees = [];
// let secondStringDegrees = [];
// let thirdStringDegrees = [];
// let fourthStringDegrees = [];
// let fifthStringDegrees = [];
// let sixthStringDegrees = [];




const degrees = ["R", "m2", "M2", "m3", "M3", "P4", "+4", "P5", "m6", "M6", "m7", "M7"]
    
let subscript;
console.log("codeDegree → " +codeDegree);

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
console.log(strings[0]);


// let firstStringDegrees = [];
// let secondStringDegrees = [];
// let thirdStringDegrees = [];
// let fourthStringDegrees = [];
// let fifthStringDegrees = [];
// let sixthStringDegrees = [];
// let stringsDegrees = [firstStringDegrees, secondStringDegrees, thirdStringDegrees, fourthStringDegrees, fifthStringDegrees, sixthStringDegrees];
// let stringDegrees = [];




const inputDegrees = () => {
    for ( let i = 0; i < 6; i++) {

    stringsDegrees[i] = [];
    const populateDegrees = () => {
        for ( let j = 0; j < 16; j++ ) {
                subscript = subscript % 12;
                stringsDegrees[i].push(degrees[subscript]);
                subscript += 1;
            }
        }
        
        if ( codeDegree === stringsDegrees[i][0] ) {
            populateDegrees();
            // console.log("It's the Root.");
        } else if ( codeDegree < stringsDegrees[i][0] ) {
            subscript = strings[i][0] - codeDegree;
            populateDegrees();
            // console.log("I'm the second code.");
        } else {
            subscript = strings[i][0] + 12 - codeDegree;
            populateDegrees();
            // console.log("I'm the third running.");
        }
        
        // console.log( i + 1 + " degrees: " + stringsDegrees[i]);
        // console.log( i + 1 + " subscripts: " + strings[i]);
    }
}

inputDegrees();






// function handleScroll(event) {
//     let target = event.target;
//     target.parentElement.querySelector('.scrollH').scrollLeft = target.scrollLeft;
//     target.parentElement.querySelector('.scrollV').scrollTop = target.scrollTop;
//   }
  

//   Array.from(document.getElementsByClassName('data')).forEach(function(element, index, array) {
//     element.addEventListener('scroll', handleScroll, false);
//     });