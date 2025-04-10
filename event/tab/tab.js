// tab-content 보여주기 : show 클래스명
// 메뉴 선택 : orange

// Products 클릭 + 첫번째 tab-content
// - Information, Shpping : orange 제거 / sh 제거 

// Information 클릭 + 두번째 tab-content
// - Products, Shpping : orange 제거 / show 제거 

// Shipping 클릭 + 세번째 tab-content
//- Products, Information : orange 제거 / show 제거

// 클릭 요소
const tabBtns = document.querySelectorAll(".tab-botton");
// 변화가 일어나야 하는 요소
const tabContents = document.querySelectorAll(".tab-content");

// Products 클릭
// tabBtns[1].classList.remove("orange");
// tabBtns[2].classList.remove("orange");
// sh 제거
// tabContents[1].classList.remove("sh");
// tabContents[2].classList.remove("sh");
// tabBtns[0].classList.add("orange");
// tabContents[0].classList.add("sh");



tabBtns.forEach(btn, idx => {
    btn.addEventListener("click", (e) => {
        // 모든 li의 orange 제거
        tabBtns.forEach((item) => item.classList.remove("orange"));
        // 현재 눌러진 li에는 orange 추가
        e.target.classList.add("orange");
        // 모든 div의 show 제거
        tabContents.forEach((element) => {
            element.classList.remove("sh");
        });
        // 현재 눌러진 li와 같은 순서인 div에 sh 추가
        tabContents[idx].classList.add("sh")
    });
});