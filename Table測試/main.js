/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer
        })
    }
}
showModal('tableIcon','modal-container')

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
        console.log(modalContainer)
        modalContainer.classList.add('show-modal')
    })
})
