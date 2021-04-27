// let tmpDegreeNumber = 9;
// let firstOpenDegree;
// let subscript;
// const codeName = "A"; //! 一時的な値
// const codeNameDegree = tmpDegreeNumber; //! 一時的な値。どうすればこの添字の数字を取得できる？

// export const degrees = ["R", "m2", "M2", "m3", "M3", "P4", "aug4", "P5", "m6", "M6", "m7", "M7"]

// export const firstStringSubscripts = [4,5];
// export const secondStringOpenSubscript = 11;
// export const thirdStringOpenSubscript = 7;
// export const fourthStringOpenSubscript = 2;
// export const fifthStringOpenSubscript = 9;
// export const sixthStringOpenSubscript = 4;

// export let firstStringDegrees = [];
// export let secondStringDegrees = [];
// export let thirdStringDegrees = [];
// export let fourthStringDegrees = [];
// export let fifthStringDegrees = [];
// export let sixthStringDegrees = [];

// console.log(codeNameDegree < firstStringSubscripts[0]);

// const populateDegrees = () => {
//     for (let i = 0; i < 15; i++) {
//         subscript = (codeNameDegree + i) < 12? codeNameDegree + i : codeNameDegree + i  - 12;
//         firstStringDegrees.push(degrees[subscript]);
//     }
// }

// if ( codeNameDegree === firstStringSubscripts[0] ) {
//     populateDegrees();
//     console.log("It's the Root.");
// } else if ( codeNameDegree < firstStringSubscripts[0] ) {
//     subscript = firstStringSubscripts[0] - codeNameDegree;
//     populateDegrees();
//     console.log("I'm the second code.");
// } else {
//     subscript = firstStringSubscripts[0] + 12 - codeNameDegree
//     populateDegrees();
//     console.log("I'm the third running.");
// }

// export default function A() {
//     console.log("Check this degree number!");
//     console.log(firstStringDegrees);
// }

















// ⭕️この配列をグルグル回しながら、受け取ったcodeNameと中身を比較して、該当する添字を別の変数に入れておく。そして、degrees配列の対応する中身を呼び出すのに用いる。    （そもそもcodeNamesをオブジェクトにしたかったが、#がプロパティ名として使えないようであったので、この方法を考えた）

// const A = ["DACG", "BC", "FFR", "DECC"]

// function foo(code: string) {
//     return "C#".indexOf(code)
// }



// ⭕️function displayCodeTone(arr, code) {
//     return arr.filter(function(el) {
//         return el
//     })
// }


// let isCodeTone = (value, index, array) => {
//     return value ===  codeNames[value]
// }

// let codeTone = codeNames.filter(isCodeTone(value, index, codeNames))


// export default function tmpF() {
//     console.log(foo("#"));
// }



// export const firstString = "E";
// export const secondString = "B";
// export const thirdString = "G";
// export const fourthString = "D";
// export const fifthString = "A";
// export const sixthString = "E";

//⭕️上の（コメントアウトしてある）変数と下の変数、どちらを用いるか、まだよくわからない（どちらとも用いない可能性もまだある）。    おそらく下を用いて、最初はCをルートにした音程を表示しておく。onChangeで音程差を計算し、それに応じてmap()で数字の配列を作るかもしれない。そして、それぞれに対応するdegree配列の文字列を表示するかもしれない。


//* ⭕現在何もなし。使用する際はファイル名を変更する可能性を考慮すること。
