const element = document.getElementById("hamburger");

element.addEventListener('click', function(event){
    const element2 = document.getElementById("side__bar");
    element2.classList.toggle('active');
});

document.getElementById("input__hamburger").addEventListener('click', function(event){
    event.stopPropagation();
})