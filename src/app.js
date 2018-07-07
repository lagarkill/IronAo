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
// Variable donde van a ir las url de las imagenes y contenidos a cambiar de los sliders , cambiando los diferentes parametros van a cambiar automaticamente en los sliders , tener cuidado de no poner mal los enlaces y no cambiar los ID bajo ningun concepto!!!!

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
        "contenido":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias",
        "link": "https://web.archive.org/web/20130621072803/http://www.juegosdrag.es/aomanual/?sec=clases2#ir",
        "linktitle": "Descargas"
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

    }
];

// Configartions for slider modal

document.getElementById('sliderSearch').addEventListener("click" , (e)=>{
        e.preventDefault();
        const id = e.target.id;
        console.log(id);
        return search(id);  
})

document.getElementById('sliderMini').addEventListener("click" , (e)=>{
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
           
                if(json[id - 1].link !== undefined){
                    modal.innerHTML = `
                    <h5>${json[id - 1].titulo}</h5>
                    <img src="${json[id - 1].img}"></img>
                    <p>${json[id - 1].contenido}</p>
                    <a class="modal-link" target="_blank" href="${json[id - 1].link}">${json[id - 1].linktitle}</a>
                `;
                } else{
                    modal.innerHTML = `
                    <h5>${json[id - 1].titulo}</h5>
                    <img src="${json[id - 1].img}"></img>
                    <p>${json[id - 1].contenido}</p>
                `;
                }
            ShowModal();
        }else {
            console.log('error')
        }
    }
   
}

const onlines = ()=>{
    const online = document.getElementById('server-state');
    if(online.innerText === "ONLINE"){
        online.style.color = "#21cc21";
    } else if (online.innerText === "OFFLINE"){
        online.style.color = "#f30017";
    } else{
        online.style.color = "#fff";
    }
}

onlines();
