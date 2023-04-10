const container = document.querySelector('.container'),
      popCat = document.querySelector(".popCat"),
      number = document.querySelector('.number'),
      audio = document.querySelector(".music")

const mouthOpen = "./resources/mouthOpen.png",
      mouthClose = "./resources/mouthClose.png"


container.addEventListener('click', (event) => {
    let target = event.target;
    let innerNumber = Number(number.innerText);

    if (target.classList.contains('popCat')) {
        innerNumber += 1
        number.classList.add('shake')
        setTimeout(() => number.classList.remove('shake'), 100)
        audio.play()
        console.log(mouthClose)

        popCat.src = mouthOpen
        setTimeout(() => popCat.src = mouthClose, 100) 
    }
    number.innerText = innerNumber
})