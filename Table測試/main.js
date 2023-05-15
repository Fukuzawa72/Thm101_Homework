/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))

const openBtn = document.querySelectorAll(".tableIcon"),
      modalContainer = document.getElementById("modal-container")

openBtn.forEach(btn => {
    btn.addEventListener("click",(event)=>{
        modalContainer.classList.add('show-modal')
    })
})
