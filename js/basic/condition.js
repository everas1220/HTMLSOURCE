// 조건문
// true : true 자료들, 0제외 숫자, '문자', [],{}
//false : false 자료들, 0,'', null, nudifiend, NaN

const date = new Date();
console.log(date);
const hour = date.getHours();

if (hour < 12) {
    console.log("오전");
} else {
    console.log("오후");
}






// parseint : 문자숫자 => 숫자
console.log("\n=== parseInt(");
const num2 = parseInt("33");
console.log("type", typeof num2)
