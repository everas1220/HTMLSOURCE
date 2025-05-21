// 구조분해(Destructuring)

// 객체
const candyMachine = {
    status: {
        name: "node",
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};

console.log(candyMachine);
// 객체 분해 
// const getCandy = candyMachine.getCandy;
// const count = candyMachine.status.count;

const {
    getCandy,
    status: { count },
} = candyMachine;

console.log(getCandy);
console.log(count);

// 배열분해 
const array = ["node.js", {}, 10, true]
// const node = array[0]
// const obj = array[1]
// const bool = array[3]

const [node, obj, , bool] = array;

console.log(node, obj, bool);

// ... : spread operator (값 복사)
const array1 = ["num1", "num2"];
const array2 = ["num3", "num4"];

const sumArr = [array1, array2];
console.log("두 배열 결합", sumArr);

array1.push("num5");
console.log("array1 변경 후", array1);
console.log("array1 변경 후 sumArr", sumArr);

const sumArr2 = [...array1, ...array2];
console.log("두 배열 결합", sumArr2);
array2.push("num6");
console.log("array2 변경 후", array2);
console.log("array2 변경 후 sumArr2", sumArr2);

let obj1 = { key1: "value1", key2: "value2" };
let obj2 = { key2: "value3", key2: "value4" };
let sumObj = { obj1, obj2 };
console.log("{}", sumObj);
obj1["key3"] = "value7";
console.log("{}", sumObj);

let sumObj2 = { ...obj1, ...obj2 };
console.log("{}", sumObj);

let student = {
    name: "홍길동",
    kor: 92,
    math: 98,
    eng: 96,
    sci: 88,
};

let teacher = { tname: "설리번", age: 50 };
let sumObj3 = { ...student, ...teacher };
console.log("sumObj3", sumObj3);
let { eng, math, ...others } = sumObj3;
console.log(eng, math, others);
