/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 300;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.step-content.' + sectionId + ' .step-circle').classList.add('stepColor')
        }else{
            document.querySelector('.step-content.' + sectionId + ' .step-circle').classList.remove('stepColor')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const planChoice = document.querySelector("#planChoice"),
      match = document.querySelector("#match"),
      confirm = document.querySelector("#confirm")
planChoice.addEventListener("click", (e)=>{
    if(e.target.classList.contains("card")){
        var section = document.getElementById('match');
        section.scrollIntoView();
    }
})
match.addEventListener("click", (e)=>{
    var section = document.getElementById('confirm');
    // section.scrollIntoView();
})

confirm.addEventListener("click", (e)=>{
    var section = document.getElementById('checkout');
    section.scrollIntoView();
})


const produtItemContainer = document.querySelector(".product__container")
produtItemContainer.addEventListener("click", (e)=> {
    if(e.target.tagName == "IMG"){
        e.target.parentElement.parentElement.classList.toggle("selectedItem")
    }
})

new Vue({
    el: "#freeChoice",
    data: {
      products: [
        { id: 1, name: '香蕉', imageUrl: './assets/img/resources/banana.jpg' },
        { id: 2, name: '芭樂', imageUrl: './assets/img/resources/grava.jpg' },
        { id: 3, name: '奇異果', imageUrl: './assets/img/resources/kiwi.jpg' },
        { id: 4, name: '哈密瓜', imageUrl: './assets/img/resources/melon.jpg' },
        { id: 5, name: '鳳梨', imageUrl: './assets/img/resources/ownlei.jpg' },
        { id: 6, name: '堅果', imageUrl: './assets/img/resources/nut.jpg' },
        { id: 7, name: '金莎', imageUrl: './assets/img/resources/chocolate (2).jpg' },
        { id: 8, name: 'OREO', imageUrl: './assets/img/resources/chocolate (3).jpg' },
        { id: 9, name: '建達繽紛樂', imageUrl: './assets/img/resources/chocolate (4).jpg' },
        { id: 10, name: '蝦餅', imageUrl: './assets/img/resources/snake.jpg' },
        { id: 11, name: '可樂果(原味)', imageUrl: './assets/img/resources/snake (2).jpg' },
        { id: 12, name: '可樂果(酷辣)', imageUrl: './assets/img/resources/snake (3).jpg' },
        { id: 13, name: '樂事洋芋片(酥脆海苔)', imageUrl: './assets/img/resources/sanke (4).jpg' },
        { id: 14, name: '樂事洋芋片(唐辛子)', imageUrl: './assets/img/resources/sanke (5).jpg' },
        { id: 15, name: '樂事洋芋片(炭烤豬排)', imageUrl: './assets/img/resources/sanke (6).jpg' },
      ],        
      plans: [
        { id: 1, name: '小資方案', price: "300", itemQuantity: 5, subtitle: '熱門商品20選' },
        { id: 2, name: '高級方案', price: "500", itemQuantity: 10, subtitle: '精選30選' },
        { id: 3, name: '奢華方案', price: "700", itemQuantity: 15, subtitle: '隱藏商品40選' },
      ],
      productQuantities: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 },
      MaxSelectItems: 20,
      choicePlan: "",
    },
    methods: {
      ScrollAction() {
        const sections = document.querySelectorAll('section[id]')
        const scrollY = window.pageYOffset
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 300;
          sectionId = current.getAttribute('id')

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.step-content.' + sectionId + ' .step-circle').classList.add('stepColor')
          } else {
            document.querySelector('.step-content.' + sectionId + ' .step-circle').classList.remove('stepColor')
          }
        })
      },
      ToNextSection(id) {
        var section = document.getElementById(id);
        section.scrollIntoView();
      },
      incrementQuantity(product) {
        if (this.TotalCountOfSelectedProduct < this.MaxSelectItems) {
          this.productQuantities[product.id] += 1 // 增加相应产品的数量            
        }
        this.setImgOpacity(product.id)
        if (this.TotalCountOfSelectedProduct == this.MaxSelectItems) {
          this.ToNextSection("confirm")
        }
      },
      decrementQuantity(product) {
        if (this.productQuantities[product.id] > 0) {
          this.productQuantities[product.id] -= 1 // 减少相应产品的数量
        }
        this.setImgOpacity(product.id)
      },
      selectedPlan(plan) {
        this.MaxSelectItems = plan.itemQuantity;
        this.choicePlan = plan
        this.resetItemQuantity()
        this.ToNextSection('match')
      },
      resetItemQuantity() {
        const keys = Object.keys(this.productQuantities)
        keys.forEach(key => {
          this.productQuantities[key] = 0;
        })
        const item = document.querySelectorAll(".product-img img")
        item.forEach(i => i.style.opacity = 0.5)

      },
      setImgOpacity(productId) {
        const item = document.querySelectorAll(".product-img img")[productId - 1]
        if (this.productQuantities[productId] > 0) {
          item.style.opacity = 1
        } else {
          item.style.opacity = 0.5
        }
      }
    },
    computed: {
      TotalCountOfSelectedProduct() {
        return Object.values(this.productQuantities).reduce((sum, value) => sum + value, 0)
      },

      selectProduct() {
        let arr = Object.keys(this.productQuantities).filter(key => {
          return this.productQuantities[key] !== 0;
        }).map(Number)

        return this.products.filter(p => arr.includes(p.id));
      },
      showProducts(){
        return this.products.slice(0, this.choicePlan.itemQuantity)
      }
    },
    mounted() {
      window.addEventListener('scroll', this.ScrollAction)
      axios.get('https://localhost:7009/api/Products')
      .then(response => {
        this.products = response.data
      })    
    }
  })