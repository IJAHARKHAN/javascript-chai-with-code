const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.id)
        // console.log(e.type)
     body.style.backgroundColor = e.target.id;
    })
});

