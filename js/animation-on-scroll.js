const animateTop = document.querySelectorAll('.hidden');
const animateRight = document.querySelectorAll('.hidden-right');
const animateBtm = document.querySelectorAll('.hidden-btm');
const animateLeft = document.querySelectorAll('.hidden-left');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

animateTop.forEach((el)=> observer.observe(el));
animateRight.forEach((el)=> observer.observe(el));
animateBtm.forEach((el)=> observer.observe(el));
animateLeft.forEach((el)=> observer.observe(el));