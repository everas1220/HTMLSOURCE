//일급함수 : 함수를 일반변수에 대입
const foo = () => {
    console.log("foobar");
};

foo();

function logText(message) {
    message();
}
logText(() => {
    console.log("hi");
});

















