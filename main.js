// Execute script after page load

window.onload = function digital_fn(){

    //Toggle Button 

    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active')
       // console.log(toggle)
    });

    //Masonry JS

    let grid = document.querySelector("#site-main .recent-work-area .images-flex")

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true
    })

}

// Rellax JS Code

var rellax = new Rellax('.rellax',{
    center: true
})

// Menu

var menu = document.querySelector('.navbar ul');
var menuIcone = document.querySelector('.menu-icone');

function abrirMenu(){
    menu.classList.toggle('open');
}