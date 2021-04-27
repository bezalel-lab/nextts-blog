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
    const [codeName, setCodeName] = useState("C");
    return (
        <div className={`${checkerStyles.checker} ${checkerStyles.codeSelector} ${checkerStyles.tmp}`}>
            コード：
            <select id="codeSelector" name="codeSelector" title="codeSelector" className={checkerStyles.codeSelector} onChange={e =>  setCodeName(handleChange(e.target.value))}>
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
            <FingerBoard>
                <String>
                    <Fret>
                        <div>{stringsDegrees[0][0]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][1]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][2]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][3]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][4]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][5]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][6]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][7]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][8]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][9]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][10]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][11]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][12]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][13]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][14]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[0][15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{stringsDegrees[1][0]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][1]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][2]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][3]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][4]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][5]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][6]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][7]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][8]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][9]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][10]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][11]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][12]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][13]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][14]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[1][15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{stringsDegrees[2][0]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][1]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][2]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][3]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][4]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][5]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][6]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][7]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][8]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][9]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][10]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][11]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][12]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][13]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][14]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[2][15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{stringsDegrees[3][0]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][1]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][2]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][3]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][4]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][5]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][6]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][7]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][8]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][9]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][10]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][11]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][12]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][13]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][14]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[3][15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{stringsDegrees[4][0]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][1]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][2]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][3]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][4]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][5]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][6]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][7]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][8]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][9]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][10]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][11]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][12]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][13]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][14]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[4][15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{stringsDegrees[5][0]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][1]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][2]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][3]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][4]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][5]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][6]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][7]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][8]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][9]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][10]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][11]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][12]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][13]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][14]}</div>
                    </Fret>
                    <Fret>
                        <div>{stringsDegrees[5][15]}</div>
                    </Fret>
                </String>
            </FingerBoard>
            （開発中は目に優しい色を使用）
        </div>
    )
}

export default CodeChecker




let codeTones = "C, E, G";

let firstStringDegrees = [];
let secondStringDegrees = [];
let thirdStringDegrees = [];
let fourthStringDegrees = [];
let fifthStringDegrees = [];
let sixthStringDegrees = [];
let stringsDegrees = [
    firstStringDegrees,
    secondStringDegrees,
    thirdStringDegrees,
    fourthStringDegrees,
    fifthStringDegrees,
    sixthStringDegrees
];

console.log(stringsDegrees[0]);

const codeNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let codeDegree = 0;

const handleChange = (codeName: string): string => {
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
    codeTones = codeToneArray[0] + codeToneArray[1] + codeToneArray[2];




    
    inputDegrees();

    
    
    
    return codeTones
}





// let firstStringDegrees = [];
// let secondStringDegrees = [];
// let thirdStringDegrees = [];
// let fourthStringDegrees = [];
// let fifthStringDegrees = [];
// let sixthStringDegrees = [];




const degrees = ["R", "m2", "M2", "m3", "M3", "P4", "aug4", "P5", "m6", "M6", "m7", "M7"]
    
let subscript;
console.log("I'm codeDegree → " +codeDegree);

const firstStringSubscripts = [4];
const secondStringSubscripts = [11];
const thirdStringSubscripts = [7];
const fourthStringSubscripts = [2];
const fifthStringSubscripts = [9];
const sixthStringSubscripts = [4];
let stringsSubscripts = [
    firstStringSubscripts,
    secondStringSubscripts,
    thirdStringSubscripts,
    fourthStringSubscripts,
    fifthStringSubscripts,
    sixthStringSubscripts
];
console.log(stringsSubscripts[0]);


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
        for (let j = 0; j < 16; j++) {
                subscript = subscript % 12;
                stringsDegrees[i].push(degrees[subscript]); //!NOTE degree
                subscript += 1;
            }
        }
        
        if ( codeDegree === stringsDegrees[i][0] ) {
            //!NOTE subscripts
            populateDegrees();
            // console.log("It's the Root.");
        } else if ( codeDegree < stringsDegrees[i][0] ) {
            subscript = stringsSubscripts[i][0] - codeDegree;
            populateDegrees();
            // console.log("I'm the second code.");
        } else {
            subscript = stringsSubscripts[i][0] + 12 - codeDegree;
            populateDegrees();
            // console.log("I'm the third running.");
        }
        
        console.log( i + 1 + " degrees: " + stringsDegrees[i]);
        console.log( i + 1 + " subscripts: " + stringsSubscripts[i]);
    }
}

inputDegrees();




