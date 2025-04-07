// 콜백함수 : 함수를 함수의 인자로 전달, 전달된 함수가 나중에 호출
function showOK() {
    console.log("동의");
}
function showCancel() {
    console.log("취소");
}
function ask(question, yes, no) { }

ask("동의하십니까?", showOK, showCancel);

const foo = function (func) {
    func();
}

foo(() => console.log("함수를 인자로 전달하기"));


function callTentimes(callback) {
    for (let index = 0; index < 5; index++) {
        callback();
    }
}

const callback = () => console.log("함수호출");

callTentimes(callback);

// 자바스크립트 내장함수
// setTimeout() : 비동기식
console.log("시작")
setTimeout(() => {
    console.log("3초가 지났습니다.");
}, 3000); //ms
console.log("마무리");

setInterval(() => {
    console.log("안녕");
}, 2000);

// parseFloat() : String => float
console.log("parseFloat()");
console.log(parseFloat("10"));
console.log(parseFloat("10.55"));
console.log(parseFloat("10.55%"));

// encodeURI
// encodeURIComponent
console.log(encodeURI());
console.log(encodeURIComponent());

// decodeURI
console.log(decodeURI());
console.log(decodeURIComponent());