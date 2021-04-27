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
            <CodeTone tmpCodeName={codeName}/>
            <FingerBoard>
                <String>
                    <Fret>
                        <div>{firstStringDegrees[0]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[1]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[2]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[3]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[4]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[5]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[6]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[7]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[8]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[9]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[10]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[11]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[12]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[13]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[14]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{firstStringDegrees[0]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[1]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[2]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[3]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[4]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[5]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[6]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[7]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[8]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[9]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[10]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[11]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[12]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[13]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[14]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{firstStringDegrees[0]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[1]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[2]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[3]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[4]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[5]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[6]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[7]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[8]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[9]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[10]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[11]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[12]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[13]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[14]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{firstStringDegrees[0]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[1]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[2]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[3]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[4]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[5]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[6]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[7]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[8]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[9]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[10]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[11]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[12]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[13]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[14]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{firstStringDegrees[0]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[1]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[2]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[3]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[4]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[5]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[6]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[7]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[8]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[9]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[10]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[11]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[12]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[13]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[14]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[15]}</div>
                    </Fret>
                </String>
                <String>
                    <Fret>
                        <div>{firstStringDegrees[0]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[1]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[2]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[3]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[4]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[5]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[6]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[7]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[8]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[9]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[10]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[11]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[12]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[13]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[14]}</div>
                    </Fret>
                    <Fret>
                        <div>{firstStringDegrees[15]}</div>
                    </Fret>
                </String>
            </FingerBoard>
            （開発中は目に優しい色を使用）
        </div>
    )
}

export default CodeChecker

const codeNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let codeDegree = 0;

const handleChange = (codeName: string): string => {
    // 後に使用するため、ユーザ入力のコード名に対応する添字を取得する。
    // 取得した添字の数値は別の箇所で、開放弦の度数を表示する際、degrees配列から対応する度数を取り出すために使用する。
    codeNames.forEach((value, index) => {
        codeDegree = value === codeName ? index : codeDegree;
        if ( value === codeName ) {
            console.log("Can you see me? " + index);
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
    const codeTone = codeToneArray[0] + codeToneArray[1] + codeToneArray[2];





    
    
    
    
    
    return codeTone
}









const degrees = ["R", "m2", "M2", "m3", "M3", "P4", "aug4", "P5", "m6", "M6", "m7", "M7"]

let tmpDegreeNumber = 0;
let firstOpenDegree;
let subscript;
console.log("I'm codeDegree → " +codeDegree);

const firstStringSubscripts = [4];
const secondStringOpenSubscript = [11];
const thirdStringOpenSubscript = [7];
const fourthStringOpenSubscript = [2];
const fifthStringOpenSubscript = [9];
const sixthStringOpenSubscript = [4];

let firstStringDegrees = [];
let secondStringDegrees = [];
let thirdStringDegrees = [];
let fourthStringDegrees = [];
let fifthStringDegrees = [];
let sixthStringDegrees = [];

console.log(codeDegree < firstStringSubscripts[0]);

const populateDegrees = () => {
    for (let i = 0; i < 16; i++) {
        subscript = subscript % 12;
        console.log(codeDegree + "+" + i + "   添字: " + subscript);
        firstStringDegrees.push(degrees[subscript]);
        subscript += 1;
    }
}

if ( codeDegree === firstStringSubscripts[0] ) {
    populateDegrees();
    console.log("It's the Root.");
} else if ( codeDegree < firstStringSubscripts[0] ) {
    subscript = firstStringSubscripts[0] - codeDegree;
    populateDegrees();
    console.log("I'm the second code.");
} else {
    subscript = firstStringSubscripts[0] + 12 - codeDegree;
    populateDegrees();
    console.log("I'm the third running.");
}

function A() {
    console.log("Check this degree number!");
    console.log(firstStringDegrees);
}
A();