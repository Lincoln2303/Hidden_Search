// I.09. Saving the search class to a variable:
const search = document.querySelector('.search');
// I.10. Same thing with the btn, and input class:
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');  

// I.11. Then we add an eventlistener on the button:
btn.addEventListener('click', () => {
    // NOTE: Here we want to take the search class, and use the method "toggle", to toggle the class (add, and remove it)
    search.classList.toggle('active');
    // NOTE: We also want to set focus on the input, this is just about allowing you to type right away => We can just use the focus() method
    input.focus()
}) 





