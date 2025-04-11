showMessage()

function multiply(x, y) {
    console.log(`${x}, ${y}`);
}

multiply();
multiply(1);
multiply(1, 3);

function multiply2(x, y) {
    return x + y;
}

console.log(multiply2()); // Nan
console.log(multiply2(5, 3));
console.log(multiply2); // [Function: multiply2]

//매개변수 기본값
function multiply3(x, y = 3) {
    return x + y;
}

console.log(multiply2(5, 3));
console.log(multiply2(6));

function test(a, b, c, d) {
    b = b || 52;
    c = c || 273;

    console.log(`a=${a},b=${b},c=${c},d=${d}`);
}
test(1, 2, 5, 6);
test(3);

function a() {
    function b() {
        console.log("b");
    }
    if (true) {
        function c() { }
    }
    b();
    c();
}

a();