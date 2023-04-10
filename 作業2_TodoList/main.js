let todoContainer = document.querySelector(".todo__container"),
    input = document.querySelector("#todo-input"),
    todoBtn = document.querySelector("#todo-button"),
    list = document.querySelector("#todo-lists"),
    arrow = document.querySelector("#arrow"),
    body = document.querySelector("body")

//在todoContainer加上addEventListener
todoContainer.addEventListener("click", (event) => {
    //當按下"新增"按鈕且輸入框有值時，使用addListItem()新增項目
    if (event.target.id === "todo-button" && input.value != '') {
        addListItem()
        showHint();
    }else if(event.target.id === "todo-button" && input.value === ''){
        alert("請輸入內容")
    }

    //當按下"垃圾桶"圖案時，使用showPop()顯示確認視窗
    if (event.target.id === "remove") {
        showPop();
        //為remove加上事件監聽，當按下"刪除"按鈕時，刪除項目
        remove.addEventListener('click', () => {
            event.target.parentElement.remove();
            closePop();
            showHint();
        })
    }

    //使用showArrow()判斷項目數量
    showArrow()

    //使用ItemCheck(event)更改項目狀態(完成/未完成)
    ItemCheck(event)
})

//當按下鍵盤上的"Enter"時，新增項目
body.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value != '') {
        addListItem()
        showArrow()
        showHint()
    }else if(e.key === "Enter" && input.value === ''){
        alert("請輸入內容")
    }
})
//pop up
const popup = document.querySelector('#popup'),
    popupbg = document.querySelector('.popup__background'),
    reserve = document.querySelector("#pop-reserve"),
    remove = document.querySelector("#pop-remove")

//在彈出視窗加上監聽器，如果按下"保留"按鈕，關閉彈出視窗
reserve.addEventListener('click', () => {
    closePop();
})

//關閉彈出視窗的function
function closePop() {
    popup.classList.remove('active')
    popupbg.classList.remove('active')
}

//顯示彈出視窗的function
function showPop() {
    popup.classList.add('active')
    popupbg.classList.add('active')
}

//增加項目的function
function addListItem() {
    list.innerHTML += `<li class="todo__item">
        <i class='bx bx-circle'></i>
        <p>${input.value}</p>
        <i class='bx bxs-trash-alt' id="remove"></i>
        </li>`
    input.value = ''
}

//顯示arrow圖案的function
function showArrow(){
    //如果list內的項目數量>=5時，顯示arrow圖案
    list.children.length >= 5 ? arrow.classList.add("show") : arrow.classList.remove("show")
}

//顯示提示文字的function
function showHint(){
    if(list.children.length === 0){
        let p = document.createElement("p")
        p.innerText ="為今天加點有趣的事情吧~"
        p.setAttribute("id", "hint")
        list.append(p)
    }else if(list.children.length > 0 && list.querySelector("#hint") !== null){
        list.querySelector("#hint").remove()
    }
}

//完成事項的function
function ItemCheck(event){
    const condition1 = event.target.tagName = "P"
    const condition2 = event.target.tagName = "LI"
    switch(event.target.tagName){
        case "P":
            event.target.parentElement.firstElementChild.classList.toggle("bx-circle")
            event.target.parentElement.firstElementChild.classList.toggle("bx-check-circle")
            event.target.parentElement.classList.toggle("done")
            break;
        case "LI":
            event.target.firstElementChild.classList.toggle("bx-circle")
            event.target.firstElementChild.classList.toggle("bx-check-circle")
            event.target.classList.toggle("done")
            break;
        case "I":
            event.target.classList.toggle("bx-circle")
            event.target.classList.toggle("bx-check-circle")
            event.target.parentElement.classList.toggle("done")
            break;
    }
}