// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
const ShowModal = () => {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = ()=> {
    modal.style.display = "none";
}


//#########Declara variable for slider container and the buttons for move the images
const json = [
    {   
        "id" : 1,
        "titulo":"Servidor",
        "img" : "img/principal.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 2,
        "titulo":"Servidor IronAo",
        "img" : "img/castis1.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 3,
        "titulo":"Servidor IronAo",
        "img" : "img/castis2.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },

    {
        "id" : 4,
        "titulo":"Servidor IronAo",
        "img" : "img/castis3.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"
    },
    {
        "id" : 5,
        "titulo":"Servidor IronAo",
        "img" : "img/ironao1.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 6,
        "titulo":"Servidor IronAo",
        "img" : "img/ironao2.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 7,
        "titulo":"Servidor IronAo",
        "img" : "img/ironao3.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 8,
        "titulo":"Servidor IronAo",
        "img" : "img/ironao4.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 9,
        "titulo":"Servidor IronAo",
        "img" : "img/ironao5.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    }
    ,
    {
        "id" : 10,
        "titulo":"Servidor IronAo",
        "img" : "img/ironao6.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
    {
        "id" : 11,
        "titulo":"Servidor IronAo",
        "img" : "img/ironao7.jpg",
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?"

    },
];

let slider = document.getElementById('miniSlider');

let li = document.getElementById('slider li');

let next = document.getElementById('btn-right');

let previous = document.getElementById('btn-left');

//##############################Move last image for the first place

$('#miniSlider li:last').insertBefore('miniSlider li:first');

//########################## Show the first image whit margin of 100%

//slider.css('margin-left','-'+28+'%');

/*document.ready(function moveR(){
    slider.style.animation({
        marginLeft:"-=50%"}
        , 700 , function(){
       
})

next.on('click', function (){
    moveR();
})*/
slider.style.marginLeft = "-240px";

//slider.insertBefore(slider.lastElementChild , slider.firstElementChild)


const carousel2 = ()=>{
    slider.style.marginLeft = '-480px'; 
    slider.style.transition = 'margin-left 2s';
    
    slider.addEventListener('transitionend', 
        () => { 
            slider.insertBefore(slider.firstElementChild, slider.lastElementChild.nextElementSibling  ),
      // When animation is finished });
            slider.style.marginLeft = "-240px";
    })
   
}

next.onclick = carousel2;

/*$(document).ready(function(){
    $('#btn-right').click(function(){
        $('#miniSlider').css({marginLeft: "-=28%"});
        mover();
    })
});
*/

// Configartions for slider modal

document.getElementById('sliderSearch').addEventListener("click" , (e)=>{
        e.preventDefault();
        const id = e.target.id;
        console.log(id);
        return search(id);  
})

document.getElementById('miniSlider').addEventListener("click" , (e)=>{
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    return search(id);  
})

const search = (id)=>{
    for (let i = 0; i < json.length; i++) {
        const element = json[i];
        if(id == element.id){
            let modal = document.getElementById('Cambiaso');
            modal.innerHTML = `
                <h5>${json[id - 1].titulo}</h5>
                <img src="${json[id - 1].img}"></img>
                <p>${json[id - 1].contenido}</p>
            `;
           
        }else {
            console.log('error')
        }
    }
    ShowModal();
}
