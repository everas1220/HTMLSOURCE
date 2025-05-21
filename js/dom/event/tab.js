// tab-content 보여주기 : show 클래스명
// 메뉴 선택 : orange

// Products 클릭 + 첫번째 tab-content
// - Information, Shipping : orange 제거 / show 제거
// Information 클릭 + 두번째 tab-content
// - Products, Shipping : orange 제거 / show 제거
// Shipping 클릭 + 세번째 tab-content
// - Products,Information : orange 제거 / show 제거

// 클릭 요소
const tabBtns = document.querySelectorAll(".tab-button");
// 변화가 일어나야 하는 요소
const tabContents = document.querySelectorAll(".tab-content");

// Products 클릭
// tabBtns[1].classList.remove("orange");
// tabBtns[2].classList.remove("orange");
// tabContents[1].classList.remove("show");
// tabContents[2].classList.remove("show");
// tabBtns[0].classList.add("orange");
// tabContents[0].classList.add("show");

//Information
// tabBtns[0].classList.remove("orange");
// tabBtns[2].classList.remove("orange");
// tabContents[0].classList.remove("show");
// tabContents[2].classList.remove("show");
// tabBtns[1].classList.add("orange");
// tabContents[1].classList.add("show");

tabBtns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 모든 li의 orange 제거
    tabBtns.forEach((item) => item.classList.remove("orange"));
    // 현재 눌러진 li에는 orange 추가
    e.target.classList.add("orange");
    // 모든 div의 show 제거
    tabContents.forEach((element) => {
      element.classList.remove("show");
    });
    // 현재 눌러진 li와 같은 순서인 div 에 show 추가
    tabContents[idx].classList.add("show");
  });
});
