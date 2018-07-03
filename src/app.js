//#########Declara variable for slider container and the buttons for move the images
const json = [
    {   
        "id" : 1,
        "titulo":"Servidor",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 2,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 3,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },

    {
        "id" : 4,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"
    },
    {
        "id" : 5,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 6,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 7,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 8,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 9,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    }
    ,
    {
        "id" : 10,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 11,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 12,
        "titulo":"Servidor IronAo",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    }
];

let slider = $('#slider');

let li = $('#slider li')

let next = $('#btn-right');

let previous = $('#btn-left');

//##############################Move last image for the first place

$('#slider li:last').insertBefore('#slider li:first');

//########################## Show the first image whit margin of 100%

slider.css('margin-left','-'+25+'%');

/*function moveR(){
    slider.animate({
        marginLeft:"-=50%"}
        , 700 , function(){
        $('#slider li:first').insertAfter('#slider li:last')
    })next.on('click', function (){
    moveR();
})*/


$(document).ready(function(){
    $('#btn-right').click(function(){
        $('#slider').animate({marginLeft: "-=50%"});
    })
});


// Configartions for slider modal

const configModal1 = ()=>{
    let title = document.getElementById('modal-body1').children[0];
    let paragraph = document.getElementById('modal-body1').children[2]
    title.innerHTML = `
        ${json[0].titulo}
    `
    paragraph.innerHTML = `
        ${json[0].contenido}
    `
}

const configModal2 = ()=>{
    let title = document.getElementById('modal-body2').children[0];
    let paragraph = document.getElementById('modal-body2').children[2]
    title.innerHTML = `
        ${json[1].titulo}
    `
    paragraph.innerHTML = `
        ${json[1].contenido}
    `
}
const configModal3 = ()=>{
    let title = document.getElementById('modal-body3').children[0];
    let paragraph = document.getElementById('modal-body3').children[2]
    title.innerHTML = `
        ${json[2].titulo}
    `
    paragraph.innerHTML = `
        ${json[2].contenido}
    `
}
const configModal4 = ()=>{
    let title = document.getElementById('modal-body4').children[0];
    let paragraph = document.getElementById('modal-body4').children[2]
    title.innerHTML = `
        ${json[3].titulo}
    `
    paragraph.innerHTML = `
        ${json[3].contenido}
    `
}
configModal1();
configModal2();
configModal3();
configModal4();


