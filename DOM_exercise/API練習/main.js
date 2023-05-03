const btn = document.querySelector("#getImg"),
      img = document.querySelector("img")
btn.addEventListener("click", function(){
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => img.src = response.data.message)
    .catch(error => console.log(error))
})
