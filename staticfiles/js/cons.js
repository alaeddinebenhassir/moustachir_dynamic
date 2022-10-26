var bar = document.getElementById('bars');
var X = document.getElementById('X');
var menu = document.getElementById('menu');


bar.addEventListener('click', function(){
    menu.style.display='flex' ;
})

X.addEventListener('click', function(){
    menu.style.display='none' ;
})