// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



// show/hide faq answer
const faqs = document.querySelectorAll('.faq');
// console.log([...faqs], faqs, Array.from(faqs))
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'uil uil-plus'){
              icon.className = 'uil uil-minus';
        }else{
            icon.className = 'uil uil-plus';
        }
    })
})

/* 
https://stackoverflow.com

document.querySelectorAll('img').forEach(highlight);

If you for some reason want to convert it to an array, not just iterate over it - which is a completely relevant use-case - you can use [...destructuring] or Array.from since ES6

let array1 = [...mySetOfElements];
// or
let array2 = Array.from(mySetOfElements);
*/



// show/hide nav menu
const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector("#open_menu_btn");
const closeBtn = document.querySelector("#close_menu_btn");

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
});


// close nav menu 
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);