// 資料
const movies = [{
    title: 'The Avengers',
    image: 'https://assets-lighthouse.alphacamp.co/uploads/image/file/15305/TheAvengersPoster.jpg',
    rating: 0
  },
  {
    title: 'Our Times',
    image: 'https://assets-lighthouse.alphacamp.co/uploads/image/file/15304/OurtimesPoster.jpeg',
    rating: 0
  },
  {
    title: 'Aquaman',
    image: 'https://assets-lighthouse.alphacamp.co/uploads/image/file/15303/AquamanPoster.jpg',
    rating: 0
  }]

const dataPanel = document.querySelector("#data-panel");

function ShowMoiveList(movies){
    let htmlContent = `            
    <table class="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>`

    for(let i = 0; i < movies.length; i++){
        htmlContent +=`
        <tr>
        <td>
            <img src="${movies[i].image}" width="70" class="img-thumbnail">
        </td>
        <td>${movies[i].title}</td>
        <td>
            <span class="fa fa-thumbs-up" id="plus"></span>
            <span class="fa fa-thumbs-down px-2" id="minus"></span>
            <span>${movies[i].rating}</span>
        </td>
        <td>
            <button class="btn btn-sm btn-danger" id="remove">X</button>
        </td>
    </tr>`
    }

    htmlContent +=`</tbody></table>`

    return htmlContent;
}


dataPanel.innerHTML = ShowMoiveList(movies)

//按鈕刪除功能
const tableList = document.querySelector("tbody")

tableList.addEventListener("click", event => {
  let target = event.target
  plusAndMinus(target)

  if(target.id === "remove"){
    target.parentElement.parentElement.remove()
  }
})

function plusAndMinus(target){
  let condition = target.id
  let ScoreBox = target.parentElement.lastElementChild
  let score =  Number(target.parentElement.lastElementChild.innerText)
  
  if(condition === "plus" || condition === "minus"){
    score = condition === "plus"? ++score: --score
    ScoreBox.innerText = score >= 0? score: 0;
  }
}