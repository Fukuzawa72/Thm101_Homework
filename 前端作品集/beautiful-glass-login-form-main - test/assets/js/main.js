/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) => {
    const inputs = document.querySelectorAll(inputPass),
          iconEye = document.querySelectorAll(inputIcon)
    
          iconEye.forEach(e => {
              e.addEventListener('click', () => {
                inputs.forEach((i, index, input) => {
                    console.log(i, index, input)
                
                    if(i.type === 'password'){
                        // Switch to text
                        i.type = 'text'
                        // Add icon
                        e.classList.add('ri-eye-line')
                        // Remove icon
                        e.classList.remove('ri-eye-off-line')
                    }else{
                        // Change to password
                        i.type = 'password'
                        
                        // Remove icon
                        e.classList.remove('ri-eye-line')
                        // Add icon
                        e.classList.add('ri-eye-off-line')
                    }
                    })   
                })            
            })
            }
showHiddenPass('#input-pass', '#input-icon')

/*=============== SHOW SIGN-UP FORM ===============*/
const singUp = document.getElementById('signup'),
      singupContent = document.querySelector('.signup__content'),
      loginContent = document.querySelector('.login__content'),
      logIn = document.querySelector('.signup__forgot')

singUp.addEventListener('click', ()=> {
    /* 點選sign up表示要讓login page消失並且顯示signup page */
    loginContent.classList.add('slideup')
    
    
    loginContent.classList.remove('active')
    singupContent.classList.add('active')
    
})

logIn.addEventListener('click', ()=> {
    singupContent.classList.remove('active')
    loginContent.classList.add('active')
    
})

/*=============== ANIMATION ===============*/
// loginContent.animate(slideup, Timing);

// const slideup = [
//     { transform: 'translateY(0%)'},
//     { transform: 'translateY(-100%)'}
//   ];

// const Timing = {
//   duration: 2000,
//   iterations: 1,
//   fill: 'forwards',
// }

/*=============== CALL FUNCTION ===============*/