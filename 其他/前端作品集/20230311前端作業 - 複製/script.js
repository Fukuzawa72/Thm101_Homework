const cardsContainer = document.querySelector("#cardsContainer");
let imageList = ["./Resources/img01.webp", "./Resources/img02.webp", "./Resources/img03.webp","./Resources/img04.webp", "./Resources/img05.webp", "./Resources/img06.webp","./Resources/img07.webp", "./Resources/img08.webp", "./Resources/img09.webp", "./Resources/img11.webp", "./Resources/img12.webp", "./Resources/img13.webp", "./Resources/img14.webp","./Resources/img01.webp", "./Resources/img02.webp", "./Resources/img03.webp"]
let PriceList = [1990, 3000, 5000, 9980, 12000, 16000, 20000, 2900, 1990, 3000, 5000, 9980, 12000, 16000, 20000, 2900]
for(let i = 0; i < imageList.length; i++) {
    cardsContainer.innerHTML += `<div class="box">
    <img src="${imageList[i]}" alt="img1">
    <div class="content">
        <div class="price">
            <span>$${PriceList[i]}</span>
            <span class="tag">For Rent</span>
        </div>
        <div class="loca">
            <h6>Apartment Berlin,Deutch</h6>
            <div style="font-size: 3px;">
                <span class="material-symbols-outlined" style="font-size: 3px; margin-right: 5px;">
                    location_on </span><span style="font-size: 5px;">29 Terrace Rd, BH2 5EL</span>
            </div>
        </div>
        <div class="line"></div>
        <div class="subinfo">
            <div>
                <span class="material-symbols-outlined" style="color: gray fz; font-size:5px;">straighten</span>
                <p>1634 </p><span>qrt</span>
            </div>
            
            <div>
                <span class="material-symbols-outlined" style="color: gray fz; font-size:5px;">bed</span>
                <p>5</p>
                <span>beds</span>
            </div>
            <div>
                <span class="material-symbols-outlined" style="color: gray fz; font-size:5px;">shower</span>
                <p>3</p>
                <span>bath</span>
            </div>
        </div>
        <div class="line"></div>
        <div class="contact">
            <img src="./Resources/img3.jpg" alt="">
            <div class="contact__info">
                <p>Jennifer Bloom</p>
                <p>+886 987 654 321</p>
            </div>
        </div>
    </div>
</div>`
}

let body = document.querySelector('body')
let cards = document.querySelectorAll('.box')
const popup = document.querySelector('#popup')
const popupbg = document.querySelector('.popup__background')
const close = document.querySelector('.close')

cards.forEach(e => {
    e.addEventListener('click', () => {
        popup.classList.add('active')
        popupbg.classList.add('active')
        body.classList.add('active')
    })
})

close.addEventListener('click', ()=> {
    popup.classList.remove('active')
    popupbg.classList.remove('active')
    body.classList.remove('active')
})