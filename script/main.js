// document.querySelector("html").addEventListener("click", () => {
//   alert("Opssss! ~~~~");
// });

const myHead = document.querySelector("h1");
const myBtn = document.querySelector("button");

// myBtn.addEventListener("click", () => {});

function setTitleName() {
  const myTitle = prompt("请输入要应援的标题：");
  localStorage.setItem("Title", myTitle);
  // myHead.setAttribute("text", "Title");
  myHead.textContent = `我是柳小姐的${myTitle}`;
}

if (!localStorage) {
  setTitleName();
} else {
  const storedName = localStorage.getItem("Title");
  myHead.textContent = `我是雅小姐的${storedName}`;
}

myBtn.addEventListener("click", () => {
  setTitleName();
});

const myImg = document.querySelector("img");

myImg.addEventListener("click", () => {
  const myStr = myImg.getAttribute("src");
  if (myStr === "image/124301541_p0.png") {
    myImg.setAttribute("src", "image/124460514_p0.jpg");
  } else {
    myImg.setAttribute("src", "image/124301541_p0.png");
  }
});
