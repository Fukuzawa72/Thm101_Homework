/*
選取元素
1)document.getElementById();
2)document.getElementsByClassName();
3)document.getElementsByName();
4)document.getElementsByTagName();
5)document.querySelector();
6)document.querySelectorAll();

7)parentElement.children[index]; //回傳類似陣列
8)parentElement.firstElementChild
9)parentElement.lastElementChild
8)NODE.previousElementSibling
9)NODE.nextElementSibling
10)NODE.parentElement
11)NODE.innerText = "";
13)NODE.textContent
12)NODE.inenrHTML = ``;

*/

let container = document.querySelector(".container");
let h1 = document.querySelector("h1");

/* 
改變元素內的內容
NODE.innerText = "";
NODE.inenrHTML = ``;
*/
//h1.innerText = "這個功能可以更改裡面選取到元素內的文字"
h1.innerText = "<h2>這是h2的文字</h2>";
h1.innerHTML = `<h2>這是h2的文字</h2>`;
/*
新增元素
1)document.createElement(TagName);
2)parentElement.appendChild(NODE);
3)parentElement.before(NODE);
4)parentElement.prepend(NODE);
5)parentElement.append(NODE);
6)parentElement.after(NODE);
*/

/*
刪除元素
1)parentElement.removeChild(NODE);
2)NODE.remove();
*/

/* 
CSS操作
NODE.classList - 查看目前所有 class 名稱，會回傳類似陣列的清單
NODE.classList.add(className1, className2) - 加入一個或多個樣式
NODE.classList.remove(className1, className2) - 刪除樣式
NODE.className = className - 如果樣式只有一個，也可以直接寫入
NODE.style.backgroundColor
NODE.style.CSS_Property
*/

let prepand = document.createElement("div");
let third = document.querySelector(".Third")
prepand.innerText = "prepend"
container.prepend(prepand)
container.before(prepand)
//container.appendChild(DIV);

container.removeChild(container.children[1]);